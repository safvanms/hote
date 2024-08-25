import { createClient } from "contentful";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useContentful = () => {
  const client = createClient({
    space: "tkmo2ppl442w",
    accessToken: "93dLoAG5Ge6ZIScLYVW48pd5dWaJdCZIxGK7g_3R4G4",
    host: "preview.contentful.com",
  });

  const getAllBlogs = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blogs",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const image = item.fields.image.fields.file.url;
        const title = item.fields.title.content[0].content[0].value;
        const content = item.fields.content.content
          .map((paragraph) =>
            paragraph.content.map((text) => text.value).join("\n\n")
          )
          .join("\n\n");
        const description = item.fields.description.content[0].content[0].value;
        return {
          ...item.fields,
          id: item.sys.id,
          description,
          image,
          title,
          content,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("error fetching blogs ", err);
    }
  };

  const getEntriesByContentType = async (contentType, retries = 5) => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
        select: "fields",
        order: "fields.id",
      });

      return entries.items.map((item) => ({
        ...item.fields,
        id: item.sys.id,
        menu: item.fields.menu,
        price: item.fields.price,
        description: item.fields.description,
      }));
    } catch (err) {
      if (err?.response?.status === 429 && retries > 0) {
        console.log(`Rate limit exceeded, retrying in ${(6 - retries) * 1000}ms...`);
        await delay((6 - retries) * 1000); // Exponential backoff
        return getEntriesByContentType(contentType, retries - 1);
      } else {
        console.log(`Error fetching ${contentType}: `, err);
        return [];
      }
    }
  };

  return { getAllBlogs, getEntriesByContentType };
};

export default useContentful;

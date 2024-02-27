import { createClient } from "contentful";


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
        order: "fields.name",
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

  const getALlMenus = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "hotDeMenu",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const menu = item.fields.menu;
        const price = item.fields.price;
        const description = item.fields.description;
        return {
          ...item.fields,
          id: item.sys.id,
          menu,
          price,
          description,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("error fetching menu ", err);
    }
  };

  const getAllBurgersAndSandwiches = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "burgersAndSandwichesMenu",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const menu = item.fields.menu;
        const price = item.fields.price;
        const description = item.fields.description;
        return {
          ...item.fields,
          id: item.sys.id,
          menu,
          price,
          description,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("error fetching menu ", err);
    }
  };

  const getAllSnacks = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "hotSnacks",
        select: "fields",
        order: "fields.id",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const menu = item.fields.menu;
        const price = item.fields.price;
        const description = item.fields.description;
        return {
          ...item.fields,
          id: item.sys.id,
          menu,
          price,
          description,
        };
      });

      return sanitizedEntries;
    } catch (err) {
      console.log("error fetching menu ", err);
    }
  };

  return { getAllBlogs, getALlMenus, getAllBurgersAndSandwiches , getAllSnacks};
};

export default useContentful;

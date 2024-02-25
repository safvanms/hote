import Chai from "./assets/images/chai.webp";
import MasalaChai from "./assets/images/masala_chai.webp";
import Green from "./assets/images/green.webp";
// import Mint from "./assets/images/mint.webp";
import Ginger from "./assets/images/ginger.jpeg";
import Lemon_Honey from "./assets/images/lemon_honey.jpg";
import Black from "./assets/images/black.webp";
import Coffee from "./assets/images/coffee.jpg";
import Saffron from "./assets/images/saffron.webp";
import Beverage from "./assets/images/juice.jpg";
import Snack from "./assets/images/puff.jpg";
import Burger from "./assets/images/burger.webp";
import Sandwich from "./assets/images/sandwich.jpg";

// header elements

export const headers = [
  {
    no: 1,
    name: "Home",
    link: "/",
  },
  {
    no: 2,
    name: "Menu",
    link: "/menu",
  },
  {
    no: 4,
    name: "Blogs",
    link: "/blogs",
  },
  {
    no: 3,
    name: "About Us",
    link: "/about",
  },
  {
    no: 5,
    name: "Contact Us",
    link: "/contact",
  },
];

export const products = [
  {
    id: 1,
    item: "hoté chai",
    image: Chai,
    desc: "Freshy milk with some solid hoté hot tea ",
  },
  {
    id: 2,
    item: "Masala chai",
    image: MasalaChai,
    desc: "Simmering the tea leaves with spices , and milk ",
  },
  {
    id: 3,
    item: "Green tea",
    image: Green,
    desc: "Healthy Green tea with purity of leaves ",
  },
  {
    id: 11,
    item: "Saffron tea",
    image: Saffron,
    desc: "Simmers the Saffron with rose feels flying... ",
  },
  {
    id: 5,
    item: "Lemon & Honey tea",
    image: Lemon_Honey,
    desc: "We calls it as citric tea , always better ",
  },
  {
    id: 6,
    item: "Ginger tea",
    image: Ginger,
    desc: "A little spiciness is cool sometimes ",
  },
  {
    id: 7,
    item: "Master Black tea",
    image: Black,
    desc: "The item which is the most favoured one of our ...  ",
  },
  {
    id: 8,
    item: "Caffeins",
    image: Coffee,
    desc: "Different types of Coffees ...  ",
  },
];

// Menu items

export const menus = [
  {
    no: 1,
    category: "Tea",
    items: [
      {
        id: 1,
        name: "hoté chai",
        price: 15,
      },
      {
        id: 8,
        name: "Black tea",
        price: 10,
      },
      {
        id: 4,
        name: "Mint chai",
        price: 15,
      },
      {
        id: 5,
        name: "Ginger chai",
        price: 15,
      },
      {
        id: 6,
        name: "Lemon & Honey chai",
        price: 20,
      },
      {
        id: 2,
        name: "Masala chai",
        price: 20,
      },
      {
        id: 7,
        name: "Green tea",
        price: 20,
      },
      {
        id: 3,
        name: "Saffron chai",
        price: 40,
      },
    ],
  },
  {
    no: 2,
    category: "Coffee",
    items: [
      {
        id: 1,
        name: "Black coffee",
        price: 10,
      },
      {
        id: 1,
        name: "Bru coffee",
        price: 20,
      },
      {
        id: 1,
        name: "Nescafe coffee",
        price: 25,
      },
      {
        id: 1,
        name: "Normal Coffee",
        price: 15,
      },
    ],
  },
  {
    no: 3,
    category: "Other",
    items: [
      {
        id: 1,
        name: "Horlics",
        price: 20,
      },
      {
        id: 2,
        name: "Boost",
        price: 20,
      },
    ],
  },
  {
    no: 3,
    category: "Snacks",
    items: [
      {
        id: 1,
        name: "Coming Soon ! ",
        price: "",
      },
    ],
  },
];

// categories

export const categories = [
  {
    id: 1,
    item: "Beverages",
    image: Beverage,
  },
  {
    id: 2,
    item: "Snacks",
    image: Snack,
  },
  {
    id: 5,
    item: "Burgers",
    image: Burger,
  },
  {
    id: 6,
    item: "Sandwiches",
    image: Sandwich,
  },
];

// T&C

export const termsAndConditions = [
  {
    id: 1,
    title: "Introduction",
    content:
      "These Terms and Conditions govern your use of hoté intl, including all services, products, and content available at or through the website or cafe premises. By accessing or using any part of hoté intl, you agree to be bound by these Terms and Conditions.  If you do not agree to all the terms and conditions of this agreement, then you may not access hoté intl or use any services.",
  },
  {
    id: 11,
    title: "Acceptance of Terms",
    content:
      "By accessing or using any part of hoté intl's services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
  },
  {
    id: 33,
    title: "Cafe Services",
    content:
      "hoté intl provides a variety of food and beverage services at our cafe. All orders are subject to availability and acceptance by hoté intl.",
  },
  {
    id: 2,
    title: "Reservation of Rights",
    content:
      "We reserve the right to refuse service to anyone for any reason at any time. We reserve the right to modify or discontinue any service or product without notice at any time.",
  },
  {
    id: 3,
    title: "Service Availability",
    content:
      "All orders are subject to availability. If an item is not available, we will inform you and refund the amount for that item. We reserve the right to limit the quantities of any products or services that we offer.",
  },
  {
    id: 4,
    title: "Pricing and Payment",
    content:
      "All prices for products and services are subject to change without notice. We accept payment via cash, credit/debit cards, UPI and other electronic payment methods. All payments are due upon receipt. If payment is not received or declined, we reserve the right to refuse service.",
  },
  {
    id: 5,
    title: "Refund and Return Policy",
    content:
      "Refunds or returns are subject to the discretion of hoté intl. Refunds may be issued in the original form of payment or as store credit. To request a refund or return, please contact our customer service team.",
  },
  {
    id: 6,
    title: "Customer Conduct",
    content:
      "Customers are expected to conduct themselves in a respectful and appropriate manner while at hoté intl. Any form of harassment, discrimination, or disruptive behavior will not be tolerated and may result in removal from the premises.",
  },
  {
    id: 8,
    title: "Intellectual Property",
    content:
      "All content, logos, and trademarks displayed on hoté intl's website, mobile app, or cafe premises are the property of hoté intl and may not be used without prior written consent.",
  },
  {
    id: 9,
    title: "Modification of Terms",
    content:
      "hoté intl reserves the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to review these Terms and Conditions periodically for changes.",
  },
  {
    id: 7,
    title: "Health and Safety",
    content:
      "hoté intl adheres to all health and safety regulations to ensure the well-being of our customers and staff. Customers are required to follow any health and safety guidelines posted within the cafe premises.",
  },
  {
    id: 10,
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of INDIA. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Perinthalmanna.",
  },
  {
    id: 55,
    title: "Contact Information",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at muhammedsafvan1ms@gmail.com ",
  },
];

// Privacy Policy

export const privacyPolicy = [
  {
    id: 1,
    title: "Information Collection",
    content:
      "hoté intl collects personal information from customers for the purpose of providing our services, processing orders, and improving the customer experience. This may include name, contact information, payment details, and other relevant data.",
  },
  {
    id: 2,
    title: "Use of Information",
    content:
      "Personal information collected by hoté intl will only be used for the purposes for which it was collected, unless otherwise authorized by the customer or required by law. We do not sell or share customer information with third parties for marketing purposes.",
  },
  {
    id: 3,
    title: "Data Security",
    content:
      "hoté intl takes reasonable measures to protect the security of customer information and prevent unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: 4,
    title: "Cookies",
    content:
      "hoté intl may use cookies and similar technologies to enhance the user experience and analyze website usage. By using our website or mobile app, you consent to the use of cookies in accordance with this Privacy Policy.",
  },
  {
    id: 5,
    title: "Third-party Links",
    content:
      "Our website or mobile app may contain links to third-party websites or services. hoté intl is not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.",
  },
  {
    id: 6,
    title: "Changes to Privacy Policy",
    content:
      "hoté intl reserves the right to update or change this Privacy Policy at any time. Any changes will be posted on our website or mobile app, and your continued use of our services after such changes will constitute acceptance of the updated Privacy Policy.",
  },
  {
    id: 7,
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at muhammedsafvan1ms@gmail.com.",
  },
];

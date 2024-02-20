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


export const categories = [
  {
    id:1,
    item:'Healthy Beverages',
    image:Beverage
  },
  {
    id:2,
    item:'Yummy Snacks',
    image:Snack
  },
  {
    id:5,
    item:'Verities of Burgers',
    image:Burger
  },
  {
    id:6,
    item:'Kidilan Sandwiches',
    image:Sandwich
  },
  
]
// _id: string;
// name: string;
// description: string;
// price: number;
// stock: number;
// category: string;
// images: string[];
// createdAt: Date;
// updatedAt: Date;

const products = [
  {
    _id: 1,
    name: "apple",
    description: "apple is fruit",
    price: 10,
    stock: 100,
    images: "https://www.google.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  products,
};

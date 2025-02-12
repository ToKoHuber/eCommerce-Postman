// _id: string;
// name: string;
// email: string;
// password: string;
// role: "customer" | "admin";
//   address?: {
//     street?: string;
//     city?: string;
//     zip?: string;
//   };
// createdAt: Date;
// updatedAt: Date;

const users = [
  {
    _id: 1,
    name: "John Doe",
    email: "test@gmail.com",
    password: "123456",
    role: "customer",
    address: {
      street: "123 Main street",
      city: "New York",
      zip: "10001",
    },
    createdAt: "2021-12-09",
    updatedAt: "2024-12-09",
  },
];

module.exports = {
  users,
};

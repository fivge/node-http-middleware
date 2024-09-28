import { FastifyInstance } from "fastify";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  desc: string;
  categories: string[];
}

interface Comment {
  id: number;
  productId: number;
  timestamp: string;
  user: string;
  rating: number;
  content: string;
}

const products: Product[] = [
  { id: 1, title: "first product", price: 1.34, rating: 3.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 2, title: "second product", price: 1.34, rating: 1.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 3, title: "third product", price: 1.34, rating: 4, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 4, title: "four product", price: 1.34, rating: 5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 5, title: "five product", price: 1.34, rating: 2.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 6, title: "six product", price: 1.34, rating: 3.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 7, title: "seven product", price: 1.34, rating: 4.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 8, title: "eight product", price: 1.34, rating: 2.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
  { id: 9, title: "nign product", price: 1.34, rating: 1.5, desc: "ddddesscccccc", categories: ["ssda", "asdasd"] },
];

const comments: Comment[] = [
  { id: 1, productId: 1, timestamp: "2018-09-27 21:01:23", user: "张三", rating: 4.5, content: "comment product1 a" },
  { id: 2, productId: 1, timestamp: "2018-09-27 21:01:23", user: "李四", rating: 4, content: "comment product1 b" },
  { id: 3, productId: 1, timestamp: "2018-09-27 21:01:23", user: "王五", rating: 5, content: "comment product1 c" },
  { id: 4, productId: 2, timestamp: "2018-09-27 21:01:23", user: "张三", rating: 3.5, content: "comment product2" },
];

const routes = async (fastify: FastifyInstance, options) => {
  fastify.get("/products", async (request, reply) => {
    return products;
  });

  fastify.get("/product/:id", async (request, reply) => {
    let { id } = request.params as any;
    id = +id;
    return products.find(product => product.id === id);
  });

  fastify.get("/comments/product/:id", async (request, reply) => {
    let { id } = request.params as any;
    id = +id;
    return comments.filter(comment => comment.productId === id);
  });
};

export default routes;

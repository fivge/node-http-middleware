import { FastifyInstance } from "fastify";

export class Product {
  // 商品类
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  // 评论类
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}

const products: Product[] = [
  new Product(1, "first product", 1.34, 3.5, "ddddesscccccc", ["ssda", "asdasd"]),
  new Product(2, "second product", 1.34, 1.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(3, "third product", 1.34, 4, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(4, "four product", 1.34, 5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(5, "five product", 1.34, 1.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(6, "six product", 1.34, 4.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(7, "seven product", 1.34, 4.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(8, "eight product", 1.34, 4.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
  new Product(9, "nign product", 1.34, 4.5, "ddddeeeeeesssssscccccc", ["ssda", "asdasd"]),
];

const comments: Comment[] = [
  new Comment(1, 1, "2018-09-27 21:01:23", "张三", 4.5, "comment product1"),
  new Comment(2, 1, "2018-09-27 21:01:23", "李四", 4, "comment for product1"),
  new Comment(3, 1, "2018-09-27 21:01:23", "王五", 5, "comment for product1"),
  new Comment(4, 2, "2018-09-27 21:01:23", "张三", 3.5, "comment product2"),
];

const routes = async (fastify: FastifyInstance, options) => {
  fastify.get("/", async (request, reply) => {
    return { message: "This is root" };
  });

  fastify.get("/products", async (request, reply) => {
    return products;
  });

  fastify.get("/product/:id", async (request, reply) => {
    let { id } = request.params as any;
    id = +id;
    return products.find(product => product.id === id);
  });

  fastify.get("/comments/:id", async (request, reply) => {
    let { id } = request.params as any;
    id = +id;
    return comments.filter(comment => comment.productId === id);
  });

  fastify.get("/ping", async (request, reply) => {
    return "pong";
  });
};

export default routes;

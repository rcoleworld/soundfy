import express from 'express';


export default abstract class Controller {
    protected router = express.Router();
    protected path: string;

    constructor(path: string) {
      this.path = path
      this.intializeRoutes();
    }

    abstract intializeRoutes(): void;
}
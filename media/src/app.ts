//
// Express initialization and middleware.
//

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default class App {
  public app: express.Application;
  public port: number;
  public host: string;

  constructor(controllers: any, port: number, host: string) {
    this.app = express();
    this.port = port;
    this.host = host;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
  }

  public initializeControllers(controllers: any): void {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, this.host);
    console.log(`Listening at: http://${this.host}:${this.port}`)
  }
}

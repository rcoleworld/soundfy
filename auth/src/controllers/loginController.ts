//
// This controller handles authentication from the spotify api.
//
import express from 'express';
import { route } from '../config/keys';

export default class LoginController {
  public path = '/auth';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.authenticateSpotify);
  }

  // Redirects user to spotify login.
  authenticateSpotify(request: express.Request, response: express.Response): void {
    response.redirect(route);
  }

}

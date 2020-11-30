//
// This controller handles authentication from the spotify api.
//
import express from 'express';
import { route } from '../config/keys';
import Controller from './Controller';

export default class LoginController extends Controller {
  constructor(path: string) {
    super(path);
  }

  // Redirects user to spotify login.
  authenticateSpotify(request: express.Request, response: express.Response): void {
    response.redirect(route);
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.authenticateSpotify);
  }
}

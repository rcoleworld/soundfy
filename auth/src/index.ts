import LoginController from './controllers/LoginController';
import App from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;
const HOST: string = process.env.HOST || '0.0.0.0';
const login = new LoginController()
const controllers = [login];

const app = new App(controllers, PORT, HOST)
app.listen();
import LoginController from './controllers/LoginController';
import App from './app';

const PORT: number = Number(process.env.PORT) || 8081;
const HOST: string = process.env.HOST || '127.0.0.1';
const login = new LoginController()
const controllers = [login];

const app = new App(controllers, PORT, HOST)
app.listen();
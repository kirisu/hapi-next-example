import path from 'path';

import Hapi from 'hapi';
import Inert from 'inert';
import next from 'next';
import dotenv from 'dotenv';

import routes from './config/routes';

dotenv.config();

const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

const server = Hapi.server({
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'static')
    }
  }
});

app.prepare().then(async () => {
  await server.register(Inert);

  server.route(routes(app));

  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server running at ${server.info.uri}`);
});

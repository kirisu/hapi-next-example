import {
  pathWrapper,
  defaultHandlerWrapper,
  nextHandlerWrapper
} from '../helpers/next';

export default app => [
  {
    method: 'GET',
    path: '/',
    handler: pathWrapper(app, '/index')
  },
  {
    method: 'GET',
    path: '/static/{p*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/_next/{p*}',
    handler: nextHandlerWrapper(app)
  },
  {
    method: 'GET',
    path: '/{p*}',
    handler: defaultHandlerWrapper(app)
  }
];

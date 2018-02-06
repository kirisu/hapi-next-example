import { parse } from 'url';

const nextHandlerWrapper = app => {
  const handler = app.getRequestHandler();
  return async ({ raw, url }, h) => {
    await handler(raw.req, raw.res, url);
    return h.close;
  };
};
const pathWrapper = (app, pathname, opts) => async ({ raw, query, params }) => {
  return app.renderToHTML(
    raw.req,
    raw.res,
    pathname,
    { ...query, ...params },
    opts
  );
};

const defaultHandlerWrapper = app => async ({ raw, url }) => {
  const { pathname, query } = parse(url, true);
  return app.renderToHTML(raw.req, raw.res, pathname, query);
};

export { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper };

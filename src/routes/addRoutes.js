function handler (promise) {
  return async (request, response) => {
    try {
      const { code, message } = await promise(request);
      let msg = message;
      if (typeof message !== 'string') msg = JSON.stringify(msg);
      return response.status(code).send(msg);
    } catch (error) {
      response.status(error.code).send({ message: error.message });
    }
  };
}

export default function (app, router) {
  Object.entries(router).forEach(([route, value]) => {
    Object.entries(value).forEach(([method, promise]) => {
      app[method](route, handler(promise));
    });
  });
}

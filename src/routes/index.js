import express from 'express';
import addRoutes from './addRoutes';
import users from './users';

const ROUTES = [
  users,
];

function getRoutes () {
  const api = express.Router();

  ROUTES.forEach((router) => {
    addRoutes(api, router);
  });
  return api;
}

export default getRoutes();

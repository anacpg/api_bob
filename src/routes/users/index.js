import { ERRORS } from '../../common';
import fetch from './fetch';
import list from './list';

const NOT_IMPLEMENTED = () => ERRORS.NOT_IMPLEMENTED;

export default {
  '/users': {
    post: NOT_IMPLEMENTED,
    get: list,
  },
  '/user/:id': {
    get: fetch,
    put: NOT_IMPLEMENTED,
    delete: NOT_IMPLEMENTED,
  },
};

import axios from 'axios';

import { ROOT_ROUTE } from './routes';

export default axios.create({
  baseURL: ROOT_ROUTE,
});
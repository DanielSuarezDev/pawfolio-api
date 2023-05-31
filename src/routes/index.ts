import { Router, Express } from 'express';

import animalRouter from './animal.router';

function routerApi(app: Express) {
  const router: Router = Router();
  app.use('/api/v1', router);
  router.use('/animals', animalRouter);
}

export default routerApi;

import restify from 'restify';

import db from './configs/database.config';
import { attachRoute } from './configs/routes.config';

let app = restify.createServer();
attachRoute(app);

app.listen(3000, () => {
  console.log("BORA!");
})

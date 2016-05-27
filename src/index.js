import restify from 'restify';

import db from './configs/database.config';
import cors from './configs/cors.config';
import { attachRoute } from './configs/routes.config';

let app = restify.createServer();
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());

app.use(cors());

attachRoute(app);

app.listen(3000, () => {
  console.log("BORA!");
})

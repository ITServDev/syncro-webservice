import restify from 'restify';
import { cache } from './configs/constants.config';

import db from './configs/database.config';
import cors from './configs/cors.config';
import { attachRoute } from './configs/routes.config';

let app = restify.createServer();
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());

app.use(cors());

app.use((req, res, next) => {
  let user = cache.filter(c => c.key == req.params.token)[0];

  if (user)
    req.user = user.value

  next();
})

attachRoute(app);

app.listen(3000, () => {
  console.log("BORA!");
})

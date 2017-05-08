import restify from 'restify';
import { cache } from './configs/constants.config';

//import cors from 'cors';

import db from './configs/database.config';
import { attachRoute } from './configs/routes.config';


let app = restify.createServer();
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());

app.use(function( req, res, next ){
  res.setHeader('Access-Control-Allow-Origin', req.header('origin'));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type, Authorization');
  next();
});


//app.use(cors());

app.use((req, res, next) => {
    let user = cache.filter( c => c.key == req.params.token )[0];

    if (user)
        req.user = user.value

    next();
})

attachRoute(app);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("\t\t\tSERVICE ON-LINE!");
    console.log("\t\t\t\tRUNNING...");
    console.log('');
})
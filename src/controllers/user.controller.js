import * as dao from '../dao/user.dao';
import request from 'superagent';

function createUsersOnMongo(req, res, next) {
  request
    .get('http://www.itserv.com.br/ITServ/api/Login')
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) return;
        let users = JSON.parse(response.text);
        
        users.forEach(user => {
          if (!user.active) {
            dao.deleteUser({cpf: user.cpf})
              .exec((err, data) => {
                if (err) return res.json(err);
                return res.json("User deactiveted", user.name)
              });
          } else {
            dao.createUser(user)
            .save((err, data) => {
              if (err) return res.json(err);
              return res.json("User updated", user.name)
            })
          }
        });

    });
}
export default {
  post: createUsersOnMongo
}

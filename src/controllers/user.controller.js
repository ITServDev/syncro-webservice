import * as dao from '../dao/user.dao';
import request from 'superagent';

function createUsersOnMongo(req, res, next) {
    request
        .get('https://restfull-pablo440.c9users.io/login')
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return;
            let users = JSON.parse(response.text);
            //http://www.itserv.com.br/ITServ/api/Login
            //http://localhost:3000/Login
            //https://restfull-pablo440.c9users.io/login
            users.forEach(user => {
                if (!user.active) {
                    dao.deleteUser({ cpf: user.cpf })
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

function updateUser(req, res, next) {
    var query = {
        _id: req.params.id
    }
    var mod = {
        "$set": { password: req.params.password }
    }

    dao.findOneUserAndUpdate(query, mod)
        .exec((err, data) => {
            return res.json(err ? err : data);
        })
}

export default {
    post: createUsersOnMongo,
    put: updateUser
}
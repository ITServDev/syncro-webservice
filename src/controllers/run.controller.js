import * as dao from '../dao/run.dao';

function getRun(req, res, next) {
  let query = {user: req.user._id};

  dao.findRun(query, {}).exec((err,data) => {
    return res.json(data);
  })
}

function createRun(req, res, next) {
  let params = req.params;
  params.user = req.user._id;

  dao.createRun(params).save((err, data) => {
    return res.json(err ? err : data);
  })
}

export default {
  get: getRun,
  post: createRun
}

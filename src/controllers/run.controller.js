import * as dao from '../dao/run.dao';

function getRun(req, res, next) {
  dao.findRun({}, {}).exec((err,data) => {
    return res.json(data);
  })
}

function createRun(req, res, next) {
  dao.createRun(req.params).save((err, data) => {
    return res.json(err ? err : data);
  })
}

export default {
  get: getRun,
  post: createRun
}

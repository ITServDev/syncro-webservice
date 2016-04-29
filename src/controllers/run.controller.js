function getRun(req, res, next) {
  return res.json({controller: 'getRun'});
}

function createRun(req, res, next) {
  return res.json({controller: 'createRun'});
}

export default {
  get: getRun,
  post: createRun
}

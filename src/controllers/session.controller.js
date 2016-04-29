function getSession(req, res, next) {
  return res.json({controller: 'getSession'});
}

function getSessionUser(req, res, next) {
  return res.json({controller: 'getSessionUser'});
}

function createSession(req, res, next) {
  return res.json({controller: 'createSession'});
}

export default {
  get: getSession,
  getUser: getSessionUser,
  post: createSession
}

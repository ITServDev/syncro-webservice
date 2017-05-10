export const cors = () => (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type, Authorization');
  res.setHeader('Content-Type', 'application/json');
  return next();
};

export default cors;

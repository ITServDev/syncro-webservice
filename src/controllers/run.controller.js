import * as dao from '../dao/run.dao';
import request from 'superagent';


//function getRun(req, res, next) {
//  let query = req.query;
//  dao.findRun(query, {}).exec((err,data) => {
//   return res.json(data);
//  })
//}


function getRun(req, res, next) {

 var veiculo =req.params.carro;
 let datas = {
   $gte:req.params.$gte,
   $lte:req.params.$lte
 }
 var query = {
    deviceStartDate:datas,
    car:veiculo
  }
 dao.findRun(query, {}).exec((err,data) => {
    return res.json(data);
  })
}


function createRun(req, res, next) {
  let params = req.params;

  dao.createRun(params).save((err, data) => {
    return res.json(err ? err : data);
  })
}
export default {
  get: getRun,
  post: createRun
}

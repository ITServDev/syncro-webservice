import * as dao from '../dao/run.dao';
import request from 'superagent';


function getRun(req, res, next) {
 var usuario = req.params.usuario;
 var veiculo =req.params.carro;
 var flag =req.params.flag;

 let datas = {
   $gte:req.params.$gte,
   $lte:req.params.$lte
 }
 if (flag==1) {
   var query = {
       deviceStartDate:datas,
       car:veiculo
    }
 }else{
   var query = {
     deviceStartDate:datas,
     user:usuario
   }
 }
  //  console.log(query);

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

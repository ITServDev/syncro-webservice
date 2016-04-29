import * as constants from './constants.config';
import sessionController from '../controllers/session.controller';
import runController from '../controllers/run.controller';

export const attachRoute = (app) => {
  
  //SESSION ROUTE
  app.get(constants.SESSION_USER_URL, sessionController.getUser);
  app.get(constants.SESSION_URL, sessionController.get)
  app.post(constants.SESSION_URL, sessionController.post);

  //RUN ROUTE
  app.get(constants.RUN_URL, runController.get)
  app.post(constants.RUN_URL, runController.post);

  //RETURN
  return app;

}

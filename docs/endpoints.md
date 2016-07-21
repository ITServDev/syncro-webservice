#/session
**Popula mongo com base itsNet***
/*http://104.236.110.237:3000/user/populate*/
**get**
Pega o token sessão do usuario cujo token foi passado pelo header

**post**
Cria uma sessão para o usuario que esta se logando

###/session/user
Pega o usuario referente a sessão cujo o token foi passado no header

###/session/run
Pega corrida que esta sendo feita no momento pelo usuario

#/run

**get**
Pega as corridas feitas

**post**
Inicia uma corrida para o usuario

**delete**
Finaliza a corrida atual do usuario

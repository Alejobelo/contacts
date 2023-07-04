const contactsRouter = require('./contacts.router')

function routerApi(app){

  app.use('/contacts', contactsRouter )
}

module.exports = routerApi

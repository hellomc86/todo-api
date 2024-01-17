module.exports = {
  MONGODB_HOST: 'testcluster.jh9x1qh.mongodb.net',  
  MONGODB_USER: 'hellomc86',
  MONGODB_PASSWORD: 'hellomc86',
  MONGODB_DATABASE: process.env.NODE_ENV === 'development' ? 'dev-todo-app' : 'todo-app',  
}
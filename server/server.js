const express = require('express');
const server = express();
const path = require('path');
const port = 3000;
const apiRouter = require(path.join(__dirname, './routes/api'));
console.log('path', path.join(__dirname, './routes/api'));

server.use(express.json())
server.use(express.urlencoded({ extended: true }));

console.log('req in server')
server.use('/api', apiRouter);

// app.get('/user', (req, res) => {
//   return res.status(200).sendFile(path.join('../index.html'));
// })

// server.get('/', (req, res) => {
//     return res.status(200).render('../index.html');
// })
server.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
server.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
console.log(process.env.NODE_ENV)
});

// statically serve everything in the build folder on the route '/build'
// if (process.env.NODE_ENV === 'production') {
//   console.log('made it in proc')
//   server.use('/build', express.static('./build'));
//     // serve index.html on the route '/'
//     console.log('found build')
//     server.get('/', (req, res) => {
//       return res.status(200).sendFile('../index.html');
//     });
//   };



  /**
   * express error handler
   * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
   */
   server.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));

   server.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  

  server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = server;
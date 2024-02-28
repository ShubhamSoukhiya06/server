const citiesRoutes = (app, fs) => {
    // variables
    const dataPath = './data/cities.json';
  
    // READ
    app.get('/cities', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = citiesRoutes;
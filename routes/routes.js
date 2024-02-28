
// load up our shiny new route for cities
const citiesRoutes = require('./cities');

const authenticateToken = (req, res, next) => {
  console.log(req.headers); // Log the token to the console
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'Bearer AnhKLIqw45rtz!1lok5!', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = decoded; // Attach the decoded user information to the request object
    next();
  });
};


const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', authenticateToken,(req, res) => {
    res.send('welcome to the development api-server');
  });

  // run our cities route module here to complete the wire up
  citiesRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;

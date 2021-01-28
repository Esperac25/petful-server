const app = require('./modules/app/app');
const { PORT } = require('./modules/config');

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`);
});
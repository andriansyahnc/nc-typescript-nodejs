import app from "./config/app";
import environment from './environment'

const PORT = environment.getPort();
app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});
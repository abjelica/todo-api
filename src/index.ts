/**
 * @author Ana Bjelica
 */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bluebird from 'bluebird';

import config from '../config';
import todoRoutes from '../src/routes/todos';
import quoteRoutes from '../src/routes/quotes';

const app = express();

// Setup CORS for cross-origin requests.
app.use(cors());

// Setup bodyparser for HTTP parameters.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to mongo and setup bluebird for mongoose.
mongoose.Promise = bluebird;
mongoose.connect(config.mongoURL, { useNewUrlParser: true });

// Use routes from separate files.
app.use(todoRoutes);
app.use(quoteRoutes);

app.listen(config.port, () => console.log(`App listening on http://localhost:${config.port}`));

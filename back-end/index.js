import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import player from './models/player';
import game from './models/game';
import admin from './models/admin';
import authRouter from './routes/auth';
import playerRouter from './routes/player';
import gameRouter from './routes/game';
import verifyToken from './routes/verifyToken';

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());  
app.use(bodyParser.json());

// Add useNewUrlParser and UnifiedTopolgy to prevent warning
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology:true});

const connection = mongoose.connection;

mongoose.set('useFindAndModify', false);

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Port Number
const port = process.env.PORT || 8080;

app.use('/api/player', playerRouter);

app.use('/api/game',gameRouter)

app.use('/api/admin', authRouter);

app.listen(port,() => console.log(`Express server is running on port ${port}`));
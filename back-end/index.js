import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import player from './models/player';
import game from './models/game';


const app = express();
const router = express.Router();

app.use(cors());  
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://system:adminquang@mycluster-pvuha.mongodb.net/test?retryWrites=true&w=majority');
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//PLAYER
//get all the player
router.route('/players').get((req, res)=>{
    player.find((err, players) =>
    {
      if (err)
        console.log(err);
      else 
        res.json(players);
    });
});

//get a specific player by id
router.route('/player/:id').get((req, res) =>
{
  player.findById(req.params.id, (err, player) => {
      if (err)
      {
          console.log(err);
      }
      else 
      {
          res.json(player);
      }
  });
});

// create a player 
router.route('/player/add').post((req, res)=>{
  let player_to_add = new player(req.body);
  player_to_add.save()
        .then(player =>{
          res.status(200).json({'player' : ' Player added successfully!'});
        })
        .catch(err => {
          res.status(400).send('Failed to create a new player');
        });
});

// update a player by id
router.route('/player/update/:id').post((req, res)=>{
    player.findById(req.params.id, (err, player)=>{
      if(!player)
        return next(new Error('Could not load document'));
      else{
        player.name = req.body.name;
        player.ranking = req.body.ranking;
        player.score = req.body.score;
        player.status = req.body.status;
        player.time = req.body.time;
        player.favGame = req.body.favGame;
        player.gamePlayed=req.body.gamePlayed;

        player.save().then(player=>{
          res.json('Player has been updated!!');
        }).catch(err => {
          res.status(400).send('Updated failed!!!Try again later');
        });
      }
    });
});

// delete player
router.route('/player/delete/:id').get((req,res)=>{
      player.findByIdAndRemove({_id: req.params.id}, (err,player)=>{
        if(err)
          res.json(err);
        else
          res.json('Player removed successfully!!!')
      });
});

//GAME
//get all games 
router.route('/games').get((req, res)=>{
  game.find((err, games) =>
  {
    if (err)
      console.log(err);
    else 
      res.json(games);
  });
});

//get a game by id 
router.route('/game/:id').get((req, res) =>
{
  game.findById(req.params.id, (err, game) => {
      if (err)
      {
          console.log(err);
      }
      else 
      {
          res.json(game);
      }
  });
});

// create a game 
router.route('/game/add').post((req, res)=>{
  let game_to_add = new game(req.body);
  game_to_add.save()
        .then(game =>{
          res.status(200).json({'game' : ' game added successfully!'});
        })
        .catch(err => {
          res.status(400).send('Failed to create a new game');
        });
});

//Update a game 
router.route('/game/update/:id').post((req, res)=>{
  game.findById(req.params.id, (err, game)=>{
    if(!game)
      return next(new Error('Could not load document'));
    else{
      game.title = req.body.title;
      game.platform = req.body.platform;        
      game.genre = req.body.genre;
      game.rating = req.body.rating;
      game.publisher = req.body.publisher;
      game.release = req.body.release;
      game.status = req.body.status;

      game.save().then(game=>{
        res.json('Game has been updated!!');
      }).catch(err => {
        res.status(400).send('Updated failed!!!Try again later');
      });
    }
  });
});

// delete game
router.route('/game/delete/:id').get((req,res)=>{
  game.findByIdAndRemove({_id: req.params.id}, (err,game)=>{
    if(err)
      res.json(err);
    else
      res.json('Game removed successfully!!!')
  });
});


app.use('/', router);

app.listen(4000,() => console.log('Express server is running on port 4000'));
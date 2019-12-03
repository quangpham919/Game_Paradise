import express from 'express';
import game from '../models/game';
import verifyToken from './verifyToken';

const router = express.Router();

//GAME
//get all games 
router.route('/all').get((req, res)=>{
    game.find((err, games) =>
    {
      if (err)
        console.log(err);
      else 
        res.json(games);
    });
  });
  
  //get a game by id 
  router.route('/:id').get((req, res) =>
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
  router.route('/add').post(verifyToken,(req, res)=>{
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
  router.route('/update/:id').post(verifyToken, (req, res)=>{
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
  router.route('/delete/:id').get(verifyToken, (req,res)=>{
    game.findByIdAndRemove({_id: req.params.id}, (err,game)=>{
      if(err)
        res.json(err);
      else
        res.json('Game removed successfully!!!')
    });
  });

  module.exports = router;
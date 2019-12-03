import express from 'express';
import player from '../models/player';
import verifyToken from './verifyToken';

const router = express.Router();

//PLAYER
//get all the player
router.route('/all').get((req, res)=>{
    player.find((err, players) =>
    {
      if (err)
        console.log(err);
      else 
        res.json(players);
    });
});

//get a specific player by id
router.route('/:id').get((req, res) =>
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
router.route('/add').post(verifyToken, (req, res)=>{
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
router.route('/update/:id').post(verifyToken, (req, res)=>{
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
router.route('/delete/:id').get(verifyToken, (req,res)=>{
      player.findByIdAndRemove({_id: req.params.id}, (err,player)=>{
        if(err)
          res.json(err);
        else
          res.json('Player removed successfully!!!')
      });
});

router.route('/join_game/:id').post((req,res)=>{
    player.findById(req.params.id, (err,player)=>{
        if(!player){
          return next(new Error('Could not load document'));
        }
        else{
          player.gamePlayed=req.body.gamePlayed;
          player.status = req.body.status;
  
          player.save().then(player=>{
            res.json('Player has been updated!!');
          }).catch(err=>{
            res.status(400).send('Updated failed!!!Try again later');
          });
        }
    });
  });

module.exports = router;
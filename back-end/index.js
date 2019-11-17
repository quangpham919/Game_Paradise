import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// Player import
import player from './models/player';


const app = express();
const router = express.Router();

app.use(cors());  
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://system:adminquang@mycluster-pvuha.mongodb.net/test?retryWrites=true&w=majority');
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

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

router.route('/player/update/:id').post((req, res)=>{
    player.findById(req.params.id, (err, player)=>{
      if(!player)
        return next(new Error('Could not load document'));
      else{
        player.name = req.body.name;
        player.ranking = req.body.ranking;
        player.score = req.body.score;

        player.save().then(player=>{
          res.json('Player has been updated!!');
        }).catch(err => {
          res.status(400).send('Updated failed!!!Try again later');
        });
      }
    });
});

router.route('/player/delete/:id').get((req,res)=>{
      player.findByIdAndRemove({_id: req.params.id}, (err,player)=>{
        if(err)
          res.json(err);
        else
          res.json('Player removed successfully!!!')
      })
})

app.use('/', router);

app.listen(4000,() => console.log('Express server is running on port 4000'));
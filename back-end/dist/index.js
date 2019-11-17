"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _player = _interopRequireDefault(require("../models/player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Player import
var app = (0, _express["default"])();

var router = _express["default"].Router();

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());

_mongoose["default"].connect('mongodb+srv://system:adminquang@mycluster-pvuha.mongodb.net/test?retryWrites=true&w=majority');

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
}); //get all the player

router.route('/players').get(function (req, res) {
  _player["default"].find(function (err, players) {
    if (err) console.log(err);else res.json(players);
  });
}); //get a specific player by id

router.route('/player/:id').get(function (req, res) {
  _player["default"].findById(req.params.id, function (err, player) {
    if (err) {
      console.log(err);
    } else {
      res.json(player);
    }
  });
}); // create a player 

router.route('/player/add').post(function (req, res) {
  var player_to_add = new _player["default"](req.body);
  player_to_add.save().then(function (player) {
    res.status(200).json({
      'player': ' Player added successfully!'
    });
  })["catch"](function (err) {
    res.status(400).send('Failed to create a new player');
  });
});
router.route('/player/update/:id').post(function (req, res) {
  _player["default"].findById(req.params.id, function (err, player) {
    if (!player) return next(new Error('Could not load document'));else {
      player.name = req.body.name;
      player.ranking = req.body.ranking;
      player.score = req.body.score;
      player.save().then(function (player) {
        res.json('Player has been updated!!');
      })["catch"](function (err) {
        res.status(400).send('Updated failed!!!Try again later');
      });
    }
  });
});
router.route('/player/delete/:id').get(function (req, res) {
  _player["default"].findByIdAndRemove({
    _id: req.params.id
  }, function (err, player) {
    if (err) res.json(err);else res.json('Player removed successfully!!!');
  });
});
app.use('/', router);
app.listen(4000, function () {
  return console.log('Express server is running on port 4000');
});
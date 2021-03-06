const express = require('express');

const Routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

Routes.get('/players', PlayerController.index);
Routes.get('/players/:id', PlayerController.show);

Routes.post('/players', PlayerController.create);

Routes.put('/players/:id', PlayerController.update);
Routes.put('/reset-players', PlayerController.resetAll);

Routes.delete('/players/:id', PlayerController.deleteOne);
Routes.delete('/players', PlayerController.deleteAll);

module.exports = Routes;
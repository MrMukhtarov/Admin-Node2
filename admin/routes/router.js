const express = require('express');
const {vistaPrincipial, vistaTables, vistaNotifications} = require('../controllers/PageControllers')
const router = express.Router();

router.get('/',vistaPrincipial)
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)

module.exports = {routes: router}
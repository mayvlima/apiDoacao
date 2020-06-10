const express = require('express');
const router = express.Router();

const DoacaoController = require('../controllers/DoacaoController');
const AuthController = require('../controllers/AuthController');
const ItemController = require("../controllers/ItemController");
const UsuarioController = require('../controllers/UsuarioController');

/* GET home page. */

router.get('/doacoes', DoacaoController.index);
router.post('/doacoes', DoacaoController.store);
router.post('/doacoes/finalizar', DoacaoController.update);

router.get('/auth', AuthController.index);
router.post('/usuario', UsuarioController.store);

router.get('/itens', ItemController.index);
router.post('/itens', ItemController.store);
router.delete('/itens/:id', ItemController.delete);

module.exports = router;

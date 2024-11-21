const express = require('express');
const multer = require('multer');
const motoController = require('../controllers/motoController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage });


  router.get('/', (req, res) =>{ res.render('home')}); //Home

  router.get('/motos', motoController.list);// Rutas CRUD

  router.get('/motos/create', motoController.create);
  router.post('/motos/create', upload.single('imagen'), motoController.store);

  router.get('/motos/:id/edit', motoController.edit);
  router.put('/motos/:id', upload.single('imagen'), motoController.update);

  router.delete('/motos/:id', motoController.destroy);


  module.exports = router;
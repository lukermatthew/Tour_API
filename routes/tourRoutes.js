const { application } = require('express');
const express = require('express');

const tourController = require('../controllers/tourController');
// const { getAllTours } = require('../controllers/tourController'); // desctructure

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addNewTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

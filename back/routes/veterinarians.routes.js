const router = require('express').Router();
const veterinarianController = require('../controllers/veterinarian.controller');

router.post('/', veterinarianController.createVeterinarian);
router.get('/', veterinarianController.getAllVeterinarians);
router.get('/:id', veterinarianController.getVeterinarianById);
router.put('/:id', veterinarianController.updateVeterinarian);
router.delete('/:id', veterinarianController.deleteVeterinarian);

module.exports = router;

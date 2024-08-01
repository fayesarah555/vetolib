const router = require('express').Router();
const ownerController = require('../controllers/owner.controller');

router.post('/', ownerController.createOwner);
router.get('/', ownerController.getAllOwners);
router.get('/:id', ownerController.getOwnerById);
router.put('/:id', ownerController.updateOwner);
router.delete('/:id', ownerController.deleteOwner);

module.exports = router;

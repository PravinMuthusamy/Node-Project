let express=require('express');
let router=express.Router();

let buddiesController=require('../controllers/buddies.controllers')

router.put('/:key', buddiesController.updateEmployee);
router.get('/', buddiesController.selectAllEmployee);
router.get('/:key', buddiesController.selectEmployee);
router.delete('/:key', buddiesController.deleteEmployee);
router.post('/', buddiesController.addEmployee);

module.exports = router;
const router = require('express').Router()
const gymCtrl = require('../controllers/gymCtrl')
const auth = require('../middleware/auth')


router.route('/gyms')
     .post(auth, gymCtrl.createGym)
     .get(auth, gymCtrl.getGym)
     .patch(auth, gymCtrl.updateGym)

router.route('/gyms/:id')
     .get(auth, gymCtrl.getGymById) 


     

 
      


 


module.exports = router
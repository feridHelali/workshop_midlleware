const express=require('express')
const router = express.Router();



router.get('/r1',function(res,res){
  res.json({message:'/ressource/r1 on GET  endpoint'})
})
router.post('/r1',function(res,res){
    res.json({message:'/ressource/r1 on POST  endpoint'})

})



module.exports=router;
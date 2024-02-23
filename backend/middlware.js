module.exports.setDeveloperId = (req,res,next)=>{
    if(req.user && req.user._id){
        req.developer = {_id: req.user._id}
    }else{
        req.developer = null
    }
    next()
}
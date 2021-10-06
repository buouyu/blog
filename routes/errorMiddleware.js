module.exports=(err,rep,res,next)=>{
    if(err){
        const errObj={
            status:500,
            msg:err instanceof Error ? err.message:err,
        }
        res.status(500).send(errObj)
    }else{
        next();
    }
}
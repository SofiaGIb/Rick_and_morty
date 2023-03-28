const {Router} = require ("express")



router.post("rickandmorty/fav",(req,res)=>{
    fvs.push(req.body);
    res.status(200).json({status: "ok"})
});

router.get("rickandmorty/fav",(req,res)=>{
    res.status(200).json(favs)
});

router.delete("rickandmorty/fav",(req,res)=>{

const {id}= req.params;
favs = favs.filter((char)=>char.id !=id)
res.status(200).json()

})
module.exports={

    getAll:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.read_houses()
        .then(houses=>res.status(200).send(houses))
        .catch(err=>{
            res.status(500).send({errorMessage: "Minus 13 to wubstep..."});
            console.log(err)
        })
},
    create:(req,res,next) => {const dbInstance = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body;
        dbInstance.add_house([name,address,city,state,zipcode])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Minus 13 to wubstep..."});
            console.log(err)
})
},
    delete:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.delete_house(req.params.id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Minus 13 to wubstep..."});
            console.log(err)
        })
}
}
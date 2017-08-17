let express = require('express'),
    authRouter = express.Router(),
    User =  require("../models/user-model.js"),
    jwt=require("jsonwebtoken"),
    passport = require("passport"),
    Strategy = require("passport-local"),
    settings = require("../config/settings.js");

passport.use(new Strategy((username, password, done)=>{
    User.findOne({username}, (err, currentUser)=>{
        if(err){
            done(err, false);
        } else if(currentUser===null){
            done(null, false);
        } else {
            currentUser.auth(password, (isCorrect)=> {
                if(isCorrect){
                    console.log("Passed");
                    done(null, true);
                } else{
                    console.log("Failed");
                    done(null, false);
                }
            })
        }
    });
}));

authRouter.use(passport.initialize());

authRouter.get("/user/:username", (req,res)=>{
    User.findOne({username:req.params.username}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error", err})
        } else if(data===null){
            res.status(400).send({"message": "No user found with this username"})
        } else{
            let userInfo=Object.assign(data,{password:"N/A"})
     res.status(201).send({"message": "here is the info for the user", data:userInfo});

        }
    });
});
authRouter.post("/login", passport.authenticate("local", {session:false}), (req, res)=>{
    User.findOne({username:req.body.username}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error", err})
        } else if(data===null){
            res.status(400).send({"message": "No user found with this username"})
        } else{
            let payload={
                username:data.username
            }
            res.status(201).send({
                "message":"Success, Auth Token issued",
                "token": jwt.sign(payload,settings.secret,{expiresIn:30*60}),
                "username":data.username
            })
        }
    });
});

//poster users

authRouter.post("/signup", (req,res)=>{
    let makeUser= new User(req.body);
   makeUser.save((err,result)=>{
        if(err){
            res.status(500).send({"message": "err in system", err});
        } else{
            res.status(201).send({"message": `User was created with the name of ${result.username}`});
        }
    });
});



// wins count

authRouter.put("/wins/:username", (req,res)=>{
    User.findOne({"username": req.params.username}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error on server", err});
        } else if(data===null){
            res.status(404).send({"message": `Item with id of ${req.params._id} was not found`})
        } else{
            User.findByIdAndUpdate({"_id": data._id}, {$set:{wins:data.wins+1}},(err,data)=>{
                if(err){
                    res.status(500).send({"message": "Error on server", err});
                } else{
                    res.status(200).send({"message": "Success your data has been updated", data});

                }

            });

        }
    })

});

// losses count
authRouter.put("/losses/:username", (req,res)=>{
    User.findOne({"username": req.params.username}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error on server", err});
        } else if(data===null){
            res.status(404).send({"message": `Item with id of ${req.params._id} was not found`})
        } else{
             User.findByIdAndUpdate({"_id": data._id}, {$set:{losses:data.losses+1}},(err,data)=>{
                if(err){
                    res.status(500).send({"message": "Error on server", err});
                } else{
                    res.status(200).send({"message": "Success your data has been updated", data});

                }

            });
      

        }
    })

});

module.exports=authRouter;
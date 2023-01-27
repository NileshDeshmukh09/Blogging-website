/**
 *  custom middleware for verifying the request body
 */

const User = require("../models/user.model");
// const constant = require("../utils/constants");

addMiddlewaresToSignupRequest = async (req,res, next) =>{
    //Validate if userName exists
    if(!req.body.username){
       console.log(res);
        return res.status(400).send(
            "UserName is not provided"
        )
    }

    //Validate if the userId exists
    if(!req.body.userID){
        return res.status(400).send(
           "UserID is not provided"
        )
    }

   /**
   * Valiate if the userID is already not preset
   */
    const user = await User.findOne({userID : req.body.userID});
    if(user != null){
        return res.status(400).send( "UserID already exists" )
    }

   /*
       validate the Email if it Exists
   */
    if( !req.body.email ){
       return res.status(400).send( "User Email is Not provided" )
   }

   /**
    * Valiate if the u is already not preset
    */
   const email = await User.findOne({email : req.body.email});
   // message : "Failed !  Email already exist"
   if( email!=null ){
       return res.status(400).send("Email Already Exists");
   }

   /** validate the "password" if it Exists */  
   if( !req.body.password ){
       return res.status(400).send("Password is not provided")
   }
   
//    /** validate the Password */
//    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

//    // message : "Password must have at least 1 upper case, 1 lower case, 1 digit, 1 special characters, and should be 8 characters in length."
//    if( !passwordPattern.test( req.body.password )){
//        return res.status(400).send( `Password must have at least - 1 upper case, 1 lower case,  1 digit, 1 special characters,  and should be 8 characters in length.`)
//    }
   
    next(); // give the controll to the controller
}

module.exports = {
   addMiddlewaresToSignupRequest : addMiddlewaresToSignupRequest
}
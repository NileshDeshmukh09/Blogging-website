const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Registration Controller for the User */
exports.signup = async ( req, res ) => {

    const UserDetailsStoredInDB = {
        username: req.body.username,
        userID: req.body.userID,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8), 
        bio : req.body.bio,   
    }

     /**
     * Create the New User and Added to the database
     */
      try {
        const newUser = await User.create(UserDetailsStoredInDB);

         /**
         *  response
         */
          const ResponseOfNewUser = {
            username: newUser.username,
            userID: newUser.userID,
            bio : newUser.bio,
            email: newUser.email,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt
        }

        res.status(201).send({
            status : 201,
            success : true,
            message: `${newUser.userID} , Added Successully !`,
            user: ResponseOfNewUser
        });
    } catch (err) {

        console.log( err );
        res.status(400).send({
            success : false,
            message: err.message
        })
    }

}


/**
 * signin Controller
 */
exports.signin = async (req, res) => {

    //Search the user if it exists 
    try {
        var user = await User.findOne({ userID: req.body.userID });
    } catch (err) {
        console.log(err.message);
    }
    
    if (user == null) {
        return res.status(400).send({
            success : false,
            message :"User ID Doesn't Exist !"
        })
    }

    //User is exists , check for the valid password
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send({
            success : false,
            message :"Invalid Password "
        })
    }

    //** Successfull login */
    //I need to generate access token now
    const token = jwt.sign({ id: user.userId }, process.env.SECRET, {
        expiresIn: '2h'
    });

    //Send the response back 
    res.status(200).send({
        status : 200,
        message: `${user.userID} login Successfully !`,
        user: {
            name: user.username,
            userID: user.userID,
            email: user.email,
            bio : user.bio,
            accessToken: token
        }
    })

};

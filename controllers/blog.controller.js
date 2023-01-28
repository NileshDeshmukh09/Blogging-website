const User = require("../models/user.model");
const Post = require("../models/blogpost.model");
const response = require("../utils/responseConvertor");

/* create Post */

exports.createBlogpost = async (req, res) => {

    const PostObj = {
        title: req.body.title,
        content: req.body.content,
        author: req.userID
    }

    try {

        const post = await Post.create(PostObj);
        await post.save();

        if (post) {

            const user = await User.findOne({
                userID: req.userID
            })

            user.posts.push(post._id);
            await user.save();

            return res.status(201).send({
                success : true,
                message: "Post , created Successfully !",
                Post: response.postResponse(post)
            })

        }
    } catch (error) {

        console.log(error);
        return res.status(400).send({
            status: 400,
            success : false,
            message: error.message
        })
    }
}


/* API to fetch all the Posts */
exports.getAllPosts = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find().skip(skip).limit(limit);
    const count = await Post.count();

    if (posts == null) {
        return res.status(200).send({
            message: `No Posts Found !`
        })
    }

    return res.status(200).send({
        success : true ,
        totalPages: Math.ceil(count / limit),
        posts: response.postListResponse(posts)
    });

}


/* API to fetch all the Posts of Authenticated user   */
exports.getAllPostsOfUserID = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find({ author: req.userID }).skip(skip).limit(limit);
    const count = await Post.count();

    if (posts == null) {
        return res.status(200).send({
            message: `No Posts Found !`
        })
    }

    return res.status(200).send({
        success : true ,
        message: `${req.userID} Fetched All Posts !`,
        totalPages: Math.ceil(count / limit),
        posts: response.postListResponse(posts)
    });

}

/**
 * Controller to fetch the blogs based on ID's 
 */
exports.getOnePost = async (req, res) => {

    const post = await Post.findOne({
        _id: req.params.id
    });

    return res.status(200).send({
        success: true,
        message: "Post get successfully !",
        Post: response.postResponse(post)
    });
}

// Delete posts

exports.deletePost = async ( req , res ) => {

    try{     
        const blog =  await Post.findById(req.params.id);
        
        if( !blog ){
            return res.status(404).json({ 
                success : true,
                message: "Blogpost not found" 
            });
        }

        await blog.remove();

        return res.status(200).send({
            success: true,
            message: ` Blogpost Deleted Successfully`,
            blog : blog
           
        })
        
    }catch( err ){

        console.log( err );
        returnres.status(400).send({
            success: true,
            message: err.message ,
        });
    }
    
}

/**
 * Controller to Update the blog
 */
exports.updateBlog = async ( req , res )=> {

    /**
     * Check the Blog exists
     */
    const blog = await Post.findOne({ _id : req.params.id });

    if( blog == null ){
         return res.status(400).send({
            success : false,
            message : "BlogPost doesn't exist "
         })
    }

    try{
        /**
         * Only the Post Creater be allowed to update the blog
         */

        if (blog.author !== req.userID) {
            return res.status(401).json({
                success : false ,
                message : 'User not authorized' 
            });
        }

        blog.title = req.body.title != undefined ? req.body.title : blog.title;
        blog.content = req.body.content != undefined ? req.body.content : blog.content;

         /** 
          * Saved the Changed blog
          */
         const updatedblog = await blog.save();

         /**  
          *  Return the Updated blog
          */
         return res.status(200).send({
            success : true,
            message: "blog Updated successfully !",
            blog: response.postResponse (updatedblog)
         })

    }catch( error ){

        console.error(error);
        return res.status(500).send({
            success : true,
            message : error.message,
        });
    }
}

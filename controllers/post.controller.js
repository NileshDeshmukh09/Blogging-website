const User = require("../models/user.model");
const Post = require("../models/post.model");

/* create Post */

exports.createPost = async (req, res) => {
    const PostObj = {
        title: req.body.title,
        content: req.body.content,
        author: req.userID
    }

    try {

        const post = await Post.create(PostObj);
        await post.save();

        if (Post) {

            const user = await User.findOne({
                userID: req.userID
            })

            user.posts.push(post._id);
            await user.save();

            return res.status(201).send({
                message: "Post , created Successfully !",
                ticket: PostObj
            })

        }
    } catch (error) {

        console.log(error);
        return res.status(400).send({
            status: 400,
            message: error.message
        })
    }
}
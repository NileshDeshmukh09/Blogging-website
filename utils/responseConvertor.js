/**
 * This File will have the Logic to Transform the Object
 */


function postResponse ( post ){
    return {
        id : post._id,
        title : post.title,
        content : post.content,
        author : post.author,
        createdAt : post.createdAt,
        updatedAt : post.updatedAt
    }
}

function postListResponse(posts) {
    postResult = [];
    posts.forEach( post => {
        postResult.push({
            id : post._id,
            title : post.title,
            content : post.content,
            author : post.author,
            createdAt : post.createdAt,
            updatedAt : post.updatedAt
        })
    })

    return postResult;
}

module.exports = { 
    postResponse,
    postListResponse,
}
#  Blogging-website

### PREVIEW VIDEO : https://www.loom.com/share/0ee1d6eadbf24fc88e802968cde638e5

## SETUP

To get started and run the app:

- Clone the project using command

` git clone https://github.com/NileshDeshmukh09/Blogging-website.git `

- Run ` npm install ` to install the corresponding node packages

- Run ` npm start ` to run the app on http://localhost:8000

### Entity : 

 #### User           
 - username
 - userID
 - email
 - password
 - Bio
 - posts

 #### Blogpost

 - Title
 - content
 - Author
 - Like
 - Dislike




### Features :

It has the APIs for 

- ` main-route ` : GET - `https://blogging-website-nileshdeshmukh09.vercel.app?page=1` , 

![Main-Route](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/Home-Routes.png?raw=true)

- ` signup ` : POST - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/auth/signup `

![Signup](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)

- `signin` : POST - `https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/auth/signin`,

![Login](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)


- `reset-password` : PUT - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/auth/reset-password `

![Reset-password](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)


- ` create-blog ` : POST - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/posts `

![create-blog](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/create-post.png?raw=true)

- ` update-blog ` : PUT - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/posts/:id `

![update-blog](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/update-post.png?raw=true)

- ` get-all-blog-by-userID` : GET - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/posts ` 
Added pagination as which shows 10 blog per page 

![get-all-blog](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)

- ` get-one-blog ` : GET - ` https://blogging-website-nileshdeshmukh09.vercel.app/blog/api/v1/posts/:id `

![get-one-blog](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)

- ` delete-blog ` : DELETE - ` localhost:5555/blog/api/v1/posts/:id `

![delete-blog](https://github.com/NileshDeshmukh09/Blogging-website/blob/master/Screen-shots/user-signup.png?raw=true)

## Thank-you  for checking Project

// 1. by default, we named the port 5000 ( make sure to download nodemon for easier running of the server)
// 2. runt the ipa by writing npm start
// 3. put the localhost either in chrome or insomnia/postman to see if it runs, (http://localhost:5000)
// 4. after succefull start, you can then go to routes which there is one for users. (http://localhost:5000/users)

         USING INSOMNIA 
// 1.  because it is empty by default, start by posting into it. 
// 2. go into insomnia or postman, then use the post section and put this url in the top (http://localhost:5000/users)  !dont click send yet
// 3. click the body and change it to json 
// 4. we are using three inputs that go by (firstName, lastName, age);
// 5. for example write this into json by post  {
    "firstName" : "John",
 "lastName" : "Doe",
 "age" :"28"
} 
        CRUD
//1. then go to web browser eller insomnia/postman (get) function (http://localhost:5000/users) / there shall be a new user with dedicated id. create more users to see more users
//2. now get that id and put it the side of users to get the specific user for example (http://localhost:5000/users/592d2f14-aaa6-46da-821e-98eb18ecad49)
//3. try running the functions like patch, delete, post with the specific user.
//4. since this is a temporary server, closing it will remove your array and you have to start it again new.
 
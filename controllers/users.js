console.log ("#################################################");

import { v4 as uuidv4 } from 'uuid';

let users = [

   
];


export const createUser = (req,res)=> {
    const user = req.body;
const userId = uuidv4();
const userWithId = { ...user, id : userId};
users.push(userWithId);
console.log (`User with the name ${user.firstName} added to database`);
res.send('POST ROUTE REACHED');
};

export const  getUsers= (req,res)=> {
    console.log(users);
res.send(users);

};
export const  getUser =(req,res)=> {
    const {id} = req.params;
   const foundUser = users.find((user)=> user.id === id);
    res.send (foundUser);
};

export const deleteUser = (req,res)=>{

    const { id } = req.params;
    users = users.filter ((user)=> user.id !==id);
    res.send (`User with the ${id} deleted from the database`);
    
    };

    export const updateUser = (req,res)=> {
        const { id } =req.params;
        const { firstName, lastName, age} =req.body;
        const user = users.find((user)=> user.id ===id);
        if (firstName) {
            user.firstName = firstName ;
        }
        if (lastName) {
            user.lastName = lastName ;
        }
        if (age) {
            user.age = age;
        }
        res.send (`Ùser with the ${id} has been updated`);
    };
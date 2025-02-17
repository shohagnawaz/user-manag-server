const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;  

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: "Mohammad", email: "mdshohagnawaz@gmail.com"},
    {id: 2, name: "Shah", email: "shohagnawaz@gmail.com"},
    {id: 3, name: "Nawaz", email: "nawazxp@gmail.com"},
    {id: 4, name: "Shohag", email: "nawazshohag@gmail.com"},
    {id: 5, name: "Sobuj", email: "snawazdigital@gmail.com"}
]

app.get("/", (req, res) => {
    res.send("Users management server is running");
});
app.get("/users", (req, res) => {
    res.send(users);
});
app.post("/users", (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})
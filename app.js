let express = require("express"); 
let app = express(); 
app.set('view engine', "ejs"); 

app.get("/",(req,res) => { 
    res.render("home"); 
}); 

app.get("/friends", (req, res) => { 
    let friend = ["Tony", "Miranda", "Chad"]; 
    res.render('friends', {friends_listing: friend}); 
}); 

app.post("/addfriend", (req, res) => { 
    console.log(req.body); 
    res.send("you have reached the post route");

});

app.listen(3000,() => { 
    console.log('server is listening'); 

}); 


let express = require("express"); 
let app = express(); 
let body_parser = require("body-parser"); 

let friend = ["Tony", "Miranda", "Chad"]; 

app.use(body_parser.urlencoded({ extended: true})); 
app.set('view engine', "ejs"); 

app.get("/",(req,res) => { 
    res.render("home"); 
}); 

app.get("/friends", (req, res) => { 
    res.render('friends', {friends_listing: friend}); 
}); 

/* the input from the form is taken in as a request with a name attribute, 
 the body of the request is parsed into a javascript object 
 with a key/value pair, that name taken from the req.body and stored in the 
 variable new_friend, it is then pushed into the friend array and seen on the page 
 as html, we then redirect which takes a url and trigger that route again and run all the code inside the 
 /friends route */ 
app.post("/addfriend", (req, res) => { 
   let new_friend = req.body.newfriend;
   friend.push(new_friend); 
    res.redirect("/friends");
});

app.listen(3000,() => { 
    console.log('server is listening'); 

}); 


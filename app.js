let express = require("express"); 
let app = express(); 
app.set('view engine', "ejs"); 
app.listen(3000,() => { 
    console.log('server is listening'); 

}); 
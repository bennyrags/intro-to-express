const express = require('express');
//notice no path, not necessary with things that arent mine, or that are in modules

//get an instance of express
const app = express();

//Use the public directory we made for static files
//context of proj - root is express-intro directory
app.use(express.static('server/public'));


let catsArray = ['Lloyd','Tuna','Captain Sandwich' ];
//We can get things that are NOT in a file
app.get('/cats', function(req,res) {
console.log('in get cats')
// good servers always respond!
res.send(catsArray);
});


//'to keep the chaos to a minimum, mary says use 5000' - mary
const port = 5000;

app.listen(port, function(){
console.log(`Listening on port ${port}`);
});


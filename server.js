const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(cors())
const port = 3000;

app.listen(port, () => {
    console.log('Server running');
});

app.post('/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    if(username==='Rangana' && password==='rangana123'){
        res.send({
            msg: 'true'
        });
    }
    else{
        res.send({
            msg:  'false'
        });
    }
});//server

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const dotEnv=require('dotenv');
const path=require('path');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
var cors = require('cors')


const router=require('./routes/router')

 
app.use(cors())

dotEnv.config()


app.use('/uploads', express.static('uploads'));

app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"),
    function(err){
        res.status(500).send(err)
    }
    )
})




app.use('/',router)


require('./db/config')


app.listen(process.env.PORT,()=>{
    console.log('Server is listening to port '+process.env.PORT);
    
})
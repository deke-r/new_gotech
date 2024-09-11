const mongoose = require('mongoose');

const Db=process.env.DATABASE;
mongoose.connect(Db)

.then(() => 
{
console.log("connection successfully..");
}).catch((err) => console.log(err));



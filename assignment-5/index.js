let express = require('express');
let cors = require('cors');
let app = express();

require('dotenv').config()
// routes
let route=require('./routes/buddies.routes')
// port
const port = process.env.PORT;
// cors
app.use(cors({
    origin: ['http://localhost:4010'],
}));
app.use(express.json());
app.use('/',route);


// app.use('/', (req, res) => {
//     res.send("home")
// })

app.listen(port, () => {
    console.log("Server started listening in port " + port)
    // cdwAce23Budies=[]
    // fs.writeFileSync('./data/cdw_ace23_buddies.json',JSON.stringify(cdwAce23Budies))
})
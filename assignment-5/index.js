let express = require('express');
let cors = require('cors');
require('dotenv').config()

let app = express();

// routes
let route=require('./routes/buddies.routes')
// port
const port = process.env.PORT;
// cors
app.use(cors());

app.use(express.json());

app.use('/',route);

app.listen(port, () => {
    console.log("Server started listening in port " + port)
    // cdwAce23Buddies=[]
    // fs.writeFileSync('./data/cdw_ace23_buddies.json',JSON.stringify(cdwAce23Buddies))
})
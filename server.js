const express = require ("express");
const db = require ('./config/connection');
const router = require ('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use (express.urlencoded({extended:true}));
app.use (express.json());

app.use(router);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`)
    })
})

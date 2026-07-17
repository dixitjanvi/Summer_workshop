const app =require("./src/App")
//const connectDb = require("./src/database");
const connectDb = require("./src/db/db");
// const express =require("express")

const PORT = 7070;

connectDb();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// const app =express()
// module.exports = app;


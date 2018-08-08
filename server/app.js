const express = require("express");
const app = express();
// const book = require("./routes/book");
// const customer = require("./routes/customer");
const github = require("./routes/github");


app.use(express.urlencoded({ extended: false }));

app.use('/', github)
// app.use('/customer', customer)
// app.use('/transaction',transaction)






app.listen(3000, () => console.log("app listening on port 3000!"));

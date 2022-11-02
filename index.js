const express = require("express")

const port = process.env.PORT || 8000

const app = express()

app.get('/', (req,res) => {
    res.send("Default route")
})

app.get('/hello', (req,res) => {
    res.send("Hello world")
})

app.listen(port, () => { console.log(`Server listening on ${port}`) })
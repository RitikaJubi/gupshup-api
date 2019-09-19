import express from 'express'
const app = express()
const port = 8210

app.get('/', (req, res) => {
    console.log(req)
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(3000, function () {
    console.log("Listening at port 3000")
})
const express= require("express")
const cors = require('cors')
const port=process.env.port || 3000
const app = express()
app.use(cors())


app.get('/', (req, res) => {
  res.send(
    {
    
"name": "أحمد",
  "age": 28,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "JSON"],
  "address": {
    "city": "بيروت",
    "country": "لبنان"
  },
    })

})

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})


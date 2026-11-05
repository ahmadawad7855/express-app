const express= require("express")
const cors = require('cors')
const port=process.env.port || 3000
const app = express()
app.use(cors())


app.get('/', (req, res) => {
  res.send('mina')
})

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})


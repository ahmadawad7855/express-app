const express= require("express")
const cors = require('cors')
const port=process.env.port || 3000
const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'أحمد', role: 'Developer' },
        { id: 2, name: 'محمد', role: 'Designer' },
        { id: 3, name: 'علي', role: 'Tester' }
    ]);
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})


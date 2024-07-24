const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

// Allow requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }))


app.get('/locale', (req, res) => {
  res.send({
      language: 'german',
      locale: 'de'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000
const appName = typeof process.env.APP_NAME !== 'undefined' ? process.env.APP_NAME : 'app'

app.get('/ping', (req, res) => {
  console.log(`pong from ${appName}`)
  res.send(`pong from ${appName}`)
})

app.get('/health', (req, res) => {
    console.log(`${appName} is okay`)
    res.send(`${appName} is okay`)
})
  
app.listen(port, () => {
  console.log(`Simple HTTP ping-pong ${appName} listening on port ${port}`)
})
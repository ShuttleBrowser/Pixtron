const fs = require('fs')

const express = require('express')
const app = express()

app.get('/update/:version/:platform/:file', (req, res) => {
  res.sendFile(`${__dirname}/releases/${req.params.version}/${req.params.platform}/${req.params.file}`)
  console.log('[UPDATER] > download + 1')
})

app.get('/update/:version/:platform/', (req, res) => {
  fs.readdir(`${__dirname}/releases/${req.params.version}/${req.params.platform}`, (err, files) => {
    if (err) {
      res.json(err)
    } else {
      res.json(files)
    }
  })
})

app.get('/update/', (req, res) => {
  fs.readdir(`${__dirname}/releases`, (err, files) => {
    if (err) {
      res.json(err)
    } else {
      res.json(files)
    }
  })
})

app.get('*', (req, res) => {
  res.json({
    welcome: 'Welcome on pixtron, a (very) simple update server for electron-updater',
    github: 'See our github here: https://github.com/ShuttleBrowser/pixtron'
  })
})

const port = process.env.PORT || 1004;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
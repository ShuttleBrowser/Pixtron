const fs = require('fs')
const request = require('request')
const fetch = require('node-fetch')

const express = require('express')
const app = express()

const config = require('./config.json')

<<<<<<< HEAD
=======
/*
  console.log(`${releasesURL}/${config.releases[x].files[y]}`)
  console.log(`${__dirname}/releases/latest/${config.releases[x].platform}/${config.releases[x].files[y]}`)
  console.log(`${releasesURL}/${config.releases[x].files[y]}`)
*/

>>>>>>> 12435c5799d540d900044dbea3ad192f23092cd0
const downloadFromGithub = (releasesURL) => {
  
  let url
  let options

  for (x in config.releases) {
    console.log(`===== ${config.releases[x].platform } =====`)
    for (y in config.releases[x].files) {

      url = `${releasesURL}/${config.releases[x].files[y]}`

      options = {
        directory: `${__dirname}/releases/latest/${config.releases[x].platform}`,
        filename: config.releases[x].files[y]
      }

      console.log(`Downloading ${options.filename}...`)
      request(url).pipe(fs.createWriteStream(`${options.directory}/${options.filename}`))
    }
  }

}

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

app.get('/upload/:tag/:password', (req, res) => {
  const releasesURL = `https://github.com/${config.githubRepo}/releases/download/${req.params.tag}`
  const gituhApi = `https://api.github.com/repos/${config.githubRepo}/tags`

  if (req.params.password === config.password) {
    fetch(gituhApi)
    .then(resp => resp.json())
    .then(data => {
      for (i in data) {

        if (data[i].name === req.params.tag) {
          res.json({
            message: "DOWNLOADING"
          })

          downloadFromGithub(releasesURL)
          break
        }

      }
    }).catch((e) => {
      res.json({
        message: e
      })
    })
  } else {
    res.json({
      message: "BAD_PASSWORD"
    })
  }
})

app.get('*', (req, res) => {
  res.json({
    welcome: 'Welcome on pixtron, a (very) simple update server for electron-updater',
    github: 'See our github here: https://github.com/ShuttleBrowser/pixtron'
  })
})

<<<<<<< HEAD
const port = process.env.PORT || 1004
app.listen(port, () => {
    console.log(`[INFO] > http://localhost:${port}`)
})
=======
const port = process.env.PORT || 1004;
app.listen(port, () => {
    console.log(`[INFO] > http://localhost:${port}`)
})

// https://github.com/ShuttleBrowser/Shuttle/releases/download/3.0.0-beta-01/latest-linux.yml
>>>>>>> 12435c5799d540d900044dbea3ad192f23092cd0

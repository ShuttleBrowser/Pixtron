# Pixtron

Pixtron is a (very) simple update server for electron-updater.

## Installation

```
# clone the repository
$ git clone https://github.com/ShuttleBrowser/pixtron.git

# change the working directory to pixtron
$ cd pixtron

# install the requirements
$ npm i

<<<<<<< HEAD
or

In the config.json file add a password and a repository.
Change the names of the files.
Once it's done go to:

```
update.your-super-server.com/upload/<the release tag>/<your password (in config file)>
```

config.json :

```json
{
  "releases": [
    {
      "platform": "win32",
      "files": [
        "latest.yml",
        "MySuperApp-Windows.exe",
        "MySuperApp-Windows.exe.blockmap"
      ]
    },
    {
      "platform": "linux",
      "files": [
        "latest-linux.yml",
        "MySuperApp-Linux-x86_64.AppImage"
      ]
    },
    {
      "platform": "mac",
      "files": [
        "latest-mac.yml",
        "MySuperApp-MacOS.dmg",
        "MySuperApp-MacOS.dmg.blockmap"
      ]
    }
  ],

  "githubRepo": "MyRepo/MySuperApp",
  "password": "mySuperPassword"
}
```

## Use in electron :
=======
# start pixtron
$ npm start
```
## Upload releases
>>>>>>> 12435c5799d540d900044dbea3ad192f23092cd0

Copy the generated files by electron-builder in `releases/latest/<platform>`,

<<<<<<< HEAD
=======
or

In `config.json`, add a password and a repository.
Change the names of the files.
Once it's done, go to:

```
update.your-super-server.com/upload/<the release tag>/<your password (in config file)>
```

`config.json` :

```json
{
  "releases": [
    {
      "platform": "win32",
      "files": [
        "latest.yml",
        "MySuperApp-Windows.exe",
        "MySuperApp-Windows.exe.blockmap"
      ]
    },
    {
      "platform": "linux",
      "files": [
        "latest-linux.yml",
        "MySuperApp-Linux-x86_64.AppImage"
      ]
    },
    {
      "platform": "mac",
      "files": [
        "latest-mac.yml",
        "MySuperApp-MacOS.dmg",
        "MySuperApp-MacOS.dmg.blockmap"
      ]
    }
  ],

  "githubRepo": "MyRepo/MySuperApp",
  "password": "mySuperPassword"
}
```

## Use in electron

Read the electron-updater documentation [here](https://www.electron.build/auto-update).

>>>>>>> 12435c5799d540d900044dbea3ad192f23092cd0
```js
autoUpdater.setFeedURL({
    provider:  'generic',
	url:  `http://your-update-server/update/latest/${process.platform}/`
})
<<<<<<< HEAD
```
=======
```
>>>>>>> 12435c5799d540d900044dbea3ad192f23092cd0

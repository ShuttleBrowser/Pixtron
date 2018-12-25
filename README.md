# Pixtron

Pixtron is a (very) simple update server for electron-updater

**Installation :**

    git clone https://github.com/ShuttleBrowser/pixtron.git
    cd pixtron
    npm i
    npm start

## **Upload release :**

Copy the generated files by electron-builder in `releases/latest/<platform>`,

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

## Use in electron :

Read the electron-updater documentation [here](https://www.electron.build/auto-update).

```js
autoUpdater.setFeedURL({
    provider:  'generic',
	url:  `http://your-update-server/update/latest/${process.platform}/`
})
```

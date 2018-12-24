# PixTron

Pixtron is a (very) simple update server for electron-updater

**Installation :**

    git clone https://github.com/ShuttleBrowser/pixtron.git
    cd pixtron
    npm i
    npm start

## **Upload release :**

copy the generated files by electron-builder in `releases/latest/<platform>`

## Use in electron :

read the electron-updater doc [here](https://www.electron.build/auto-update)

    autoUpdater.setFeedURL({
	    provider:  'generic',
	    url:  `http://your-update-server/update/latest/${process.platform}/`
    })

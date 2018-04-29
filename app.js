var {app,BrowserWindow} = require('electron');
var url = require('url');
var path = require('path');
var React = require('react');
var win;


function createWindow(){
  win = new BrowserWindow({width: 800, height: 600});

  win.loadURL(
    url.format({
      pathname: path.join(__dirname,'./views/index.html'),
      protocol: 'file:'
    })
  )

  win.on('closed', () => {
    win = null;
  })
}

module.exports.App = class App extends React.Component {
  render(){
    return (<div>
    Hello world!
  </div>);
  }
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !=='darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if(win === null){
    createWindow();
  }
})

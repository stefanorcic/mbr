//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/maticni'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/maticni/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

console.log('Server started running..');
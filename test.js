var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>html is great</h1>", function(error) {
    if (error) {
        return console.log(error);
    }   else {
            return console.log("congration")
    }
});

var myPhotoLocation = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/the-snow-witch-npc-infobox-elden-ring-wiki-guide-300px.jpg'

https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/rannimybeloved.jpg"));
});
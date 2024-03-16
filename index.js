const getFilesFromFolder = require('fly-get-files');
const { getRandomInt } = require('phey-random-int');
const { convertCurrency } = require('phey-convert-currency');


function showCurrentcy(folderPath) {
    const a = getRandomInt(2,55);
    console.log(a)
    a = convertCurrency(2315);

    getFilesFromFolder(folderPath)
        .then(files => {
            console.log("Files in folder:", folderPath);
            files.forEach(file => {
                console.log(file);
            });
        })
        .catch(err => {
            console.error("Error:", err);
        });
}

module.exports = showCurrentcy;

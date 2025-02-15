const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'Pictures/Reunion');
const outputFilePath = path.join(__dirname, 'Reunion-images.json');

fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif';
    });

    const imagesJson = JSON.stringify(imageFiles, null, 2);

    fs.writeFile(outputFilePath, imagesJson, err => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('images.json has been generated.');
        }
    });
});


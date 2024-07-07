const fs = require('fs');    // fs is a built-in module in Node.js

const data = fs.readFileSync('File.txt');    // readFileSync is a synchronous method
console.log(data.toString());    // toString() is used to convert the buffer data to a string
// without .toString it will give output in buffer format  or we can append an empty string in front of it 

// fs.writeFileSync('file.txt', 'Hello World!', 'utf-8', (err) =>{
//     console.log('file modified successfully');
// })    // writeFileSync is a synchronous method

// fs.appendFileSync('file.txt', "class is going on", 'utf-8', (err) =>{
//     console.log('file modified successfully');
// })    // appendFileSync is a synchronous method

// fs.mkdirSync('newFolder', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created successfully');

// });    // mkdirSync is a synchronous method

// fs.rmdir('newFolder', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder deleted successfully');

// }); 


fs.renameSync('mmm.txt', 'File.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});

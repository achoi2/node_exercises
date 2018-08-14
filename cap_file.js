// get user input
var readline = require('readline');

// fs read files
var fs = require('fs');
// request and get methods.
var http = require('http');
// dns module
var dns = require('dns');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your file name? ', function(error, answer) {
//     if (error) {
//         console.log('no such file');
//     } else {
//         var rl = readline.createInterface({
//             input: fs.createReadStream(answer),
//             crlDelay: Infinity
//         });
//         rl.on('line', function(line) {
//             console.log(line.toUpperCase());
//         });
//     }
// });

// var getIPaddress = function(name) {
//     dns.resolve4(name, function(err, addresses) {
//         if (err) {
//             console.log('invalid domain')
//         } else {
//             console.log(`addresses: ${JSON.stringify(addresses)}`);
//         }
//     });
// };

// rl.question('What is your domain name? ', function(name) {
//     getIPaddress(name);
// });

// rl.question('Input file? ', function(input) {
//     rl.question('output file? ', function(output) {
//         fs.readFile(input, function(err, line) {
//             if (err) {
//                 return err;
//             } else {
//                 var uppercaseLine = line.toString().toUpperCase();
//                 fs.writeFile(output, uppercaseLine, function(err) {
//                     if (err) {
//                         return err;
//                     } else {
//                         console.log('written correctly!');
//                     }
//                 });
//             }
//         });
//         rl.close();
//     });
// });

// rl.question('URL: ', function(url) {
//     rl.question('save to file: ', function(filename) {
//         dns.resolve4(url, function(err, addresses) {
//             if (err) {
//                 console.log('invalid domain');
//             } else {
//                 fs.writeFile(filename, addresses, function(err) {
//                     if (err) {
//                         return err;
//                     } else {
//                         console.log(`saved to file ${filename}`);
//                     }
//                 });
//             }
//         });
//     });
// });

const inquirer = require('inquirer')
const fs = require('fs');
const generateReadMe = require('./markdown.js').generateReadMe;


inquirer
.prompt([
{
    name: 'title',
    message:'what is the title of your project?',
    type:'input'
},
{
    name:'desc',
    message:'add a description',
    type:'input'
},
{
    name:'instruct',
    message:'add Installation intructions',
    type:'input'
},
{
    name:'use',
    message:'add a how to',
    type:'input'
},
{
    name:'contribution',
    message:'add any contributions',
    type:'input'
},
{
    name:'test',
    message:'add any tests',
    type:'input'
},
{
    type: 'list',
    name:'licenses',
    message:'add a license',
    choices: ['Apache','MIT', 'Mozilla','Perl','WTFPL']
},
{
    name:'github',
    message:'add your github username',
    type:'input'
},
{
    name:'email',
    message:'add your email address',
    type:'input'
},
])
.then((results) => {
    
    if (results.licenses === 'Apache') {
        results.licenses = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        
    }
    if (results.licenses === 'MIT') {
        results.licenses = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        
    }
    if (results.licenses === 'Mozilla') {
        results.licenses = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        
    }
    if (results.licenses === 'Perl') {
        results.licenses = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        
    }
    if (results.licenses === 'WTFPL') {
        results.licenses = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
    
        
    };

    const readMe = generateReadMe((results));
    module.exports = results;
fs.writeFile('README.md', readMe, (err) =>
err ? console.log(err) : console.log('readme has been generated!')
);
});


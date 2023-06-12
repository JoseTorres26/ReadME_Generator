


function generateReadMe(results) {
return `# ${results.title}

## Description

${results.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#Questions)
- [License](#license)

## Installation

${results.instruct}

## Usage

 ${results.use} 

## License

${results.licenses}

---

🏆

## Badges

${results.licenses}


## Questions

${results.github}

${results.email}

## Tests

`};

module.exports = { generateReadMe };
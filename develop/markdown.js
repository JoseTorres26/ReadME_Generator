


function generateReadMe(results) {
return `# ${results.title}

## Description

${results.desc}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

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
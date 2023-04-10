const fs = require('fs');

// function to read a file
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const jsonData=JSON.parse(data)
    return { status: true, data:jsonData };
  } catch (err) {
    return { status: false, error: err };
  }
}

// function to write to a file
const writeFile = (filePath, jsonData) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(jsonData));
    return { status: true };
  } catch (err) {
    return { status: false, error: err };
  }
}

module.exports = { readFile, writeFile };

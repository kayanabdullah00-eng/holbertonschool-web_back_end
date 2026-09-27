const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      resolve('Number of students: 0');
      return;
    }

    const studentLines = lines.slice(1);
    let output = `Number of students: ${studentLines.length}\n`;

    const fields = {};

    for (const line of studentLines) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();

        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
    }

    const fieldEntries = Object.entries(fields);
    fieldEntries.forEach(([field, names], index) => {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      if (index < fieldEntries.length - 1) {
        output += '\n';
      }
    });

    resolve(output);
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((studentData) => {
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;

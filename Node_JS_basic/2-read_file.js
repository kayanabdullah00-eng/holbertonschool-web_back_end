const fs = require('fs');

/**
 * Reads a CSV database file synchronously, counts the students, 
 * and logs details per field.
 * @param {string} path - The path to the database file.
 */
const countStudents = (path) => {
  try {
    // Read the file synchronously
    const fileContent = fs.readFileSync(path, 'utf8');

    // Split into lines and filter out empty lines
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Exclude the header line
    const studentLines = lines.slice(1);
    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};

    // Parse each student record
    studentLines.forEach((line) => {
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
    });

    // Log the results per field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

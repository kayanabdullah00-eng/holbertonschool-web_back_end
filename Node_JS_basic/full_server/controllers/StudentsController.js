import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];
    try {
      const students = await readDatabase(databasePath);
      let output = 'This is the list of our students';

      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'accent' }));

      for (const field of sortedFields) {
        output += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
      }

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const databasePath = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      const fieldStudents = students[major] || [];
      response.status(200).send(`List: ${fieldStudents.join(', ')}`);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
}

export default StudentsController;

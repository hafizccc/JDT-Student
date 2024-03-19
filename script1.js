document.addEventListener('DOMContentLoaded', function() {
  const markList = [
    { studentID: 1, name: 'Karthik' },
    { studentID: 2, name: 'Nijad' },
    { studentID: 3, name: 'Niyas' },
    { studentID: 4, name: 'Siddiq' },
    { studentID: 5, name: 'Hafiz' },
    { studentID: 6, name: 'Lamin' },
    { studentID: 7, name: 'Alfana' },
    { studentID: 8, name: 'Goutham' },
    { studentID: 9, name: 'Abhirami' },
    { studentID: 10, name: 'Manikandan' }
    // Add more students as needed
  ];

  const tbody = document.querySelector('#markList tbody');

  // Populate the mark list
  markList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.studentID}</td>
      <td>${student.name}</td>
      <td><input type="number" id="network_${student.studentID}" class="subject-mark" min="0" max="100"></td>
      <td><input type="number" id="oop_${student.studentID}" class="subject-mark" min="0" max="100"></td>
      <td><input type="number" id="embedded_${student.studentID}" class="subject-mark" min="0" max="100"></td>
      <td id="total_${student.studentID}"></td>
      <td id="result_${student.studentID}"></td>
    `;
    tbody.appendChild(row);
  });

  // Calculate Results functionality
  document.getElementById('calculate').addEventListener('click', function() {
    markList.forEach(student => {
      const network = parseInt(document.getElementById(`network_${student.studentID}`).value) || 0;
      const oop = parseInt(document.getElementById(`oop_${student.studentID}`).value) || 0;
      const embedded = parseInt(document.getElementById(`embedded_${student.studentID}`).value) || 0;
      const totalMarks = network + oop + embedded;
      const resultCell = document.getElementById(`result_${student.studentID}`);
      const totalCell = document.getElementById(`total_${student.studentID}`);

      totalCell.textContent = totalMarks;
      resultCell.textContent = (network >= 35 && oop >= 35 && embedded >= 35) ? 'Pass' : 'Fail';
    });
  });

  // Download Results functionality
  document.getElementById('downloadResults').addEventListener('click', function() {
    generatePDF();
  });

  // Function to generate PDF
  function generatePDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#markList' });
    doc.save('student_results.pdf');
  }
});

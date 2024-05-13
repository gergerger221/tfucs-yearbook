// Sample data for the yearbook
const students = [
    { name: "Sample 1", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Sample 2", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "Random Name", grade: "Grade 12", section: "Section C", strand: "STEM", image: "TFUCS_background.png" },
    { name: "John Doe", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Walter White", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "David David", grade: "Grade 12", section: "Section C", strand: "HUMMS", image: "TFUCS_background.png" },
    { name: "484 266", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "1234 56789", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "Grace Hall", grade: "Grade 12", section: "Section C", strand: "ABM", image: "TFUCS_background.png" },
    { name: "Henry Adams", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Isabel Clark", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "Jack Lewis", grade: "Grade 12", section: "Section C", strand: "TVL-HE", image: "TFUCS_background.png" },
    { name: "Kathy Young", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Liam Scott", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "Mia Robinson", grade: "Grade 12", section: "Section C", strand: "TVL-ICT", image: "TFUCS_background.png" },
    { name: "Nathan King", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Olivia Wright", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" },
    { name: "Patrick Harris", grade: "Grade 12", section: "Section C", strand: "STEM", image: "TFUCS_background.png" },
    { name: "Quinn Thompson", grade: "Kinder", section: "Section A", image: "TFUCS_background.png" },
    { name: "Rachel Moore", grade: "Grade 6", section: "Section B", image: "TFUCS_background.png" }
  ];
  //Function to display students based on the  filters
  function displayStudents(filteredStudents) {
    const grid = document.getElementById('studentGrid');
    grid.innerHTML = '';
    filteredStudents.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.dataset.name = student.name;
        studentCard.dataset.grade = student.grade;
        studentCard.dataset.section = student.section;
        if (student.strand) {
            studentCard.dataset.strand = student.strand;
        }
        studentCard.innerHTML = `
            <img src="${student.image}" alt="${student.name}">
            <p>${student.name}</p>
            <p>${student.grade} - ${student.section}</p>
        `;
        grid.appendChild(studentCard);
    });
  }
  
  //Initial display of all students
  displayStudents(students);
  
  //Update filters when grade is selected
  function updateFilters() {
    const gradeSelect = document.getElementById('gradeSelect').value;
    const strandSelect = document.getElementById('strandSelect');
    const sectionSelect = document.getElementById('sectionSelect');
  
    if (gradeSelect === 'Grade 12') {
        strandSelect.style.display = 'inline-block';
    } else {
        strandSelect.style.display = 'none';
        strandSelect.value = '';
    }
  
    filterStudents();
  }
  
  // Filter students based on selected grade, strand, and section
  function filterStudents() {
    const grade = document.getElementById('gradeSelect').value;
    const strand = document.getElementById('strandSelect').value;
    const section = document.getElementById('sectionSelect').value;
  
    const filtered = students.filter(student => {
        return (!grade || student.grade === grade) &&
               (!strand || student.strand === strand) &&
               (!section || student.section === section);
    });
    displayStudents(filtered);
  }
  
  // Search for students by name
  function searchStudent() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filtered = students.filter(student => student.name.toLowerCase().includes(searchText));
    displayStudents(filtered);
  }
  
  // Function to display student details in the modal
  function showStudentDetails(student) {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${student.image}" class="modal-image" alt="Student Image">
        <div class="modal-info">
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p><strong>Section:</strong> ${student.section}</p>
            ${student.strand ? `<p><strong>Strand:</strong> ${student.strand}</p>` : ''}
        </div>
    `;
  
    // Close modal when close button is clicked
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
  
    //Close modal when clicked outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
  
    modal.style.display = 'block';
  }
  
  // Attach click event listener to the student grid(parent element)
  //Modals doesn't pop up if filters are used without this
  document.getElementById('studentGrid').addEventListener('click', function(event) {
    //Check if the clicked element is a student card
    if (event.target.classList.contains('student-card')) {
        const studentCard = event.target;
        const student = {
            name: studentCard.dataset.name,
            grade: studentCard.dataset.grade,
            section: studentCard.dataset.section,
            image: studentCard.querySelector('img').getAttribute('src'),
            strand: studentCard.dataset.strand || null
        };
        showStudentDetails(student);
    }
  });
  
  //function to attach click event listener to each student card
  function attachClickListenerToCards() {
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        card.addEventListener('click', function(event) {
            const student = {
                name: this.dataset.name,
                grade: this.dataset.grade,
                section: this.dataset.section,
                image: this.querySelector('img').getAttribute('src'),
                strand: this.dataset.strand || null
            };
            showStudentDetails(student);
        });
    });
  }
  
  // Initial attachment of event listeners to student cards
  attachClickListenerToCards();
  
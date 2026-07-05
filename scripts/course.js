// course.js

// Course List Array (Web and Computer Programming Certificate)
const courses = [
  { code: 'WDD130', name: 'Web Fundamentals', credits: 3, completed: true, category: 'WDD' },
  { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 3, completed: false, category: 'WDD' },
  { code: 'WDD231', name: 'Frontend Development', credits: 3, completed: false, category: 'WDD' },
  { code: 'WDD330', name: 'Web Backend Development', credits: 3, completed: false, category: 'WDD' },
  { code: 'CSE110', name: 'Programming Basics', credits: 3, completed: true, category: 'CSE' },
  { code: 'CSE111', name: 'Programming with Functions', credits: 3, completed: false, category: 'CSE' },
  { code: 'CSE210', name: 'Programming with Classes', credits: 3, completed: false, category: 'CSE' },
  { code: 'CSE310', name: 'Data Structures', credits: 3, completed: false, category: 'CSE' }
];

// DOM elements
const courseContainer = document.getElementById('courseContainer');
const totalCreditsElement = document.getElementById('totalCredits');

// Function to display courses
function displayCourses(filter) {
  courseContainer.innerHTML = '';

  const filteredCourses = filter === 'All'
    ? courses
    : courses.filter(course => course.category === filter);

  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.className = course.completed ? 'course completed' : 'course';
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;
    courseContainer.appendChild(card);
  });

  // Calculate total credits dynamically
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsElement.textContent = totalCredits;
}

// Event listeners for filter buttons
document.getElementById('allBtn').addEventListener('click', () => displayCourses('All'));
document.getElementById('wddBtn').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('cseBtn').addEventListener('click', () => displayCourses('CSE'));

// Initial display
displayCourses('All');

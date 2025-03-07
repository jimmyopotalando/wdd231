// Example course data
const courses = [
    { name: "Introduction to Web Development", category: "wdd", credits: 3, completed: true },
    { name: "JavaScript Basics", category: "wdd", credits: 4, completed: false },
    { name: "CSE 101 - Computer Science", category: "cse", credits: 3, completed: true },
    { name: "CSE 102 - Data Structures", category: "cse", credits: 3, completed: false }
];

// Function to display courses
function displayCourses(filteredCourses) {
    const courseList = document.getElementById('course-cards');
    courseList.innerHTML = ''; // Clear previous courses

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        // Display course information
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Category: ${course.category}</p>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        courseList.appendChild(courseCard);
    });
}

// Function to filter courses
function filterCourses(category) {
    if (category === 'all') {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.category === category);
        displayCourses(filtered);
    }
}

// Initial display of all courses
displayCourses(courses);

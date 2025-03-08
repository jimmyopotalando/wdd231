// Example array of courses
const courses = [
    { name: 'CSE 110', completed: true },
    { name: 'WDD 130', completed: true },
    { name: 'CSE 111', completed: true },
    { name: 'WDD 131', completed: true },
    { name: 'CSE 210', completed: false },
    { name: 'WDD 231', completed: false }
];

// Function to display courses dynamically
const displayCourses = (filter = 'all') => {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';  // Clear current list

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.name.startsWith(filter));

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add(course.completed ? 'completed' : 'not-completed');
        courseElement.textContent = course.name;
        courseList.appendChild(courseElement);
    });
};

// Filter buttons
document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));

// Initially display all courses
displayCourses('all');

const courses = [
    { name: 'CSE 110', completed: true, credits: 3 },
    { name: 'WDD 130', completed: true, credits: 3 },
    { name: 'CSE 111', completed: true, credits: 3 },
    { name: 'WDD 131', completed: true, credits: 3 },
    { name: 'CSE 210', completed: false, credits: 3 },
    { name: 'WDD 231', completed: false, credits: 3 }
];


const displayCourses = (filter = 'all') => {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';  

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.name.startsWith(filter));

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add(course.completed ? 'completed' : 'not-completed');
        courseElement.textContent = `${course.name} (${course.credits} credits)`;
        courseList.appendChild(courseElement);
    });

    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
};


document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));


displayCourses('all');

// course.js

// Course List Array
const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 2, completed: false },
  { code: "CSE210", name: "Programming with Classes", credits: 2, completed: false },
  { code: "CSE230", name: "Discrete Structures", credits: 2, completed: false },
  { code: "CSE250", name: "Data Structures", credits: 2, completed: false }
];

// DOM references
const courseContainer = document.getElementById("course-cards");
const creditsValue = document.getElementById("credits-value");

// Render courses
function renderCourses(courseList) {
  courseContainer.innerHTML = ""; // clear previous
  let totalCredits = 0;

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course");
    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? "Completed ✅" : "In Progress ⏳"}</p>
    `;

    courseContainer.appendChild(card);
    totalCredits += course.credits;
  });

  creditsValue.textContent = totalCredits;
}

// Filter functions
function showAll() {
  renderCourses(courses);
}

function showCSE() {
  const cseCourses = courses.filter(c => c.code.startsWith("CSE"));
  renderCourses(cseCourses);
}

function showWDD() {
  const wddCourses = courses.filter(c => c.code.startsWith("WDD"));
  renderCourses(wddCourses);
}

// Event listeners for buttons
document.getElementById("all").addEventListener("click", showAll);
document.getElementById("cse").addEventListener("click", showCSE);
document.getElementById("wdd").addEventListener("click", showWDD);

// Initial render
showAll();

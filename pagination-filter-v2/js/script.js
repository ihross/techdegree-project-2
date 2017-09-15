// Constant global variables
const studentList = $(".student-item");   // Accessing the students
const numOfStudents = studentList.length; // Total students
const maxStudentsPerPage = 10;

// Keeps the students shown on each page limited to 10
function showPage(pageNumber, list) {
  studentList.hide();   // Dynamically hides the complete roster
  for (let i = 0; i <= list.length; i++) {    // Range of loop stays within the max students (10)
    if (i < pageNumber * maxStudentsPerPage && i > (pageNumber - 1) * maxStudentsPerPage - 1)
      $(list[i]).show();   // Displays roster on each page within range
    }
}

// Orders and presents the total pages needed for the full student roster
function appendPageLinks(list) {
  let currentPage = 1;
  let numOfPages = Math.ceil(list / maxStudentsPerPage);   // Sets needed amount of pages
  $('ul').after('<div class="pagination"></div>');
  let ul = '<ul>';

  for (let i = 1; i <= numOfPages; i++) {
    let temp ='<li><a href="#">' + i + '</a></li>';
    ul += temp;
  }
  ul + ul + '</ul>';
  $('.pagination').append(ul);
  // Makes clickable links display the right page
  $('a').click(function() {
    currentPage = event.target.textContent;
    showPage(currentPage,studentList);
  });
}


showPage(1, studentList);
appendPageLinks(numOfStudents);

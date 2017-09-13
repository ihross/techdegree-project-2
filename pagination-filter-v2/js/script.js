
const studentList = $(".student-item");
const numOfStudents = studentList.length;
const maxStudentsPerPage = 10;


function showPage(pageNumber, list) {
  studentList.hide();

  for (let i = 0; i <= list.length; i++) {
    if (i < pageNumber * maxStudentsPerPage && i > (pageNumber - 1) * maxStudentsPerPage - 1)
      $(list[i]).show();
    }
}

function appendPageLinks() {
  let allPages = Math.ceil(numOfStudents / maxStudentsPerPage);
  console.log(allPages);
}

showPage(1, studentList);
appendPageLinks(studentList);

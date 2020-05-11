/******************************************
Treehouse Techdegree:

Developer : Teddy Gadie
FSJS project 2 - List Filter and Pagination
******************************************/

const student = document.getElementsByClassName("student-item cf");
pageNumber = 1;
const numOfStudents = 10; //Number of students per page.
const showPage = (list, page) => {
  //Define start and ending index variables;
  const startIndx = page * numOfStudents - numOfStudents;
  const endIndx = page * numOfStudents;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndx && i < endIndx) {
      //that should be shown on the page
      list[i].style.display = "block";
    } else {
      //this hides the ones that shouldn't be showing on that page.
      list[i].style.display = "none";
    }
  }
  return;
};
showPage(student, pageNumber);
//Passing the values from student into the parameter list.

const appendPageLinks = (list) => {
  //student.length -->number of list items = 54
  //numOfStudents --> max number of items per page
  list = student.length / numOfStudents + 1;

  const newDiv = document.createElement("div"); //create a div
  newDiv.className = "pagination"; //give it the class --> "pagination";
  const page = document.querySelector(".page"); //define page
  page.appendChild(newDiv); //append to .page
  const ul = document.createElement("ul");
  newDiv.appendChild(ul);

  //list.length = 54 / max number of items on one page = 10
  //result = 5.4 rounded 6 is the number of LI we need nested in our ul also the number of  Anchor we need nested in our LI.

  for (i = 1; i < list; i++) {
    const li = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = "<a href='#'>";
    link.textContent = i;

    ul.appendChild(li);
    li.appendChild(link);
    if (link.textContent == 1) link.className = "active"; //add a className 'active' to the first link which is the actual page.

    link.addEventListener("click", (e) => {
      const ActualPage = e.target.textContent; // the value in i will targeted and saved into ActualPage once the an anchor is click
      const anchor = document.querySelectorAll("a");
      showPage(student, ActualPage); //call the showPage function and pass in  the student and page number value saved in ActualPage.

      for (let i = 0; i < anchor.length; i++) anchor[i].className = ""; //removing the className 'active' from all anchor.
      e.target.className = "active"; // add the className active to the single anchor fired.
    });
  }
};
appendPageLinks();

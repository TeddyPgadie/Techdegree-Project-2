/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

var student = document.getElementsByClassName("student-item cf");
var pageNumber = 1;
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
  list = Math.ceil(student.length / numOfStudents);

  const newDiv = document.createElement("div"); //create a div
  newDiv.setAttribute("class", "pagination"); //give it the class --> "pagination";
  const page = document.querySelector("div"); //define page
  page.appendChild(newDiv); //append to .page
  let ul = document.createElement("ul");
  newDiv.appendChild(ul);

  console.log(newDiv);

  //list.length = 54 / max number of items on one page = 10
  //result = 5.4 rounded 6 is the number of LI we need nested in our ul.

  for (i = 1; i < 7; i++) {
    let li = document.createElement("li");
    li.innerHTML = "<a href='#'>" + i + "</a>";
    ul.appendChild(li);
    li.addEventListener("click", myPage());
  }

  function myPage() {
    //showPage();
  }

  //create event listeners
  //save button in event listeners
};
appendPageLinks();
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.

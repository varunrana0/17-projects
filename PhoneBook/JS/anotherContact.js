const nameInput = document.querySelector(".nameInput");
const numberInput = document.querySelector(".numberInput");
const filterContact = document.querySelector(".filter-contacts");
const lists = document.querySelector(".lists");
const saveBtn = document.querySelector(".save");
let update = false;

// check the value of update if true than update the value of edit data...
saveBtn.addEventListener("click", contactListAdd);

//compare the function with update values that it will be true or false...;
// function checksave(e) {
//   if (!update) contactListAdd(e);
//   else updateRec(e);
// }

function contactListAdd(e) {
  // add all elements we required in this click function

  let Name = nameInput.value;
  let phone = numberInput.value;

  // grab the unodered list of the container..
  const ul = document.querySelector(".lists");

  ul.innerHTML += `
  <li class="active">
    <p class="contactDetail">
      <span>${Name}</span>
      <span>${phone}</span>
    </p>
    <span class="iconss borderLeft"
      ><i class="fa fa-edit editContact" onclick="checksave(this)"></i>
      <i class="fa fa-trash deleteContact" onclick="deleteContact(this)"></i>
    </span>
  </li>
  `;

  // than value of name and phone equal to zero
  nameInput.value = "";
  numberInput.value = "";
  e.preventDefault();
}

function checksave(e) {
  if (!update) editContact(e);
  else updateRec(e);
}

function editContact(e) {
  let contact = e.parentElement.parentElement.firstElementChild;

  let nameSpan = contact.children[0];
  let numberSpan = contact.children[1];

  //value of span elements in to input fields...
  nameInput.value = nameSpan.textContent;
  numberInput.value = numberSpan.textContent;

  update = true;

  nameSpan.textContent = "";
  numberSpan.textContent = "";
}

//delete records
function deleteContact(e) {
  e.parentElement.parentElement.remove();
}

//update Each record
function updateRec(e) {
  let firstSpan = e.parentElement.previousElementSibling.firstElementChild;
  let secondSpan = e.parentElement.previousElementSibling.lastElementChild;

  firstSpan.innerText = nameInput.value;
  secondSpan.innerText = numberInput.value;

  update = false;

  nameInput.value = "";
  numberInput.value = "";
}

//filter contacts
filterContact.addEventListener("keyup", filterRec);

function filterRec(e) {
  const text = e.target.value.toLowerCase();

  const listsAll = document.querySelectorAll(".active");
  listsAll.forEach((list) => {
    let rec =
      list.firstElementChild.firstElementChild.textContent.toLowerCase();
    if (rec.indexOf(text) !== -1) {
      list.style.display = "grid";
    } else {
      list.style.display = "none";
    }
  });
}

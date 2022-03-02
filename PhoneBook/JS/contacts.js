const nameInput = document.querySelector(".nameInput");
const numberInput = document.querySelector(".numberInput");
const filterContact = document.querySelector(".filter-contacts");
const submitBtn = document.querySelector(".save");
const allRecs = [];
let update = false;
let oldName = "";
let oldNumber = "";

// this is for the every error or message of the page
const message = document.querySelector(".message");

// load all events
loadAllEvnts();

function loadAllEvnts() {
  submitBtn.addEventListener("mousedown", checksave);

  // filter contacts
  filterContact.addEventListener("input", filteredContact);
}

function contactListAdd(e) {
  // add all elements we required in this click function

  let Name = nameInput.value;
  let phone = numberInput.value;
  allRecs.push({ name: Name, phone });

  const contacts = document.querySelector(".add-contacts");
  let list = document.createElement("li");

  // add classname to the li
  list.className = "active";

  // than create inner elements in the li and append them to li
  let contactDetail = document.createElement("p");
  contactDetail.className = "contactDetail";
  list.appendChild(contactDetail);

  // than create innerelements of p
  let contactName = document.createElement("span");

  // append the name in strong tag;
  contactName.innerText = Name;

  // create one more p
  let contactNumber = document.createElement("span");
  contactNumber.innerText = phone;

  let icons = document.createElement("span");

  icons.classList = "iconss borderLeft";
  icons.innerHTML = `<i class="fa fa-edit editContact" onclick=editContact(this) ></i>
  <i class="fa fa-trash deleteContact"></i>
  `;

  contactDetail.appendChild(contactName);
  contactDetail.appendChild(contactNumber);
  list.appendChild(icons);

  // than append that li into ul or add-contacts
  contacts.appendChild(list);

  // delete one contact list by click on delete button

  contacts.addEventListener("click", deleteContact);

  // working on editing the contact detail

  // than value of name and phone equal to zero
  nameInput.value = "";
  numberInput.value = "";
  e.preventDefault();
}

// for delete the single detail of contact list
function deleteContact(e) {
  if (e.target.classList.contains("deleteContact")) {
    if (confirm("are you sure")) {
      e.target.closest(".active").remove();
    }
  }
}

// lets create a event on search or filter area;
function filteredContact(e) {
  let text = e.target.value.toLowerCase();

  // now grab the valueof names in lists and match them
  let contactsList = document.querySelectorAll(".active");
  contactsList.forEach((list) => {
    let item = list.textContent.toLowerCase();
    if (item.indexOf(text) !== -1) {
      list.style.display = "grid";
    } else {
      list.style.display = "none";
    }
  });
}

// edit function for editing the contact info
function editContact(e) {
  const contact = e.parentElement.parentElement.firstChild;
  const name = contact.children[0].innerText;
  const number = contact.children[1].innerText;
  nameInput.value = name;
  numberInput.value = number;
  update = true;
  submitBtn.value = "Update";
  oldName = name;
  oldNumber = number;
}

function checksave(e) {
  if (!update) contactListAdd(e);
  else updateRec(e);
}

function updateRec(e) {
  const compareRecordsWithOld = (rec) =>
    rec.name === oldName && rec.phone === oldNumber;

  const oldRecPosition = allRecs.findIndex(compareRecordsWithOld);
  console.log(oldRecPosition);

  allRecs[oldRecPosition].name = nameInput.value;
  allRecs[oldRecPosition].phone = numberInput.value;
  const contacts = document.querySelector(".add-contacts");
  contacts.innerHTML = "";
  allRecs.forEach((rec) => createRecords(rec));

  update = false;
  nameInput.value = "";
  numberInput.value = "";
  submitBtn.value = "Save";
}

function createRecords(rec) {
  const contacts = document.querySelector(".add-contacts");
  let list = document.createElement("li");
  list.className = "active";
  let contactDetail = document.createElement("p");
  contactDetail.className = "contactDetail";
  list.appendChild(contactDetail);
  let contactName = document.createElement("span");
  contactName.innerText = rec.name;
  let contactNumber = document.createElement("span");
  contactNumber.innerText = rec.phone;
  let icons = document.createElement("span");
  icons.classList = "iconss borderLeft";
  icons.innerHTML = `<i class="fa fa-edit editContact" onclick=editContact(this) ></i>
  <i class="fa fa-trash deleteContact"></i>
  `;
  contactDetail.appendChild(contactName);
  contactDetail.appendChild(contactNumber);
  list.appendChild(icons);
  contacts.appendChild(list);
  contacts.addEventListener("click", deleteContact);
}

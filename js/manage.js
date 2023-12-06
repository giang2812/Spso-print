const subInfo = document.querySelector(".user_info--hidden");
const userInfo = document.querySelector(".user_info");
const content = document.querySelector(".content");

function showSubInfo() {
  subInfo.classList.add("show");
}

function hideSubInfo() {
  subInfo.classList.remove("show");
}

userInfo.addEventListener("click", showSubInfo);
content.addEventListener("click", hideSubInfo);

// ----------------------------

function addRow() {
  // Get the table reference
  var table = document.getElementById("myTable");

  // Create a form element
  var form = document.createElement("form");
  form.id = "addForm";

  // Create input fields for the form
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Enter Data 1";
  input1.name = "data1"; // Use a meaningful name

  var input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Enter Data 2";
  input2.name = "data2"; // Use a meaningful name

  var input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "Enter Data 3";
  input3.name = "data3"; // Use a meaningful name

  var input4 = document.createElement("input");
  input4.type = "text";
  input4.placeholder = "Enter Data 4";
  input4.name = "data4"; // Use a meaningful name

  var input5 = document.createElement("input");
  input5.type = "text";
  input5.placeholder = "Enter Data 5";
  input5.name = "data5"; // Use a meaningful name

  // Create a submit button for the form
  var submitButton = document.createElement("input");
  submitButton.type = "button";
  submitButton.value = "Submit";
  submitButton.onclick = function() {
      submitForm();
  };

  // Append input fields and submit button to the form
  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(input4);
  form.appendChild(input5);
  form.appendChild(submitButton);

  // Append the form as a new row to the table
  var newRow = table.insertRow(-1);

  // Insert cells in the new row
  for (var i = 0; i < 10; i++) {
      var cell = newRow.insertCell(i);
      if (i === 1) { // Insert form in the second cell
          cell.appendChild(form);
      }
  }

  // Create edit and delete buttons
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() {
      editRow(newRow);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
      deleteRow(newRow);
  };

  // Append elements to cells
  newRow.cells[3].appendChild(editButton);
  newRow.cells[4].appendChild(deleteButton);
}

function submitForm() {
  // Get the form values
  var form = document.getElementById("addForm");
  var data1 = form.elements["data1"].value;
  var data2 = form.elements["data2"].value;
  var data3 = form.elements["data3"].value;
  var data4 = form.elements["data4"].value;
  var data5 = form.elements["data5"].value;

  // Validate the form data if needed

  // Create a new row and insert it into the table
  var table = document.getElementById("myTable");
  var newRow = table.insertRow(-1);

  // Insert cells in the new row
  var cell1 = newRow.insertCell(0); // Checkbox cell
  var cell2 = newRow.insertCell(1); // Column 1 cell
  var cell3 = newRow.insertCell(2); // Column 2 cell
  var cell4 = newRow.insertCell(3); // Column 3 cell
  var cell5 = newRow.insertCell(4); // Column 4 cell
  var cell6 = newRow.insertCell(5); // Column 5 cell
  var cell7 = newRow.insertCell(6); // Edit button cell
  var cell8 = newRow.insertCell(7); // Delete button cell

  // Create a checkbox element
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Append the checkbox to the cell
  cell1.appendChild(checkbox);

  // Set the content of other cells with the form data
  cell2.innerHTML = data1;
  cell3.innerHTML = data2;
  cell4.innerHTML = data3;
  cell5.innerHTML = data4;
  cell6.innerHTML = data5;

  // Create edit and delete buttons
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() {
      editRow(newRow);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
      deleteRow(newRow);
  };

  // Append elements to cells
  cell7.appendChild(editButton);
  cell8.appendChild(deleteButton);

  // Remove the form row
  table.deleteRow(form.parentNode.parentNode.rowIndex);
}

function editRow(row) {
  // Check if the checkbox is checked before allowing editing
  var checkbox = row.cells[0].querySelector("input[type=checkbox]");
  
  if (checkbox.checked) {
      var cells = row.cells;

      // Loop through each cell, except the first one (checkbox cell)
      for (var i = 1; i < cells.length - 2; i++) {
          var cell = cells[i];
          var currentData = cell.innerText;

          // Replace the content with an input field
          var input = document.createElement("input");
          input.type = "text";
          input.value = currentData;

          // Append the input field to the cell
          cell.innerHTML = "";
          cell.appendChild(input);
      }

      // Change the "Edit" button to "Save"
      var saveButton = document.createElement("button");
      saveButton.innerHTML = "Save";
      saveButton.onclick = function() {
          saveRow(row);
      };
      cells[cells.length - 2].innerHTML = "";
      cells[cells.length - 2].appendChild(saveButton);
  } else {
      // Checkbox not checked, do not allow editing
      alert("Please check the checkbox to enable editing.");
  }
}

function saveRow(row) {
  var cells = row.cells;

  // Loop through each cell, except the first one (checkbox cell)
  for (var i = 1; i < cells.length - 2; i++) {
      var cell = cells[i];
      var input = cell.querySelector("input");
      var newData = input.value;

      // Replace the input field with the new data
      cell.innerHTML = newData;
  }

  // Change the "Save" button back to "Edit"
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() {
      editRow(row);
  };
  cells[cells.length - 2].innerHTML = "";
  cells[cells.length - 2].appendChild(editButton);
}

function deleteRow(row) {
  // Check if the checkbox is checked before allowing deletion
  var checkbox = row.cells[0].querySelector("input[type=checkbox]");

  if (checkbox.checked) {
      var table = document.getElementById("myTable");
      table.deleteRow(row.rowIndex);
  } else {
      // Checkbox not checked, do not allow deletion
      alert("Please check the checkbox to enable deletion.");
  }
}


function searchTable() {
  // Get the search input, table, and table rows
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Track if any matching rows are found
  var matchFound = false;

  // Loop through table rows starting from index 1 to exclude the header row
  for (i = 1; i < tr.length; i++) {
      var cells = tr[i].cells;

      // Loop through each cell
      var match = false;
      for (var j = 0; j < cells.length; j++) {
          td = cells[j];
          if (td) {
              txtValue = td.textContent || td.innerText;

              // Check if the text content contains the search filter
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  match = true;
                  matchFound = true;
                  break;
              }
          }
      }

      // Toggle the visibility of the row based on the search result
      tr[i].style.display = match || i === tr.length - 1 ? "" : "none";
  }

  // Show the entire table (including the header) when searching
  table.style.display = "";

  // Provide feedback about the search
  var searchFeedback = document.getElementById("searchFeedback");

  if (filter.trim() === "") {
      // No search criteria, reset feedback
      searchFeedback.innerHTML = "";
      searchFeedback.classList.remove("success", "error");
  } else if (matchFound) {
      // Rows matching the search criteria found
      searchFeedback.innerHTML = "Search successful!";
      searchFeedback.classList.remove("error");
      searchFeedback.classList.add("success");
  } else {
      // No matching rows found (excluding the header)
      searchFeedback.innerHTML = "No matching rows found.";
      searchFeedback.classList.remove("success");
      searchFeedback.classList.add("error");
  }
}


// let link = document.getElementsByClassName("link");

// let currentValue = 1;

// function activeLink() {
//   for (l of link) {
//     l.classList.remove("active");
//   }
//   Event.target.classList.add("active");
//   currentValue = Event.target.value;
// }



// function backBtn() {
//   if (currentValue > 1) {
//     for (l of link) {
//       l.classList.remove("active");
//     }
//     currentValue--;
//     link[currentValue - 1].classList.add("active");
//   }
// }

// function nextBtn() {
//   if (currentValue < 5) {
//     for (l of link) {
//       l.classList.remove("active");
//     }
//     currentValue++;
//     link[currentValue - 1].classList.add("active");
//   }
// }

// var selectedRow = null;
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", printdata);

// function printdata() {
//   var ax = read_Input_Value();
//   if (selectedRow == null) {
//     AddRow();
//     remove_input_value();
//   } else {
//     updatefunc(ax);
//     remove_input_value();
//     selectedRow = null;
//   }
// }

// function read_Input_Value() {
//   var redemp = {};
//   redemp["pnum"] = document.querySelector(".pnum").value;
//   redemp["pid"] = document.querySelector(".pid").value;
//   redemp["place"] = document.querySelector(".place").value;
//   redemp["status"] = document.querySelector(".status").value;
//   redemp["type"] = document.querySelector(".type").value;
//   return redemp;
// }

// var list1 = [];
// var list2 = [];
// var list3 = [];
// var list4 = [];
// var list5 = [];
// var list6 = [];
// var list7 = [];

// var n = 1;
// var x = 0;

// function AddRow() {
//   var AddRown = document.getElementById("myTable");
//   var NewRow = AddRown.insertRow(n);

//   list1[x] = '<input type="checkbox" class="checkbox" value="1"></input>';
//   list2[x] = document.getElementById("pnum").value;
//   list3[x] = document.getElementById("pid").value;
//   list4[x] = document.getElementById("place").value;
//   list5[x] = document.getElementById("status").value;
//   list6[x] = document.getElementById("type").value;
//   list7[x] = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';

//   var cel1 = NewRow.insertCell(0);
//   var cel2 = NewRow.insertCell(1);
//   var cel3 = NewRow.insertCell(2);
//   var cel4 = NewRow.insertCell(3);
//   var cel5 = NewRow.insertCell(4);
//   var cel6 = NewRow.insertCell(5);
//   var cel7 = NewRow.insertCell(6);

//   cel1.innerHTML = list1[x];
//   cel2.innerHTML = list2[x];
//   cel3.innerHTML = list3[x];
//   cel4.innerHTML = list4[x];
//   cel5.innerHTML = list5[x];
//   cel6.innerHTML = list6[x];
//   cel7.innerHTML = list7[x];

//   n++;
//   x++;
// }

// function remove_input_value() {
//   document.querySelector(".pnum").value = " ";
//   document.querySelector(".pid").value = " ";
//   document.querySelector(".place").value = " ";
//   document.querySelector(".status").value = " ";
//   document.querySelector(".type").value = " ";
// }


// // function onEdit(y) {
// //   console.log(y);

// //   //var selecteventbtn = document.querySelector("a.edt");
// //   selectedRow = y.parentElement.parentElement;
// //   //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
// //   document.querySelector(".pnum").value = selectedRow.cells[2].innerHTML;
// //   document.querySelector(".pid").value = selectedRow.cells[3].innerHTML;
// //   document.querySelector(".place").value = selectedRow.cells[4].innerHTML;
// //   document.querySelector(".status").value = selectedRow.cells[5].innerHTML;
// //   document.querySelector(".type").value = selectedRow.cells[6].innerHTML;
// // }

// function updatefunc(redemp) {
//   selectedRow.cells[2].innerHTML = redemp.pnum;
//   selectedRow.cells[3].innerHTML = redemp.pid;
//   selectedRow.cells[4].innerHTML = redemp.place;
//   selectedRow.cells[5].innerHTML = redemp.status;
//   selectedRow.cells[6].innerHTML = redemp.type;
// }

// function onDelete() {
//   if (confirm("Are you sure to delete this record ?")) {
//     var selectdelete = document.querySelector("a.dlt");
//     selectdelete = selectdelete.parentElement.parentElement.remove(0);
//   }
// }

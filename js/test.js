// function addRow() {
//     // Get the table reference
//     var table = document.getElementById("myTable");

//     // Create a form element
//     var form = document.createElement("form");
//     form.id = "addForm";

//     // Create input fields for the form
//     var input1 = document.createElement("input");
//     input1.type = "text";
//     input1.placeholder = "Enter Data 1";
//     input1.name = "data1"; // Use a meaningful name

//     var input2 = document.createElement("input");
//     input2.type = "text";
//     input2.placeholder = "Enter Data 2";
//     input2.name = "data2"; // Use a meaningful name

//     var input3 = document.createElement("input");
//     input3.type = "text";
//     input3.placeholder = "Enter Data 3";
//     input3.name = "data3"; // Use a meaningful name

//     var input4 = document.createElement("input");
//     input4.type = "text";
//     input4.placeholder = "Enter Data 4";
//     input4.name = "data4"; // Use a meaningful name

//     var input5 = document.createElement("input");
//     input5.type = "text";
//     input5.placeholder = "Enter Data 5";
//     input5.name = "data5"; // Use a meaningful name

//     // Create a submit button for the form
//     var submitButton = document.createElement("input");
//     submitButton.type = "button";
//     submitButton.value = "Submit";
//     submitButton.onclick = function() {
//         submitForm();
//     };

//     // Append input fields and submit button to the form
//     form.appendChild(input1);
//     form.appendChild(input2);
//     form.appendChild(input3);
//     form.appendChild(input4);
//     form.appendChild(input5);
//     form.appendChild(submitButton);

//     // Append the form as a new row to the table
//     var newRow = table.insertRow(-1);

//     // Insert cells in the new row
//     for (var i = 0; i < 10; i++) {
//         var cell = newRow.insertCell(i);
//         if (i === 1) { // Insert form in the second cell
//             cell.appendChild(form);
//         }
//     }

//     // Create edit and delete buttons
//     var editButton = document.createElement("button");
//     editButton.innerHTML = "Edit";
//     editButton.onclick = function() {
//         editRow(newRow);
//     };

//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     deleteButton.onclick = function() {
//         deleteRow(newRow);
//     };

//     // Append elements to cells
//     newRow.cells[3].appendChild(editButton);
//     newRow.cells[4].appendChild(deleteButton);
// }

// function addRow() {
//     // Open a new tab
//     var newTab = window.open("", "_blank");
  
//     // Create a form element for the new tab
//     var form = document.createElement("form");
//     form.id = "addForm";
  
//     // Create input fields for the form
//     // ... (five input fields are created)
  
//     // Create a submit button for the form
//     var submitButton = document.createElement("input");
//     submitButton.type = "button";
//     submitButton.value = "Submit";
//     submitButton.onclick = function() {
//       submitForm(newTab); // Pass the newTab reference to the submitForm function
//     };
  
//     // Append input fields and submit button to the form
//     form.appendChild(input1);
//     form.appendChild(input2);
//     form.appendChild(input3);
//     form.appendChild(input4);
//     form.appendChild(input5);
//     form.appendChild(submitButton);
  
//     // Append the form to the new tab
//     newTab.document.body.appendChild(form);
//   }
  

// function submitForm() {
//     // Get the form values
//     var form = document.getElementById("addForm");
//     var data1 = form.elements["data1"].value;
//     var data2 = form.elements["data2"].value;
//     var data3 = form.elements["data3"].value;
//     var data4 = form.elements["data4"].value;
//     var data5 = form.elements["data5"].value;
  
//     // Validate the form data if needed
  
//     // Create a new row and insert it into the table
//     var table = document.getElementById("myTable");
//     var newRow = table.insertRow(-1);
  
//     // Insert cells in the new row
//     var cell1 = newRow.insertCell(0); // Checkbox cell
//     var cell2 = newRow.insertCell(1); // Column 1 cell
//     var cell3 = newRow.insertCell(2); // Column 2 cell
//     var cell4 = newRow.insertCell(3); // Column 3 cell
//     var cell5 = newRow.insertCell(4); // Column 4 cell
//     var cell6 = newRow.insertCell(5); // Column 5 cell
//     var cell7 = newRow.insertCell(6); // Edit button cell
//     var cell8 = newRow.insertCell(7); // Delete button cell
  
//     // Create a checkbox element
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
  
//     // Append the checkbox to the cell
//     cell1.appendChild(checkbox);
  
//     // Set the content of other cells with the form data
//     cell2.innerHTML = data1;
//     cell3.innerHTML = data2;
//     cell4.innerHTML = data3;
//     cell5.innerHTML = data4;
//     cell6.innerHTML = data5;
  
//     // Create edit and delete buttons
//     var editButton = document.createElement("button");
//     editButton.innerHTML = "Edit";
//     editButton.onclick = function() {
//         editRow(newRow);
//     };
  
//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     deleteButton.onclick = function() {
//         deleteRow(newRow);
//     };
  
//     // Append elements to cells
//     cell7.appendChild(editButton);
//     cell8.appendChild(deleteButton);
  
//     // Remove the form row
//     table.deleteRow(form.parentNode.parentNode.rowIndex);
//   }




// function submitForm() {
//     // Get the form values
//     var form = document.getElementById("addForm");
//     var data1 = form.elements["data1"].value;
//     var data2 = form.elements["data2"].value;
//     var data3 = form.elements["data3"].value;
//     var data4 = form.elements["data4"].value;
//     var data5 = form.elements["data5"].value;

//     // Validate the form data if needed

//     // Create a new row and insert it into the table
//     var table = document.getElementById("myTable");
//     var newRow = table.insertRow(-1);

//     // Insert cells in the new row
//     var cell1 = newRow.insertCell(0); // Checkbox cell
//     var cell2 = newRow.insertCell(1); // Column 1 cell
//     var cell3 = newRow.insertCell(2); // Column 2 cell
//     var cell4 = newRow.insertCell(3); // Column 3 cell
//     var cell5 = newRow.insertCell(4); // Column 4 cell
//     var cell6 = newRow.insertCell(5); // Column 5 cell
//     var cell7 = newRow.insertCell(6); // Edit button cell
//     var cell8 = newRow.insertCell(7); // Delete button cell

//     // Create a checkbox element
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     // Append the checkbox to the cell
//     cell1.appendChild(checkbox);

//     // Set the content of other cells with the form data
//     cell2.innerHTML = data1;
//     cell3.innerHTML = data2;
//     cell4.innerHTML = data3;
//     cell5.innerHTML = data4;
//     cell6.innerHTML = data5;

//     // Create edit and delete buttons
//     var editButton = document.createElement("button");
//     editButton.innerHTML = "Edit";
//     editButton.onclick = function() {
//         editRow(newRow);
//     };

//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     deleteButton.onclick = function() {
//         deleteRow(newRow);
//     };

//     // Append elements to cells
//     cell7.appendChild(editButton);
//     cell8.appendChild(deleteButton);

//     // Remove the form row
//     table.deleteRow(form.parentNode.parentNode.rowIndex);
// }

// function editRow(row) {
//     // Check if the checkbox is checked before allowing editing
//     var checkbox = row.cells[0].querySelector("input[type=checkbox]");
    
//     if (checkbox.checked) {
//         var cells = row.cells;

//         // Loop through each cell, except the first one (checkbox cell)
//         for (var i = 1; i < cells.length - 2; i++) {
//             var cell = cells[i];
//             var currentData = cell.innerText;

//             // Replace the content with an input field
//             var input = document.createElement("input");
//             input.type = "text";
//             input.value = currentData;

//             // Append the input field to the cell
//             cell.innerHTML = "";
//             cell.appendChild(input);
//         }

//         // Change the "Edit" button to "Save"
//         var saveButton = document.createElement("button");
//         saveButton.innerHTML = "Save";
//         saveButton.onclick = function() {
//             saveRow(row);
//         };
//         cells[cells.length - 2].innerHTML = "";
//         cells[cells.length - 2].appendChild(saveButton);
//     } else {
//         // Checkbox not checked, do not allow editing
//         alert("Please check the checkbox to enable editing.");
//     }
// }

// function saveRow(row) {
//     var cells = row.cells;

//     // Loop through each cell, except the first one (checkbox cell)
//     for (var i = 1; i < cells.length - 2; i++) {
//         var cell = cells[i];
//         var input = cell.querySelector("input");
//         var newData = input.value;

//         // Replace the input field with the new data
//         cell.innerHTML = newData;
//     }

//     // Change the "Save" button back to "Edit"
//     var editButton = document.createElement("button");
//     editButton.innerHTML = "Edit";
//     editButton.onclick = function() {
//         editRow(row);
//     };
//     cells[cells.length - 2].innerHTML = "";
//     cells[cells.length - 2].appendChild(editButton);
// }

// function deleteRow(row) {
//     // Check if the checkbox is checked before allowing deletion
//     var checkbox = row.cells[0].querySelector("input[type=checkbox]");

//     if (checkbox.checked) {
//         var table = document.getElementById("myTable");
//         table.deleteRow(row.rowIndex);
//     } else {
//         // Checkbox not checked, do not allow deletion
//         alert("Please check the checkbox to enable deletion.");
//     }
// }
function openPopup() {
    // Show the overlay and popup
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }

  var selectedFile = null;
  var isFileSelected = false;

  // function importFile() {
  //     var fileInput = document.getElementById("fileInput");
  //     selectedFile = fileInput.files[0];

  //     if (selectedFile) {
  //         // Hiển thị tên tệp đã chọn nếu cần
  //         console.log("Selected File:", selectedFile.name);
  //     } else {
  //         alert("Vui lòng chọn một tệp");
  //     }
  // }

  // function importAndClosePopup() {
  //     if (selectedFile) {
  //         // Sử dụng biến selectedFile theo cách bạn muốn
  //         console.log("Đã nhận file:", selectedFile.name);

  //         // Thực hiện các xử lý cần thiết với file đã chọn

  //         // Đóng popup
  //         closePopup();
  //     } else {
  //         alert("Vui lòng chọn một tệp");
  //     }
  // }

  // function importFile() {
  //     var fileInput = document.getElementById("fileInput");
  //     selectedFile = fileInput.files[0];

  //     if (selectedFile) {
  //         // Hiển thị tên tệp đã chọn nếu cần
  //         console.log("Selected File:", selectedFile.name);

  //         // Đặt giá trị biến để báo hiệu rằng đã chọn tệp
  //         isFileSelected = true;
  //     } else {
  //         alert("Vui lòng chọn một tệp");
  //         isFileSelected = false;
  //     }
  // }

  function submitForm() {
    var data1 = document.getElementById("data1").value;
    var data2 = document.getElementById("data2").value;
    var data3 = document.getElementById("data3").value;
    var data4 = document.getElementById("data4").value;
    var data5 = document.getElementById("data5").value;

    if (data1 && data2 && data3 && data4 && data5) {
      // Example: Display the entered data in the console
      console.log("Data 1:", data1);
      console.log("Data 2:", data2);
      console.log("Data 3:", data3);
      console.log("Data 4:", data4);
      console.log("Data 5:", data5);

      // Get the table
      var table = document.getElementById("myTable");

      // Insert a new row at the end of the table
      var newRow = table.insertRow(-1);

      // Insert cells into the new row
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5); // Checkbox cell

      // Populate the cells with the entered data
      cell1.innerHTML = data1;
      cell2.innerHTML = data2;
      cell3.innerHTML = data3;
      cell4.innerHTML = data4;
      cell5.innerHTML = data5;

      // Create a checkbox element
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      // Append the checkbox to the cell
      cell6.appendChild(checkbox);

      // Create edit and delete buttons
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.onclick = function () {
        editRow(newRow);
      };

      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = function () {
        deleteRow(newRow);
      };

      // Insert buttons into the new row
      var cell7 = newRow.insertCell(6);
      var cell8 = newRow.insertCell(7);
      cell7.appendChild(editButton);
      cell8.appendChild(deleteButton);

      // Add data to the array
      data.push({
        data1: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5
      });

      // Close the popup
      closePopup();

      // Update table display
      updateTable();
    } else {
      alert("Please fill in all fields");
  }
  }

  function closePopup() {
    // Hide the overlay and popup
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";

    // Clear form fields for the next use
    document.getElementById("addForm").reset();
  }
  function editRow(row) {
    // Check if the checkbox is checked before allowing editing
    var checkbox = row.cells[5].querySelector("input[type=checkbox]");

    if (checkbox.checked) {
      var cells = row.cells;

      // Loop through each cell, except the first one (checkbox cell)
      for (var i = 0; i < cells.length - 2; i++) {
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
      saveButton.onclick = function () {
        saveRow(row);
      };
      cells[cells.length - 2].innerHTML = "";
      cells[cells.length - 2].appendChild(saveButton);
    } else {
      // Checkbox not checked, do not allow editing
      alert("Please check the checkbox to enable editing.");
    }
  }

//     function saveRow(row) {

//     var cells = row.cells;

//           // Loop through each cell, except the first one (checkbox cell)
//           for (var i = 0; i < cells.length - 2; i++) {
//               var cell = cells[i];
//               var input = cell.querySelector("input");
//               var newData = input.value;

//               // Replace the input field with the new data
//               cell.innerHTML = newData;
//           }

//           // Change the "Save" button back to "Edit"
//           var editButton = document.createElement("button");
//           editButton.innerHTML = "Edit";
//           editButton.onclick = function() {
//               editRow(row);
//           };
//           cells[cells.length - 2].innerHTML = "";
//           cells[cells.length - 2].appendChild(editButton);
// }
function saveRow(row) {
var cells = row.cells;

// Get the current state of the checkbox
var checkboxState = cells[5].querySelector("input[type=checkbox]") ? cells[5].querySelector("input[type=checkbox]").checked : false;

// Loop through each cell, except the last two (Edit and Delete cells)
for (var i = 0; i < cells.length - 2; i++) {
    var cell = cells[i];
    var input = cell.querySelector("input");

    if (input) {
        // If an input field exists, switch to view mode
        var newData = input.value;
        cell.innerHTML = newData;
    }
}

// Thêm ô checkbox vào cuối hàng (nếu chưa tồn tại)
var checkboxCell = cells[5];
var existingCheckbox = checkboxCell.querySelector("input[type=checkbox]");

if (!existingCheckbox) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checkboxState;
    checkboxCell.appendChild(checkbox);
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
var checkbox = row.cells[5].querySelector("input[type=checkbox]");

if (checkbox && checkbox.checked) {
    // Delete the row
    row.parentNode.removeChild(row);
} else {
    alert("Please click the checkbox to enable deletion.");
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
  

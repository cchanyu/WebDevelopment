let column = 2;
let rows = 1;
let clicked = 0;

// Creating the table
function table() {
    table = document.getElementById("table");
    row = table.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(0);

    rows = 1;
    column = 2;
}
const startup = table();
console.log(startup);


// add row
document.getElementById('addRow').addEventListener("click", function(e) {
    let table = document.getElementById("table");
    let rowCount = rows;
    let cellCount = column;
    let row = table.insertRow(rowCount);
    for(let i = 0; i < cellCount; i++){
        row.insertCell(i).innerHTML= '';
    }

    rows++;
    console.log(rows);
})

// add column
document.getElementById('addColumn').addEventListener("click", function(e) {
    let table = document.getElementById("table");
    tableRows = table.getElementsByTagName("tr");

    for (let i = 0; i < tableRows.length; i++) {
        let cell = document.createElement("td");
        tableRows[i].appendChild(cell);
    }

    column++;
    console.log(column);
})

// delete row
document.getElementById('deleteRow').addEventListener("click", function(e) {
    document.getElementById("table").deleteRow(0);

    rows--;
    console.log(rows);
})

// delete column
document.getElementById('deleteColumn').addEventListener("click", function(e) {
    let table = document.getElementById("table");
    tableRows = table.getElementsByTagName("tr");

    for (let i = 0; i < tableRows.length; i++) {
        let cell = document.createElement("td");
        tableRows[i].deleteCell(cell);
    }

    column--;
    console.log(column);
})

// reset
document.getElementById('reset').addEventListener("click", function(e) {
    document.getElementById('table').remove();
    let table = document.createElement("table");
    table.id = "table";

    row = table.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(0);

    columns = 2;
    rows = 1;

    let div = document.getElementById("main-container");
    div.appendChild(table);
    location.reload();
})

// fill all
const setAllCellColor = () => {
    let cells = document.querySelectorAll("#table td");
    cells.forEach(cell => {
      if (cell.style.backgroundColor === "") {
        setCellColor(cell);
      } else if (cell.style.backgroundColor !== "") {
        setCellColor(cell);
      }
    });
  };

// color pick
const setCellColor = cell => {
    let e = document.getElementById("color");
    let value = e.options[e.selectedIndex].value;
    switch (value) {
      case "red":
        cell.style.backgroundColor = "#FF0000";
        break;
      case "green":
        cell.style.backgroundColor = "#00FF00";
        break;
      case "blue":
        cell.style.backgroundColor = "#0000FF";
        break;
      case "yellow":
        cell.style.backgroundColor = "#FFFF00";
        break;
      case "orange":
        cell.style.backgroundColor = "#FFA500";
        break;
      case "purple":
        cell.style.backgroundColor = "#800080";
        break;
    }
  };
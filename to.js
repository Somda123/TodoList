let editRowId = null;

function addData() {
    const sr = document.getElementById("Sr").value;
    const date = document.getElementById("Date").value;
    const Today_goal = document.getElementById("Today-goal").value;
    const Day_planning = document.getElementById("Day-Planing").value;
    const Day_reflection = document.getElementById("Day-Reflection").value;
    const Description = document.getElementById("Description").value;
    if (sr && date && Today_goal && Day_planning && Day_reflection && Description) {
        const table = document.getElementById("tbody");
        const row = document.createElement("tr");
        row.setAttribute("id", `row-${sr}`);
        row.innerHTML = `
            <td>${sr}</td>
            <td>${date}</td>
            <td>${Today_goal}</td>
            <td>${Day_planning}</td>
            <td>${Day_reflection}</td>
            <td>${Description}</td>
            <td>
                <button onclick="editRow('${sr}')">Edit</button>
            </td>
        `;
        table.appendChild(row);

        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function DeleteList() {
    const sr = document.getElementById("sr").value;
    const row = document.getElementById(`row-${sr}`);

    if (row) {
        row.remove();
    } else {
        alert('No row found with the given serial number.');
    }
}
function editRow(sr) {
    const row = document.getElementById(`row-${sr}`);
    const cells = row.getElementsByTagName('td');
   console.log(row);
    document.getElementById("Sr").value = cells[0].innerText;
    document.getElementById("Date").value = cells[1].innerText;
    document.getElementById("Today-goal").value = cells[2].innerText;
    document.getElementById("Day-Planing").value = cells[3].innerText;
    document.getElementById("Day-Reflection").value = cells[4].innerText;
    document.getElementById("Description").value = cells[5].innerText;
    editRowId = row.getAttribute("id");
    document.getElementById("save-btn").style.display = "inline-block";
}
function saveData() {
    if (editRowId) {
        const row = document.getElementById(editRowId);
        const cells = row.getElementsByTagName('td');
        cells[0].innerText = document.getElementById("Sr").value;
        cells[1].innerText = document.getElementById("Date").value;
        cells[2].innerText = document.getElementById("Today-goal").value;
        cells[3].innerText = document.getElementById("Day-Planing").value;
        cells[4].innerText = document.getElementById("Day-Reflection").value;
        cells[5].innerText = document.getElementById("Description").value;
        clearForm();
        document.getElementById("save-btn").style.display = "none";
        editRowId = null;
    }
}
function clearForm() {
    document.getElementById("Sr").value = '';
    document.getElementById("Date").value = '';
    document.getElementById("Today-goal").value = '';
    document.getElementById("Day-Planing").value = '';
    document.getElementById("Day-Reflection").value = '';
    document.getElementById("Description").value = '';
}


function clearAll() {
    const table = document.getElementById("tbody");
    table.innerHTML = ''; // Clears all rows in the table body
    alert('All rows have been cleared.');
}





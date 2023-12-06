var student1 = {
    firstName: 'Reginah',
    lastName: 'Shikanda',
    age: 98,
    location: 'Ruiru',
};
var student2 = {
    firstName: 'Nancy',
    lastName: 'Chesang',
    age: 102,
    location: 'Kapsabet',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "#CCCCFF";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);

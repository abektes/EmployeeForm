
var employee_array = [];


// Employee
var Employee = function( name, birthday, age)
{
    this.name = name;
    this.birthday = birthday;
    this.age = getAge(birthday);
};

// Youngest
var findYoungest = function(){

    var youngest = employee_array[0];
    for (var i = 0; i < employee_array.length; i++) {

        if (employee_array[i].age < youngest.age || youngest === null)
            youngest = employee_array[i];
    }
    return youngest;
};
// Oldest
var findOldest = function(){

    var oldest = employee_array[0];
    for (var i = 0; i < employee_array.length; i++) {

        if (employee_array[i].age > oldest.age || oldest === null)
            oldest = employee_array[i];
    }
    return oldest;
};

// Age calculation - StackExchange
var getAge = function(birthday)
{
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// Average Age of the team
var calculateAverageAge = function()
{
    var sum_age = 0;
    employee_array.forEach(function(employee){
        sum_age = sum_age + employee.age;
    });

    return sum_age / employee_array.length;
};

//Update
var updateStatistics = function(){
    document.getElementById("average").innerHTML = (calculateAverageAge());
    document.getElementById("young").innerHTML = (findYoungest().name);
    document.getElementById("old").innerHTML = (findOldest().name);
};


// Table
var addToEmployeeTable = function(employee){
    var tr = $('<tr/>');
    tr.append("<td>" + employee.name + "</td>");
    tr.append("<td>" + employee.birthday + "</td>");
    tr.append("<td>" + employee.age + "</td>");
    $('.table').append(tr);
};

// Dummy Example
employee_array.push(new Employee( 'Ahmet' , '05.15.1985'));
employee_array.push(new Employee( 'Hans' , '01.12.1975'));
employee_array.push(new Employee( 'Stefano' , '03.03.1990'));
employee_array.push(new Employee( 'Anne' , '09.11.1966'));

$(document).ready(function () {

    for (var i = 0; i < employee_array.length; i++) {
        addToEmployeeTable(employee_array[i]);
    }
    updateStatistics();
});

// Form1
$(document).ready(function() {
    $('#form1').on("submit", function(e) {
        var name = $('#employeeName').val();
        var birthday = $('#employeeBirthday').val();
        var addedEmployee = new Employee(name , birthday);
        employee_array.push(addedEmployee);
        addToEmployeeTable(addedEmployee);
        return false;
    });
});

// Team Details
$(document).ready(function() {
    $("#team_details").click(function(){
        updateStatistics();
        return false;
    });
});
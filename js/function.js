var employee_array = [];

id = 0;

var Employee = function( name, birthday, age)
{
    this.name = name;
    this.birthday = birthday;
    this.age = getAge(birthday);
};

// there is not any age at first place as a value but it is depended on the
// birthday.

function getAge(birthday)
{
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}


var calculateAverageAge = function(employees)
{
    var sum_age = 0;
    employees.forEach(function(employee){
        sum_age = sum_age + employee.age;
    });

    return sum_age / employees.length;
}


var addEmployee = function (employee){
    employee_array.push({ name: employee.name, birthday: employee.birthday, age: employee.age})
}

addEmployee(new Employee( 'Ahmet' , '05.15.1985'));
addEmployee(new Employee( 'Hans' , '01.12.1975'));
addEmployee(new Employee( 'Stefano' , '03.03.1990'));
addEmployee(new Employee( 'Anne' , '09.11.1966'));


console.log(employee_array);
document.getElementById("average").innerHTML = (calculateAverageAge(employee_array));


// low and high comparison of ages

var old = employee_array[0];
var young =  employee_array[0];

//Start at 0 index, iterate until the array length, iterate by 1
for (var i = 0; i < employee_array.length; i++) {
    //checking old
    if (employee_array[i].age > old.age)
        old = employee_array[i];


    //checking young
    if (employee_array[i].age < young.age || young === null)
        young = employee_array[i];
}


document.getElementById("young").innerHTML = (young.name)
document.getElementById("old").innerHTML = (old.name)



$(document).ready(function () {
    var json = employee_array;
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].name + "</td>");
        tr.append("<td>" + json[i].birthday + "</td>");
        tr.append("<td>" + json[i].age + "</td>");
        $('table').append(tr);
    }
});
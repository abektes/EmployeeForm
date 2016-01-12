/**
 * Created by ahmetbektes on 1/11/16.
 */


// moment.js age calculation


    var dt1 = document.getElementById('EmployeeBirthday').value;
    var years = moment().diff(dt1, 'years');


    moment("16/05/1985", "DD/MM/YYYY").month(0).from(moment().month(0))




/// average of an array ///

var sum = 0;
for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i], 10 ); //don't forget to add the base
}

var avg = sum/elmt.length;

document.write( "The sum of all the ages is: " + sum + " The average age is: " + avg );


// Calculation of Age


function getAge()
{
    var dt1 = document.getElementById('EmployeeBirthday').value;
    var EmployeeAge = moment(dt1, "DD/MM/YYYY").month(0).from(moment().month(0))
}



// Employee Class

function EmployeeList(id, objarray)
{

    this.id = id;   // data member that store a simple value
    this.arrayname = objarray || []; //if objarray isn't passed it'll initiate an empty array
}



function Employee( id, EmployeeName, EmployeeBirthday, EmployeeAge)
{
    this.id = id;
    this.EmployeeName = EmployeeName;
    this.EmployeeBirthday = EmployeeBirthday;
    this.EmployeeAge = EmployeeAge;
}


//or push the entire list at once
var objA = new classA("01", objBarray);
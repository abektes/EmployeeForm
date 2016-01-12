// Employee array

var Employee = function(id, name, birthday, age)
{
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.age = age;
};



function getAge()
{
    var dt1 = document.getElementById('birthday').value;
    var age1 = moment(dt1, "DD/MM/YYYY").month(0).from(moment().month(0));
    var age = age1.slice(0,2);

}





var employeeObject1 = new Employee('Ahmet',16/05/2010, 40);



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





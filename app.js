'user strict';
function getEmploeeId() {
    return Math.floor(Math.random() * 9000) + 1000;}

 function employeeSalary(Level)
{ 
    let min;
    let max;
    if (Level=="Senior"){
        min=1500;
        max=2000;
        // let rand=Math.floor(Math.random() * (max - min) ) +(min) ;
        // return rand.toString();
    }
    else if (Level=='Mid-Senior'){
    min=1000;
    max=1500;
    // let rand=Math.floor(Math.random() * (max - min) ) +(min) ;
    // return rand.toString();
}
    else if (Level=="Junior"){
        min=500;
        max=1000;
        // let rand=Math.floor(Math.random() * (max - min +1) ) +(min) ;
        // return rand.toString();
    }
    let rand=Math.floor(Math.random() * (max - min) ) +(min) ;
    let sal=rand-(rand*0.075);
    return sal;

}


let Ghazi ={
employeeID: getEmploeeId(),
    FullName: 'Ghazi Samer',
    Department:'Administration',
    Level: 'Senior',
    imageURL:'./img/im1.jpg',
    salary: 0

     }
 Ghazi.salary=employeeSalary(Ghazi.Level);
console.log(Ghazi.employeeID);
console.table(Ghazi)
console.log(Ghazi);
console.log(Ghazi.salary);


let Lana ={
    employeeID: getEmploeeId(),
    FullName: 'Lana Ali',
    Department:'Finance',
    Level: 'Senior',
    imageURL:'./img/i2.jpg',
    salary: 0

    }
Lana.salary=employeeSalary(Lana.Level);

console.log(Lana.employeeID);
console.table(Lana)
console.log(Lana);
console.log(Lana.salary);

let Tamara={
    employeeID: getEmploeeId(),
    FullName: 'Tamara Ayoub	',
    Department:'Marketing',
    Level: 'Senior',
    imageURL:'./img/im3.jpg',
    salary: 0
    
    }
Tamara.salary=employeeSalary(Tamara.Level);
console.log(Tamara.employeeID);
console.table(Tamara)
console.log(Tamara);
console.log(Tamara.salary);

let Safi={
    employeeID:  getEmploeeId(),
    FullName: 'Safi Walid	',
    Department:'Administration	',
    Level: 'Mid-Senior',
    imageURL:'./img/4.jpg',
    salary: 0
    }
Safi.salary=employeeSalary(Safi.Level);
 console.log(Safi.employeeID);
console.table(Safi)
console.log(Safi);
console.log(Safi.salary);

let Omar={
    employeeID: getEmploeeId(),
    FullName: 'Omar Zaid',
    Department:'Development	',
    Level: 'Senior',
    imageURL:'./img/5.jpg',
    salary: 0
    }
Omar.salary=employeeSalary(Omar.Level);
console.log(Omar.employeeID);
console.table(Omar)
console.log(Omar);
console.log(Omar.salary);

let Rana={
    employeeID:  getEmploeeId(),
    FullName: '	Rana Saleh	',
    Department:'Development',
     Level: 'Junior',
     imageURL:'./img/6.jpg',
     salary: 0,

    }
 Rana.salary=employeeSalary(Rana.Level);
    console.log(Rana .employeeID);
console.table(Rana )
 console.log(Rana );
console.log(Rana.salary);

let Hadi={
    employeeID: getEmploeeId(),
    FullName: 'Hadi Ahmad',
    Department:'Administration	',
    Level: 'Mid-Senior',
    imageURL:'./img/7.jpg',
    salary:0
    }
Hadi.salary=employeeSalary(Hadi.Level);
console.log(Hadi.employeeID);
console.table(Hadi)
 console.log(Hadi);
 console.log(Hadi.salary);

let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];
function renderEmployees() {
    let employeeList = "";
    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      employeeList += "Employee name: " + employee.FullName + "<br>";
      employeeList += "Employee salary: " + employee.salary + "<br><br>";
    }
    document.getElementById("employee-list").innerHTML = employeeList;
  }
  
  renderEmployees();











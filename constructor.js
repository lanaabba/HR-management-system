'use strict';

function hrManagement (id,Name,department,level,image,salary){
   this.employeeID=id;
   this.FullName=Name;
   this.Department=department;
    this.Level=level;
    this.imageURL=image;
    this.salary=salary;
}
function getEmploeeId() {
    return Math.floor(Math.random() * 9000) + 1000;}
    function employeeSalary(Level)
    { 
        let min;
        let max;
        if (Level=="Senior"){
            min=1500;
            max=2000;
          
        }
        else if (Level=='Mid-Senior'){
        min=1000;
        max=1500;
      
    }
        else if (Level=="Junior"){
            min=500;
            max=1000;
           
        }
        let rand=Math.floor(Math.random() * (max - min) ) +(min) ;
        let sal=rand-(rand*0.075);
        return sal;
    
    }


    
let Ghazi = new hrManagement(getEmploeeId,'Ghazi Samer','Administration','Senior', './img/im1.jpg',employeeSalary("Senior"));
let Lana = new hrManagement(getEmploeeId,'Lana Ali','Finance','Senior', './img/i2.jpg',employeeSalary("Senior"));
let Tamara = new hrManagement(getEmploeeId,'Tamara Ayoub','Marketing','Senior', './img/im3.jpg',employeeSalary("Senior"));
let Safi= new hrManagement(getEmploeeId,'Safi Walid','Administration','Mid-Senior', './img/4.jpg',employeeSalary("Mid-Senior"));
let Omar= new hrManagement(getEmploeeId,'Omar Zaid','Development','Mid-Senior', './img/5.jpg',employeeSalary("Mid-Senior"));
let Rana= new hrManagement(getEmploeeId,'Rana Saleh','Development','Junior', './img/6.jpg',employeeSalary("Junior"));
let Hadi= new hrManagement(getEmploeeId,'Hadi Ahmad','Administration','Mid-Senior', './img/7.jpg',employeeSalary("Mid-Senior"));

   
   
let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];

     hrManagement.prototype.renderEmployees=function(){
        document.write(`<h4>Employee name: ${this.FullName}</h4>`);
        document.write(`<h4>Department : ${this.Department}</h4>`);
        document.write(`<h4>Employee salary: ${this.salary}</h4>`);
     }
     function renderEmployees() {
        let employeeList = "";
        for (let i = 0; i < employees.length; i++)
         { employees[i]}
    }

 


  renderEmployees();
Ghazi.renderEmployees();
Lana.renderEmployees();
Tamara.renderEmployees();
Safi.renderEmployees();
Omar.renderEmployees();
Rana.renderEmployees();
Hadi.renderEmployees();



//   renderEmployees();
// Ghazi.renderEmployees();
// Lana.renderEmployees();
// Tamara.renderEmployees();
// Safi.renderEmployees();
// Omar.renderEmployees();
// Rana.renderEmployees();
// Hadi.renderEmployees();

// console.table(Ghazi);
// console.table(Lana);
// console.table(Tamara);
// console.table(Safi);
// console.table(Omar);
// console.table(Rana);
// console.table(Hadi);


// let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];



// for (let index = 0; index <employees.length; index++) {
//    employees[index].renderEmployees();

    
// } 

// // hrManagement.prototype.renderEmployees = function() {
// //   let employeeList = "";
    //  hrManagement.prototype.renderEmployees=function(){
    //    document.write(`<h1>Employee name: ${this.getEmploeeId}</h1>`);
    //    document.write(`<h1>Department ${this.Department}</h1>`);
    //    document.write(`<h1>Employee salary: ${this.salary}</h1>`)
    // }



 

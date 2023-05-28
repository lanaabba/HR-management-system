'use strict';

function hrManagement(id, Name, department, level, image, salary) {
    this.employeeID = id;
    this.FullName = Name;
    this.Department = department;
    this.Level = level;
    this.imageURL = image;
    this.salary = salary;
}
function getEmploeeId() {
    return Math.floor(Math.random() * 9000) + 1000;
}
function employeeSalary(Level) {
    let min;
    let max;
    if (Level == "Senior") {
        min = 1500;
        max = 2000;

    }
    else if (Level == 'Mid-Senior') {
        min = 1000;
        max = 1500;

    }
    else if (Level == "Junior") {
        min = 500;
        max = 1000;

    }
    let rand = Math.floor(Math.random() * (max - min)) + (min);
    let sal = rand - (rand * 0.075);
    return sal;

}



let Ghazi = new hrManagement(getEmploeeId(), 'Ghazi Samer', 'Administration', 'Senior', './assets/Ghazi.jpg', employeeSalary("Senior"));
let Lana = new hrManagement(getEmploeeId(), 'Lana Ali', 'Finance', 'Senior', './assets/Lana (1).jpg', employeeSalary("Senior"));
let Tamara = new hrManagement(getEmploeeId(), 'Tamara Ayoub', 'Marketing', 'Senior', './assets/Tamara.jpg', employeeSalary("Senior"));
let Safi = new hrManagement(getEmploeeId(), 'Safi Walid', 'Administration', 'Mid-Senior', './assets/Safi.jpg', employeeSalary("Mid-Senior"));
let Omar = new hrManagement(getEmploeeId(), 'Omar Zaid', 'Development', 'Mid-Senior', './assets/Omar.jpg', employeeSalary("Mid-Senior"));
let Rana = new hrManagement(getEmploeeId(), 'Rana Saleh', 'Development', 'Junior', './assets/Rana.jpg', employeeSalary("Junior"));
let Hadi = new hrManagement(getEmploeeId(), 'Hadi Ahmad', 'Administration', 'Mid-Senior', './assets/Hadi.jpg', employeeSalary("Mid-Senior"));

let main = document.getElementsByTagName("main")[0];

let admeimE=document.createElement("div");
admeimE.setAttribute("id","admin");
main.appendChild(admeimE);

let FinanceE=document.createElement("div");
FinanceE.setAttribute("id","Finance");
main.appendChild(FinanceE);


let MarketingE =document.createElement("div");
MarketingE.setAttribute("id","Marketing");
main.appendChild(MarketingE);

let DevelopmentE=document.createElement("div");
DevelopmentE.setAttribute("id","Development");
main.appendChild(DevelopmentE);



hrManagement.prototype.renderEmployees = function () {
    if (this.Department === "Administration")

    { const imgAdmin = document.createElement("img")
        imgAdmin.src =this.imageURL
       admeimE.appendChild(imgAdmin)

        let empadd=document.createElement("div");
        admeimE.appendChild(empadd);
        empadd.textContent=(` name : ${this.FullName} $ id:${this.employeeID} Department: ${this.Department} ${this.salary}`);
       
    }
    else if ( this.Department === "Finance") { 

    { const imgFinance = document.createElement("img")
        imgFinance.src =this.imageURL
        FinanceE.appendChild(imgFinance);

        let finadd=document.createElement("div");
        FinanceE.appendChild(finadd);
        finadd.textContent=(` name : ${this.FullName} $ id:${this.employeeID} Department: ${this.Department} ${this.salary}`);
       
    }}

    else if (this.Department === "Marketing") {

    

    {const imgMar = document.createElement("img")
       imgMar.src =this.imageURL
        MarketingE.appendChild(imgMar);

        let Maradd=document.createElement("p");
        MarketingE.appendChild(Maradd);
        Maradd.textContent=(` name : ${this.FullName} $ id:${this.employeeID} Department: ${this.Department} ${this.salary}`);
       
    }
}
else if (this.Department === "Development"){





    { const imgDive = document.createElement("img")
    imgDive.src =this.imageURL
        DevelopmentE.appendChild(imgDive)

        let diveladd=document.createElement("div");
        DevelopmentE.appendChild(diveladd);
        diveladd.textContent=(` name : ${this.FullName} $ id:${this.employeeID} Department: ${this.Department} ${this.salary}`);
       
    }}


}

let employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi];



//      hrManagement.prototype.renderEmployees=function(){
//         document.write(`<h4>Employee name: ${this.FullName}</h4>`);
//         document.write(`<h4>Department : ${this.Department}</h4>`);
//         document.write(`<h4>Employee salary: ${this.salary}</h4>`);

//      }
function renderEmployees() {
    let employeeList = "";
    for (let i = 0; i < employees.length; i++) { employees[i] }
}


//   renderEmployees();
Ghazi.renderEmployees();
Lana.renderEmployees();
Tamara.renderEmployees();
Safi.renderEmployees();
Omar.renderEmployees();
Rana.renderEmployees();
Hadi.renderEmployees();






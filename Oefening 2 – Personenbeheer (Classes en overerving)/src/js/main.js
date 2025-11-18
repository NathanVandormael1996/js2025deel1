// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getLabel(){
        return `${this.name} (${this.age})`;
    }
}

class Employee extends Person {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    getLabel(){
        return `${this.name} (${this.age}) van ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(name, age, department, teamsize) {
        super(name, age, department);
        this.teamsize = teamsize;
    }
    getLabel(){
        return `${this.name} (${this.age}), manager van ${this.department} met ${this.teamsize} man`;
    }
}


const btn = document.getElementById("ex2_btn");
const personList = document.getElementById("ex2_list");
const feedback = document.getElementById("ex2_feedback");
let list = [];

function addIndividual(){
    const inpType = document.getElementById("ex2_type").value.trim();
    const inpName = document.getElementById("ex2_name").value.trim();
    const inpAge = document.getElementById("ex2_age").value.trim();
    const inpDepart = document.getElementById("ex2_dep").value.trim();
    const inpTeamsize = Number(document.getElementById("ex2_team").value);
    if(!inpName || !inpAge || !inpDepart){
        feedback.innerText = "Gelieve naam, leeftijd en departement in te vullen aub!";
        feedback.className = "alert alert-warning";
        return;
    }
    if(inpType === "manager"){
        if(!inpTeamsize){
            feedback.innerText = "Gelieve naam, leeftijd, departement en teamgrootte in te vullen aub!";
            feedback.className = "alert alert-warning";
            return;
        }
        const manager = new Manager(inpName, inpAge, inpDepart, inpTeamsize);
        list.push(manager);
        personList.innerHTML = list
            .map(i => `<li>${i.name}, ${i.age} jaar oud, van ${i.department} met ${i.teamsize} aantal mensen.</li>`)
            .join("");
        feedback.innerText = `${manager.getLabel()} is toegevoegd`;
    }
    else {
        const employee = new Employee(inpName, inpAge, inpDepart);
        list.push(employee);
        personList.innerHTML = list
            .map(i => `<li>${i.name}, ${i.age} jaar oud, van ${i.department}.</li>`)
            .join("");
        feedback.innerText = `${employee.getLabel()} is toegevoegd`;
    }

}
document.addEventListener("DOMContentLoaded", ()=>{
    btn.addEventListener("click",addIndividual);
})
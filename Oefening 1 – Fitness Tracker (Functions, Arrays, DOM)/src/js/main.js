// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const btn = document.getElementById("ex1_btn");
const list = [];
let totalTime = 0;
const feedback = document.getElementById("ex1_feedback");

function makeList(name, min){
    const output = document.getElementById("ex1_list");
    output.innerHTML = list
        .map(i => `<li>${name} - ${min} min</li>`)
        .join("");
    feedback.innerText = `Goed bezig! je hebt nu ${list.length} oefeningen gedaan!`;
    feedback.className = "alert alert-success";
}

function badFeedback(){
    feedback.innerText = "Niet correct ingegeven!";
    feedback.className = "alert alert-warning";
}

document.addEventListener("DOMContentLoaded", ()=>{
    btn.addEventListener("click", ()=>{
        const inputName = document.getElementById("ex1_ex").value.trim();
        const inputMin = Number(document.getElementById("ex1_min").value.trim());
        const totalMin = document.getElementById("ex1_total");
        if(!inputName || !inputMin || inputMin < 0)
        {
            badFeedback();
            return;
        }
        totalTime += inputMin;
        totalMin.innerText = totalTime;
        list.push(inputName);
        makeList(inputName, inputMin);
    });
})
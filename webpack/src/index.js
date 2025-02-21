import { lain } from './lain';
import { frog } from './frog';
import { pumpkin } from './pumpkin'; 
import "./styles.css"; 

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');

    renderPage(lain);

    document.getElementById('lain').addEventListener("click", () => {
        renderPage(lain)
    });
    document.getElementById('frog').addEventListener("click", () => {
        renderPage(frog)
    });
    document.getElementById('pumpkin').addEventListener("click", ()=>{
        renderPage(pumpkin)
    });

    function renderPage(page){
        content.innerHTML = "";
        content.innerHTML = page; 
    }
});


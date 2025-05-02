/* === VARS === */
let navigationStatus = false;

document.getElementById('year').textContent = new Date().getFullYear();

function navigation() {

  if (navigationStatus == false) {
    document.getElementById("button-menu").innerHTML = "none"
    document.getElementById("button-menu").innerHTML = `       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <line x1="5" y1="5" x2="25" y2="25" stroke="var(--text)" stroke-width="3"/>
        <line x1="25" y1="5" x2="5" y2="25" stroke="var(--text)" stroke-width="3"/>
       </svg>`
    navigationStatus = true;
    document.getElementById("navegation").classList.remove("off");
    document.getElementById("navegation").classList.add("on");
  } else {
    document.getElementById("button-menu").innerHTML = "none"
    document.getElementById("button-menu").innerHTML = `        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <rect width="30" height="4" rx="2" fill="var(--text)"/>
        <rect y="12" width="30" height="4" rx="2" fill="var(--text)"/>
        <rect y="24" width="30" height="4" rx="2" fill="var(--text)"/>
       </svg>`
       navigationStatus = false;
       document.getElementById("navegation").classList.remove("on");
    document.getElementById("navegation").classList.add("off");
  }
}
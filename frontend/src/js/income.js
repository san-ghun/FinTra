"user strict";

const tab_addincome = document.getElementById("tabaddincome");
const tab_transactions = document.getElementById("tabtransactions");
const tab_whatif = document.getElementById("tabwhatif");

const section_addincome = document.getElementById("addincome");
const section_transactions = document.getElementById("transactions");
const section_whatif = document.getElementById("whatif");

const tabs = [tab_addincome, tab_transactions, tab_whatif];
const sections = [section_addincome, section_transactions, section_whatif];

function show_addincome(event) {
  event.preventDefault();
  tabs.forEach((tab) => {
    tab.className = "secondary";
  });
  tabs[0].className = "";
  sections.forEach((section) => {
    section.hidden = true;
  });
  sections[0].hidden = false;
}

function show_transactions(event) {
  event.preventDefault();
  tabs.forEach((tab) => {
    tab.className = "secondary";
  });
  tabs[1].className = "";
  sections.forEach((section) => {
    section.hidden = true;
  });
  sections[1].hidden = false;
}

function show_whatif(event) {
  event.preventDefault();
  tabs.forEach((tab) => {
    tab.className = "secondary";
  });
  tabs[2].className = "";
  sections.forEach((section) => {
    section.hidden = true;
  });
  sections[2].hidden = false;
}

tab_addincome.addEventListener("click", show_addincome);
tab_transactions.addEventListener("click", show_transactions);
tab_whatif.addEventListener("click", show_whatif);

"user strict";

const tab_overview = document.getElementById("taboverview");
const tab_transactions = document.getElementById("tabtransactions");
const tab_budget = document.getElementById("tabbudget");

const section_overview = document.getElementById("overview");
const section_transactions = document.getElementById("transactions");
const section_budget = document.getElementById("budget");

const tabs = [tab_overview, tab_transactions, tab_budget];
const sections = [section_overview, section_transactions, section_budget];

// const btn_addincome = document.getElementById("toaddincome");
// const btn_addexpense = document.getElementById("toaddexpense");

function show_overview(event) {
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

function show_budget(event) {
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

// function click_addincome(event) {
//   event.preventDefault();
//   location.assign("/FinTra/frontend/src/income.html");
// }

// function click_addexpense(event) {
//   event.preventDefault();
//   location.assign("/FinTra/frontend/src/expense.html");
// }

tab_overview.addEventListener("click", show_overview);
tab_transactions.addEventListener("click", show_transactions);
tab_budget.addEventListener("click", show_budget);

// btn_addincome.addEventListener("click", click_addincome);
// btn_addexpense.addEventListener("click", click_addexpense);

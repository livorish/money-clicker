var moneyClicks = 0;

var workers = 0;
var workersCost = 10;
var workersMPS = 1;

var teamLeaders = 0;
var teamLeaderCost = 30;
var teamLeadersMPS = 2;

var managers = 0;
var managerCost = 50;
var managersMPS = 3;

var offices = 0;
var officesCost = 200;
var officesMPS = 5;


function moneyClicked() {
   moneyClicks++;
}


function buyClicker(items, cost) {
   if (moneyClicks >= window[cost]) {
      window[items]++;
      moneyClicks -= window[cost];
      window[cost] = Math.round(window[cost] * 1.5);
   } else {
      alert('Not enough money');
   }
}

//function getWorker() {
//   if (moneyClicks >= workersCost) {
//      workers++;
//      moneyClicks -= workersCost;
//      workersCost = Math.round(workersCost * 1.5);
//   } else {
//      alert('Not enough money');
//   }
//}
//
//function getTeamLeader() {
//   if (moneyClicks >= teamLeaderCost) {
//      teamLeaders++;
//      moneyClicks -= teamLeaderCost;
//      teamLeaderCost = Math.round(teamLeaderCost * 1.5);
//   } else {
//      alert('Not enough money');
//   }
//}
//
//function getManager() {
//   if (moneyClicks >= managerCost) {
//      managers++;
//      moneyClicks -= managerCost;
//      managerCost = Math.round(managerCost * 1.5);
//   } else {
//      alert('Not enough money');
//   }
//}

var moneyProducerTimer = setInterval(updateMoney, 1000);
var moneyClickerTimer = setInterval(moneyProducers, 1000);

function updateMoney() {
   var moneyPerSecond = (workers * workersMPS) + (teamLeaders * teamLeadersMPS) + (managers * managersMPS) + (offices * officesMPS);

   var workersCostMoney = document.getElementById('workerCost');
   workersCostMoney.innerHTML = "$" + workersCost;
   var moneyAmount = document.getElementById('moneyAmount');
   var moneyPerSecondWorkers = document.getElementById('moneyPerSecond');
   moneyPerSecondWorkers.innerHTML = "dollars per second " + moneyPerSecond;
   moneyAmount.innerHTML = "$" + moneyClicks;
   var numbersOfWorkers = document.getElementById('numberOfWorkers');
   numbersOfWorkers.innerHTML = "Number  Of Team Leaders: workers: " + workers;

   var costTeamLeader = document.getElementById('teamLeaderCost');
   costTeamLeader.innerHTML = "$" + teamLeaderCost;
   var numbersOfTeamLeaders = document.getElementById('numberOfTeamLeaders');
   numbersOfTeamLeaders.innerHTML = "Number  Of Team Leaders: " + teamLeaders;

   var managersCost = document.getElementById('managerCost');
   managersCost.innerHTML = "$" + managerCost;
   var numbersOfManagers = document.getElementById('numberOfManagers');
   numbersOfManagers.innerHTML = "Number  Of Team Managers: " + managers;

   var thisOfficesCost = document.getElementById('officesCost');
   thisOfficesCost.innerHTML = "$" + officesCost;
   var numbersOfoffices = document.getElementById('numberOfOffices');
   numbersOfoffices.innerHTML = "Number  Of Team Managers: " + offices;
}

function moneyProducers() {
   moneyClicks += workers * workersMPS;
   moneyClicks += teamLeaders * teamLeadersMPS;
   moneyClicks += managers * managersMPS;
   moneyClicks += offices * officesMPS;
}

function popup() {
   var popUpDiv = document.getElementById('popup-info');
   popUpDiv.classList.toggle('visible');
}

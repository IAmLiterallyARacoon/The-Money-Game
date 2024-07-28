//cursor rest

//global variables
var GGCounter = 1;
var GGPossible;
var MPCIncreaserPrice = 100000;
var MPSIncreaserPrice = 1000000;
var governmentGrantsPrice = 500000;
var workerIncreaserPrice = 5000000;
var WICounter = 1;
var UPHPrice = 51200;
var MPCCounter = 1;
var MPSCounter = 1;
var UPHCounter = 1;
var balance = 1000000000;
var increment = 1;
var timesClicked = 0;
var canEnterBlackMarket = false;
var canEnterCasino = false;
var upgradePrice = 100;
const workerControlVar = false;
var workers = 0;
var basicWorkerPrice = 5;
var hardWorkerPrice = 10;
var harderWorkerPrice = 15;
var eliteWorkerPrice = 20;
var superWorkerPrice = 25;
var moneyPerSecond = 0;
var canEnterFactory = false;

//show page functions

function ShowMain(){
  document.getElementById("header").style.display = `block`;
  document.getElementById("balance").style.display = `block`;
  document.getElementById("moneyPerClick").style.display = `block`;
  document.getElementById("moneyPerSecond").style.display = `block`;
  document.getElementById("nextUpgrade").style.display = `block`;
  document.getElementById("workersCounter").style.display = `block`;
  document.getElementById("makeMoney").style.display = `inline`;
  document.getElementById("buyUpgrade").style.display = `inline`;
  document.getElementById("hireWorkers").style.display = `inline`;
  document.getElementById("gamble").style.display = `inline`;
  document.getElementById("blackMarket").style.display = `inline`;
  Update()
}

function HideMain(){
  document.getElementById("header").style.display = `none`;
  document.getElementById("balance").style.display = `none`;
  document.getElementById("moneyPerClick").style.display = `none`;
  document.getElementById("moneyPerSecond").style.display = `none`;
  document.getElementById("nextUpgrade").style.display = `none`;
  document.getElementById("workersCounter").style.display = `none`;
  document.getElementById("makeMoney").style.display = `none`;
  document.getElementById("buyUpgrade").style.display = `none`;
  document.getElementById("hireWorkers").style.display = `none`;
  document.getElementById("gamble").style.display = `none`;
  document.getElementById("blackMarket").style.display = `none`;
  Update()
}

function ShowFactory(){
  document.getElementById("Wheader").style.display = `block`;
  document.getElementById("Wbalance").style.display = `block`;
  document.getElementById("WmoneyPerClick").style.display = `block`;
  document.getElementById("WmoneyPerSecond").style.display = `block`;
  document.getElementById("WnextUpgrade").style.display = `block`;
  document.getElementById("WworkersCounter").style.display = `block`;
  document.getElementById("buyBasicWorker").style.display = `inline`;
  document.getElementById("buyHardWorker").style.display = `inline`;
  document.getElementById("buyHarderWorker").style.display = `inline`;
  document.getElementById("buyEliteWorker").style.display = `inline`;
  document.getElementById("buySuperWorker").style.display = `inline`;
  document.getElementById("backButtonFactory").style.display = `block`;
  Update()
}

function HideFactory(){
  document.getElementById("Wheader").style.display = `none`;
  document.getElementById("Wbalance").style.display = `none`;
  document.getElementById("WmoneyPerClick").style.display = `none`;
  document.getElementById("WmoneyPerSecond").style.display = `none`;
  document.getElementById("WnextUpgrade").style.display = `none`;
  document.getElementById("WworkersCounter").style.display = `none`;
  document.getElementById("buyBasicWorker").style.display = `none`;
  document.getElementById("buyHardWorker").style.display = `none`;
  document.getElementById("buyHarderWorker").style.display = `none`;
  document.getElementById("buyEliteWorker").style.display = `none`;
  document.getElementById("buySuperWorker").style.display = `none`;
  document.getElementById("backButtonFactory").style.display = `none`;
  Update()
}

function ShowCasino(){
  document.getElementById("Gheader").style.display = `block`;
  document.getElementById("Gbalance").style.display = `block`;
  document.getElementById("GmoneyPerClick").style.display = `block`;
  document.getElementById("GmoneyPerSecond").style.display = `block`;
  document.getElementById("GnextUpgrade").style.display = `block`;
  document.getElementById("GworkersCounter").style.display = `block`;
  document.getElementById("setAmountText").style.display = `block`;
  document.getElementById("gamble100").style.display = `inline`;
  document.getElementById("gamble1000").style.display = `inline`;
  document.getElementById("gamble10000").style.display = `inline`;
  document.getElementById("gamble100000").style.display = `inline`;
  document.getElementById("gamble1000000").style.display = `inline`;
  document.getElementById("resultSet").style.display = `block`;
  document.getElementById("backButtonCasino").style.display = `block`;
  Update()
}

function HideCasino(){
  document.getElementById("Gheader").style.display = `none`;
  document.getElementById("Gbalance").style.display = `none`;
  document.getElementById("GmoneyPerClick").style.display = `none`;
  document.getElementById("GmoneyPerSecond").style.display = `none`;
  document.getElementById("GnextUpgrade").style.display = `none`;
  document.getElementById("GworkersCounter").style.display = `none`;
  document.getElementById("setAmountText").style.display = `none`;
  document.getElementById("gamble100").style.display = `none`;
  document.getElementById("gamble1000").style.display = `none`;
  document.getElementById("gamble10000").style.display = `none`;
  document.getElementById("gamble100000").style.display = `none`;
  document.getElementById("gamble1000000").style.display = `none`;
  document.getElementById("resultSet").style.display = `none`;
  document.getElementById("backButtonCasino").style.display = `none`;
  Update()
}

function ShowBlackMarket(){
  document.getElementById("Bheader").style.display = `block`;
  document.getElementById("Bbalance").style.display = `block`;
  document.getElementById("BmoneyPerClick").style.display = `block`;
  document.getElementById("BmoneyPerSecond").style.display = `block`;
  document.getElementById("BnextUpgrade").style.display = `block`;
  document.getElementById("BworkersCounter").style.display = `block`;
  document.getElementById("MPCIncreaser").style.display = `inline`;
  document.getElementById("MPCIncreaserElement1").style.display = `block`;
  document.getElementById("MPCIncreaserElement2").style.display = `block`;
  document.getElementById("MPSIncreaser").style.display = `inline`;
  document.getElementById("MPSIncreaserElement1").style.display = `block`;
  document.getElementById("MPSIncreaserElement2").style.display = `block`;
  document.getElementById("governmentGrants").style.display = `inline`;
  document.getElementById("governmentGrantsElement1").style.display = `block`;
  document.getElementById("governmentGrantsElement2").style.display = `block`;
  document.getElementById("workerIncreaser").style.display = `inline`;
  document.getElementById("workerIncreaserElement1").style.display = `block`;
  document.getElementById("workerIncreaserElement2").style.display = `block`;
  document.getElementById("upgradePriceHalver").style.display = `inline`;
  document.getElementById("upgradePriceHalverElement1").style.display = `block`;
  document.getElementById("upgradePriceHalverElement2").style.display = `block`;
  document.getElementById("backButtonBlackMarket").style.display = `block`;
  Update()
}

function HideBlackMarket(){
  document.getElementById("Bheader").style.display = `none`;
  document.getElementById("Bbalance").style.display = `none`;
  document.getElementById("BmoneyPerClick").style.display = `none`;
  document.getElementById("BmoneyPerSecond").style.display = `none`;
  document.getElementById("BnextUpgrade").style.display = `none`;
  document.getElementById("BworkersCounter").style.display = `none`;
  document.getElementById("MPCIncreaser").style.display = `none`;
  document.getElementById("MPCIncreaserElement1").style.display = `none`;
  document.getElementById("MPCIncreaserElement2").style.display = `none`;
  document.getElementById("MPSIncreaser").style.display = `none`;
  document.getElementById("MPSIncreaserElement1").style.display = `none`;
  document.getElementById("MPSIncreaserElement2").style.display = `none`;
  document.getElementById("governmentGrants").style.display = `none`;
  document.getElementById("governmentGrantsElement1").style.display = `none`;
  document.getElementById("governmentGrantsElement2").style.display = `none`;
  document.getElementById("workerIncreaser").style.display = `none`;
  document.getElementById("workerIncreaserElement1").style.display = `none`;
  document.getElementById("workerIncreaserElement2").style.display = `none`;
  document.getElementById("upgradePriceHalver").style.display = `none`;
  document.getElementById("upgradePriceHalverElement1").style.display = `none`;
  document.getElementById("upgradePriceHalverElement2").style.display = `none`;
  document.getElementById("backButtonBlackMarket").style.display = `none`;
  Update()
}

//update function
function Update(){
  balance = Math.floor(balance)
  upgradePrice = Math.floor(upgradePrice)
  document.getElementById("balance").textContent = "Balance: £" + balance;
  document.getElementById("Wbalance").textContent = "Balance: £" + balance;
  document.getElementById("Gbalance").textContent = "Balance: £" + balance;
  document.getElementById("Bbalance").textContent = "Balance: £" + balance;
  document.getElementById("moneyPerClick").textContent = "Money Per Click: £" + increment;
  document.getElementById("WmoneyPerClick").textContent = "Money Per Click: £" + increment;
  document.getElementById("GmoneyPerClick").textContent = "Money Per Click: £" + increment;
  document.getElementById("BmoneyPerClick").textContent = "Money Per Click: £" + increment;
  document.getElementById("moneyPerSecond").textContent = "Money Per Second: £" + moneyPerSecond
  document.getElementById("WmoneyPerSecond").textContent = "Money Per Second: £" + moneyPerSecond
  document.getElementById("GmoneyPerSecond").textContent = "Money Per Second: £" + moneyPerSecond
  document.getElementById("BmoneyPerSecond").textContent = "Money Per Second: £" + moneyPerSecond
  document.getElementById("nextUpgrade").textContent = "Next Upgrade Price: £" + upgradePrice;
  document.getElementById("WnextUpgrade").textContent = "Next Upgrade Price: £" + upgradePrice;
  document.getElementById("GnextUpgrade").textContent = "Next Upgrade Price: £" + upgradePrice;
  document.getElementById("BnextUpgrade").textContent = "Next Upgrade Price: £" + upgradePrice;
  document.getElementById("workersCounter").textContent = "Workers: " + workers;
  document.getElementById("WworkersCounter").textContent = "Workers: " + workers;
  document.getElementById("GworkersCounter").textContent = "Workers: " + workers;
  document.getElementById("BworkersCounter").textContent = "Workers: " + workers;
}

//setup
ShowMain()
HideFactory()
HideCasino()
HideBlackMarket()

//Makes money every second/controls government grant chances
function EverySecond(){
  var max = Math.floor(balance/10);
  var min = Math.floor(balance/100);
  if (GGPossible == true) {
    if (GGCounter == 1) {
      chance = Math.floor(Math.random()*3600)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
    if (GGCounter == 2) {
      chance = Math.floor(Math.random()*2700)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
    if (GGCounter == 3) {
      chance = Math.floor(Math.random()*1800)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
    if (GGCounter == 4) {
      chance = Math.floor(Math.random()*600)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
    if (GGCounter == 5) {
      chance = Math.floor(Math.random()*300)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
    if (GGCounter >= 6) {
      chance = Math.floor(Math.random()*60)+1
      if (chance == 1) {
        addOn = Math.floor(Math.random()*max)+min
        balance += addOn
        alert(`You've just received a Government Grant! These range from 1% to 10% of your current balance. This one is £${addOn}.`)
      }
    }
  }
  balance = balance + moneyPerSecond
  Update()
}
setInterval(EverySecond,1000)
// Balance and upgrades - FINISHED
if (balance >= 9007198254740992) {
  alert("You can have a balance up to 9,007,199,254,740,992 before JavaScript can't understand it anymore. You're about 1 billion away from that number. Find a way to get rid of some money or the game breaks.")
}
document.getElementById("makeMoney").onclick = function(){
  balance += increment;
  timesClicked += 1;
  Update();
}
document.getElementById("buyUpgrade").onclick = function(){
  if (balance >= upgradePrice) {
    balance -= upgradePrice;
    upgradePrice *= 2;
    increment += 1;
    Update();
  }
  else {
    alert("You don't have enough money to buy this upgrade!");
  }
}
// Workers - FINISHED
document.getElementById("hireWorkers").onclick = function(){
  if (balance >= 1000) {
    if (canEnterFactory == false) {
      balance -= 1000
      canEnterFactory = true
    }
  }
  else {
    alert("You need £1,000 to buy the money factory!")
  }
  if (canEnterFactory == true) {
    ShowFactory()
    HideMain()
    }
  document.getElementById("backButtonFactory").onclick = function(){
    HideFactory()
    ShowMain()
  }
  document.getElementById("buyBasicWorker").onclick = function(){
    if (balance >= basicWorkerPrice) {
      balance -= basicWorkerPrice;
      basicWorkerPrice *= 1.5;
      basicWorkerPrice = Math.floor(basicWorkerPrice);
      moneyPerSecond += 1;
      workers += 1;
      Update();
    }
    else {
      alert(`You need £${basicWorkerPrice} to buy this worker!`);
    }
  }
  document.getElementById("buyHardWorker").onclick = function(){
    if (balance >= hardWorkerPrice) {
      balance -= hardWorkerPrice;
      hardWorkerPrice *= 1.5;
      hardWorkerPrice = Math.floor(hardWorkerPrice);
      moneyPerSecond += 2;
      workers += 1;
      Update();
    }
    else {
      alert(`You need £${hardWorkerPrice} to buy this worker!`);
    }
  }
  document.getElementById("buyHarderWorker").onclick = function(){
    if (balance >= harderWorkerPrice) {
      balance -= harderWorkerPrice;
      harderWorkerPrice *= 1.5;
      harderWorkerPrice = Math.floor(harderWorkerPrice);
      moneyPerSecond += 3;
      workers += 1;
      Update();
    }
    else {
      alert(`You need £${harderWorkerPrice} to buy this worker!`);
    }
  }
  document.getElementById("buyEliteWorker").onclick = function(){
    if (balance >= eliteWorkerPrice) {
      balance -= eliteWorkerPrice;
      eliteWorkerPrice *= 1.5;
      eliteWorkerPrice = Math.floor(eliteWorkerPrice);
      moneyPerSecond += 4;
      workers += 1;
      Update();
    }
    else {
      alert(`You need £${eliteWorkerPrice} to buy this worker!`);
    }
  }
  document.getElementById("buySuperWorker").onclick = function(){
    if (balance >= superWorkerPrice) {
      balance -= superWorkerPrice;
      superWorkerPrice *= 1.5;
      superWorkerPrice = Math.floor(superWorkerPrice);
      moneyPerSecond += 5;
      workers += 1;
      Update();
    }
    else {
      alert(`You need £${superWorkerPrice} to buy this worker!`);
    }
  }
}

//Gambling - ADDME - button functionality, the rest of the set gamble buttons
document.getElementById("gamble").onclick = function(){
  if (balance >= 1000) {
    if (canEnterCasino == false) {
      balance -= 1000
      canEnterCasino = true
    }
  }
  else {
    alert("You need £1,000 to unlock the casino!")
  }
  if (canEnterCasino == true) {
    HideMain()
    ShowCasino()
  document.getElementById("backButtonCasino").onclick = function(){
    HideCasino()
    ShowMain()
  }
    document.getElementById("gamble100").onclick = function(){
      var ChanceOfWin100 = Math.floor(Math.random()*10)+1
      if (ChanceOfWin100 == 1) {
        balance += 1000
        document.getElementById("resultSet").textContent = "You won! Try again?"
      }
      else {
        balance -= 100
        document.getElementById("resultSet").textContent = "You lost. Try again?"
      }
    }
    document.getElementById("gamble1000").onclick = function(){
      var ChanceOfWin100 = Math.floor(Math.random()*10)+1
      if (ChanceOfWin100 == 1) {
        balance += 10000
        document.getElementById("resultSet").textContent = "You won! Try again?"
      }
      else {
        balance -= 1000
        document.getElementById("resultSet").textContent = "You lost. Try again?"
      }
    }
    document.getElementById("gamble10000").onclick = function(){
      var ChanceOfWin100 = Math.floor(Math.random()*10)+1
      if (ChanceOfWin100 == 1) {
        balance += 100000
        document.getElementById("resultSet").textContent = "You won! Try again?"
      }
      else {
        balance -= 10000
        document.getElementById("resultSet").textContent = "You lost. Try again?"
      }
    }
    document.getElementById("gamble100000").onclick = function(){
      var ChanceOfWin100 = Math.floor(Math.random()*10)+1
      if (ChanceOfWin100 == 1) {
        balance += 1000000
        document.getElementById("resultSet").textContent = "You won! Try again?"
      }
      else {
        balance -= 100000
        document.getElementById("resultSet").textContent = "You lost. Try again?"
      }
    }
    document.getElementById("gamble1000000").onclick = function(){
      var ChanceOfWin100 = Math.floor(Math.random()*10)+1
      if (ChanceOfWin100 == 1) {
        balance += 10000000
        document.getElementById("resultSet").textContent = "You won! Try again?"
      }
      else {
        balance -= 1000000
        document.getElementById("resultSet").textContent = "You lost. Try again?"
      }
    }
  }
}
//Black market - FINISHED
document.getElementById("blackMarket").onclick = function(){
  if (balance >= 100000) {
    if (canEnterBlackMarket == false) {
      balance -= 100000
      canEnterBlackMarket = true
    }
  }
  else {
    alert("You need £100,000 to enter the black market!")
  }
  if (canEnterBlackMarket == true) {
    HideMain()
    ShowBlackMarket()
  document.getElementById("backButtonBlackMarket").onclick = function(){
    HideBlackMarket()
    ShowMain()
  }
    document.getElementById("MPCIncreaser").onclick = function(){
      if (balance >= MPCIncreaserPrice) {
        if (MPCCounter == 1) {
          increment += 1;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 200000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 2."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £200,000."
        }
        if (MPCCounter == 2 && balance >= MPCIncreaserPrice) {
          increment += 2;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 500000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 5."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £500,000."
        }
        if (MPCCounter == 3 && balance >= MPCIncreaserPrice) {
          increment += 5;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 1000000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 10."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £1,000,000."
        }
        if (MPCCounter == 4 && balance >= MPCIncreaserPrice) {
          increment += 10;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 2500000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 25."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £2,500,000."
        }
        if (MPCCounter == 5 && balance >= MPCIncreaserPrice) {
          increment += 25;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 5000000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 50."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £5,000,000."
        }
        if (MPCCounter == 6 && balance >= MPCIncreaserPrice) {
          increment += 50;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = 10000000;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "Increases Money Per Click By 100."
          document.getElementById("MPCIncreaserElement2").textContent = "Costs £10,000,000."
        }
        if (MPCCounter == 7 && balance >= MPCIncreaserPrice) {
          increment += 100;
          balance -= MPCIncreaserPrice;
          MPCIncreaserPrice = false;
          Update()
          document.getElementById("MPCIncreaserElement1").textContent = "OUT OF STOCK"
          document.getElementById("MPCIncreaserElement2").textContent = ""
        }
        if (MPCIncreaserPrice == false && MPCCounter >= 8) {
          alert ("OUT OF STOCK")
        }
        MPCCounter += 1;
      }
    }
    document.getElementById("MPSIncreaser").onclick = function(){
      if (balance >= MPSIncreaserPrice) {
        if (MPSCounter == 1) {
          moneyPerSecond += 1;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 2000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 2."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £2,000,000."
        }
        if (MPSCounter == 2 && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 2;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 5000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 5."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £5,000,000."
        }
        if (MPSCounter == 3  && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 5;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 10000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 10."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £10,000,000."
        }
        if (MPSCounter == 4  && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 10;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 25000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 25."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £25,000,000."
        }
        if (MPSCounter == 5  && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 25;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 50000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 50."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £50,000,000."
        }
        if (MPSCounter == 6  && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 50;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = 100000000;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "Increases Money Per Second By 100."
          document.getElementById("MPSIncreaserElement2").textContent = "Costs £100,000,000."
        }
        if (MPSCounter == 7  && balance >= MPSIncreaserPrice) {
          moneyPerSecond += 100;
          balance -= MPSIncreaserPrice;
          MPSIncreaserPrice = false;
          Update()
          document.getElementById("MPSIncreaserElement1").textContent = "OUT OF STOCK"
          document.getElementById("MPSIncreaserElement2").textContent = ""
        }
        if (MPSIncreaserPrice == false && MPSCounter >= 8 && balance >= MPSIncreaserPrice) {
          alert ("OUT OF STOCK")
        }
        else {
          alert("You need more money to buy this item.")
        }
      }
    }
    document.getElementById("governmentGrants").onclick = function(){
      if (balance >= governmentGrantsPrice) {
        if (GGCounter == 1) {
          GGPossible = true
          balance -= governmentGrantsPrice
          governmentGrantsPrice *= 2
          document.getElementById("governmentGrants").textContent = "Increase the chance of Government Grants"
          document.getElementById("governmentGrantsElement1").textContent = "Increases the chance of Government Grants from 1/3600 to 1/2700."
          document.getElementById("governmentGrantsElement2").textContent = "Costs £1,000,000."
        }
        if (GGCounter == 2) {
          balance -= governmentGrantsPrice
          governmentGrantsPrice *= 2
          document.getElementById("governmentGrantsElement1").textContent = "Increases the chance of Government Grants from 1/2700 to 1/1800."
          document.getElementById("governmentGrantsElement2").textContent = "Costs £2,000,000."
        }
        if (GGCounter == 3) {
          balance -= governmentGrantsPrice
          governmentGrantsPrice *= 2
          document.getElementById("governmentGrantsElement1").textContent = "Increases the chance of Government Grants from 1/1800 to 1/600."
          document.getElementById("governmentGrantsElement2").textContent = "Costs £4,000,000."
        }
        if (GGCounter == 4) {
          balance -= governmentGrantsPrice
          governmentGrantsPrice *= 2
          document.getElementById("governmentGrantsElement1").textContent = "Increases the chance of Government Grants from 1/600 to 1/300."
          document.getElementById("governmentGrantsElement2").textContent = "Costs £8,000,000."
        }
        if (GGCounter == 5) {
          balance -= governmentGrantsPrice
          governmentGrantsPrice *= 2
          document.getElementById("governmentGrantsElement1").textContent = "Increases the chance of Government Grants from 1/300 to 1/60."
          document.getElementById("governmentGrantsElement2").textContent = "Costs £16,000,000."
        }
        if (GGCounter == 6) {
          balance -= governmentGrantsPrice
          governmentGrantsPrice = false
          document.getElementById("governmentGrantsElement1").textContent = "OUT OF STOCK"
          document.getElementById("governmentGrantsElement2").textContent = ""
        }
        if (governmentGrantsPrice == false && GGCounter >= 7) {
          alert("OUT OF STOCK")
        }
        GGCounter += 1
      }
    }
    document.getElementById("workerIncreaser").onclick = function() {
      if (balance >= workerIncreaserPrice) {
        if (WICounter == 1) {
          balance -= workerIncreaserPrice
          workers += 5
          moneyPerSecond += 5
          workerIncreaserPrice += 500000
          document.getElementById("workerIncreaserElement1").textContent = "Increases the amount of Hard Workers you have by 5 without increasing the cost to buy more."
          document.getElementById("workerIncreaserElement2").textContent = "Costs £5,500,000."
        }
        if (WICounter == 2) {
          balance -= workerIncreaserPrice
          workers += 5
          moneyPerSecond += 10
          workerIncreaserPrice += 500000
          document.getElementById("workerIncreaserElement1").textContent = "Increases the amount of Harder Workers you have by 5 without increasing the cost to buy more."
          document.getElementById("workerIncreaserElement2").textContent = "Costs £6,000,000."
        }
        if (WICounter == 3) {
          balance -= workerIncreaserPrice
          workers += 5
          moneyPerSecond += 15
          workerIncreaserPrice += 500000
          document.getElementById("workerIncreaserElement1").textContent = "Increases the amount of Elite Workers you have by 5 without increasing the cost to buy more."
          document.getElementById("workerIncreaserElement2").textContent = "Costs £6,500,000."
        }
        if (WICounter == 4) {
          balance -= workerIncreaserPrice
          workers += 5
          moneyPerSecond += 20
          workerIncreaserPrice += 500000
          document.getElementById("workerIncreaserElement1").textContent = "Increases the amount of Super Workers you have by 5 without increasing the cost to buy more."
          document.getElementById("workerIncreaserElement2").textContent = "Costs £7,000,000."
        }
        if (WICounter == 5) {
          balance -= workerIncreaserPrice
          workers += 5
          moneyPerSecond += 5
          workerIncreaserPrice += 3000000
          document.getElementById("workerIncreaserElement1").textContent = "Increases the amount of Super Workers you have by 10 without increasing the cost to buy more."
          document.getElementById("workerIncreaserElement2").textContent = "Costs £10,000,000."
        }
        if (WICounter == 6) {
          balance -= workerIncreaserPrice
          workers += 10
          moneyPerSecond += 50
          workerIncreaserPrice = false
          document.getElementById("workerIncreaserElement1").textContent = "OUT OF STOCK"
          document.getElementById("workerIncreaserElement2").textContent = ""
        }
        if (WICounter >= 7 && workerIncreaserPrice == false) {
          alert("OUT OF STOCK")
        }
        WICounter += 1
      }
    }
    document.getElementById("upgradePriceHalver").onclick = function(){
      if (balance >= UPHPrice) {
        if (upgradePrice > 25) {
          if (UPHCounter == 1) {
            balance -= UPHPrice
            UPHPrice *= 2
            upgradePrice /= 2
            document.getElementById("upgradePriceHalverElement2").textContent = "Costs £102,400."
          }
          if (UPHCounter == 2) {
            balance -= UPHPrice
            UPHPrice *= 2
            upgradePrice /= 2
            document.getElementById("upgradePriceHalverElement2").textContent = "Costs £204,800."
          }
          if (UPHCounter == 3) {
            balance -= UPHPrice
            UPHPrice *= 2
            upgradePrice /= 2
            document.getElementById("upgradePriceHalverElement2").textContent = "Costs £409,600."
          }
          if (UPHCounter == 4) {
            balance -= UPHPrice
            UPHPrice *= 2
            upgradePrice /= 2
            document.getElementById("upgradePriceHalverElement2").textContent = "Costs £819,200."
          }
          if (UPHCounter == 5) {
            balance -= UPHPrice
            UPHPrice = false
            upgradePrice /= 2
            document.getElementById("upgradePriceHalverElement1").textContent = "OUT OF STOCK"
            document.getElementById("upgradePriceHalverElement2").textContent = ""
          }
          if (UPHCounter >= 6 && UPHPrice == false) {
            alert("OUT OF STOCK")
          }
          UPHCounter += 1;
        }
        else {
          alert("The upgrade price must an integer. Go double the upgrade price and then come back to halve it.")
        }
      }
    }
  }
}
document.getElementById("changeSell").style.backgroundColor = "gray";
document.getElementById("changeBuy").style.backgroundColor = "white";



function changeSell() {
  document.getElementById("changeBuy").style.backgroundColor = "gray";
  document.getElementById("changeSell").style.backgroundColor = "white";
  buyActive = "off"
}


function changeBuy() {
  document.getElementById("changeSell").style.backgroundColor = "gray";
  document.getElementById("changeBuy").style.backgroundColor = "white";
  buyActive = "on"
}


function sell(number, cost, profit, increase) {
  if (!(number == 0) && (buyActive == "off")){
    balance += parseInt(cost-cost/10);
    number -= 1;
    prevCost = cost
    prevCost -= cost/10
    cost -= prevCost/10
    profit -= increase; 
    var newNumber = number;
    var newCost = cost;
    var newProfit = profit;
    return [newNumber, newCost, newProfit];
  }
}



//Runs when you click Upgrade bitcoin
function upgradeBitcoin () {
  if ((buyActive == "off") && !(bitCoinUpgradeNumber == 0)){
    bitcoinValues = sell(bitCoinUpgradeNumber, bitCoinUpgradeCost, bitcoinProfit, bitcoinIcrease);
    bitCoinUpgradeNumber = bitcoinValues[0];
    bitCoinUpgradeCost = bitcoinValues[1];
    bitcoinProfit = bitcoinValues[2];
  }
  if (balance >= bitCoinUpgradeCost && buyActive == "on") {
    balance = balance - bitCoinUpgradeCost;
    bitCoinUpgradeNumber += 1;
    bitCoinUpgradeCost += bitCoinUpgradeCost/10;
    bitcoinProfit += bitcoinIcrease;
    }
  }
  
  //runs when you click upgrade gun factory I think you can figure out what the rest of these do
  function upgradeGunFactory () {
    if ((buyActive == "off") && !(gunFactories == 0)){
      gunFactoryValues = sell(gunFactories, gunFactoryCost, gunFactoryProfit, gunFactoryIncrease);
      gunFactories = gunFactoryValues[0];
      gunFactoryCost = gunFactoryValues[1];
      gunFactoryProfit = gunFactoryValues[2];
    }
    if (balance >= gunFactoryCost && buyActive == "on") {
      balance = balance - gunFactoryCost;
      gunFactories += 1;
      gunFactoryCost += gunFactoryCost/10;
      gunFactoryProfit += gunFactoryIncrease;
   
    }
  }
  
  
  function upgradeBombFactory () {
    if ((buyActive == "off") && !(bombFactories == 0)){
      bombFactoryValues = sell(bombFactories, bombFactoryCost, bombFactoryProfit, bombFactoryIncrease);
      bombFactories = bombFactoryValues[0];
      bombFactoryCost = bombFactoryValues[1];
      bombFactoryProfit = bombFactoryValues[2];
    }
    if (balance >= bombFactoryCost && buyActive == "on") {
      balance = balance - bombFactoryCost;
      bombFactories += 1;
      bombFactoryCost += bombFactoryCost/10;
      bombFactoryProfit += bombFactoryIncrease;
    }
  }
  
  
  function upgradeHumanLeatherFactory () {
    if ((buyActive == "off") && !(humanLeatherFactories == 0)){
      humanLeatherFactoryValues = sell(humanLeatherFactories, humanLeatherFactoryCost, humanLeatherFactoryProfit, humanLeatherFactoryIncrease);
      humanLeatherFactories = humanLeatherFactoryValues[0];
      humanLeatherFactoryCost = humanLeatherFactoryValues[1];
      humanLeatherFactoryProfit = humanLeatherFactoryValues[2];
    }
    if (balance >= humanLeatherFactoryCost && buyActive == "on") {
      balance = balance - humanLeatherFactoryCost;
      humanLeatherFactories += 1;
      humanLeatherFactoryCost += humanLeatherFactoryCost/10;
      humanLeatherFactoryProfit += humanLeatherFactoryIncrease;
    }
  }
  
  
  function upgradeMalewareFactory () {
    if ((buyActive == "off") && !(malewareFactories == 0)){
      malewareFactoryValues = sell(malewareFactories, malewareFactoryCost, malewareFactoryProfit, malewareFactoryIncrease);
      malewareFactories = malewareFactoryValues[0];
      malewareFactoryCost = malewareFactoryValues[1];
      malewareFactoryProfit = malewareFactoryValues[2];
    }
    if (balance >= malewareFactoryCost && buyActive == "on") {
      balance = balance - malewareFactoryCost;
      malewareFactories += 1;
      malewareFactoryCost += malewareFactoryCost/10;
      malewareFactoryProfit += malewareFactoryIncrease;
    }
  }
  
  
  function upgradePyramidFactory () {
    if ((buyActive == "off") && !(pyramidFactories == 0)){
      pyramidFactoryValues = sell(pyramidFactories, pyramidFactoryCost, pyramidFactoryProfit, pyramidFactoryIncrease);
      pyramidFactories = pyramidFactoryValues[0];
      pyramidFactoryCost = pyramidFactoryValues[1];
      pyramidFactoryProfit = pyramidFactoryValues[2];
    }
    if (balance >=  pyramidFactoryCost && buyActive == "on") {
      balance = balance - pyramidFactoryCost;
      pyramidFactories += 1;
      pyramidFactoryCost += pyramidFactoryCost/10;
      pyramidFactoryProfit += pyramidFactoryIncrease;
    }
  }

  function upgradeNukeFactory () {
    if ((buyActive == "off") && !(nukeFactories == 0)){
      nukeFactoryValues = sell(nukeFactories, nukeFactoryCost, nukeFactoryProfit, nukeFactoryIncrease);
      nukeFactories = nukeFactoryValues[0];
      nukeFactoryCost = nukeFactoryValues[1];
      nukeFactoryProfit = nukeFactoryValues[2];
    }
    if (balance >= nukeFactoryCost && buyActive == "on") {
      balance = balance - nukeFactoryCost;
      nukeFactories += 1;
      nukeFactoryCost += nukeFactoryCost/10;
      nukeFactoryProfit += nukeFactoryIncrease;
    }
  }

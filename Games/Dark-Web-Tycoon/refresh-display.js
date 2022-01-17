//this runs every milisecond and displays all the variables that should be shown
function refreshDisplay() {
    document.getElementById("balanceDisplay").innerHTML = parseInt(balance);
  
    document.getElementById("bitCoinUpgradeNumber").innerHTML = parseInt(bitCoinUpgradeNumber);
  
    document.getElementById("bitCoinUpgradeCost").innerHTML = parseInt(bitCoinUpgradeCost);
  
    document.getElementById("gunFactories").innerHTML = parseInt(gunFactories);
  
    document.getElementById("gunFactoryCost").innerHTML = parseInt(gunFactoryCost);
  
    document.getElementById("titlebalanceDisplay").innerHTML = parseInt(balance);
  
    document.getElementById("bombFactories").innerHTML = parseInt(bombFactories);
  
    document.getElementById("bombFactoryCost").innerHTML = parseInt(bombFactoryCost);
    
    document.getElementById("bombFactoryProfit").innerHTML = parseInt(bombFactoryProfit);
  
    document.getElementById("gunFactoryProfit").innerHTML = parseInt(gunFactoryProfit);
  
    document.getElementById("bitCoinProfit").innerHTML = parseInt(bitcoinProfit);
  
    document.getElementById("humanLeatherFactories").innerHTML = parseInt(humanLeatherFactories);
  
    document.getElementById("humanLeatherFactoryCost").innerHTML = parseInt(humanLeatherFactoryCost);
  
    document.getElementById("humanLeatherFactoryProfit").innerHTML = parseInt(humanLeatherFactoryProfit);
  
    document.getElementById("malewareFactories").innerHTML = parseInt(malewareFactories);
  
    document.getElementById("malewareFactoryCost").innerHTML = parseInt(malewareFactoryCost);
  
    document.getElementById("malewareFactoryProfit").innerHTML = parseInt(malewareFactoryProfit);
  
    document.getElementById("pyramidFactories").innerHTML = parseInt(pyramidFactories);
  
    document.getElementById("pyramidFactoryCost").innerHTML = parseInt(pyramidFactoryCost);
  
    document.getElementById("pyramidFactoryProfit").innerHTML = parseInt(pyramidFactoryProfit);
    
    document.getElementById("nukeFactoryProfit").innerHTML = parseInt(nukeFactoryProfit);

    document.getElementById("nukeFactoryCost").innerHTML = parseInt(nukeFactoryCost);

    document.getElementById("nukeFactories").innerHTML = parseInt(nukeFactories);

    document.getElementById("perSecondDisplay").innerHTML = parseInt(totalBitCoinPerSecond);
  
    setTimeout(refreshDisplay, 10);
  }
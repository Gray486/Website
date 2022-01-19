//export
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
 function doDownload()  {
  download("save.txt",[balance, bitCoinUpgradeNumber, bitCoinUpgradeCost, bitcoinProfit, bitcoinIcrease, totalBitCoinPerSecond, gunFactories, gunFactoryCost, gunFactoryProfit, gunFactoryIncrease, bombFactories, bombFactoryCost, bombFactoryProfit, bombFactoryIncrease, humanLeatherFactories, humanLeatherFactoryCost, humanLeatherFactoryProfit, humanLeatherFactoryIncrease, malewareFactories, malewareFactoryCost, malewareFactoryProfit, malewareFactoryIncrease, pyramidFactories, pyramidFactoryCost, pyramidFactoryProfit, pyramidFactoryIncrease, nukeFactories, nukeFactoryCost, nukeFactoryProfit, nukeFactoryIncrease]);
  }

//import code is in main.js at the bottem so all varibles will be loaded.
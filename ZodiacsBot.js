var timeToStartRace = 5;

function goToBattlefield(){
  console.clear(); 
  var aTags = document.getElementsByTagName("a");
  for(var a = 0;a< aTags.length;a++){
    if(aTags[a].hash.includes('battlefield')) aTags[a].click();
  }
  setTimeout(function(){ZodiacsRace();}, timeToStartRace * 1000);
}

function ZodiacsRace(){
  var cars = document.getElementsByClassName('content shadowed item d-flex flex-row justify-content-around cursor');
  var intialBalance = JSON.parse(JSON.stringify(document.getElementsByClassName('text-orange')[0].innerHTML));
  var startRaceFunction;
  var checkResultFunction;
  var claimFunction;
  const claimingTime = 15;
  const checkingTime = 35;
  const racingTime = 60;
  var racing = true;
  const coin = 'ZDCV2'

  function ableToRace(){
    console.time('Check if the cars it`s able to race');
    var divTags = document.getElementsByTagName("div");
    var searchText = "Racing: 10/10";
    var found = true;

    for (var j = 0; j < divTags.length; j++) {
      if (divTags[j].textContent.includes(searchText)) {
        found = false;
        break;
      }
    }
    console.timeEnd('Check if the cars it`s able to race');
    console.log(`Able To Race: ${found}`)
    return found;
  }

  function claim(){
    console.time('Claiming');
    var claimButton = document.getElementsByClassName('ant-btn-success')[0];
    claimButton.click();
    clearInterval(claimFunction);
    console.timeEnd('Claiming');
  }

  function checkResult(){
    console.time('Checking');
    var checkResultButton = document.getElementsByClassName('btn-yellow')[0];
    checkResultButton.click()
    claimFunction = setInterval(claim, claimingTime * 1000);
    clearInterval(checkResultFunction);
    console.timeEnd('Checking');
  }

  function startRace(){
    let carIndex = 0;
    for(var i = 0;i< cars.length;i++){  
      carIndex = i + 1;
      cars[i].click();
      if(ableToRace()) break;
      if(i === cars.length - 1){
        racing = false;
        var finalBalance = JSON.parse(JSON.stringify(document.getElementsByClassName('text-orange')[0].innerHTML));
        console.timeEnd('Racing');
        console.log(`Day profit: ${finalBalance - intialBalance} ${coin}`);
        console.log(`Final balance: ${finalBalance} ${coin}`);
        console.log('Stopped');
        clearInterval(startRaceFunction);
      }
    }
    if(racing){
      console.log(`Car ${carIndex} Racing`);
      var startRaceButton = document.getElementsByClassName('btn-green')[0];
      startRaceButton.click();
      checkResultFunction = setInterval(checkResult, checkingTime * 1000);
    }
  }

  console.log(`Total Cars: ${cars.length}`)
  console.log(`Initial balance: ${intialBalance} ${coin}`);
  console.log('Started');
  console.time('Racing');
  startRaceFunction = setInterval(startRace, racingTime * 1000);
}

goToBattlefield();

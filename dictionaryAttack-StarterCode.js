var wordsList = [];


function init() {
  
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}
window.onload = init;


function checkPassword() {
  
  var pw = document.getElementById("pw").value.toLowerCase();
  if (pw) {
    pw = getVariations(pw); 

   
    var isSecure = true;
    var matchingWord = "";

   
    for (i = 0;i < wordsList.length;i++) { 
     
      if (pw == wordsList[i]) {
        isSecure = false;
        matchingWord = wordsList[i];
      }
    }

    printResults(isSecure, matchingWord);
  }
}

function getVariations(pw) {
  
  
  pw = pw.replace(/[1!]/g, "i"); 
  pw = pw.replace(/2/g, "z");
  pw = pw.replace(/3/g, "e");
  pw = pw.replace(/0/g, "o");
  pw = pw.replace(/[68]/g, "b");
  pw = pw.replace(/[4@]/g, "a");
  pw = pw.replace(/7/g, "t");
  pw = pw.replace(/9/g, "g");
  pw = pw.replace(/[5$]/g, "s");

  


  return pw;
}

function printResults(isSecure, word) {
  // Print the results
  // if "isSecure" is true, then...
  if (isSecure == true ) {
    document.getElementById("results").style.color = Green;
    document.getElementById("results").innerHTML = "Congrats you may not be hacked!";
  }
  else {
    // if "isSecure" is NOT true, then...
    document.getElementById("results").style.color = Red;
    var resultsStr =  "You're going to get hacKed!! :)"; // add the "word" you received as a parameter to your error message here
    document.getElementById("results").innerHTML = resultsStr;
  }

}

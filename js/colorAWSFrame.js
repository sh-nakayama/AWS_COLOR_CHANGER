var defaults = {
  awsid_1: "awsid_1",
  col_1: "col_1",
  awsid_2: "awsid_2",
  col_2: "col_2",
  awsid_3: "awsid_3",
  col_3: "col_3",
  awsid_4: "awsid_4",
  col_4: "col_4",
  awsid_5: "awsid_5",
  col_5: "col_5",
  awsid_6: "awsid_6",
  col_6: "col_6",
  awsid_7: "awsid_7",
  col_7: "col_7",
  awsid_8: "awsid_8",
  col_8: "col_8"
};

chrome.storage.sync.get(
  defaults,
  function(items) {
    var background_1 = items.col_1;
    var account_1 = items.awsid_1;;
    
    var background_2 = items.col_2;
    var account_2 = items.awsid_2;

    var background_3 = items.col_3;
    var account_3 = items.awsid_3;
  
    var background_4 = items.col_4;
    var account_4 = items.awsid_4;

    var background_5 = items.col_5;
    var account_5 = items.awsid_5;;
    
    var background_6 = items.col_6;
    var account_6 = items.awsid_6;

    var background_7 = items.col_7;
    var account_7 = items.awsid_7;
  
    var background_8 = items.col_8;
    var account_8 = items.awsid_8;
  
    //アカウント取得
    var account = getAccount();
  
    // ヘッダ・フッタ部分の色を変える
    if (account === account_1){
      changeConsoleColor(background_1)
    }
    if (account === account_2){
      changeConsoleColor(background_2)
    }
    if (account === account_3){
      changeConsoleColor(background_3)
    }
    if (account === account_4){
      changeConsoleColor(background_4)
    }
    if (account === account_5){
      changeConsoleColor(background_5)
    }
    if (account === account_6){
      changeConsoleColor(background_6)
    }
    if (account === account_7){
      changeConsoleColor(background_7)
    }
    if (account === account_8){
      changeConsoleColor(background_8)
    }
  }
);

//cookie値を連想配列として取得する
function getAccount(){
  var arr = new Array();
  if(document.cookie != ''){
    var tmp = document.cookie.split('; ');
    for(var i=0;i<tmp.length;i++){
      var data = tmp[i].split('=');
      arr[data[0]] = decodeURIComponent(data[1]);
    }
  }
  return arr["aws-account-alias"];
}

//コンソールのヘッダ、フッタの色を変更
function changeConsoleColor(backgroundColor){
  var selectors = ["#nav-menubar", "#nav-menu-right", "#console-nav-footer"];
  selectors.forEach(function(s) {
    document.querySelector(s).style.background = backgroundColor;
  })
  var selectors = document.querySelectorAll(".nav-menu");
  for (var i = 0; i < selectors.length; i++) {
    selectors[i].style.background = backgroundColor;
  }
}
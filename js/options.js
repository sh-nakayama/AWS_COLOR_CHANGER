$(function(){
  // セーブボタンが押されたら、
  // chrome.storageに保存する。
  $("#save").click(function () {
    var awsid_1_val = $("#awsid_1").val();
    var col_1_val = $("#col_1").val();  
    var awsid_2_val = $("#awsid_2").val();
    var col_2_val = $("#col_2").val();  
    var awsid_3_val = $("#awsid_3").val();
    var col_3_val = $("#col_3").val();  
    var awsid_4_val = $("#awsid_4").val();
    var col_4_val = $("#col_4").val();  
    var awsid_5_val = $("#awsid_5").val();
    var col_5_val = $("#col_5").val();  
    var awsid_6_val = $("#awsid_6").val();
    var col_6_val = $("#col_6").val();  
    var awsid_7_val = $("#awsid_7").val();
    var col_7_val = $("#col_7").val();  
    var awsid_8_val = $("#awsid_8").val();
    var col_8_val = $("#col_8").val(); 
    var awsid_9_val = $("#awsid_9").val();
    var col_9_val = $("#col_9").val();  
    var awsid_10_val = $("#awsid_10").val();
    var col_10_val = $("#col_10").val(); 
    var formOptions = {
      awsid_1: awsid_1_val,
      col_1: col_1_val,
      awsid_2: awsid_2_val,
      col_2: col_2_val,
      awsid_3: awsid_3_val,
      col_3: col_3_val,
      awsid_4: awsid_4_val,
      col_4: col_4_val,
      awsid_5: awsid_5_val,
      col_5: col_5_val,
      awsid_6: awsid_6_val,
      col_6: col_6_val,
      awsid_7: awsid_7_val,
      col_7: col_7_val,
      awsid_8: awsid_8_val,
      col_8: col_8_val,
      awsid_9: awsid_9_val,
      col_9: col_9_val,
      awsid_10: awsid_10_val,
      col_10: col_10_val
    };
    chrome.storage.sync.set(formOptions, function(){});
  });

  var defaults = {
    awsid_1: "",
    col_1: "",
    awsid_2: "",
    col_2: "",
    awsid_3: "",
    col_3: "",
    awsid_4: "",
    col_4: "",
    awsid_5: "",
    col_5: "",
    awsid_6: "",
    col_6: "",
    awsid_7: "",
    col_7: "",
    awsid_8: "",
    col_8: "",
    awsid_9: "",
    col_9: "",
    awsid_10: "",
    col_10: ""
  };  
  //chrome.storageからオプション画面の初期値を設定する
  chrome.storage.sync.get(
    defaults,
    function(items) {
    if (items.awsid_1) $("#awsid_1").val(items.awsid_1);
    if (items.col_1) $("#col_1").val(items.col_1);
    if (items.awsid_2) $("#awsid_2").val(items.awsid_2);
    if (items.col_2) $("#col_2").val(items.col_2);
    if (items.awsid_3) $("#awsid_3").val(items.awsid_3);
    if (items.col_3) $("#col_3").val(items.col_3);
    if (items.awsid_4) $("#awsid_4").val(items.awsid_4);
    if (items.col_4) $("#col_4").val(items.col_4);
    if (items.awsid_5) $("#awsid_5").val(items.awsid_5);
    if (items.col_5) $("#col_5").val(items.col_5);
    if (items.awsid_6) $("#awsid_6").val(items.awsid_6);
    if (items.col_6) $("#col_6").val(items.col_6);
    if (items.awsid_7) $("#awsid_7").val(items.awsid_7);
    if (items.col_7) $("#col_7").val(items.col_7);
    if (items.awsid_8) $("#awsid_8").val(items.awsid_8);
    if (items.col_8) $("#col_8").val(items.col_8);
    if (items.awsid_9) $("#awsid_9").val(items.awsid_9);
    if (items.col_9) $("#col_9").val(items.col_9);
    if (items.awsid_10) $("#awsid_10").val(items.awsid_10);
    if (items.col_10) $("#col_10").val(items.col_10);
  })
});

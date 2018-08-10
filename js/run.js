function run(){
  console.log(123);
}

function bililive(){
  document.body.innerHTML=document.getElementsByClassName('player-section p-relative border-box none-select z-player-section')[0].innerHTML
}

function table(){
  var tbhtml = '<table>';
  tbhtml = tbhtml + '<tr><td><iframe id="a1" src="https://live.bilibili.com/39277"></iframe></td><td><iframe id="a2" src="https://live.bilibili.com/39277"></iframe></td></tr>';
  tbhtml = tbhtml + '<tr><td><iframe id="a3" src="https://live.bilibili.com/39277"></iframe></td><td><iframe id="a4" src="https://live.bilibili.com/39277"></iframe></td></tr>';
  tbhtml = tbhtml + '</table>';
  document.body.innerHTML = tbhtml;
}


function simpleInnerHtml(id){
  document.getElementById(id).contentWindow.document.body.innerHTML=document.getElementById(id).contentWindow.document.getElementsByClassName('player-section p-relative border-box none-select z-player-section')[0].innerHTML
}

table();
document.getElementById("a1").onload=function(){simpleInnerHtml("a1");}
document.getElementById("a2").onload=function(){simpleInnerHtml("a2");}
document.getElementById("a3").onload=function(){simpleInnerHtml("a3");}
document.getElementById("a4").onload=function(){simpleInnerHtml("a4");}

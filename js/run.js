function run(){
  console.log(123);
}

function bililive(){
  document.body.innerHTML=document.getElementsByClassName('player-section p-relative border-box none-select z-player-section')[0].innerHTML
}

function table(){
  var tbhtml = '<table>';
  tbhtml = tbhtml + '<tr><td><iframe src="https://live.bilibili.com/39277"></iframe></td><td><iframe src="https://live.bilibili.com/39277"></iframe></td></tr>';
  tbhtml = tbhtml + '<tr><td><iframe src="https://live.bilibili.com/39277"></iframe></td><td><iframe src="https://live.bilibili.com/39277"></iframe></td></tr>';
  tbhtml = tbhtml + '</table>';
  document.body.innerHTML = tbhtml;
}

table();

function simpleInnerHtml(id){
  setTimeout(function(){
    document.getElementById(id).contentWindow.document.querySelector('.bilibili-live-player-video-controller-web-fullscreen-btn > button').click()
    setTimeout(function(){
      document.getElementById(id).contentWindow.document.querySelector('#aside-area-toggle-btn').click()
      console.log('22222222');
    },1000);
    console.log('1111111')
  },3000)
}

const showBiliRomes = (...args) => {
  let blHtml = `<div class="flex-container ${(args.length == 3 || args.length == 4) ? 'flex-fix' : ''}">`
  args.forEach((id, index) => {
    blHtml += `<iframe class="bili_frame_item" id="bili_frame_${index}" src="https://live.bilibili.com/${id}" frameborder="1"></iframe>`
  })
  blHtml += '</div>'
  document.body.innerHTML = blHtml
}







function run(){
  var idlist = getQueryString("id");
  var idarr = idlist.split(",");
  showBiliRomes(...idarr);
  Array.prototype.forEach.call(document.querySelectorAll('iframe'), ele => {
    ele.onload=function(){
      simpleInnerHtml(ele.id)
    }
  })
}




function getQueryString(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}

run();
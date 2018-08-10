function simpleInnerHtml(id){
  document.getElementById(id).contentWindow.document.body.innerHTML=document.getElementById(id).contentWindow.document.getElementsByClassName('player-section p-relative border-box none-select z-player-section')[0].innerHTML
}

const showBiliRomes = (...args) => {
  let blHtml = `<div class="flex-container ${(args.length == 3 || args.length == 4) ? 'flex-fix' : ''}">`
  args.forEach((id, index) => {
    blHtml += `<iframe class="bili_frame_item" id="bili_frame_${index}" src="https://live.bilibili.com/${id}" frameborder="0"></iframe>`
  })
  blHtml += '</div>'
  document.body.innerHTML = blHtml
}

showBiliRomes(39277, 39277, 39277, 39277, 39277, 39277, 39277)

Array.prototype.forEach.call(document.querySelectorAll('iframe'), ele => {
  ele.onload = function(){
    simpleInnerHtml(ele.id)
  }
})

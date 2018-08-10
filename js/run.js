function simpleInnerHtml(id){
  setTimeout(function(){
    document.getElementById(id).contentWindow.document.querySelector('.bilibili-live-player-video-controller-web-fullscreen-btn > button').click()
    document.getElementById(id).contentWindow.document.querySelector('aside-area-toggle-btn').click()
  },5000)

}

const showBiliRomes = (...args) => {
  let blHtml = `<div class="flex-container ${(args.length == 3 || args.length == 4) ? 'flex-fix' : ''}">`
  args.forEach((id, index) => {
    blHtml += `<iframe class="bili_frame_item" id="bili_frame_${index}" src="https://live.bilibili.com/${id}" frameborder="0"></iframe>`
  })
  blHtml += '</div>'
  document.body.innerHTML = blHtml
}

showBiliRomes(245, 245)

Array.prototype.forEach.call(document.querySelectorAll('iframe'), ele => {
  ele.onload = function(){
    simpleInnerHtml(ele.id)
  }
})

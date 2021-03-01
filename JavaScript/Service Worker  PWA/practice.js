window.onload = function () {
  if ('serviceWorker' in navigator) {
    $('#isSupport').text('支持')
    console.log('支持')
  
    navigator.serviceWorker.register('./sw-dome.js', { scope: './' })
      .then(registration => {
        $('#isSuccess').text('注册成功')
  
        let serviceWorker = null
  
        if (registration.installing) {
          serviceWorker = registration.installing
          $('#state').text('installing')
        } else if (registration.waiting) {
          serviceWorker = registration.waiting
          $('#state').text('waiting')
        } else if (registration.active) {
          serviceWorker = registration.active
          $('#state').text('active')
        }
  
        if (serviceWorker) {
          $('#swState').text(serviceWorker.state)
          serviceWorker.addEventListener('statechange', (e) => {
            $('#swState').append('&emsp;状态变化为' + e.target.state)
          })
        }
      })
      .catch(e => {
        $('#isSuccess').text('注册失败')
        console.log(e)
      })
  } else {
    $('#isSupport').text('不支持')
    console.log('不支持')
  }
}
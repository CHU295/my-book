不多BB看代码，不懂问我



\`\`\`

let c = document.getElementById\("canvas"\)

let canvas = document.createElement\("canvas"\)

let availHeight = document.documentElement.clientHeight

let off = availHeight - 400

canvas.height = '350'

canvas.width = c.clientWidth

c.appendChild\(canvas\)

let dr = canvas.getContext\('2d'\)

dr.strokeStyle = 'blue'

canvas.addEventListener\('touchstart',\(e\)=&gt;{

  dr.beginPath\(\)

  dr.moveTo\(e.changedTouches\["0"\].pageX,e.changedTouches\["0"\].pageY-off\)

}\)

canvas.addEventListener\('touchmove',\(e\)=&gt;{

  dr.lineTo\(e.changedTouches\[0\].pageX, e.changedTouches\[0\].pageY-off\)

  dr.stroke\(\)

}\)

canvas.addEventListener\('touchend',\(e\)=&gt;{

  dr.closePath\(\)

}\)

\`\`\`

生成图片



\`\`\`

let img = document.querySelector\('canvas'\).toDataURL\(\)

\`\`\`

如需发送给后端，可以让后端支持base64或者blob、buffer


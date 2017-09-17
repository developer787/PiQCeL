export default (ctx, vw, vh)=>{
	ctx.beginPath()
  ctx.arc(vw * 0.5, vh * 0.5, vw * 0.4, Math.PI * 2, 0,)
	ctx.fillStyle = 'rgb(34, 240, 200)'
	ctx.strokeStyle = '#ff4567'
	ctx.stroke()
	ctx.fill()
}

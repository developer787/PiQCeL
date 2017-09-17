export default (ctx, vw, vh)=>{
	ctx.beginPath()
	ctx.moveTo(vw / 2, vh / 2)
	ctx.lineTo(vw / 2, vh / 4)
	ctx.lineTo(vw / 4, vh / 4)
	ctx.closePath()
	ctx.fillStyle = 'rgb(34, 56, 200)'
	ctx.strokeStyle = '#ff4567'
	ctx.stroke()
	ctx.fill()
}

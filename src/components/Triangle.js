export default (ctx, vw, vh)=>{
	ctx.beginPath()
	ctx.moveTo(vw / 2, vh / 2)
	ctx.lineTo(vw / 2, vh / 4)
	ctx.strokeStyle = '#ff4567'
	ctx.stroke()
}

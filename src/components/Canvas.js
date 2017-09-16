import React from 'react'
import Triangle from './Triangle'
import DPI from 'canvas-dpi-scaler'


class Canvas extends React.Component {
	componentDidMount() {
		this.updateCanvas()
	}
	componentDidUpdate(){
		this.updateCanvas()
	}
	updateCanvas() {
		const audio = new (window.AudioContext || window.webkitAudioContext)()
		const ctx = this.refs.canvas.getContext('2d')
		const canvas = this.refs.canvas
		const mouse = new MouseEvent(canvas)
		const vw = window.innerWidth
		const vh = window.innerHeight
		const ratio = DPI(canvas, ctx, vw, vh)
		console.log(ratio)
		if(ratio === 1){
			canvas.width = vw
			canvas.height = vh
		}
		const diagonalTop = ()=>{
			ctx.beginPath()
			ctx.moveTo(0, 0)
			ctx.lineTo(vw, vh)
			ctx.strokeStyle = '#34cadf'
			ctx.stroke()
		}

		requestAnimationFrame(function gameLoop() {
			ctx.clearRect(0, 0, vw, vh)
			// Start drawing
			  diagonalTop()
			  Triangle(ctx, vw, vh)

			// End Drawing
			requestAnimationFrame(gameLoop)
		})
	}
	render() {
		return (
			<canvas ref="canvas"/>
		)
	}
}



export default Canvas

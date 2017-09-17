import { renderTime } from '../utilities'
export default (ctx, vw, vh, audio, mouse) => {
	ctx.arc(vw / 2, vh / 2, vw * 0.4, 0, 5)
	renderTime()
	
}    

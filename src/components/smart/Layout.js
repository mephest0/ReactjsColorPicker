import React from 'react'
import { connect } from 'react-redux'

import Slider from '../dumb/Slider'
import ColorBox from '../dumb/ColorBox'
import SavedColors from './SavedColors'

import { addSavedColor, changeHue, changeLight } from '../../actions'

@connect((store) => {
	return {
		hue: store.hue,
		light: store.light,
		colors: store.colors
	};
})
export default class Layout extends React.Component {
	changeHue(hue) {
		this.props.dispatch(changeHue(hue));
	}

	changeLight(light) {
		this.props.dispatch(changeLight(light));
	}

	onClickSave() {
		this.props.dispatch(addSavedColor({ "hue": this.props.hue, "light": this.props.light}));
	}

	render() {				
		return (
			<div style={{
						border: "3px solid black",
						padding: "10px",
						width: "600px",
						background: "#ccc"
					}}>

				<h1>&amp;nbsp;</h1>
				<p>Move sliders to change hue and light, click preview to save color, saved colors are shown along with some pre-defined examples</p>
					
				Hue <Slider 
					max="255"
					changeValue={this.changeHue.bind(this)} 
					value={this.props.hue} />

				Light <Slider 
					max="100"
					changeValue={this.changeLight.bind(this)} 
					value={this.props.light} />
				
				<ColorBox
					onClick={this.onClickSave.bind(this)}
					light={this.props.light}
					hue={this.props.hue} /> 

				<SavedColors />
				
				<footer style={{ clear: "both" }}>
					<center><small>by Peter Conradsen</small></center>
				</footer>				
			</div>
		);
	}
}
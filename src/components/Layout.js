import React from 'react';
import { connect } from 'react-redux';

import Slider from './Slider';
import ColorBox from './ColorBox';
import SavedColor from './SavedColor';
import SavedColors from './SavedColors';

import { addSavedColor, changeHue } from '../js/actions'

@connect((store) => {
	return {
		hue: store.hue,
		colors: store.colors
	};
})
export default class Layout extends React.Component {
	changeHue(hue) {
		this.props.dispatch(changeHue(hue));
	}

	onClickSave() {
		this.props.dispatch(addSavedColor(this.props.hue));
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
				<p>Move slider to change hue, click preview to save color, saved colors are shown along with some pre-defined examples</p>
					
				<Slider 
					changeValue={this.changeHue.bind(this)} 
					hue={this.props.hue} />
				
				<ColorBox
					onClick={this.onClickSave.bind(this)}
					hue={this.props.hue} /> 

				<SavedColors />
				
				<footer style={{ clear: "both" }}>
					<center><small>by Peter Conradsen</small></center>
				</footer>				
			</div>
		);
	}
}
import React from 'react';

import Slider from './Slider';
import ColorBox from './ColorBox';
import SavedColor from './SavedColor';

export default class Layout extends React.Component {
	constructor() {
		super();

		this.state = {
			hue: 255,

			colors: this.getDefaultColors()
		};
	}

	getDefaultColors() {
		let numbers = [];
		for (let i = 0; i <= 255; i += 17)
			numbers.push({"hue": i});

		return numbers;
	}

	changeHue(hue) {
		this.setState({
			hue: hue,
		});
	}

	onClickSave() {
		let moreColors = this.state.colors.slice();
		moreColors.push({"hue": this.state.hue});

		this.setState({colors: moreColors});
	}

	render() {
		const colorsList = this.state.colors.map((color) =>
			<SavedColor 
				changeValue={this.changeHue.bind(this)} 
				hue={color.hue} />);

		return (
			<div style={{
						border: "3px solid black",
						padding: "10px",
						width: "600px"
					}}>

				<h1>&amp;nbsp;</h1>
				<Slider 
					changeValue={this.changeHue.bind(this)} 
					hue={this.state.hue} /> 

				<button onClick={this.onClickSave.bind(this)}>Save</button>

				<ColorBox
					hue={this.state.hue} />
				{colorsList}
				
			</div>
		);
	}
}
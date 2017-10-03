import React from 'react';

import Slider from './Slider';
import ColorBox from './ColorBox';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			hue: 255,
		};
	}

	changeHue(hue) {
		this.setState({
			hue: hue,
		});
	}

	render() {
		return (
			<div>
				<h1>&amp;nbsp;</h1>
				<Slider 
					changeHue={this.changeHue.bind(this)} 
					hue={this.state.hue} /> 
				<ColorBox
					hue={this.state.hue} />
			</div>
		);
	}
}
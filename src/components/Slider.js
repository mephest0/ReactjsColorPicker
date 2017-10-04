import React from 'react';

import Shower from './Shower';

export default class Slider extends React.Component {
	handleChange(e) {
		const newHue = e.target.value;
		//console.log(newHue);
		this.props.changeValue(newHue);
	}

	render() {
		return (
			<div>
				<input 
					id="finder"
					type="range" 
					min="0"
					max="255"
					value={this.props.hue}
					onChange={this.handleChange.bind(this)} /> 
				<Shower 
					toShow={this.props.hue} />
			</div>
		);
	}
}
import React from 'react'

import Shower from './Shower'

export default class Slider extends React.Component {
	handleChange(e) {
		const newHue = e.target.value;
		this.props.changeValue(newHue);
	}

	render() {
		return (
			<div>
				<input 
					style={{ width: "400px" }}
					id="finder"
					type="range" 
					min="0"
					max={this.props.max}
					value={this.props.value}
					onChange={this.handleChange.bind(this)} /> 
				<Shower 
					toShow={this.props.value} />
			</div>
		);
	}
}


import React from 'react';

var Color = require('color');

export default class ColorBox extends React.Component {
	render() {
		const c = Color('hsl(' + this.props.hue + ', 100%, 50%)');
		
		return (
			<div
				style={{backgroundColor: c, 
					border: "3px solid black",
					height: "50px", 
					width: "50px"}}>
			</div>
		)
	}
}
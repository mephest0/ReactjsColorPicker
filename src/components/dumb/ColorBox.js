import React from 'react'

var Color = require('color');

export default class ColorBox extends React.Component {
	render() {
		const c = Color('hsl(' + this.props.hue + ', 100%, ' + this.props.light + '%)');
		
		return (
			<div
				onClick={this.props.onClick.bind(this)}
				style={{backgroundColor: c, 
					border: "2px solid black",
					height: "50px", 
					width: "50px"}}>
			</div>
		);
	}
}
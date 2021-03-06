import React from 'react'

var Color = require('color');

export default class SavedColor extends React.Component {
	clickMe(e) {
		this.props.changeValue({ "hue": this.props.hue, "light": this.props.light});
	}

	render() {
		const c = Color('hsl(' + this.props.hue + ', 100%, ' + this.props.light + '%)');

		return (
			<div
				onClick={this.clickMe.bind(this)}
				style={{backgroundColor: c, 
					float: "left",
					marginTop: "3px",
					marginRight: "3px",
					border: "2px solid black",
					height: "20px", 
					width: "20px"}}>
				
			</div>
		);
	}
}
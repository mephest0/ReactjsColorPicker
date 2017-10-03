import React from 'react';

export default class Shower extends React.Component {
	render() {
		return (
			<span>{this.props.toShow}</span>
		);
	}
}
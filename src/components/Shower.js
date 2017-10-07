import React from 'react';

export default class Shower extends React.Component {
	render() {
		return (
			<small>{this.props.toShow}</small>
		);
	}
}
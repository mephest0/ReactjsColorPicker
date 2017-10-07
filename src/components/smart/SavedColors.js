import React from 'react'
import { connect } from 'react-redux'

import SavedColor from '../dumb/SavedColor'
import { changeHue } from '../../actions'

@connect(store => {
	return {
		colors: store.colors,
	}
})
export default class SavedColors extends React.Component {
	clickedColor(val) {
		this.props.dispatch(changeHue(val));
	}

	render() {
		const mappedColors = this.props.colors.map(
			color => <SavedColor 
				key={color.key}
				hue={color.hue} 
				changeValue={this.clickedColor.bind(this)} />);

		return (
			<div>
				{mappedColors}
			</div>
		);
	}
}
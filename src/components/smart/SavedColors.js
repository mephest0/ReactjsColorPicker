import React from 'react'
import { connect } from 'react-redux'

import SavedColor from '../dumb/SavedColor'
import { changeHue, changeLight } from '../../actions'

@connect(store => {
	return {
		colors: store.colors,
	}
})
export default class SavedColors extends React.Component {
	clickedColor(val) {
		this.props.dispatch(changeHue(val.hue));
		this.props.dispatch(changeLight(val.light));
	}

	render() {
		const mappedColors = this.props.colors.map(
			color => <SavedColor 
				key={color.key}
				hue={color.hue} 
				light={color.light}
				changeValue={this.clickedColor.bind(this)} />);

		return (
			<div>
				{mappedColors}
			</div>
		);
	}
}
import { combineReducers } from "redux"

const hueReducer = (state=0, action) => {
	switch (action.type) {
		case "CHANGE_HUE": 
			return action.data;

		default:
			return state;
	}
}

const colorsReducer = (state=getDefaultColors(), action) => {
	switch (action.type) {
		case "ADD_SAVED_COLOR":
			return [...state, {
				"hue": action.data,
				"key": state.length
			}];
		default:
			return state;
	}
	return state;
}

export default combineReducers({
	hue: hueReducer,
	colors: colorsReducer
});

function getDefaultColors() {
	let numbers = [];
	for (let i = 0; i <= 255; i += 12)
		numbers.push({"hue": i, "key": numbers.length});

	return numbers;
}
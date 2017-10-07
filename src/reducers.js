import { combineReducers } from "redux"

const lightReducer = (state = 50, action) => {
	switch (action.type) {
		case "CHANGE_LIGHT":
			return action.data;
		
		default:
			return state;
	}
}

const hueReducer = (state=0, action) => {
	console.log(action);
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
				"hue": action.data.hue,
				"light": action.data.light,
				"key": state.length
			}];
		default:
			return state;
	}
	return state;
}

export default combineReducers({
	light: lightReducer,
	hue: hueReducer,
	colors: colorsReducer
});

function getDefaultColors() {
	let numbers = [];
	for (let i = 0; i <= 255; i += 12)
		numbers.push({"hue": i, "light": 50, "key": numbers.length});

	return numbers;
}
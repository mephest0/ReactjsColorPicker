export function changeHue(val) {
	return {
		type: "CHANGE_HUE",
		data: val
	};
}

export function addSavedColor(val) {
	return {
		type: "ADD_SAVED_COLOR",
		data: val
	};
}
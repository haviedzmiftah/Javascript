// state.js - State management
let currentState = "semua";
let searchTerm = "";
let sortState = "default";

const stateConfig = {
	semua: {
		getData: () => produk,
		button: document.querySelector("#semua"),
	},
	tersedia: {
		getData: () => produk.filter((item) => item.stok > 0),
		button: document.querySelector("#tersedia"),
	},
	habis: {
		getData: () => produk.filter((item) => item.stok === 0),
		button: document.querySelector("#habis"),
	},
};

function setState(nextState) {
	currentState = nextState;
	render();
}

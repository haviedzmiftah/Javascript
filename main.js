// main.js
import { fetchProduk } from "./data.js";
import { setState, setSearch, setSort, toggleDarkMode, getProcessedData } from "./state.js";
import { renderList, setActiveButton, updateDarkMode } from "./ui.js";

async function init() {
	try {
		await fetchProduk();
		render();
	} catch (e) {
		document.querySelector("#list").innerHTML = e.message;
	}
}

function render() {
	const data = getProcessedData();
	renderList(data);
	updateDarkMode();
}

function debounce(fn, delay = 300) {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
}

const handleSearch = debounce((value) => {
	setSearch(value);
	render();
}, 500);

document.querySelector("#semua").onclick = () => {
	setState("semua");
	setActiveButton("#semua");
	render();
};

document.querySelector("#tersedia").onclick = () => {
	setState("tersedia");
	setActiveButton("#tersedia");
	render();
};

document.querySelector("#habis").onclick = () => {
	setState("habis");
	setActiveButton("#habis");
	render();
};

document.querySelector("#search").oninput = (e) => {
	handleSearch(e.target.value.toLowerCase());
};

document.querySelector("#termurah").onclick = () => {
	setSort("termurah");
	render();
};

document.querySelector("#termahal").onclick = () => {
	setSort("termahal");
	render();
};

document.querySelector("#terbanyak").onclick = () => {
	setSort("terbanyak");
	render();
};

document.querySelector("#resetSort").onclick = () => {
	setSort("default");
	render();
};

document.querySelector("#toggleDark").onclick = () => {
	toggleDarkMode();
	render();
};

document.querySelector("#list").addEventListener("click", (e) => {
	if (e.target.id === "retry") {
		init();
	}
});

init();

// ui.js - UI processing and rendering
function processData() {
	let data = stateConfig[currentState].getData();
	if (searchTerm) {
		data = data.filter((item) => item.nama.toLowerCase().includes(searchTerm));
	}
	if (sortState === "termurah") {
		data = [...data].sort((a, b) => a.harga - b.harga);
	} else if (sortState === "termahal") {
		data = [...data].sort((a, b) => b.harga - a.harga);
	} else if (sortState === "terbanyak") {
		data = [...data].sort((a, b) => b.stok - a.stok);
	}
	return data;
}

function renderUI(data) {
	const ul = document.querySelector("#list");

	if (isLoading) {
		ul.innerHTML = "<li>Loading...</li>";
		return;
	}

	if (error) {
		ul.innerHTML = `<li>Error: ${error}</li><button id="retry">Retry</button>`;
		return;
	}

	if (data.length === 0) {
		ul.innerHTML = "<li>Tidak ada Produk ditemukan</li>";
		return;
	}

	ul.innerHTML = data
		.map((item) => `<li>${item.nama} - ${item.harga} - ${item.stok}</li>`)
		.join("");
}

function render() {
	const data = processData();
	renderUI(data);

	Object.values(stateConfig).forEach((config) =>
		config.button.classList.remove("active")
	);
	stateConfig[currentState].button.classList.add("active");

	document
		.querySelector("#search")
		.classList.toggle("active", searchTerm !== "");

	const sortButtons = ["termurah", "termahal", "terbanyak"];
	sortButtons.forEach((id) =>
		document.querySelector(`#${id}`).classList.remove("active")
	);
	if (sortState !== "default") {
		document.querySelector(`#${sortState}`).classList.add("active");
	}
}

render();

// Event listeners
function debounce(fn, delay = 300) {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
}

const handleSearch = debounce((value) => {
	searchTerm = value;
	render();
}, 500);

document.querySelector("#search").addEventListener("input", (e) => {
	handleSearch(e.target.value.toLowerCase());
});

document
	.querySelector("#semua")
	.addEventListener("click", () => setState("semua"));
document
	.querySelector("#tersedia")
	.addEventListener("click", () => setState("tersedia"));
document
	.querySelector("#habis")
	.addEventListener("click", () => setState("habis"));

document.querySelector("#termurah").addEventListener("click", () => {
	sortState = "termurah";
	render();
});

document.querySelector("#termahal").addEventListener("click", () => {
	sortState = "termahal";
	render();
});

document.querySelector("#terbanyak").addEventListener("click", () => {
	sortState = "terbanyak";
	render();
});

document.querySelector("#list").addEventListener("click", (e) => {
	if (e.target.id === "retry") {
		fetchProduk();
	}
});

import { isLoading, error } from "./data.js";
import { isDarkMode } from "./state.js";

export function renderList(data) {
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
		ul.innerHTML = "<li>Tidak ada produk ditemukan.</li>";
		return;
	}

	ul.innerHTML = data
		.map((i) => `<li>${i.nama} - ${i.harga} - Stok: ${i.stok}</li>`)
		.join("");
}

export function setActiveButton(selector) {
	document.querySelectorAll(".button").forEach((btn) => {
		btn.classList.remove("active");
	});

	document.querySelector(selector)?.classList.add("active");
}

export function updateDarkMode() {
	document.body.classList.toggle("dark", isDarkMode);
}

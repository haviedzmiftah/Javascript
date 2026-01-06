import { produk } from "./data.js";

export let state = "semua";
export let searchTerm = "";
export let sortState = "default";
export let isDarkMode = false;

export function setState(next) {
	state = next;
}

export function setSearch(value) {
	searchTerm = value;
}

export function setSort(value) {
	sortState = value;
}

export function toggleDarkMode() {
	isDarkMode = !isDarkMode;
}

function filterByState(data) {
	if (state === "tersedia") {
		return data.filter((item) => item.stok > 0);
	} else if (state === "habis") {
		return data.filter((item) => item.stok === 0);
	}
	return data;
}

function filterBySearch(data) {
	if (searchTerm) {
		return data.filter((item) => item.nama.toLowerCase().includes(searchTerm));
	}
	return data;
}

function sortData(data) {
	if (sortState === "termurah") {
		return [...data].sort((a, b) => a.harga - b.harga);
	} else if (sortState === "termahal") {
		return [...data].sort((a, b) => b.harga - a.harga);
	} else if (sortState === "terbanyak") {
		return [...data].sort((a, b) => b.stok - a.stok);
	}
	return data;
}

export function getProcessedData() {
	let data = filterByState(produk);
	data = filterBySearch(data);
	data = sortData(data);
	return data;
}

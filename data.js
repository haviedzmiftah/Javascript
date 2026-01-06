// data.js - Data fetching
let isLoading = false;
let error = null;
let produk = [];

function fetchProdukFake() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = [
				{ nama: "Laptop", harga: 8000000, stok: 5 },
				{ nama: "Mouse", harga: 150000, stok: 20 },
				{ nama: "Keyboard", harga: 300000, stok: 0 },
			];
			if (Math.random() > 0.5) {
				resolve(data);
			} else {
				reject(new Error("Gagal mengambil data"));
			}
		}, 1000);
	});
}

async function fetchProduk() {
	isLoading = true;
	error = null;
	render();

	try {
		produk = await fetchProdukFake();
	} catch (e) {
		error = e.message;
	} finally {
		isLoading = false;
		render();
	}
}

fetchProduk();

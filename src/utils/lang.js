const navigations = {
	id: {
		appName: "Aplikasi Catatan",
		home: "Beranda",
		archives: "Arsip",
		btnAddNote: "Tambah Catatan",
		alertConfirmation: "Yakin ingin logout?",
		alertMessage: "Logout berhasil"
	},
	en: {
		appName: "Notes App",
		home: "Home",
		archives: "Archives",
		btnAddNote: "Add Note",
		alertConfirmation: "Are you sure to logout?",
		alertMessage: "Logout successful"
	}
};

const errorPage = {
	id: {
		message: "Maaf, halaman tidak ditemukan",
		btnText: "Kembali ke Beranda"
	},
	en: {
		message: "Oops, page not found",
		btnText: "Back to Home"
	}
};

const formsPage = {
	id: {
		login: {
			heading: "Login Akun",
			description: "Harap login untuk menggunakan aplikasi",
			infoText: "Belum punya akun",
			ctaText: "Daftar disini",
			alertMessage: "Login berhasil"
		},
		register: {
			heading: "Daftar Akun",
			description: "Isi form dibawah untuk mendaftarkan akun",
			infoText: "Sudah punya akun",
			ctaText: "Login disini",
			alertMessage: "Registrasi akun berhasil",
			alertConfirmPass: "Konfirmasi password tidak sesuai"
		}
	},
	en: {
		login: {
			heading: "Login Account",
			description: "Please login first to use the app",
			infoText: "Don't have an account",
			ctaText: "Register here",
			alertMessage: "Login successful"
		},
		register: {
			heading: "Register Account",
			description: "Fill the form below to register your account",
			infoText: "Already have an account",
			ctaText: "Login here",
			alertMessage: "Registration account successful",
			alertConfirmPass: "Confirmation password is not matching"
		}
	}
};

const addNotePage = {
	id: {
		heading: "Tambah Catatan",
		description: "Isi form dibawah untuk menambah catatan baru",
		alertMessage: "Berhasil menambahkan catatan"
	},
	en: {
		heading: "Add Note",
		description: "Fill the form below to add a new note",
		alertMessage: "Note successfully created"
	}
};

const notesPage = {
	id: {
		active: {
			heading: "Catatan Aktif",
			emptyText: "Tidak ada catatan"
		},
		archive: {
			heading: "Catatan Arsip",
			emptyText: "Catatan arsip kosong"
		},
		btnText: "Lihat Detail"
	},
	en: {
		active: {
			heading: "Active Notes",
			emptyText: "No notes found"
		},
		archive: {
			heading: "Archived Notes",
			emptyText: "No archived notes found"
		},
		btnText: "View Detail"
	}
};

const detailNotePage = {
	id: {
		btnDelete: "Hapus Catatan",
		btnArchive: "Arsipkan",
		btnUnarchive: "Batalkan Arsip",
		alertConfirmation: "Yakin ingin menghapus catatan ini?",
		alertMessage: "Catatan berhasil dihapus"
	},
	en: {
		btnDelete: "Delete Note",
		btnArchive: "Archive",
		btnUnarchive: "Undo Archive",
		alertConfirmation: "Are you sure to delete this note?",
		alertMessage: "Note successfully deleted"
	}
};

const searchInput = {
	id: {
		placeholder: "Cari berdasarkan judul..."
	},
	en: {
		placeholder: "Search by title..."
	}
};

export {
	navigations,
	errorPage,
	formsPage,
	addNotePage,
	notesPage,
	searchInput,
	detailNotePage
};

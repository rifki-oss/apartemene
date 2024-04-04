// Data apartemen
const apartments = [
    {
        id: 1,
        name: "Apartemen A",
        image: "apartment1.jpg",
        price: "$1000/mo"
    },
    {
        id: 2,
        name: "Apartemen B",
        image: "apartment2.jpg",
        price: "$1200/mo"
    },
    {
        id: 3,
        name: "Apartemen C",
        image: "apartment3.jpg",
        price: "$1500/mo"
    }
];

// Menampilkan data apartemen
const apartmentsContainer = document.getElementById("apartments");
apartments.forEach(apartment => {
    const apartmentDiv = document.createElement("div");
    apartmentDiv.classList.add("apartment");

    const apartmentImg = document.createElement("img");
    apartmentImg.src = apartment.image;
    apartmentImg.alt = apartment.name;

    const apartmentName = document.createElement("h3");
    apartmentName.textContent = apartment.name;

    const apartmentPrice = document.createElement("p");
    apartmentPrice.textContent = "Harga: " + apartment.price;

    apartmentDiv.appendChild(apartmentImg);
    apartmentDiv.appendChild(apartmentName);
    apartmentDiv.appendChild(apartmentPrice);

    apartmentsContainer.appendChild(apartmentDiv);
});

// Fitur Login
const loginForm = document.createElement("form");
loginForm.innerHTML = `
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button type="button" onclick="login()">Login</button>
`;

document.body.insertBefore(loginForm, document.body.firstChild);

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Ganti dengan logika login sesuai kebutuhan Anda
    if (username === "user" && password === "password") {
        alert("Login berhasil!");
    } else {
        alert("Login gagal. Coba lagi!");
    }
}

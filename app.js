const denominations = [1, 2, 5, 10, 20];
const buttons = document.querySelectorAll(".apoen");
const app = document.querySelector(".app");
const toggleButton = document.querySelector(".toggle-apoeni");
const totalBox = document.querySelector(".box");
const countElements = {
    1: document.querySelector(".one"),
    2: document.querySelector(".two"),
    5: document.querySelector(".five"),
    10: document.querySelector(".ten"),
    20: document.querySelector(".twenty"),
};
const resetButton = document.querySelector(".reset");
let areDenominationsVisible = true;

const wallet = {
    total: 0,
    counts: {
        1: 0,
        2: 0,
        5: 0,
        10: 0,
        20: 0,
    },
};

function renderWallet() {
    totalBox.textContent = `${wallet.total} KM`;

    denominations.forEach((value) => {
        countElements[value].textContent = wallet.counts[value];
    });
}

function addDenomination(value) {
    wallet.total += value;
    wallet.counts[value] += 1;
    renderWallet();
}

function resetWallet() {
    wallet.total = 0;

    denominations.forEach((value) => {
        wallet.counts[value] = 0;
    });

    renderWallet();
}

buttons.forEach((button) => {
    const value = Number(button.dataset.value);

    button.addEventListener("click", () => {
        addDenomination(value);
    });
});

resetButton.addEventListener("click", resetWallet);
toggleButton.addEventListener("click", () => {
    areDenominationsVisible = !areDenominationsVisible;
    app.classList.toggle("hidden", !areDenominationsVisible);
    toggleButton.textContent = areDenominationsVisible ? "Sakrij apoene" : "Prikazi apoene";
});

renderWallet();

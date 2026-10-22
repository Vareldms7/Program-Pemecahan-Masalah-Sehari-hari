const form = document.getElementById('calculator-form');
const fuelTypeSelect = document.getElementById('fuelType');
const customPriceGroup = document.getElementById('customPriceGroup');
const customPriceInput = document.getElementById('customPrice');
const resultCard = document.getElementById('result-card');
const btnReset = document.getElementById('btn-reset');

const resFuelNeeded = document.getElementById('res-fuel-needed');
const resTotalCost = document.getElementById('res-total-cost');
const resCostPerPerson = document.getElementById('res-cost-per-person');

fuelTypeSelect.addEventListener('change', function () {
    if (this.value === 'custom') {
        customPriceGroup.classList.remove('hidden');
        customPriceInput.setAttribute('required', 'required');
    } else {
        customPriceGroup.classList.add('hidden');
        customPriceInput.removeAttribute('required');
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
    const passengers = parseInt(document.getElementById('passengers').value);

    let pricePerLiter = 0;
    if (fuelTypeSelect.value === 'custom') {
        pricePerLiter = parseFloat(customPriceInput.value);
    } else {
        pricePerLiter = parseFloat(fuelTypeSelect.value);
    }

    // Validasi input
    if (distance <= 0 || fuelConsumption <= 0 || pricePerLiter <= 0 || passengers <= 0) {
        alert('Harap masukkan nilai yang valid dan lebih besar dari 0.');
        return;
    }

    const fuelNeeded = distance / fuelConsumption;

    const totalCost = fuelNeeded * pricePerLiter;

    const costPerPerson = totalCost / passengers;

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(number);
    };

    resFuelNeeded.textContent = `${fuelNeeded.toFixed(2)} Liter`;
    resTotalCost.textContent = formatRupiah(totalCost);
    resCostPerPerson.textContent = formatRupiah(costPerPerson);

    resultCard.classList.remove('hidden');
});

btnReset.addEventListener('click', function () {
    form.reset();
    customPriceGroup.classList.add('hidden');
    resultCard.classList.add('hidden');
});
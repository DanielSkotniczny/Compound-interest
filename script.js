const inputCapital = document.querySelector('#capital')
const inputRate = document.querySelector('#rate')
const inputN = document.querySelector('#n')
const inputYears = document.querySelector('#num-years')
const btnCal = document.querySelector('#btn-cal')
const btnReset = document.querySelector('#btn-reset')
const result = document.querySelector('#result')

function calculate() {
	let capital = inputCapital.value
	let rate = inputRate.value
	let n = inputN.value
	let years = inputYears.value

	let final = capital * Math.pow(1 + rate / n, n * years)

	result.textContent = `Wartość końcowa: ${Math.floor(final)} zł`
	result.classList.add('new-style')
}

function reset() {
	inputCapital.value = '3000'
	inputRate.value = '0.05'
	inputN.value = '12'
	inputYears.value = '6'
	result.textContent = ``
}

btnCal.addEventListener('click', calculate)
btnReset.addEventListener('click', reset)

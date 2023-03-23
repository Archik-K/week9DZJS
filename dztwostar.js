let sum = document.querySelector(".sum").value;
const button = document.querySelector(".button");
const total = document.querySelector(".total");

let interestRate = 18.5;

const deposit = "30000";

const growth = "150";

const currency = "руб";

let message;

interestRate = 7;

console.log(
	`Ваш депозит на начало расчетного периода составлял ${
		deposit + " " + currency
	}.`
); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(
	`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`
); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(
	`К концу расчетного периода прирост составил ${
		growth + " " + currency
	}., и на данный момент ваш депозит составляет ${30150 + " " + currency}.`
); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener("click", () => {
	sum = document.querySelector(".sum");
	message = `Через год у вас будет ${
		(+sum.value / 100) * interestRate + +sum.value
	} руб. на счету, где вместо  выведите сколько получится на счету с учетом процентной ставки 7% годовых`;
	total.textContent = message; // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});
console.log();

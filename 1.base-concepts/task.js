"use strict";

//1 

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c; // вычисление дискриминанта
  if (d < 0) {
    return []; // если дискриминант меньше нуля, то корней нет. Возвращаем пустой массив
  } else if (d === 0) {
    let x = -b / (2 * a); // один корень, вычисляем его
    return [x]; // возвращаем массив с одним корнем
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a); // первый корень
    let x2 = (-b - Math.sqrt(d)) / (2 * a); // второй корень
    return [x1, x2]; // возвращаем массив с двумя корнями
  }
} 

//2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isFinite(percent) || !isFinite(contribution) || !isFinite(amount) || !isFinite(countMonths)) {
    return false; // если хоть одно из значений не является числом или бесконечностью, вернуть false
  }
  percent = Number(percent); // преобразование в число
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  let bodyCredit = amount - contribution; // тело кредита
  percent = percent / 100; // перевод процентной ставки из диапазона от 0 до 100 в диапазон от 0 до 1
  let monthlyPercent = percent / 12; // перевод процентной годовой ставки в месячную
  let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)); // ежемесячный платеж
  let totalAmount = monthlyPayment * countMonths; // общая сумма
  totalAmount = parseFloat(totalAmount.toFixed(2)); // округление до двух знаков после запятой
  return totalAmount;
}


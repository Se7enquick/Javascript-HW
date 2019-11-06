var exercises = prompt('Введите название задания:',"");
switch(exercises)
{
    
case '1.1':
  alert('Скрипт должен вывести в консоль все числа больше 50')
    
var numbers = [254, 115, 78, 25, 91, 45, 37]
for( let i in numbers ) 
{
  if ( numbers[i] > 50 ) 
  {
    console.log(numbers[i])
  }   
}

break;


case '1.2':
  alert('Найдите минимальное число и отобразите на экране имя переменной и ее значение.')

let obj = {a: 3, b: 10, c: 20}
let minValue = Math.min(Object.values(obj))
let minKey = Object.keys(obj).find(k => obj[k] === minValue)
console.log(minKey + '=' + minValue)

break;

case '1.3':
  alert('В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, через console.warn выводится “Выслать повестку”.')

let age = prompt('Введите ваш возраст: ')
if( age >= 20 && age < 27)
{
  console.warn('Выслать повестку')
}

break;

case '1.4(1)':
  alert('В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в console.log сообщение о необходимости идти на работу.')

//Тернарка
let day1 = new Date()
let date = day1.getDay()
let result1 = (day1 !=6 && day1 !=7)? 'Иди на работу' : 'Отдыхай, сегодня выходной' 
console.log(result1)

break;

case '1.4(2)':
  alert('В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в console.log сообщение о необходимости идти на работу.')

//Через if
let day = new Date()
let result = day.getDay()
if(day !=6 && day !=7)
{
    alert('Иди на работу')
}

break;

case '1.5':
  alert('Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика')
var str = ''; 
let i = 0;
for (i; i <= 10; i++ )
{
  if ( i % 2 == 0)
  {
    str += ".";
  } 
  else 
  { 
    str += "#"; 
  }
  console.log(str)
}
case '1.7':
  alert('Напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:')

let username = prompt('Как вас зовут?')
alert('С Днём рождения, ' + (username) )

break;



case '1.8':
  alert('Написать FizzBuzz')


for( let num = 0; num < 51; num++) 
{
   if (num % 3 == 0 && num % 5 == 0)
   {
      console.log("FizzBuzz")
   } 
   else if (num % 3 == 0)
   {
     console.log('Fizz')
   }
   else if ( num % 5 == 0)
   {
     console.log('Buzz');
   }
   else 
   { 
     console.log(num + ' ')
   }
}

break;

case '1.9':
  alert('Курение убивает')

let firstValue = prompt('Сколько сигарет вы за сегодня выкурили? ')
if(isNaN(firstValue) == false)
{
    let partialResult = firstValue * 330
    let partialResult2 = partialResult / 60
    let generalResult = alert('Поздравляю, вы укоротили свою жизнь на ' + (partialResult2) + ' минут(ы)' )
}
else {

    alert('Вы ввели не число')
}

break;
}
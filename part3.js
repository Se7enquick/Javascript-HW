/*3.2Выведите столбец чисел от 1 до 50. через do while
50 включительно*/
let numBer = 0
do {
  console.log(numBer);
  numBer++;
}
while(numBer <= 50)
break;

/*3.2 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. Через for of*/
let d1 = [1,2,3,4,5]
for (element of d1){
    console.log(element)
}

/*3.3 Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of*/
var arr = [2, 3, 4, 5]; 
var result = 1;
for ( let value of arr) 
{
  result *= value
  console.log(result)
}

/*3.4 Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
*/
var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
   };
for (key in obj){
    console.log(key + ' Это-' + obj[key])

}

/*3.5 Выведите столбец четных чисел в промежутке от 0 до 100. через while */

let result1 = 1
while ( result1 < 100)
{
    result1++;
    if(result1 % 2 == 0)
    {
        console.log(result1)
    }
    
}

/*3.6 Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. 
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'} */

var obj1 = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (key in obj1){
    console.log(key + '-' + obj1[key])
}

/* 3.7 Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/
let massive = [2,5,9,15,0,4]
for (let i = 0; i < massive.length; i++){
    if(massive[i] > 3 && massive[i] <10)
    {
        console.log(massive[i])
    }
}

/* 3.8 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */
let array = [3,5,-2,6,-4,23,12,-5]
let result = 0
for ( let i = 0; i < array.length; i++ )
{
    if(array[i] > 0)
    {
        result += array[i]
        console.log(result)
    }
}

/* 3.9 Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - пропускаем итерацию*/
let array = [1,2,5,9,4,13,4,10]
for (i = 0; i < array.length; i++)
{
    if(array[i] == 4)
    {
        console.log('Есть')
    }
}

/*3.10 Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */
let array = ['1', '2', '5', '9', '4', '13', '4', '10']
array.forEach((item) => 
{
    if (item.startsWith('1') || item.startsWith('2') || item.startsWith('5')) 
    {
        console.log(item)
    }
})

/*3.11  Возведите 2 в 10 степень. Результат запишите в переменную st */
let number = 2
let result = number ** 10;
console.log(result)

/*3.12 Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. (посмотрите replace например)*/
let str = 'aaa@bbb@ccc'
let result = str.replace(/@/g, '!')
console.log(result)

/*3.13 Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).*/
let str = 'aaa bbb ccc'
let result1 = str.substr(3,5)
let result2 = str.substring(3,7)
let result3 = str.slice(3,7)
console.log(result3)
console.log(result2)
console.log(result1)

/*3.14  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.*/


/*3.15 Дана строка 'js'. Сделайте из нее строку 'JS'.*/
let str = 'js'
let result = str.toUpperCase()
console.log(result)

/*3.16 Дана строка 'JS'. Сделайте из нее строку 'js'. */..
let str = 'JS'
let result = str.toLowerCase()
console.log(result)

/*3.17 Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. */
let str  = 'Я учу javascript'
alert(str.length)

/*3.18 Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). */
let str = 'я учу javascript!'
let result1 = str.substr(2,4)
let resultOne = str.substr(6,16)
console.log(result1 + resultOne)
let result2 = str.substring(2,5)
let resultTwo = str.substring(6,18)
console.log(result2 + ' ' + resultTwo)
let result3 = str.slice(2,5)
let resultThree = str.slice(5,17)
console.log(result3 + resultThree)

/*3.19 Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.*/
let str = 'Я учу javascript!'
let result = str.indexOf('учу')
console.log(result)

/*3.20 Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.*/
let str = 'Я-учу-javascript!'
let result = str.replace(/-/g, '!')
console.log(result)

/*3.21 Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. */
let str = 'Я учу javascript!'
let result = str.split(' ')
console.log(result)

/*3.22 Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. */
let str = 'Я учу javascript!'
let result = str.split('')
console.log(result)

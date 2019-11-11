case '2.1':
  alert('Вычисление суммы нечетных чисел от 0  до заданного числа')

  let firstNumber = 0
  let secondNumber = Number(prompt('Введите число: '))
  for (let i = 0; i <= secondNumber; i++){
    if(i % 2 == 1){
      firstNumber += i;
    }
  }
  console.log(firstNumber)

  break;

case '2.2':
  alert('Создайте переменную str и присвойте ей значение abcde. Обращаясь к отдельным символам этой строки выведите на экран символ a, символ b, символ e. ')
  
  let symbols = 'abcde'
  for ( element of symbols){
    if(element == 'a' || element == 'b' || element == 'e'){
      console.log('Я знаю это число')
    }
  }

  break;
case '2.3':
  alert('Подсчёт кол-ва секунд в часе')
  let userNumber = Number(prompt('Введите количество часов, что бы узнать, сколько секунд в часах: '))
  let res = userNumber * 3600
  console.log(res)

  break;

case '2.4':
  alert('Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться.')
  var num23 = 1;
  num23 += 12;
  num23 -= 14;
  num23 *= 5;
  num23 /= 7;
  num23++;
  num23--;
  alert(num23);  
  break; 

case '2.5':
  alert('Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.')
  let num22 = 3;
  alert(num22);
  break;
case '2.6':
  alert('Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления)')
  let a = 10;
  let b = 2;
  alert('a+b = ' + (a + b))
  alert('a-b = ' + (a - b))
  alert('a*b = ' + (a * b))
  alert('a/b = ' + (a / b))
  break;

case '2.7':
  alert('Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result')
  let c = 15;
  let d = 2;
  let result23 = c + d;
  alert(result23)
  break;

case '2.8':
  alert('Создайте переменную str и присвойте ей значение Привет, Мир!. Выведите сумму всех charCode этой переменной')

case '2.9':
  alert('Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение Ваше имя имя.')
  let yourName = prompt('Введите ваше имя')
  alert('Ваше имя ' + yourName)
  
  break;

case '2.10':
  alert('Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.')   
  let userNumber2 = prompt('Введите число, что бы получить его квадрат')
  alert(userNumber2 ** 2)
  
  break;

}
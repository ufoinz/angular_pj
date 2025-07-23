# Практика. Калькулятор на Angular ([Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.)

## Шаг 1: Установка клиента

Сначала я установил на свой пк ```Node.js```, после чего через ```cmd``` установил ```Angular CLI```.
Создал проект и запустил его: 
```bash
ng new angular-pj
npm start
```
И открыл в браузере по ссылке https://localhost:4200.

## Шаг 2: Предпросмотр проекта

![Angular Calculator](https://github.com/user-attachments/assets/f9951688-86d5-46e8-ab88-c5b847377bb9)
###### функционал калькулятора в gif


## Шаг 3: Написание кода

После открытия проекта в ```Visual Studio Code``` я создал компонент через терминал, в котором будет содержаться основной код калькулятора:

```bash
ng generate component newcomp
```
<img width="260" height="166" alt="image" src="https://github.com/user-attachments/assets/76b6c979-e95e-408b-9a28-ce8407a95fd0" />

### CSS: здесь я прописал внешний вид калькулятора, дисплея и кнопочек, а так же задал глобальный размер и цвет.

```styles.css```:
```bash
:root{
    --dark-colour: #000000;
    --light-colour: #FFFFFF;
    --gray-colour: #808080;
}

body{
    background-color:var(--dark-colour);
    color: var(--light-colour);
}
```

```newcomp.css```:

```bash
.row {
    border: 1px solid var(--light-colour );
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    text-align: center;
    font-size: 25px;
}

.display {
    border: 3px solid var(--light-colour );
    font-size: 25px;
}

.size {
  font-size: 2rem;
  padding: 15px;
  height: auto;
}

.btn {
    font-size: 25px;
    border: none;
    background: var(--gray-colour);
    color: var(--dark-colour);
    padding: 30px 20px;
    line-height: 30px;
}

.btn2 {
    font-size: 25px;
    border: none;
    background: darkgray;
    color: var(--dark-colour);
    padding: 30px 20px;
    line-height: 30px;
}

.btn3 {
    font-size: 25px;
    border: none;
    background: rgb(158, 98, 155);
    color: var(--dark-colour);
    padding: 30px 20px;
    line-height: 30px;
}
```


### HTML: тут прописал отображение дисплея, сами кнопки и задал им функционал

```bash
<div class="display">
       <input type="text" class="form-control size mb-3 text-right" [value]="display" readonly>
</div>

<div class="row">
    <button class="btn">
        <strong>%</strong>
    </button>

    <button class="btn">
        <strong>CE</strong>
    </button>

    <button class="btn" (click)="clear()">
        <strong>C</strong>
    </button>

    <button class="btn"  (click)="clearlast()">
        <strong>⌫</strong>
    </button>
</div>

<div class="row">
    <button class="btn">
        <strong>1∕x</strong>
    </button>

    <button class="btn" >
        <strong>х²</strong>
    </button>

    <button class="btn">
        <strong>√</strong>
    </button>

    <button class="btn" (click)="appendInput('/')">
        <strong>÷</strong>
    </button>
</div>

<div class="row">
    <button class="btn2" (click)="appendInput('7')">
        <strong>7</strong>
    </button>

    <button class="btn2" (click)="appendInput('8')">
        <strong>8</strong>
    </button>

    <button class="btn2" (click)="appendInput('9')">
        <strong>9</strong>
    </button>

    <button class="btn" (click)="appendInput('*')">
        <strong>×</strong>
    </button>
</div>

<div class="row">
    <button class="btn2" (click)="appendInput('4')">
        <strong>4</strong>
    </button>

    <button class="btn2" (click)="appendInput('5')">
        <strong>5</strong>
    </button>

    <button class="btn2" (click)="appendInput('6')">
        <strong>6</strong>
    </button>

    <button class="btn" (click)="appendInput('-')">
        <strong>-</strong>
    </button>
</div>

<div class="row">
    <button class="btn2" (click)="appendInput('1')">
        <strong>1</strong>
    </button>

    <button class="btn2" (click)="appendInput('2')">
        <strong>2</strong>
    </button>

    <button class="btn2" (click)="appendInput('3')">
        <strong>3</strong>
    </button>

    <button class="btn" (click)="appendInput('+')">
        <strong>+</strong>
    </button>
</div>

<div class="row">
    <button class="btn">
        <strong>+∕-</strong>
    </button>

    <button class="btn2" (click)="appendInput('0')">
        <strong>0</strong>
    </button>

    <button class="btn" (click)="appendInput('.')">
        <strong>,</strong>
    </button>

    <button class="btn3" (click)="calculate()">
        <strong>=</strong>
    </button>
</div>
```

### JavaScript: здесь прописал функции для работы кнопок

```bash
import { Component } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-newcomp',
  standalone: true,
  imports: [],


  templateUrl: './newcomp.html',
  styleUrl: './newcomp.css'
})
export class Newcomp {
  display: string = '';

  clear() {
    this.display = '';
  }

  clearlast(){
    this.display = this.display.slice(0, -1);
  }

  appendInput(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch(e) {
      this.display = 'Error';
    }
  }

  isOper() {
    this.display.match(/([^\+\-\*\/]+)$/);
    return true;
  }

  lenth() { //эксперементировал с нахождением длинны строки
            //чтобы попробовать сделать функцию для CE
    let last = this.isOper
    let len = this.display.length;
    this.display = '';
    this.display += len;
    let lenEnd = last ? last.length : 0;
  }

}
```










[Live link](https://myassignment-6-green-earth.netlify.app/)

# Green Earth

🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---

####   Answer the following question-


#### 1) What is the difference between var, let, and const?
#### Ans: 
<table border=1 width="100%" cellpadding="50">
<tr>
    <td >var</td>
    <td >let</td>
    <td >const</td>
 </tr>
    <tr>
    <td> It is updatable  </td>
    <td>It is updatable and not works for reuseable(value)</td>
    <td>It is not updatable but works reuseable(value)</td>
    
    </td>
    
 </tr>
  <tr>
    <td>It works old value if redeclare</td>
    <td>It allows for new value </td>
    <td>But it works only when value is fixed  </td>
    
 </tr>

</table>



#### 2) What is the difference between map(), forEach(), and filter()? 
#### Ans: 

<table border=1 width="100%" cellpadding="50">
<tr>
    <td >map()</td>
    <td >forEach()</td>
    <td >filter()</td>
 </tr>
    <tr>
    <td>map() creates a new array from calling a function for every array element.</td>
    <td>It is a looping process but cannot give new array after lopping</td>
    <td>It gives new array after fulfil or complete conditions</td>
    
    
 </tr>


</table>

#### 3) What are arrow functions in ES6?
#### Ans:  
In ES6,arrow function is a function where write a function easy and short way during a short time.
it represent like : ()=>
```js
const ph = () => ;
```


#### 4) How does destructuring assignment work in ES6?
#### Ans:  
In ES6 , destructing assignment is a way to find value from objects or array after getting value then assign directly with variable. It is a very simple way to find value

 ```js
const [f, h] = [1, 2];  
 f=1 ,h=2 
const {nme, age} = {nme: "Me", age: 22}; 
nme = "Me", age = 22
```

#### 5) Explain template literals in ES6. How are they different from string concatenation?
#### Ans:
In ES6 template literals is a update version of strings .But it declare with backticks (``).



Differences :

### 🔹String Concatenation 
- In strings concatenation you must needed "" and plus(+) symbol to join strings.
- Sometimes, it will more complex to read with when many variables.

```js
const num= "PH";
const wow = "Hello, " + num + "! KAKA.";
```

### 🔹Template Literals (ES6)

- In template literals , you need  backticks (``) where you can write any kind of strings.
- We can insert any kinds of variables by using this symbol ${ } .

```js
const num = "PH";
const wow = `Hello, ${num}! KAKA.`;
```















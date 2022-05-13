//#region 1
let doc = {
  title: '',
  body: '',
  footer: '',
  date: new Date().toString(),
  addition: {
    topic: '',
    body: '',
    footer: '',
    date: new Date().toString(),
  },
}
function title(value) {
  doc.title = value
  let title = document.createElement('h1')
  title.innerHTML = `${doc.title}`
  document.body.appendChild(title)
}
function body(value) {
  doc.body = value
  let body = document.createElement('h2')
  body
  body.innerHTML = `${doc.body}`
  document.body.appendChild(body)
}
function footer(value) {
  doc.footer = value
  let footer = document.createElement('h3')
  footer.height= 30
  footer.innerHTML = `${doc.footer}`
  document.body.appendChild(footer)
}
function date(value = new Date().toString()) {
  doc.date = value
  let date = document.createElement('h3')
  date.innerHTML = `Date : ${doc.date}`
  document.body.appendChild(date)
}
function addition(topic, body, footer, date) {
  doc.addition.topic = topic
  doc.addition.body = body
  doc.addition.footer = footer
  doc.addition.date = date
  let addition = document.createElement('div')
  addition.id="div1"
  addition.style.background = 'lightgrey'
  addition.style.color = '#000000'
  addition.style.width = 'auto'
  addition.innerHTML = `Title: ${doc.addition.topic}
    <br>
    Additional body : ${doc.addition.body}
    <br>
    Additional footer : ${doc.addition.footer}
    <br>
    Additional date : ${doc.addition.date}
    `
  document.body.appendChild(addition)
}
function main() {
  title('Header')
  body('Body')
  date()
  addition(
    'Title',
    'Main',
    'Footer',
    new Date().toString(),
  )
  footer('Footer')
  task2(33,77,'+')
  task2(33,77,'-')
  task2(33,77,'*')
  task2(33,77,'/')
  task2(33,77,'o')
  
let a= [14, 7, 8, 0, 9]
let b= [5, 6 ,0, 8,]
	alert(`Task 3: \n\n
	${a} * ${b} = ${calc(a, b, "*")} \n\n
	${a} / ${b} = ${calc(a, b, "/")} \n\n
	${a} - ${b} = ${calc(a, b, "-")} \n\n
	${a} + ${b} = ${calc(a, b, "+")}`)
	
let a2 = {a:"35"}
let b2 = {b:"53"}
console.log(`Task 4: `,a2,` - `, b2,` = ` , calc( a2, b2, "-"))
console.log(`Task 4: `,a2,` + `, b2,` = ` , calc( a2, b2, "+"))
console.log(`Task 4: `,a2,` * `, b2,` = ` , calc( a2, b2, "*"))
console.log(`Task 4: `,a2,` / `, b2,` = ` , calc( a2, b2, "/"))

MathFrameWork.n1= [20,3, 87,]
MathFrameWork.n2= [9,1]
MathFrameWork.Get_Res("+")
alert(`Task 5-6: [${MathFrameWork.n1}] + [${MathFrameWork.n2}] = ${MathFrameWork.result}`)

MathFrameWork.n2 = 7
MathFrameWork.n1 = 1/49
MathFrameWork.Get_Res( "*")
alert(`Task 5-6: [${MathFrameWork.n1}] * [${MathFrameWork.n2}] = ${MathFrameWork.result}`)

MathFrameWork.n1 = {a: 12}
MathFrameWork.n2 = {b: 9}
MathFrameWork.Get_Res( "/")
alert(`Task 5-6: [${MathFrameWork.n1.a}] / [${MathFrameWork.n2.b}] = ${MathFrameWork.result.result}`)

Task7()

}

function Task7()
{
	let name = prompt("What is your name?", 'stranger')
	let age = prompt("What is your age?", '')
	alert(` Good morning, evening, what ever else, ${name}.\n I gonna ask you questions from 6 to 10.`)
	confirm("From 6?")
	confirm("To 10?")
	alert(`Understandable, have a great day.`)
}

function task2(d1,d2,sym)
{
	let res
	switch (sym) {
		case '+':
		 res = d1 + d2
		 alert(`Task 2: ${d1} ${sym} ${d2} = ${res}`)
		 break
		case '-':
		 res = d1 - d2
		 alert(`Task 2: ${d1} ${sym} ${d2} = ${res}`)
		 break
		case '*':
		 res = d1 * d2
		 alert(`Task 2: ${d1} ${sym} ${d2} = ${res}`)
		 break
		case '/':
		 res = d1 / d2
		 alert(`Task 2: ${d1} ${sym} ${d2} = ${res}`)
		 break
		default:
			alert(`Task 2: ${d1} ${sym} ${d2} = ERROR`)
	}
}

function calc(num1, num2, sign){
    const signs = {
        "+": (num1, num2) => parseFloat(num1) + parseFloat(num2),
        "-": (num1, num2) => parseFloat(num1) - parseFloat(num2),
        "*": (num1, num2) => parseFloat(num1) * parseFloat(num2),
        "/": (num1, num2) => parseFloat(num1) / parseFloat(num2)
    }
    if (Array.isArray(num1)){
        let result = []
        num1.map((first, index) => {
            const secondNum = num2[index]
            result.push(signs[sign](first, secondNum))
        })
        return result
    }
    if (typeof num1 === 'object'){
        return {result: `${signs[sign](num1.a, num2.b)}`}
    }
    return signs[sign](num1, num2)
}

let MathFrameWork ={
    n1:0,
    n2:0,
	result:'',
    Get_Res: (num1,num2,sign)=>MathFrameWork.result = calc(num1, num2, sign),
	Get_Res: (sign)=>MathFrameWork.result = calc(MathFrameWork.n1, MathFrameWork.n2, sign) 
}



main()

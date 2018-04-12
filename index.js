



let cart=[];
let totalArray=[];

class Item{
	constructor(name,price,quantity){
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}
}
let data = [
	{name:"brush",price:60},
	{name:"toothPaste",price:95.5},
	{name:"dentalFloss",price:59.34},
];


let specialFunction = (item) =>{  //takes item input from user
	for(let i in data){
		if(data[i].name == item){
			initiate(data[i].name,data[i].price);
			break;
		}
	}
};

let initiate=(name,price)=>{ //initiallizing the empty cart
	if(cart.length==0){
		let item = new Item(name,price,1);
		cart.push(item);
	}
	else{
		addItem(name,price); 
	}
};

 

let addItem=(name,price)=>{	//adds item to the list + create new Item
	
	for(let i in cart){
		if(cart[i].name ===	name){
			cart[i].quantity++;
			return;
			}
		}
		let item = new Item(name,price,1);
		cart.push(item);
		
		//total();
		//console.log(cart);
}

let checkCart=()=>{
	console.log(cart);
}

document.getElementById("btn1.1").addEventListener("click",function(){specialFunction("brush");showResult();});
document.getElementById("btn1.2").addEventListener("click",function(){decreaseItemQuantity("brush");showResult();});
document.getElementById("btn2.1").addEventListener("click",function(){specialFunction("toothPaste");showResult();});
document.getElementById("btn2.2").addEventListener("click",function(){decreaseItemQuantity("toothPaste");showResult();});
document.getElementById("btn3.1").addEventListener("click",function(){specialFunction("dentalFloss");showResult();});
document.getElementById("btn3.2").addEventListener("click",function(){decreaseItemQuantity("dentalFloss");showResult();});
document.getElementById("btn").addEventListener("click",function(){checkCart()});

let decreaseItemQuantity = (name) =>{	//decreases item quantity, if 0 item, calls function "removeItem"
	for(let i in cart){
		if(cart[i].name === name){
			cart[i].quantity--;
			if(cart[i].quantity == 0){
				removeItem(cart[i].name);
			}
			break;//exit the for loop one we have met the condition, for efficiency
		}
	}
}

let removeItem = (name) =>{		//removes item completely
	for(let i in cart){
		if(cart[i].name === name){
			cart.splice(i,1);
		}
		
	}
}

let display = document.getElementById("displayResult");

let showResult =function (){
	let grandTotal = 0;
	while(display.hasChildNodes()){
			display.removeChild(display.firstChild);
		}
	for(let i in cart){
		let j=Number(i)+1;
		let total = cart[i].price*cart[i].quantity;
		let child = document.createElement("div");
		child.innerHTML = `${j}: ${cart[i].name} ${cart[i].price} * ${cart[i].quantity} = ${total}`;
		display.appendChild(child);
		grandTotal+=total;
	}
	let child = document.createElement("p")
	child.innerHTML = `Your total is Rs: ${grandTotal}`;
	display.appendChild(child);
	
}




// let total = () =>{		//displays qualtity of items calculates grand total 
// 	let grandTotal = 0;
// 	let itemTotal = [];
// 	for(let i in cart){
// 		itemTotal[i] = cart[i].price * cart[i].quantity;
// 		grandTotal += itemTotal[i];
// 	}
// 	console.log(`this is item no's ${itemTotal}`);
// 	console.log(`this is grand total ${grandTotal}`);

// 	// return [itemTotal,grandTotal];
// }
 
// addItem("brush",2,1);
// addItem("brush",2,1);
// addItem("toothPaste",5,1);
// addItem("toothPaste",5,1);
// addItem("toothPaste",5,1);
// addItem("dental Floss",4,1);
// addItem("dental Floss",4,1);
// addItem("dental Floss",4,1);
// decreaseItemQuantity("toothPaste");
// totalArray=total();
// console.log(totalArray);
// console.log(cart);

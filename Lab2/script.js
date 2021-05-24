document.getElementById("productsbtn").addEventListener("click",productsPressed);
document.getElementById("clientbtn").addEventListener("click",clientPressed);
document.getElementById("cartbtn").addEventListener("click",cartPressed);
document.getElementById("addItemsToList").addEventListener("click", addItemstoCart);

//category 1: lactose intolorant, category2 is nut allergy, category3 is both
var items= [{name: "Trail mix", price: 1.5, category: 1},{name: "Nuts", price: 1.99, category: 1},{name: "Oranges", price: 2, category:3},{name: "Chocolate milk", price: 2.5, category: 2}, {name: "Brocoli", price: 2.99, category: 3},{name: "Yogurt", price: 3, category: 2},{name: "Energy bar", price: 3.5, category: 1},{name: "Cheese curds", price: 3.5, category: 2}, {name: "Salmon", price: 9.99, category: 3}, {name: "Steak", price: 15, category:3}]
var total = 0;
console.log(items);
function addItemstoCart(){
  if (!(document.getElementById("correctItems").innerHTML === "")){
    total = 0;
    var elements = document.getElementsByClassName("addedItems");
    //console.log(elements);
    var str = '<ul>';
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].checked){
        var test = elements[i];
        for (var j = 0; j < items.length; j++) {
          console.log(elements[i].name.split(":",1)[0]);
          if (elements[i].name.split(":", 1)[0] === items[j].name){
            total = total + items[j].price;
          }
        }
        str += '<li>' + elements[i].name + '</li>';
      }
    }
    console.log("total is:" + total);
    str += '</ul>';
    document.getElementById("cartItems").innerHTML = str;
    document.getElementById("total").innerHTML = "Your total is: " + total;
    cartPressed();
  }
}
document.getElementById("restrictions").onchange = function(){
  var e = document.getElementById("restrictions").value;
  const correspondingItems = [];
  for(var i = 0; i < items.length; i++){
    var temp = items[i].category;
    if (e == 3){
      correspondingItems.push(items[i].name + ": " + items[i].price + "$");
    }
    else if(temp == e || temp == 3){
      correspondingItems.push(items[i].name + ": " + items[i].price + "$");
    }
  }
  var btn = document.getElementById("addItemsToList");
  var str = "";
  for(var i = 0; i < correspondingItems.length; i++){
    var a = correspondingItems[i];
    str += '<input type="checkbox" class="addedItems" name ="';
    str +=  a  + '"><label>' + a + '</label><br>';
  }
  document.getElementById("correctItems").innerHTML = str;
  document.getElementById("Products").appendChild(btn);
}
function cartPressed(){
  document.getElementById("Products").style.display = "none";
  document.getElementById("Client").style.display = "none";
  document.getElementById("Cart").style.display = "block";
}
function productsPressed(){
  document.getElementById("Client").style.display = "none";
  document.getElementById("Cart").style.display = "none";
  document.getElementById("Products").style.display = "block";
}
function clientPressed(){
  document.getElementById("Cart").style.display = "none";
  document.getElementById("Products").style.display = "none";
  document.getElementById("Client").style.display = "block";
}

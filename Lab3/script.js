document.getElementById("productsbtn").addEventListener("click",productsPressed);
document.getElementById("cartbtn").addEventListener("click",cartPressed);
document.getElementById("addItemsToList").addEventListener("click", addItemstoCart);
document.getElementById("openbtn").onclick = function(){
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
document.getElementById("closebtn").onclick = function(){
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}
var items= [
  {name: "Non Organic Trail mix",
   price: 1.5,
  containsLactose: false,
  containsNuts: true,
  isOrganic: false,
  imgsrc: "trailmix.jpg"},

  {name: "Organic Oranges",
  price: 2,
  containsLactose: false,
  containsNuts: false,
  isOrganic: true,
imgsrc: "orange.jpg"},

  {name: "Non Organic Chocolate milk",
  price: 2.5,
  containsLactose: true,
  containsNuts: false,
  isOrganic: false,
imgsrc: "chocolatemilk.png"},

  {name:"Organic mini Pizza",
  price:3.5,
  containsLactose: true,
  containsNuts:false,
  isOrganic:true,
imgsrc: "pizza.png"},

  {name: "Non Organic Chips",
  price: 3.75,
  containsLactose: false,
  containsNuts: false,
  isOrganic: false,
imgsrc: "chips.jpg"},

  {name: "Organic Tomato Sauce",
  price: 4,
  containsLactose: false,
  containsNuts: false,
  isOrganic: true,
imgsrc: "sauce.jpg"},

  {name: "Organic Cheese and Nut pie",
  price: 5,
  containsLactose: true,
  containsNuts: true,
  isOrganic: true,
imgsrc: "pie.png"},

  {name: "Non Organic Peanut butter",
  price: 5,
  containsLactose: false,
  containsNuts: true,
  isOrganic: false,
imgsrc: "peanutbutter.png"},

  {name: "Non Organic Cake",
  price: 7,
  containsLactose: true,
  containsNuts: false,
  isOrganic: false,
imgsrc: "cake.png"},

  {name: "Organic Steak",
  price: 15,
  containsLactose: false,
  containsNuts: false,
  isOrganic: true,
imgsrc: "steak.jpg"}
];


var correspondingItems = items;
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
        str += '<li>' + elements[i].name.split(":", 1)[0] + '</li>';
      }
    }
    console.log("total is:" + total);
    str += '</ul>';
    document.getElementById("cartItems").innerHTML = str;
    document.getElementById("total").innerHTML = "Your total is: " + total + "$";
    cartPressed();
  }
}
document.getElementById("restrictions").onchange = function(){
  var e = document.getElementsByClassName("restrictions");
  console.log(e);
  correspondingItems = [];
  const tempRestrictions = [];
  for (var i = 0; i <e.length; i++) {
    if (e[i].checked) {
      var name = e[i].name;
      console.log(name);
      tempRestrictions.push(name);
    }
  }
  console.log(tempRestrictions);
  if (tempRestrictions.length == 3){
    for (var i = 0; i < items.length; i++) {
      if (!items[i].containsLactose && !items[i].containsNuts && items[i].isOrganic){
        correspondingItems.push(items[i]);
      }
    }
  }
  else if (tempRestrictions.length == 2){
    if (tempRestrictions.includes("Lactose intolorant") && tempRestrictions.includes("Nut allergy")){
      for(var i =0; i < items.length; i++){
        if (!items[i].containsLactose && !items[i].containsNuts){
          correspondingItems.push(items[i]);
        }
      }
    }
    else if (tempRestrictions.includes("Lactose intolorant") && tempRestrictions.includes("Organic")){
      for(var i =0; i < items.length; i++){
        if (!items[i].containsLactose && items[i].isOrganic){
          correspondingItems.push(items[i]);
        }
      }
    }
    else{
      for(var i =0; i < items.length; i++){
        if (!items[i].containsNuts && items[i].isOrganic){
          correspondingItems.push(items[i]);
        }
      }
    }
  }
  else if (tempRestrictions.length == 1){
    if (tempRestrictions.includes("Lactose intolorant")){
      for(var i =0; i < items.length; i++){
        if (!items[i].containsLactose){
          correspondingItems.push(items[i]);
        }
      }
    }
    else if (tempRestrictions.includes("Nut allergy")){
      for(var i =0; i < items.length; i++){
        if (!items[i].containsNuts){
          correspondingItems.push(items[i]);
        }
      }
    }
    else{
      for(var i =0; i < items.length; i++){
        if (items[i].isOrganic){
          correspondingItems.push(items[i]);
        }
      }
    }
  }
  else{
    correspondingItems = items;
  }

  var btn = document.getElementById("addItemsToList");
  var str = "";
  for(var i = 0; i < correspondingItems.length; i++){
    var a = correspondingItems[i].name + ": " + correspondingItems[i].price + "$";
    str += '<input type="checkbox" class="addedItems" name ="';
    str +=  a  + '"><label>' + a + '</label><br><img src="images/' + correspondingItems[i].imgsrc + '" width="30px" height="30px"><br>';
  }
  document.getElementById("correctItems").innerHTML = str;
  document.getElementById("Products").appendChild(btn);
}
function cartPressed(){
  document.getElementById("Products").style.display = "none";
  document.getElementById("Cart").style.display = "block";
}
function productsPressed(){
  document.getElementById("Cart").style.display = "none";
  document.getElementById("Products").style.display = "block";
  var btn = document.getElementById("addItemsToList");
  var str = "";
  for(var i = 0; i < correspondingItems.length; i++){
    var a = correspondingItems[i].name + ": " + correspondingItems[i].price + "$";
    str += '<input type="checkbox" class="addedItems" name ="';
    str +=  a  + '"><label>' + a + '</label><br><img src="images/' + correspondingItems[i].imgsrc + '"width="30px" height="30px"><br><br>';
  }
  document.getElementById("correctItems").innerHTML = str;
  document.getElementById("Products").appendChild(btn);
}

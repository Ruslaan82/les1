var name = prompt("введите свое имя");
var surname = prompt("введите свою фамилию");
var age = prompt("введите свой возраст");
if (age<=18) {
    console.log("Хай " + name)
}else if (age >= 35) {
    console.log("Здравствуйте " + surname + " " + name)
}
else {
    console.log("Goodbye!!!")
}
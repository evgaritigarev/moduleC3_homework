// задание 3.3 - 2

const someObj = {};
someObj.someText = "Какой то текст";

function checkPropInObj (str, obj) {
    console.log(str in obj);
}

checkPropInObj("someText", someObj)
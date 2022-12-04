// задание 3.3 - 1

const object1 = {
    a: 1,
    b: 2,
    c: 3,
}

function someObject (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
        }
    }
}

someObject(object1);
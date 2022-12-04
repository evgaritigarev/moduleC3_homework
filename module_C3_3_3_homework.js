// задание 3.3 - 3

function createObjWithoutProto() {
    return Object.create(null);
}

const someObj2 = createObjWithoutProto();
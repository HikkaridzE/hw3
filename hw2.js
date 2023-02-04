function strInObj(str, obj){
    if (str in obj) return true;
    else return false
}

const obj = {
    name: 'Никита',
    surname: 'Немечкин'
}

const str = 'name';

console.log(strInObj(str, obj));
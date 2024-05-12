// import cls from '../public/index.scss'

// const str = "Abcd алыр воро ddd"
// const arr = [...str]
// let tempString = ""
// const regExp = /[а-я]/
// let resArr = []
// arr.forEach((item) => {})
// arr.forEach((item) => {
//     if(item.toLowerCase()){}
// })
// arr.forEach((item) => {
//     if(regExp.test(item.toLowerCase())){
//         tempString = [item, ...tempString]
//     }
//     else{
//         resArr = [...resArr, ...tempString, item]
//         tempString = ''
//     }
// })
const compact = (arr) => {
    const newArray = [...arr];
    return newArray.filter((item) => item);
}

const doubleNumber = (arr) => {
    return arr.map((item) => item*2)
}

const sort = (arr) => {
    return [...arr].sort();
}

const compouse = (arr, ...args) => {
    let newArray = [...arr];
    [...args].forEach((fn) => {
        newArray = fn(newArray);
    })
}
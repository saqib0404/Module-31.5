const arr = [1, 4, 9, 16, 45, 20];
const multiplyedBy5 = arr.map(arr => arr * 5);
console.log(multiplyedBy5)

// Find odd
const findOdd = arr.filter(arr => arr % 2);
console.log(findOdd)

const items =[
    {item: 'Phone', price: 15000},
    {item: 'Laptop', price: 40000},
    {item: 'Tablet', price: 5000},
    {item: 'Watch', price: 200}
]
console.log(items.find(arr => arr.price === 5000))


const {item} = {item: 'Phone', price: 15000};
console.log(item)

const array = [1, 4, 9, 16, 45, 20];
const [first, second, third] = array;
console.log(third);

const math = (x, y, z = 7) => (x + y) * z;
console.log(math(2,4))
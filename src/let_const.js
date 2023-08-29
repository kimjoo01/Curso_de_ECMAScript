var last_name = 'luis';
last_name = 'oscar';
console.log(last_name);

let fruit = 'manzana';
fruit = 'kiwi';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const frutas = () => {
    if(true){
        var fruta1 = 'apple'; // function scope
        let fruta2 = 'kiwi'; // block scope
        const fruta3 = 'Banana'; // block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

frutas();
const peoples = [
    {
        name: 'Alina',
        money: 2700.32,
        cities: 'Lviv, Kyiv, Ternopil',
        children: [
            {
                name: 'Oliver',
                age: 6,
            }
        ]
    },
    {
        name: 'Andrii',
        money: 9301.32,
        cities: 'Paris, Madrid, Rivne',
        children: []
    },
    {
        name: 'George',
        money: '35000',
        cities: 'Stambul',
        children: [
            {
                name: 'Olha',
                age: 8,
            },
            {
                name: 'Olena',
                age: 2,
            }
        ]
    }
];

function arrToChange(arr){
    let myArr = [];
    for(let i = 0; i<arr.length; i++){
        const element = arr[i];
        element.name = element.name.toUpperCase();
        element.cities = element.cities.split(',');
        if(typeof element.money === 'string'){

            if (Number.isNaN(Number.parseInt(element.money))){
                console.log('Money is not a number!');
                element.children.push({name: 'Stepan', age: getRandomIntInclusive(1, 18)});
                myArr.push(element);
                continue;
            }else{
                element.money = Number.parseInt(element.money);
            }
        }
        element.money = Math.round(element.money);
        element.children.push({name: 'Stepan', age: getRandomIntInclusive(1, 18)});
        myArr.push(element);
    }
    return myArr;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


arrToChange(peoples);
for(let i = 0; i < peoples.length; i++){
    console.log(peoples[i]);
}
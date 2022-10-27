const pizza =[ 
    {
    id: 1,
    nombre: "Pizza Napolitana",
    ingredientes:["Tomate", "Mozzarella", "Oregano", "Ajo"],
    precio: 850
    },
    {
    id: 2,
    nombre: "Pizza Fugazzeta",
    ingredientes:["Cebolla", "Mozzarella", "Aceituna", "Aceite de oliva"],
    precio: 900
    },
    {
    id: 3,
    nombre: "Pizza Caprese",
    ingredientes:["Tomate", "Mozzarella", "Albahaca", "Provenzal"],
    precio: 950
    },
    {
    id: 4,
    nombre: "Pizza Calabresa",
    ingredientes:["Calabresa","Mozzarella","Provolone","Morron"],
    precio: 1000
    },
    {
    id: 5,
    nombre:"Pizza champiñon",
    ingredientes: ["Champiniones", "Mozzarella", "Crema", "Cebolla"],
    precio:1050
    },
    {
    id: 6,
    nombre:"Pizza Hawaiana",
    ingredientes:["Anana", "Mozzarella", "Jamon", "Cebolla"],
    precio: 1100
    }
]

console.log("a)  Las pizzas que tengan un id impar.")
const numerosImpares = pizza.filter(elemento =>{
    return elemento.id % 2 != 0
})
numerosImpares.forEach((numerosImpares)=>{
    console.log("Las Pizzas con Id impares son", numerosImpares.id, numerosImpares.nombre)
})

console.log("b) ¿Hay alguna pizza que valga menos de $600?")

const menorA600 = pizza.some(elemento => {
    return elemento.precio <= 600 });
 if (menorA600 === true){
    console.log("Si, hay una pizza que vale menos de $600")
 } else{
    console.log("No, no hay ninguna pizza que valga menos de $600")
} 

console.log("c) El nombre de cada pizza con su respectivo precio.")

pizza.forEach((pizza)=> {
console.log( "la pizza",pizza.nombre,"tiene un precio de $", pizza.precio)})

console.log("d) Todos los ingredientes de cada pizza")

pizza.forEach((pizza)=> {
    console.log( "La",pizza.nombre,"contiene")
    pizza.ingredientes.forEach((ingredientes)=>
    console.log(ingredientes))
})
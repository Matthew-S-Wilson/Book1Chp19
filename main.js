const toyToFind = 3
const toys = [
    {
       id: 1,
       name: "Gameboy",
       maker: "Nintendo",
       purchased: true,
       price: 100,
   
   },
   
   {
       id: 2,
       name: "Cooking Everything",
       maker: "Bama Books",
       purchased: false,
       price: 30,
   
   },
   
   {
       id: 3,
       name: "Slingshot",
       maker: "Warner Toys",
       purchased: true,
       price: 5,
   
   },
   ]
   for(toy of toys){
 
    if (toy.id === toyToFind){

    toy.price = toy.price + (toy.price * 0.05)

    console.log(`The ${toy.name} costs $${toy.price}, made by ${toy.maker} `)
    }
    // had to add brackets { } at the end of the if declaration to get it to print only the toyToFind with the id of 3
}
const bike = {
    id: 4,
    name: "Bike",
    maker: "Wheels Inc",
    purchased: true,
    price: 75,
    }
    
    const waterGun = {
        id: 5,
        name: "Water Gun",
        maker: "Nerf",
        purchased: false,
        price: 20,
    }
    toys.push(bike)
    toys.push(waterGun)

   // each toy or gift has a string property for the id, a string property for the name, a string property for the maker, a boolean proprty for purchased,
   // and an interger proprty for the price
   
   //forgot to add comma after each property in the variable and got hung up for a while; be exact !
   
   // the commas got me again when converting the toy variables into an array! have to place after each object in the array, after the }


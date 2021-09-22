// class CAR{
//     constructor(color){
//         this.color = color;
//     }

//     start(){
//         console.log('start')
//     }
// }

class CAR{
    color: string; //지정해줘야 한다. 
    constructor(color:string){
        this.color = color;
    }

    start(){
        console.log('start')
    }
}


const audi = new CAR("green")
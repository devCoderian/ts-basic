// class CAR{
//     constructor(color){
//         this.color = color;
//     }

//     start(){
//         console.log('start')
//     }
// }

//public 사용 전
// class CAR{
//     color: string; //지정해줘야 한다. 
//     constructor(color:string){
//         this.color = color;
//     }

//     start(){
//         console.log('start')
//     }
// }

class CAR{
    //color: string; //지정해줘야 한다. 
    //es6와 달리 접근 제한자 지정 가능하다.
    constructor(public color:string){
        //constructor(readonly color:string){
        this.color = color;
    }

    start(){
        console.log('start')
    }
}


const audi = new CAR("green")
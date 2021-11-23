interface Car{
    id: number,
    brand: string,
    color?: string,
    distanceUsed: number,
    showCar() : string,
    use(distance: number) : number
}

class EuropeCar implements Car{
    id: number;
    brand: string;
    color?: string;
    distanceUsed : number;
    
    constructor(id: number, brand: string, color: string, distanceUsed:number){
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
        
    }

    showCar(){

    }

    use(){
        
    }
    
}

const c1 = new EuropeCar();
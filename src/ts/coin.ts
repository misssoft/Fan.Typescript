namespace Coins{
export abstract class Coin{
    value:number
    constructor (value:number){
        this.value = value;
    }
    abstract getImageUrl():string
}

export class Dollar extends Coin{
    constructor(){
        super(1.0);
    }
    getImageUrl(): string{
        return "image/Dollar.jpg";
    }
}

export class Half extends Coin{
    constructor(){
        super(.5);
    }
    getImageUrl(): string{
        return "image/Half.png";
    }
}

export  class Quarter extends Coin{
    constructor(){
        super(.25);
    }
    getImageUrl(): string{
        return "image/Quarter.png";
    }
}

export class Dime extends Coin{
    constructor(){
        super(.10);
    }
    getImageUrl(): string{
        return "image/Dime.png";
    }
}
}






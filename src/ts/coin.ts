abstract class Coin{
    value:number
    constructor (value:number){
        this.value = value;
    }
    abstract getImageUrl():string
}

class Dollar extends Coin{
    constructor(){
        super(1.0);
    }
    getImageUrl(): string{
        return "image/Dollar.jpg";
    }
}

class Half extends Coin{
    constructor(){
        super(.5);
    }
    getImageUrl(): string{
        return "image/Half.png";
    }
}

class Quarter extends Coin{
    constructor(){
        super(.25);
    }
    getImageUrl(): string{
        return "image/Quarter.png";
    }
}

class Dime extends Coin{
    constructor(){
        super(.10);
    }
    getImageUrl(): string{
        return "image/Dime.png";
    }
}




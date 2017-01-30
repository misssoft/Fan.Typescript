abstract class ProductCategory{
    protected imgPath = "image/";
    name:string;
    abstract getImageUrl():string;
}

class SodaCategory extends ProductCategory {
    name="Soda"
    getImageUrl(){
        return this.imgPath +"SodaCan.png";
    }
}

class PotatoChipsCategory extends ProductCategory {
    name="Potato chips"
    getImageUrl(){
        return this.imgPath +"Chips.png";
    }
}

class NutsCategory extends ProductCategory {
    name="Nuts"
    getImageUrl(){
        return this.imgPath +"Nuts.png";
    }
}


class CandyBarCategory extends ProductCategory {
    name="Candy bar"
    getImageUrl(){
        return this.imgPath +"CandyBar.png";
    }
}
class CandyCategory extends ProductCategory {
    name="Candy bar"
    getImageUrl(){
        return this.imgPath +"Candy.png";
    }
}
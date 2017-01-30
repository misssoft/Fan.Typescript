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

class ChipsCategory extends ProductCategory {
    name="Potato chips"
    getImageUrl(){
        return this.imgPath +"Chips.png";
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
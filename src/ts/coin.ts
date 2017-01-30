class Quarter{
    private value: number = .25;
    get Value(){
        return this.value;
    }
    getImageUrl(): string{
        return "image/Quarter.png";
    }
}

var coin = new Quarter();


class Food{
    constructor(){
     this.foodcount = 0
     this.lastfed
     this.image = loadImage("images/milk.png");
    }
 
    updatefoodstock(x){
    this.foodcount=x;
    }
    getfedtime(time){
this.lastfed=time;
    }
    detuctfood(){
      if(this.foodcount>0){
    this.foodcount=this.foodcount-1;
      }
    }
    getfoodstock(){
    return this.foodcount;
    }
    display(){
      var x=80,y=100;
      if(this.foodcount!==0){
        for(var i = 0;i<this.foodcount;i++){
          if(i%10===0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
  }

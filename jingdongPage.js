window.onload=function(){
var vm=new Vue({
    el:'.all',
    data:{
      ulShow:false,
      carShow:false,
      navChild:false,
      navArrow:true,
      mark:0,
      img:[
          'img/c1.jpg',
          'img/c2.jpg',
          'img/c3.jpg',
          'img/c4.jpg',
          'img/c5.jpg',
          'img/c6.jpg',
          'img/c7.jpg',
          'img/c8.jpg',
      ],
      title1:true,
      title2:false,
      searchTexts:[
         ' 商务休闲鞋',
         ' 怡宝矿泉水',
         ' 网络机顶盒',
         ' 西门子冰箱',
      ],
      searchText:' 西门子冰箱',
      searchMark:0,
      brs:[
            'img/br1.jpg',
            'img/br2.jpg',
      ],
      brMark:0,
      
    },
    created() {
        this.play();
        this.playSearchText();
        this.playBR();

    },
    methods:{
    	showUl:function(){
           this.ulShow=true;
    	},
    	hideUl:function(){
    		this.ulShow=false;
    	},
    	showCar(){
    		this.carShow=true;
    	},
    	hideCar(){
    		this.carShow=false;
    	},
        showChild(){
            this.navChild=true;
        },
        hideChild(){
            this.navChild=false;
        },
        play() {
            timer=setInterval(this.autoPlay, 3000);
            this.navArrow=false;
            
           
        },
        playSearchText(){
            pla=setInterval(this.searchPlay,3000);
        },
        playBR(){
            br=setInterval(this.brPlay,3000);
        },
        stopBr(){
             clearInterval(br);
        },
        brPlay(){

            this.brMark++
            
            if(this.brMark===2){
              this.brMark=0
              return
              
            }
        },
        searchPlay(){
          this.searchText=this.searchTexts[this.searchMark];
            this.searchMark++;
            if(this.searchMark==4){
              this.searchMark=0
              return
            }
          },
          stopPla(){
            clearInterval(pla);
             this.searchText="";
          },
        change(i) {
            this.mark = i
        },
        changeBR(index){
            this.brMark=index;
        },
        autoPlay() {
            this.mark++
                if (this.mark === 8) {
                    this.mark = 0
                    return
                }
            
        },
        stop(){
            clearInterval(timer);
            this.navArrow=true;
        },
        pre(){
            
            if(this.mark==0){
                this.mark=7;
            }
            else{
                this.mark--;
            }
        },
        next(){
            if(this.mark==7){
                this.mark=0;
            }
            else{
                this.mark++;
            }
        },//next()结束
        showTitle1(){
          this.title1=true;
          this.title2=false;
        },
        showTitle2(){
          this.title1=false;
          this.title2=true;
        },
        
    }
})//new Vue结束


}

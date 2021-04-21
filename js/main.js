const app = new Vue({
    el: "#app",
    data: {
        image:[
            "img/img.jpg",
            "img/img2.jpg",
            "img/img3.jpg",
            "img/img4.jpg",
        ],
        indexImage: 0,
        interval: 0,
    },
    created(){
        this.startLoop()
    },
    methods: {
        prevImage() {
            this.indexImage --
            if(this.indexImage < 0){
                this.indexImage = this.image.length -1;
            }
        },
        nextImage() {
            this.indexImage ++
            if(this.indexImage > (this.image.length -1)){
                this.indexImage = 0;
            }
        },
        setImage(index) {
            this.indexImage = index;
        },
        startLoop(){
            this.interval = setInterval(()=>{
                this.nextImage();
            }, 3000);
        },
        stopLoop(){
            clearInterval(this.interval);
        }
    }
})
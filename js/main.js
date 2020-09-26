const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d")

const widht = 512 
const height = 512
const stack = 60

function bg(){
    ctx.fillStyle = '#c85805'
    ctx.fillRect(0, 0, widht, height) //fon pole

    ctx.fillStyle = '#ae4b02'
    ctx.fillRect(16, 16, widht - 32, height - 32) //pole

    ctx.fillStyle = '#a64d00'
    ctx.fillRect(0, height, widht, 168) //fon menu
 
    for(let i = 0; i <= 8; i++){
            ctx.fillStyle = 'black'
            ctx.fillRect(i*stack + 16, 16, 1, widht - 32)   //line gor
            ctx.fillRect(16, i*stack + 16, height - 32, 1) //line ver
    }   

    for(let i=0; i<3;i++){
        ctx.fillStyle = '#eb7b1b'
        ctx.fillRect(36 + i*152, height + 16, 136, 136) //block menu
    }
} 

let len  = 30
let xPol = 35
let yPol = height + 15
let j=0

class Block{
    constructor(len, xPol, yPol){
        this.len  = len
        this.xPol = xPol
        this.yPol = yPol
        this.prov = true 
    } 

    b(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.xPol, this.yPol, this.len, this.len)
    }   

    p(){
        move()
    }
}
    let block = []
for(i = 0; i < 10; i++)
    block[i] = new Block(len, xPol, yPol)

function play(){
    bg()
    for(i = 0; i <10; i++){
        block[i].b()
    }
    document.addEventListener('mousedown', block[j].p)
}



function move(){
    document.addEventListener('mousemove', click)

    function click(event){
        if(block[j].prov){
            block[j].xPol = event.layerX  
            block[j].yPol = event.layerY 
            block[j].len = 60
        if(block[j].xPol > 16 && block[j].xPol < 496 && block[j].yPol > 16 && block[j].yPol < 496){
            block[j].xPol = (block[j].xPol < 76) ? 16:
                (block[j].xPol < 136) ? 76:
                (block[j].xPol < 196) ? 136:
                (block[j].xPol < 256) ? 196:
                (block[j].xPol < 316) ? 256:
                (block[j].xPol < 376) ? 316:
                (block[j].xPol < 436) ? 376:
                436
            block[j].yPol = (block[j].yPol < 76) ? 16:
                (block[j].yPol < 136) ? 76:
                (block[j].yPol < 196) ? 136:
                (block[j].yPol < 256) ? 196:
                (block[j].yPol < 316) ? 256:
                (block[j].yPol < 376) ? 316:
                (block[j].yPol < 436) ? 376:
                436
            }
        }
   }
    
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', click)
        if(event.layerY > height)
            block[j].len = 30
        if(block[j].xPol >= 16 && block[j].xPol <= 496 && block[j].yPol >= 16 && block[j].yPol <= 496){ 
            block[j].prov = false
            block[j].b()
            j++
        }

    })


}

let p = setInterval(play,0)

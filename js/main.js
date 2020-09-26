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
let prov = true 


class Block{
    constructor(len, xPol, yPol){
        this.len  = len
        this.xPol = xPol
        this.yPol = yPol
    } 

    b(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.xPol, this.yPol, this.len, this.len)
    }   

    p(){
        move()
    }
    
}


function move(){
    document.addEventListener('mousemove', click)

    function click(event){
        if(prov){
        xPol = event.layerX - 30
        yPol = event.layerY - 30
        len = 60
        if(xPol > 16 && xPol < 496 && yPol > 16 && yPol < 496){ 
            xPol = (xPol < 76) ? 16:
                (xPol < 136) ? 76 :
                (xPol < 196) ? 136:
                (xPol < 256) ? 196:
                (xPol < 316) ? 256:
                (xPol < 376) ? 316:
                (xPol < 436) ? 376:
                436
            yPol = (yPol < 76) ? 16:
                (yPol < 136) ? 76 :
                (yPol < 196) ? 136:
                (yPol < 256) ? 196:
                (yPol < 316) ? 256:
                (yPol < 376) ? 316:
                (yPol < 436) ? 376:
                436
            }
        }
   }
    
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', click)
        if(event.layerY > height)
            len = 30
        if(xPol > 16 && xPol < 496 && yPol > 16 && yPol < 496)       
            prov = false

    })


}



function play(){
    let block = new Block(len, xPol, yPol)
    bg()
    block.b(len, xPol, yPol)
    document.addEventListener('mousedown', block.p)
}


let p = setInterval(play,0)

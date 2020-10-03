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

    const len  = 30
    const xPol = 35
    const yPol = height + 15
    let j= 0
    let g = 0 
    let c = 3

class Block{
    constructor(len, xPol, yPol){
        this.len  = len
        this.xPol = xPol
        this.yPol = yPol
        this.prov = true 
    } 

    b(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.xPol + 2, this.yPol + 2, this.len, this.len)
        ctx.fillStyle = 'white'
        ctx.fillRect(this.xPol + 12, this.yPol + 12, this.len - 20, this.len - 20)
    }   

    p(){
        this.addEventListener('mousemove', click)

        function click(event){
            if(block[j].prov){
                block[j].xPol = event.layerX  
                block[j].yPol = event.layerY 
                block[j].len = 57
            }
        }
        
        this.addEventListener('mouseup', function() {
            this.removeEventListener('mousemove', click)

            if(block[j].xPol >= 16 && block[j].xPol <= 496 && block[j].yPol >= 16 && block[j].yPol <= 496){ 
                block[j].xPol = 16 + 60 * coor(block[j].xPol)
                block[j].yPol = 16 + 60 * coor(block[j].yPol)
            }

            let s = coor(block[j].xPol)
            let r = coor(block[j].yPol)
            let f = 8 * r + s

            if(block[j].prov)
                if(block[j].xPol == 16 + s*stack && block[j].yPol == 16 + r*stack && setka[f])
                {
                    setka[f] = false
                    block[j].prov = false
                    c++
                }                  
                else{
                    block[j].len = 30
                    block[j].xPol = xPol + (j%3)*152
                    block[j].yPol = yPol
                }
        }
            
)
    }
}

let block = []
let setka = []

for(let i = 0; i <64; i++)
    setka[i] = true 

function play(){
    bg()
    if(c == 3){
        for(let o =0; o<3;o++)
            block[g*3+o] = new Block(len, xPol + o*152, yPol)
        g++
        c = 0
    }
    for(let i = 0; i <g*3; i++){
        block[i].b()
    }
    
    addEventListener('mousedown', fuf)
    addEventListener('mousedown', block[j].p)
}

function coor(x){
let r = (x < 76) ? 0:
        (x < 136) ? 1:
        (x < 196) ? 2:
        (x < 256) ? 3:
        (x < 316) ? 4:
        (x < 376) ? 5:
        (x < 436) ? 6:
                    7
return r
}

function fuf(event){

        if(event.layerX > 32 && event.layerX < 172 && event.layerY > height + 16){
            j = g*3 - 3 
            }
        if(event.layerX > 188 && event.layerX < 324 && event.layerY > height + 16){
            j = g*3 + -2
            }
        if(event.layerX > 340 && event.layerX < 476 && event.layerY > height + 16) { 
            j = g*3 + -1
            }
    }

let p = setInterval(play,0)

let _div = document.querySelectorAll('div')
let _target = document.getElementById('target')
let _ul = document.getElementsByTagName('ul')[0]
let _li = document.querySelectorAll('ul>li')
_maxScrollY  = 0
let x = 0 
let y = 0



//horizontal scrolling 
_div.forEach(element => {
    let _offsetTop = element.offsetTop
    element.setAttribute('data-offsetTop' ,_offsetTop )   
  })

 window.addEventListener('scroll',(e)=>{
     let _scrollY = window.scrollY  
     let _maxScrollY  =  _div[2].getAttribute('data-offsetTop')    
    
     if((_scrollY>=(_div[1].getAttribute('data-offsetTop'))) && _scrollY<= (_div[2].getAttribute('data-offsetTop'))){
         _ul.style.position = 'fixed'
         _ul.style.top = 0   
         let _percent =  (_scrollY * 100) / _maxScrollY 
         let _w = _ul.clientWidth - ((_div[1].clientWidth))
         let _wTransform = ((_w * _percent) / 100) 
        _ul.style.left = -(_wTransform ) + 'px'        
        }else{
        _ul.style.position = 'relative'  
        _ul.style.left = 0       
     }  
 })



var target = document.querySelector('.changeme')
var one=document.querySelector('.one')
var two=document.querySelector('.two')
var three=document.querySelector('.three')
var four=document.querySelector('.four')
var five=document.querySelector('.five')
var six=document.querySelector('.six')







function change(colorName){

    colorName.addEventListener('mouseenter',()=>{
    var coloro= getComputedStyle(colorName).backgroundColor
    target.style.backgroundColor=coloro
})

}


change(one)
change(two)
change(three)
change(four)
change(five)
change(six)
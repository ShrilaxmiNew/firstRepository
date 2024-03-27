let f=document.querySelector('.f1')
let s=document.querySelector('.f2')
let choice=document.querySelector('.choice')
let Output=document.querySelector('.Output')
let b=document.querySelectorAll('.plus')
for(i=0 ;i<b.length ;i++)
{
b[i].addEventListener("click",(event)=>{
    var operator=event.currentTarget.textContent
    choice.value=operator
    let test="10+20";
    test=f.value+operator+s.value;
    console.log(test);
    let result=eval(test);
    Output.value=result;
});
}
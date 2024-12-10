const input  = document.querySelector('input')
input.max = new Date().toISOString().split("T")[0];
const display = document.getElementById('display')

input.addEventListener('click',function(){
    input.showPicker();
})


function CalculateAge(){
    let birthDdate = new Date(input.value);

    let d1 = birthDdate.getDate();
    let m1 = birthDdate.getMonth()+1;
    let y1 = birthDdate.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2 - y1;

    if(m2>=m1){
  m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }
  
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
         m3--;
         d3 = getDaysInMonth(y1,m1) + d2 -d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    display.innerText = `You Are ${y3} Years ${m3} Months and ${d3} Days Old!`;

}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
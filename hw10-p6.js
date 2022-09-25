
////// peractice 6 //////


const option = {top: 10,right: 10,html: "Hello!",className: "welcome"}
showNotification(option)
function showNotification(Options){
    const divv = document.createElement('div');
    document.body.style.position = 'relative';
    divv.style.backgroundColor = 'rgb(246, 248, 113)';
    divv.style.textAlign = 'center';
    divv.style.width = '250px';
    divv.style.position = 'absolute';
    divv.style.fontSize = '40px';

    for (const [key, value] of Object.entries(Options)){

        if (key == 'top'){
            divv.style.top = `${value}px`;
        }else if(key == 'right'){
            divv.style.right = `${value}px`;
        }else if(key == 'html'){
            divv.innerText = `< ${value} >`;
        }else if(key == 'className'){
            divv.classList.add(`${value}`)
        }else{
            alert('some style is not defind in js!')
        }
    }
    
    document.body.appendChild(divv);
    setTimeout(function(){
            divv.remove()
    },1500)
}
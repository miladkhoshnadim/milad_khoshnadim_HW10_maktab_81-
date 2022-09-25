const divv = document.createElement('div');
divv.style.margin = '10px auto';
divv.style.width = '450px';
divv.style.backgroundColor = 'rgb(223, 242, 243)';
divv.style.textAlign = 'center';
divv.style.fontSize = '20px';
divv.innerText = '<<  MILADKHOSHNADIM DOCUMENT LIST  >>';
document.body.appendChild(divv);

const ul = document.createElement('ul');
ul.innerText = 'your document list is:';
ul.style.textAlign = 'left';
ul.style.fontSize = '15px'
divv.appendChild(ul);

let cunter = 1
creatList()
function creatList(){
    
    const text = prompt(`please inter item number  ${cunter}`);
    if (text) {
        const li = document.createElement('li');
        li.innerText = `${text}`;
        ul.appendChild(li);
        ++cunter
        creatList()
    }
    
}




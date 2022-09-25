

    let data = { "Fish": { "trout": {}, "salmon": {} },
                 "Tree": { "Huge": { "sequoia": {}, "oak": {} },
                           "Flowering": { "apple tree": {}, "magnolia": {} } 
                        } 
                };
    let container = document.getElementById('container');
    container.style.margin = '10px auto';
    container.style.width = '450px';
    container.style.backgroundColor = 'rgb(223, 242, 243)';
    container.style.fontSize = '20px';
    var result = '';
    container.innerHTML =`${createTree(container, data)}`;
    document.querySelector('ul').setAttribute('id','elem');
    document.querySelector('ul').setAttribute('onclick','clearee("elem")');

    function createTree (container, data){

        for (const [key, value] of Object.entries(data)){
            result += `<ul>`;
            result += '<li>';
            result +=`${key}`;
            result += '</li>';
            createTree (container, value)
            result += '</ul>';
        }
        return result;

        // for (const [key, value] of Object.entries(data)){
        //     result += `<ul>${key}`;
        //     console.log(typeof value)

        //     if (typeof value === "object") {
        //         createTree (container, value)
        //         console.log(value)
        //     }else{
        //         result += '<li>';
        //         result +=`${value}`;
        //         result += '</li>';
        //     }
        //     result += '</ul>';

        // }
        // return result;

    }

    
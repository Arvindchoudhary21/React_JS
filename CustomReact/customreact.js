
// !ab dekho jo bhi return ho ke ata hai for render like h1 tag p tag osko react dekhta kis type se hai
// !taki wo render kr sakte osko to wahi type hum yha par likhenge khud se and samjhenge inner engineering
// !of the react app ok
// !3 chize fix hai jo hum react ke liye use krenge waise to original react bohot chize dekhta hai but 
// !hum sirf 3 property lete hai type and props and children ok 
const reactElement = {
    type : 'a',
    props : {
        href : 'https:/www.google.com',
        target : '_blank'
    },
    children : 'Click me to visit the google '
}



//! get the root  
const mainContainer = document.getElementById('root');

// !render the maincontainer
// !reactElement ko mainContainer me inject kro this means that ok
customRender(reactElement , mainContainer)


// !ab create kro customRender function 
function customRender(reactElement , container) {
    const domElement = document.createElement(reactElement.type); //!anchor tag generate ho rha simply
    domElement.innerHTML = reactElement.children; //!anchor tag ka text injected 
    
    // !set link to href
    // domElement.setAttribute('href' , reactElement.props.href);
    // domElement.setAttribute('target' , reactElement.props.target);

    // !we can use loops to avoid the repetetive task ok
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    // !ab simply jo div tum uthaye ho mainContainer me jo ki passed hua hai as container here 
    // !osme just append child kr do jo element tum create kye ho ok
    container.appendChild(domElement);
}

// !same isi type se react work krta hai wo pehle ek dom Tree create krta hai fir element create krta hai
// !then os element ko using appendchild method se add krta hai div me jaha humlogo ko add krna hai

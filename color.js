const btn = document.querySelectorAll(".button")
const body = document.querySelector('body')


btn.forEach(function(button){
    console.log(button);

    button.addEventListener('click',function(a){
        console.log(a);
        console.log(a.target);

        if(a.target.id === 'grey'){
            console.log(body.style.backgroundColor = a.target.id);
        }

        if(a.target.id === 'yellow'){
            console.log(body.style.backgroundColor = a.target.id);
        }

        if(a.target.id === 'blue'){
            console.log(body.style.backgroundColor = a.target.id);
        }

        if(a.target.id === 'red'){
            console.log(body.style.backgroundColor = a.target.id);
        }
        
        
    })
    
})

button = document.querySelector('button');

function clickButton(event){
    console.log('button clicked!');
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res)=>{
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data.results[0].residents)
        for(i=0; i < res.data.results[0].residents.length; i++){
            // console.log('test')
            axios.get(res.data.results[0].residents[i])
            .then((res)=>{
                // console.log(res)
                newInfo = document.createElement('h2')
                newInfo.textContent = res.data.name
                document.querySelector('body').appendChild(newInfo)
            })
        }
    })
};

button.addEventListener('click', clickButton)

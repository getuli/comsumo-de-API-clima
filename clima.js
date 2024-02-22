const key = `63964da665abcd9f1c19c60118bb974e`;

const fetchApi = (city) =>{
    const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((res)=>{return res.json();})
    .then((data)=>{console.log(data);
        return data
}) ;return result
};

const btn = document.getElementById('btn');
const cidade = document.getElementById('cidade');
const info = document.getElementById('info');


btn.addEventListener('click', async (event)=>{
    event.preventDefault();
    const result = await fetchApi(`${cidade.value}`);
    info.textContent = `${JSON.stringify(result, undefined, 2)}`;

})






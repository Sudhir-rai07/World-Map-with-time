
const getTime = async (country) =>{
    const url = 'https://timezone.abstractapi.com/v1/current_time/?api_key=865ad288d3c7492798c65175ce6f2278&location=Oxford,'+ country

    const req = await fetch (url)
    const result = await req.json()
    console.log(result)

    time.innerHTML = country + ' : ' + result.datetime
}
// getTime();


let paths = document.querySelectorAll('path')
Array.from(paths).forEach(e =>{
e.addEventListener('mouseover', (j)=>{
    // console.log(j)
    country.style.opacity = 1
    country.style.top =  j.clientY -100 +'px'
    country.style.left =  j.clientX +10+'px'
    country.innerHTML = e.id


    e.addEventListener('click', ()=>{
        getTime(e.id)
    })

    e.addEventListener('mouseleave', ()=>{
        country.style.opacity = 0
    })
})
})
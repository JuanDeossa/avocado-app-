//base url for avocados API
const BASE_URL =  "https://platzi-avo.vercel.app"

function formatPrice(price) {
    const formatedPrice = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return formatedPrice
}
//Click event function
function cardClicked(e) {
    if(e.target.nodeName==="H2"){
        console.log(e.target.textContent);
    }
}

//Async await query
async function getData(path) {
    try {
        const response=await fetch(path)
        const {data}=await response.json()
        const array =[]
        data.forEach(avo => {
            //Destructuring data
            const {name,price,image}=avo
            //properties container
            const container=document.createElement("div")
            //property:image
            const img=document.createElement("img")
            img.src=`${BASE_URL}${image}`
            //property:title
            const h2=document.createElement("h2")
            h2.textContent=name
            //property:price
            const div=document.createElement("div")
            div.textContent=formatPrice(price)
            container.append(img,h2,div)
            array.push(container)
        });
        // Avocados container
        container.append(...array)
        container.addEventListener("click",cardClicked)
    } catch (error) {
        throw new Error(error)
    }
}
getData(`${BASE_URL}/api/avo`)
/*
*/


/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BASE_URL =  "https://platzi-avo.vercel.app"


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
            div.textContent=price
            container.append(img,h2,div)
            array.push(container)
        });
        // Avocados container
        const container=document.querySelector("#container")
        container.append(...array)
        //Main Container selector
    } catch (error) {
        throw new Error(error)
    }
}
getData(`${BASE_URL}/api/avo`)
/*
*/


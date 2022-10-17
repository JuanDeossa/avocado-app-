/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const apiUrl =  "https://platzi-avo.vercel.app/api/avo"


//Async await query
async function getData(path) {
    try {
        const response=await fetch(path)
        const {data}=await response.json()
        const ref=document.body
        const array =[]
        data.forEach(avo => {
            //Destructuring data
            const {name,price,image}=avo
            //properties container
            const container=document.createElement("div")
            //property:image
            const img=document.createElement("img")
            img.src=`https://platzi-avo.vercel.app${image}`
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
        const element = document.createElement("div")
        element.append(...array)
        ref.insertAdjacentElement("beforeend",element)
    } catch (error) {
        throw new Error(error)
    }
}
getData(apiUrl)
/*
*/


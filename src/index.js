/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const apiUrl =  "https://platzi-avo.vercel.app/api/avo"
async function getData(path) {
    try {
        const response=await fetch(path)
        const {data}=await response.json()
        console.log(data);
    } catch (error) {
        throw new Error(error)
    }
}

getData(apiUrl)
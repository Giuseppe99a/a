
async function myFunction() {
    const response = await fetch("https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/")
    const obj = await response.json()

    return obj;
} 




async function fetchSearch ({querykey}) => {
    const {animal,location,breed}= querykey[1];
    const res = await fetch(`https://pets-v2.dev-apis.com?=${animal}&location=${location}&breed=${breed}`)
    
}
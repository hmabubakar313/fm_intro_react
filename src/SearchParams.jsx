import { useState,useEffect } from "react";
const Animals = ["cat","Dog","rabbit","reptile"]
import Pet from "./Pet"
import useBreedList from "./useBreedList";
import Results from "./Results";


const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animals, setAnimals] = useState("")
    const [breed, setBreed] = useState("")
    const [pets,setPets] = useState([])
    const [breeds] = useBreedList(animals)
    console.log("breeds",breeds)
   
  
    useEffect(() => {
      requestPets();
    },[animals])
    async function requestPets(){
      const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animals}&location=${location}&breed=${breed}`)

      const json = await res.json()
      setPets(json.pets)
    }
    
    
    console.log("Hello",location)
    return (
      <div className="search-params">
        <form onSubmit={
          (e)=>{
          e.preventDefault();
          requestPets();
        }}>
          <label htmlFor="location">
            Location
            <input onChange={(e)=>setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
          </label>
          <label htmlFor="animals">
            Animals
            <select 
            onChange={(e)=>setAnimals(e.target.value)}
            id="animals" value={animals} placeholder="animal" >
            <option/>
            
              {Animals.map((animals)=>(
            <option key={animals}>{animals}</option>
            ))}
            
            </select>
            
          </label>
          <label htmlFor="breed">
            Breed
            <select 
            disabled={breeds.length===0}
            onChange={(e)=>setBreed(e.target.value)}
            id="animals" value={breed} placeholder="breed" >
            <option/>
            
              {breeds.map((breed)=>(
            <option key={breed}>{breed}</option>
            ))}
            
            </select>
            
          </label>
          <button>Submit</button>
        </form>
        
        <Results pets={pets} />
      </div>
    );
  };
  
export default SearchParams;
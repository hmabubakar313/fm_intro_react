import { useQuery} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import ErrorBoundry from "./ErrorBoundry";





const Details = () => {
    const {id} = useParams()
    const results = useQuery(["details",id],fetchPet)

    if (results.isLoading){
      return (
        <div className="loading-pane">
          <h2 className="loader">꩜</h2>
        </div>
      )
    }
    console.log("results",results)
    const pet = results.data;
    console.log(pet,"123")


    return (
      <div className="details">
        <div>
          <h1>{pet.name}</h1>
          <h2>{pet.animal}-{pet.breed}-{pet.city},{pet.state}</h2>
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      </div>
    )

  
  };
function DetailsErrorBoundry(props){
  return (
    <ErrorBoundry>
      <Details {...props} /
    </ErrorBoundry>
  )
}  

  export default Details;
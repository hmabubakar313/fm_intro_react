import { useQuery } from "@tanstack/react-query";
import fetBreedList from "./fetchBreedList";




export default function useBreedList(animals) {
  const results = useQuery(['breeds',animals],fetBreedList)  
  console.log("results",results)
  return [results?.data?.breeds ?? [] , results.status]
}
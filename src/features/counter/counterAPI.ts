import { Capital } from "./Type";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export type Respoinse = {length: string, 0: object, capital: Capital, area: number}; 


export const fetchCountry = async (): Promise <Respoinse> => {
  const res = await fetch("https://restcountries.com/v2/alpha/rus")
  const data = await res.json()
  console.log(data)
  return data
} 
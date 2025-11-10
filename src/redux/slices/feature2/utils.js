import store from "../../store";

// export function findAirlineByCode(code) {
//   const state = store.getState();
//   const airlinetList = state?.airlineList?.airlines;
//   if (!Array.isArray(airlinetList) || !code) return null;
//   let data = airlinetList.find((airport) => airport?.airlineCode === code);
//   return data;
// }

export function findAirportByCode(code) {
  let data;
  const state = store.getState();
  const airportList = state?.airportList?.airports;

  if (airportList && airportList.length > 0) {
    data = airportList?.find((airport) => airport?.AirportCode === code);
  } else {
    data = {
      airlineName: code,
      airlineCode: null,
    };
  }

  // console.log(state?.flightList, "airportlist");
  return data;
}

export function findAirlineByCode(code) {
  // const reducerState = useSelector((state) => state);
  // Get the current state from the Redux store

  const state = store.getState();

  // Access the airport list from the state
  console.log(state?.airlineList, "airline list");
  const airlinetList = state?.airlineList?.airlines;
  // console.log(airlinetList, "airlinetList", state)

  // Perform the lookup
  if (!Array.isArray(airlinetList) || !code)
    return {
      airlineCode: code,
      airlineName: code,
    };
  let data = airlinetList.find((airport) => airport?.airlineCode === code);
  // console.log(data, "airlineDataaa");
  if (data?.length == 0) {
    return {
      airlineCode: code,
      airlineName: code,
    };
  }

  return data;
}

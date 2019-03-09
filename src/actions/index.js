const GIT_URL = 'https://swapi.co/api/planets/'


export function getallPlanets(page = "") {
    const newPage = page;
    const request = fetch(`${GIT_URL}?page=${newPage}&format=json`, {
        method: 'GET'
    }).then(responce => responce.json())
    // console.log(request);
    return {
        type: 'GET_all_PLANETS',
        payload: request
    }
}





///////////////////////
export function getSelectedplanet(id) {
    const request = fetch(`${GIT_URL}${id}/?format=json`, {
        method: 'GET'
    }).then(res => res.json())


    // console.log(request);
    return {
        type: 'GET_SELECTED_PLANET',
        payload: request
    }
}
export function clearPlanet() {
    return {
        type: 'CLEAR_PLANET',
        payload: []
    }
}
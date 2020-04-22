const GIT_URL = 'https://swapi.dev/api/planets/'


export function getallPlanets(page = GIT_URL) {
    const newPage = page;
    const request = fetch(`${newPage}`, {
        method: 'GET'
    }).then(responce => responce.json())
    return {
        type: 'GET_all_PLANETS',
        payload: request
    }
}

export function getSelectedplanet(id) {
    const request = fetch(`${GIT_URL}${id}/?format=json`, {
        method: 'GET'
    }).then(res => res.json())
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
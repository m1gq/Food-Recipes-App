import { BASE_URL, APIKEY } from '../settings'
export default function getRecipes(url) {
    return fetch(BASE_URL + url + APIKEY)
        .then(res => res.json())
        .then(data => data)
}

import { BASE_URL, APIKEY } from '../settings'
export default function getRecipes(url) {
    console.log(BASE_URL + url);
    return fetch(BASE_URL + url + APIKEY)
        .then(res => {
            if (!res.ok) {
                throw new Error("Something Went Wrong")
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => err)
}

import fetch from "isomorphic-fetch";
import { filterUrl } from './utils';

export function fetchInitialData(year, launchSuccess, landSuccess) {
    let url = filterUrl(year, launchSuccess, landSuccess)
    return fetch(url)    
        .then(res => res.json())

}

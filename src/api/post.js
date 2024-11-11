import { makeRequest } from "../makeRequest"

export const addData = (url, data) => {
    makeRequest.post(url, data).then(data => {
        
    }).catch(console.log)
}
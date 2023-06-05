import { getToken } from "./authManager";

const _apiUrl = "/api/Guitar";
const img_db = "localhost:1433/data/guitars";

// GET ALL
export const getAllGuitars = () => {
    return fetch(_apiUrl)
    .then(res => res.json())
    // .then(g => g.imagePath = `${img_db}/${g.imagePath}`)
}


// Get All
// export const getUsersList = () => {
//     return getToken().then((token) => {
//         return fetch(_apiUrl, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer  ${token}`,
//             },
//         }).then((res) => {
//         if (res.ok) {
//             return res.json();
//         } else {
//             throw new Error(
//                     "An unexpected error occurred",
//             );
//             }
//         });
//     });
// }
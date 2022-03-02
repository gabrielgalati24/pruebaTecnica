
/**
 * this function is used to login user and get token
 * @param {string} email 
 * @param {string} password 
 * @returns  {promise} 
 */

async function LoginService(email, password) {

    return fetch(`https://uniontracking-3.frogi.dev/api/login`, {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email ,
            password
        })

    }).then(response => {
 
        return response.json()
    }).then(data => {
   

            return data;
        })
}
export default LoginService;
import axios from 'axios';

/**
 * request data from server
 * @param {*} apiPath  api url
 * @returns 
 */
const getData = async (apiPath) => {
    return await axios.get(apiPath).then((result)=>{
        return {
            statue: true,
            data: result.data,
        };
    }).catch((error)=>{
        console.log(error);
        return {
            statue: false,
            data: null,
        };
    });
}

export {
    getData
}
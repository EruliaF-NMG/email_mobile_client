import axios from 'axios';

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
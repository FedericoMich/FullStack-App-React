import axios from 'axios';

export const listRepos = async () => {
    try {
        const url = process.env.REACT_APP_REPOS ? process.env.REACT_APP_REPOS : ""
        const response = await axios.get(
            url
        );
        console.log(response.data.results)
        return response.data && response.data.results ? response.data.results : undefined;
       

    }catch (error){
        if(axios.isAxiosError(error)){
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);

        }else {
            console.log(error);
            throw error;
        }
    }
}


export const getUser = async () => {
    try {
        const url = process.env.REACT_APP_GET_USER ? process.env.REACT_APP_GET_USER : ""
        const response = await axios.get(
            url
        );
        console.log(response.data)
        return  response.data ? response.data : undefined;
    
    }catch (error){
        if(axios.isAxiosError(error)){
            if(error.response){
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        }else {
            console.log(error);
            throw error;
        }
    }
}


export const addUser = async (name:string,surname:string,repos:string) => {
    try {
        const url = process.env.REACT_APP_ADD_USER ? process.env.REACT_APP_ADD_USER  : ""
        const response = await axios.post(
            url, {nome: name, cognome: surname, repos: repos }
        );
        console.log(response.data)
        return  response.data ? response.data : undefined;
    
    }catch (error){
        if(axios.isAxiosError(error)){
            if(error.response){
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        }else {
            console.log(error);
            throw error;
        }
    }
}





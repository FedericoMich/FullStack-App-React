import axios from 'axios';



/*#####USER API#####*/

export const getUser = async () => {
    try {
        const url = process.env.REACT_APP_GET_USER ? process.env.REACT_APP_GET_USER : ""
        const response = await axios.get(
            url
        );
        console.log(response)
        return response.data ? response.data : undefined;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}

export const getUserByCourseId = async (id: any) => {
    try {
        const url = process.env.REACT_APP_GET_USER ? process.env.REACT_APP_GET_USER + "/" + id : ""
        const response = await axios.get(url);
        return response.data ? response.data : undefined;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}


export const addUser = async (name: string, surname: string, repos: string, id: any) => {
    try {
        const url = process.env.REACT_APP_ADD_USER ? process.env.REACT_APP_ADD_USER + "/" + id : ""
        const data = { name: name, surname: surname, repos: repos };
        const response = await axios.post(url, data);
        return response.data ? response.data : undefined;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}


export const updateUser = async (name: string, surname: string, repos: string, id: any) => {
    try {
        const url = process.env.REACT_APP_UPDATE_USER ? process.env.REACT_APP_UPDATE_USER + "/" + id : ""
        const data = { name: name, surname: surname, repos: repos };
        const response = await axios.put(url, data);
        return response.data ? response.data : undefined;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}

export const deleteUser = async (id: any) => {
    try {
        const url = process.env.REACT_APP_DELETE_USER ? process.env.REACT_APP_DELETE_USER + "/" + id : ""
        const response = await axios.delete(url);
        return response.data ? response.data : undefined;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.log(error.response.status);
            }
            throw new Error(error.response?.data);
        } else {
            console.log(error);
            throw error;
        }
    }
}

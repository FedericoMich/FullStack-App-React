import axios from 'axios';

export const listRepos = async () => {
    try {
        const url = process.env.REACT_APP_REPOS ? process.env.REACT_APP_REPOS : ""
        const response = await axios.get(
            url
        );
        return response.data && response.data.results ? response.data.results : undefined;


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

/*#####USER API#####*/

export const getUser = async () => {
    try {
        const url = process.env.REACT_APP_GET_USER ? process.env.REACT_APP_GET_USER : ""
        const response = await axios.get(
            url
        );
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


export const addUser = async (name: string, surname: string, repos: string) => {
    try {
        const url = process.env.REACT_APP_ADD_USER ? process.env.REACT_APP_ADD_USER : ""
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


/*#####COURSE API#####*/


export const getCourse = async () => {
    try {
        const url = process.env.REACT_APP_GET_COURSE ? process.env.REACT_APP_GET_COURSE : ""
        const response = await axios.get(
            url
        );
        if (response.status === 204) {
            return "No Course Find"        
        }
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



export const getSingleCourse = async (id:any) => {
    try {
        const url = process.env.REACT_APP_GET_COURSE ? process.env.REACT_APP_GET_COURSE  + "/"+ id  : ""
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

export const addCourse = async (name: string, year: string) => {
    try {
        const url = process.env.REACT_APP_ADD_COURSE ? process.env.REACT_APP_ADD_COURSE : ""
        const data = { name: name, year: year };
        const response = await axios.post(url, data);
        console.log(response.data)
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

export const updateCourse = async (name: string, year: string, id:any ) => {
    try {
        const url = process.env.REACT_APP_UPDATE_COURSE ? process.env.REACT_APP_UPDATE_COURSE + "/"+ id  : ""
        const data = { name: name, year: year};
        const header ="Access-Control-Allow-Origin";
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

export const deleteCourse = async (id:any) => {
    try {
        const url = process.env.REACT_APP_DELETE_COURSE ? process.env.REACT_APP_DELETE_COURSE + "/"+ id  : ""
        const header ="Access-Control-Allow-Origin";
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

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


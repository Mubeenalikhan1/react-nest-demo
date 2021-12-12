import axios from "axios";

export const searchData = async (id) => {
    const response = await axios({
        method: 'get',
        url: `http://localhost:5005/posts/${id}`
    });

    return response
}
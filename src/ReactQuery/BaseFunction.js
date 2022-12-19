import axios from 'axios'

export const getApiRequest = async (url) => {
    const data = await axios.get(url)
    return data.data
}

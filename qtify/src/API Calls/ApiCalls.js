import axios from "axios"


export const topAlbums = async() => {
    
    try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
        const data = await response.data
        return data

    }
    catch (error) {
        console.log(error);
    }
}

export const newAlbums = async() => {
    
    try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
        const data = await response.data
        return data

    }
    catch (error) {
        console.log(error);
    }
}

export const songs= async() => {
    
    try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/songs")
        const data = await response.data
        return data

    }
    catch (error) {
        console.log(error);
    }
}


export const currentAlbum= async(slug) => {
    
    try {
        const response = await axios.get(`https://qtify-backend-labs.crio.do/album/${slug}`)
        const data = await response.data
        return data

    }
    catch (error) {
        console.log(error);
    }
}


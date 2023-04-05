import axios from "axios";

//eTq4i4Wj9GicIoruN8L8kIm0MrlkybrLWunUhUzJZdSrE4YB1MIiz8VI

export const getImages = async(searchTerm = 'programming') => 
await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`,{
    headers: {
        Authorization: "eTq4i4Wj9GicIoruN8L8kIm0MrlkybrLWunUhUzJZdSrE4YB1MIiz8VI"
    }
});
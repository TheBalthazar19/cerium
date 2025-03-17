import axios from 'axios';
const baseUrl = "https://a90b05cb-e593-4a77-a500-8b909c678f2.mock.pstmn.io";
try {
    const response = await axios.get(`$(baseUrl)/cities`);
    console.log(response.data);
}
catch (error) {
    console.error(error);
}

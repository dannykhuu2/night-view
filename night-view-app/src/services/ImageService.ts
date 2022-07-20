import axios from 'axios';

export const fetchImages = async (count: number) => {
    const response = axios.get(`http://localhost:3333/images/${count}`)
      .then((response) => {
          console.log(response);
      });
}
import axios from "axios";


export default class PizzaService {
  static async getPages(maxElementsOnPage) {
    const response = await axios.get('https://629bd467e9358232f7529957.mockapi.io/items');
    const returnResponse = Math.ceil(response.data.length / maxElementsOnPage)
    return returnResponse
  }
  static async getPizzas(page, limit) {
    const response = await axios.get(`https://629bd467e9358232f7529957.mockapi.io/items?page=${page}&limit=${limit}`)
    return response.data
  }
  static async getSortPizzas(category, limit, page, sortBy, order) {
    const response = await axios.get(`https://629bd467e9358232f7529957.mockapi.io/items?page=${page}&limit=${limit}&category=${category}&sortBy=${sortBy}`)
    return response.data
  }
}

//https://629bd467e9358232f7529957.mockapi.io/items?page=1&limit=8&category=&sortBy=0&order=0

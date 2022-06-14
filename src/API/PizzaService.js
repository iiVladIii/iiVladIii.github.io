import axios from "axios";

const key = '629bd467e9358232f7529957'

export default class PizzaService {
  static async getPages(maxElementsOnPage) {
    const response = await axios.get(`https://${key}.mockapi.io/items`);
    const returnResponse = Math.ceil(response.data.length / maxElementsOnPage)
    return returnResponse
  }
  static async getPizzas(page, limit) {
    const response = await axios.get(`https://${key}.mockapi.io/items?page=${page}&limit=${limit}`)
    return response.data
  }
  static async getSortPizzas(category, limit, page, sortBy) {
    const response = await axios.get(`https://${key}.mockapi.io/items?page=${page}&limit=${limit}&category=${category}&sortBy=${sortBy}`)
    return response.data
  }
}

export default class ApiClient {
    static BASE_URL = 'http://127.0.0.1:3000/api/v1/';

    static fetchMotocycles = async () => {
      const response = await fetch(`${this.BASE_URL}/motorcycles`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };

    static loginUser = ({ name, password }) => {
      const response = fetch(`${this.BASE_URL}/login?name=${name}?password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    };

    static registerUser = ({ name, password }) => {
      const response = fetch(`${this.BASE_URL}/create?name=${name}?password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    };
}

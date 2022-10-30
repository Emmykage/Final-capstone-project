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

    static loginUser = (userInfo) => {
      const response = fetch(`${this.BASE_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      return response;
    };

    static registerUser = (userInfo) => {
      // const response = fetch(`${this.BASE_URL}create?name=${name}?password=${password}`, {
      const response = fetch(`${this.BASE_URL}create`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      return response;
    };
}

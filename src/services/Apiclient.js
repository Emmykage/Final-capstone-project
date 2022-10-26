export default class ApiClient {
    static BASE_URL = 'http://127.0.0.1:3000';
  
    static fetchMotocycles = async () => {
      const response = await fetch(this.BASE_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };
  }
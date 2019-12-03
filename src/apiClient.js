class ApiClient {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  httpClient(url) {
    return fetch(`${this.apiUrl + url}`)
      .then(response => response.json())
      .then((data) => {
        return data;
      });
  }

  async getPosts() {
    return await this.httpClient('posts');
  }

  async getUsers() {
    return await this.httpClient('users');
  }
}

export default ApiClient;

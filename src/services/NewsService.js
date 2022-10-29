// const NEWS_API_KEY = "12ce774c071c4ce1898833bb2cbc90db"
const NEWS_API_KEY = "fa45046ece754923ba7bd91166e573f6"
const API_BASE_URL = "https://newsapi.org/v2/everything";

class NewsService {
  getAllNews(searchParam, activePage) {
    const nextURL = `/?page=${activePage}`;
    window.history.pushState({}, "", nextURL);

    return fetch(`${API_BASE_URL}?q=${searchParam}&page=${activePage}&apiKey=${NEWS_API_KEY}`, {
      method: "GET",
    });
  }
}

export default new NewsService();

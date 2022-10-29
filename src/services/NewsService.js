import { NEWS_API_KEY } from "../apiKey";

const API_BASE_URL = "https://newsapi.org/v2/everything";


class NewsService {
  getAllNews( keyword, activePage) {
    const nextURL = `/?keyword=${keyword}&page=${activePage}`;
    window.history.pushState({}, "", nextURL);

    return fetch(`${API_BASE_URL}?q=${keyword}&page=${activePage}&apiKey=${NEWS_API_KEY}`, {
      method: "GET",
    });
  }
}

export default new NewsService();

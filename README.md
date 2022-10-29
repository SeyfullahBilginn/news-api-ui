# News Api UI => [Tutorial](https://drive.google.com/file/d/1YRN9Jwcq4X8q0-Z2Z07PqghW2IQD0lQ3/view?usp=sharing)

## Development Process

###  I tried to use functional components. I created file named "service" for fetching datas from news api. I want to collect states widely used (not only for only this project, but also for a large scale project) in context which is layout context. Also, there is a pagination for three different versions (left aligned, middle aligned, right aligned) at the end of the page.
  
### I decided to display active page variable and filter keyword variable in url. For that reason, I used [url object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) . Thus, users can send the link to share the page they monitor. Morover, you can change these variables from url in order to see how it works.

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/SeyfullahBilginn/news-api-ui.git
```

2. Change the working directory

```bash
cd news-api-ui
```

3. Install dependencies

```bash
npm install
```

4. Get Your Api Key

   login [news api](https://newsapi.org/) and create your own api key. Then, change it from src/apiKey.js  

5. Run the app

```bash
npm start
```

#### References
[news api](https://newsapi.org/)

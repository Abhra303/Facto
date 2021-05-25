# Facto 
It is a news search engine. 

## How to use
If you have some information with you that you want to confirm, write( or paste ) the data on the textarea and click the `submit` button. After some time, all the relevant articles from different media sources, will be shown. Now, have a look at those articles, go through them, and check if the information is valid or not.

## How it works
The frontend of Facto doesn't directly make the `GET` or `POST` request to elastic search api. Instead, when you click the `submit` button, it makes a `POST` request to the backend [Facto server](https://github.com/Subhra264/facto-server), the server then makes a `GET` request to elastic cloud facto search engine( with all the credentials ) and fetch the relevant response. 

## Limitations
Facto depends on the news API provided by [newsapi.org](https://newsapi.org/). Unfortunately, the free developer plan of *newsapi* allows to use the API from localhost only. So, in order to make Facto work you also need to have the [Facto server](https://github.com/Subhra264/facto-server) running on your device. Again, for the limited plan, we couldn't have a good amount of news articles available to the elastic search database, reducing the efficiency of this Web App.
# Imdb-movie-search

A simple web interface that displays list of movies. Here I crawled the data from IMDB website and stored it into a JSON file. Here user can also search on collected data through IMDB rating, genre and movie's name.

## Getting started

- Clone the repo using 'git clone https://github.com/sanjibroy360/Imdb-movie-search.git'.
- Then install all the dependencies using ' npm i ' or ' npm install '
- Start the server by going into the client and server folder and use 'npm start'.

## Routes

Movie list can be seen on http://localhost:3000/ \
 You can search movies by simply typing movie's name in the input box or by selecting particular genre, rating from dropdown. You can also share the URL to anyone and they will be able to see the same searched data.

Route for the API is http://localhost:5000/ \
 For Scrapping data from IMDB's website, you can enter http://localhost:5000/movies url on the browser, it will scrape data of 100 top movies and will save it into a JSON file.

## Library Used

- Axios ( https://www.npmjs.com/package/axios ).
- Cheerio ( https://www.npmjs.com/package/cheerio ).

## Output

![search-by-genre-and-rating](https://github.com/sanjibroy360/Imdb-movie-search/blob/main/client/src/assets/media/search-by-genre-and-rating.jpeg)


## Developer

#### Sanjib Roy

- Twitter: https://twitter.com/sanjibroy360
- LinkedIn: https://www.linkedin.com/in/sanjibroy360/

import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://www.goodreads.com/author/quotes/162578.Bren_Brown?page=1";
const AxiosInstance = axios.create();

AxiosInstance.get(url)
  .then((response) => {
    const html = response.data;
    const allQuotes = [];
    const $ = cheerio.load(html);
    $(".quoteText").each((idx, el) => {
      const individualQuote = $(el).text().trimStart();
      const indQuoteSlice = individualQuote.slice(
        1,
        individualQuote.indexOf("”")
      );
      allQuotes.push(indQuoteSlice);
    });
    console.log(allQuotes);
  })
  .catch(console.error);


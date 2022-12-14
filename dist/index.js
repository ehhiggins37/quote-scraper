"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const url = "https://www.goodreads.com/author/quotes/162578.Bren_Brown?page=1";
const AxiosInstance = axios_1.default.create();
AxiosInstance.get(url)
    .then((response) => {
    const html = response.data;
    const allQuotes = [];
    const $ = cheerio.load(html);
    $(".quoteText").each((idx, el) => {
        const individualQuote = $(el).text().trimStart();
        const indQuoteSlice = individualQuote.slice(1, individualQuote.indexOf("”"));
        allQuotes.push(indQuoteSlice);
    });
    console.log(allQuotes);
})
    .catch(console.error);
//# sourceMappingURL=index.js.map
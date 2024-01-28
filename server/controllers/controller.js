const Book = require('../models/model');

let fetch = require('fetch').fetchUrl;

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.postBook = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.author_name ||
    !req.body.author_surname ||
    typeof req.body.favorite !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Missing or invalid book data' });
  }

  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Internal server error' });
  }
};

let coins = null;

let currency = null;

exports.getCoins = async (req, res) => {
  if (coins) {
    console.log('coins already fetched');
    res.json(coins);
  } else {
    fetch(
      'https://api.coingecko.com/api/v3/coins/list',
      function (error, meta, body) {
        if (error) {
          console.log(error);
        } else {
          coins = JSON.parse(body);
          res.json(coins);
        }
      },
    );
  }
};
exports.getCurrency = async (req, res) => {
  if (currency) {
    console.log('currency already fetched');
    res.json(currency);
  } else {
    fetch(
      'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
      function (error, meta, body) {
        if (error) {
          console.log(error);
        } else {
          currency = JSON.parse(body);
          res.json(currency);
        }
      },
    );
  }
};

exports.addWatchlist = async (req, res) => {};

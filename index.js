const algoliasearch = require('algoliasearch');
const fs = require('fs');

const client = algoliasearch('ZVMCCYV0CT', '038bc9d1a1d887783c88b8af2723a0eb');
const index = client.initIndex('products');

// Read and parse the JSON file
const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

// Push the data to Algolia
index.saveObjects(products, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log('Products indexed:', objectIDs);
  })
  .catch(err => {
    console.error('Error indexing products:', err);
  });

const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');

const client = algoliasearch('EKQCKC4GRJ', '1c16c063abfb00c77248af3ced219992');
const index = client.initIndex('products');

// Use an absolute path for the products.json file
const productsPath = path.resolve(__dirname, 'data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

index.saveObjects(products, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log('Products indexed:', objectIDs);
  })
  .catch(err => {
    console.error('Error indexing products:', err);
  });

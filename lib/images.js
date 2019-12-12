const { getCollection } = require('./database');

function getImagesCollection() {
  return getCollection('images');
}

async function getImages() {
  const collection = await getImagesCollection();
  return await collection.find({}).toArray();
}

exports.getImages = getImages;

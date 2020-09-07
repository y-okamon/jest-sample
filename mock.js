function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// spyOn確認用
const item = {
  title() {
    return 'item title';
  }
};

module.exports = {
  forEach: forEach,
  item: item
}

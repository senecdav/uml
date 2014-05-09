App.EntityType = {
  INTERFACE: "interface",
  ABSTRACT: "abstract",
  CLASS: "class",
  toArray: function() {
    var array = [];
    for(var item in this) {
	array.push(this[item]);
  }
    array.pop(); // toArray()
    return array;
}
};


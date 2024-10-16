function search(str, obj, count) {
  let a;
  let array = new Set();
  for (let i = 0; i < count; i++) {
    text = obj[i]["title"];
    text = text.toLowerCase();
    textDesc = obj[i]["description"];
    textDesc = textDesc.toLowerCase();

    if (
      text.match(new RegExp("\\b" + str + "\\b", "i")) ||
      textDesc.match(new RegExp("\\b" + str + "\\b", "i"))
    ) {
      array.add(obj[i]["id"]);
    }
  }
  return array;
}

export default search;

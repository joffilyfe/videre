export default class Event {

  static listen(el, typeArr, callback) {
    for (var i = 0, len = typeArr.length; i < len; i++) {
      el.addEventListener(typeArr[i], () => callback(), false);
    }
  }
}

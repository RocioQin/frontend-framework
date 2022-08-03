const data = {
  item1: '222',
  item2: '333'
};
const jsx = createElement("ul", {
  className: "list"
}, createElement("li", {
  className: "item",
  style: {
    background: 'pink',
    color: 'black'
  },
  onClick: () => alert(2)
}, "111"), createElement("li", {
  className: "item"
}, data.item1, createElement("i", null, "111")), createElement("li", {
  className: "item"
}, data.item2));
render(jsx, document.getElementById('root'));
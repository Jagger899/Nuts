import "./assets/jsx.scss";

function create(element, attribute,content) {

  const node = document.createElement(element);

  Object.entries(attribute || {}).forEach(([name, value]) => {
    node.setAttribute(name, value)
  });

  if (typeof content === 'string') {
    content = document.createTextNode(content)
  }

  node.appendChild(content);

  return node;
}

export const template = (
  <div class="wrapper">
    <p>
      <a href="">link</a>
    </p>
  </div>
)
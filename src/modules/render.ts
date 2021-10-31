import Block from './block';

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    const parentRoot = root.parentElement;
    if (parentRoot) {
      parentRoot.replaceChild(block.getContent(), root);
    }
  }
  return root;
}

export default render;

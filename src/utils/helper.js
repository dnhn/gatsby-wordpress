export const parseHtmlEntities = s => {
  const element = document.createElement('div');
  element.innerHTML = s;

  return element.textContent.replace(' […]', '…');
};

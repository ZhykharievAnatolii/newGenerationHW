const list=document.querySelector('ul');
export function renderItem(text) {
    const item=document.createElement('li');
    item.innerText=text;
    list.append(item);
};
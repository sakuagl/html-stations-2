function displayList(){
    let ele = document.getElementById("fruits");
    let children_text = getChildrenText(ele);
    let ul = document.createElement("ul");
    ele.innerHTML = "";
    console.log(ele);

    for (let i = 0; i < children_text.length; i++){
        let li = document.createElement("li");
        li.textContent = children_text[i];
        ul.appendChild(li);
    }
    ele.appendChild(ul);
}

let getChildrenText = element => Array.from(element.children).map(child => child.textContent);
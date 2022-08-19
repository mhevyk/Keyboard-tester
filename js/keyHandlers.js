let keyboard = document.querySelector(".keyboard");

const getClickedKeyData = event => {
    const keyboard = document.querySelector(".keyboard");
    const keyName = event.code;
    return {
        keyNode: keyboard.querySelector(`[data-name='${keyName}']`),
        name: keyName
    };

}
document.onkeydown = event => {
    event.preventDefault();
    const keyNode = getClickedKeyData(event).keyNode;
    if(keyNode){
        const classList = keyNode.classList;
        const holdClass = classList.contains("active") ? "unhold" : "hold";
        classList.add(holdClass);
    }
}

document.onkeyup = event => {  
    const keyData = getClickedKeyData(event);
    const keyNode = keyData.keyNode;
    if(keyNode){
        keyNode.classList.remove("hold", "unhold");
        keyNode.classList.toggle("active");

        const textarea = keyboard.querySelector("textarea");
        textarea.textContent += `<${keyData.name}>`;
        textarea.scrollTop = textarea.scrollHeight;
    }
};
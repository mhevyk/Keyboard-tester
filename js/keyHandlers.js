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
    const keyNode = getClickedKeyData(event).keyNode;
    if(keyNode){
        const classList = keyNode.classList;
        if(classList.contains("active")){
            classList.add("unhold");
        }
        classList.add("hold");
    }
}
document.onkeyup = event => {  
    const keyData = getClickedKeyData(event);
    const keyNode = keyData.keyNode;
    if(keyNode){
        keyNode.classList.remove("hold", "unhold");
        keyNode.classList.toggle("active");

        keyboard.querySelector("textarea").textContent += `<${keyData.name}>`;
    }
};
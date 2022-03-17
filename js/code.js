window.onload=init;

//not commenting this. enjoy my spaghetti

function init() {
    for (const type in currentClothing)
        currentClothing[type] = 0;
}

var currentClothing = {};
const numItems = {
    "top": 3,
    "bottom": 3,
    "socks": 2,
    "shoes": 2
};

function nextItem(itemType) {
    const itemName = String(itemType);
    currentClothing[itemName] = currentClothing[itemName] < numItems[itemName] ? ++currentClothing[itemName] : 1;
    render(itemName,itemName+currentClothing[itemName]);
}

function prevItem(itemType) {
    const itemName = String(itemType);
    currentClothing[itemName] = currentClothing[itemName] > 1 ? --currentClothing[itemName] : numItems[itemName];
    render(itemName,itemName+currentClothing[itemName]);
}

function reset(itemType) {
    const itemName = String(itemType);
    currentClothing[itemName] = 0;
    render(itemName,itemName+currentClothing[itemName]);
}

function render(itemName, path) {
    var clothing=document.getElementById(itemName);
    clothing.setAttribute("class",path);
}
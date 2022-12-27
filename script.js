(function(window, document, undefined){

// code that should be taken care of right away

var drive = "https://drive.google.com/uc?export=view&id="
//var emojis = JSON.parse(`${drive}1RAc4Iq2ecEOJ2Zf7AXMZkAybOWHJlvMr`)

function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

function addElems() {
    // CREATE ELEMS
    var container = document.createElement("div")
    // button
    var btn = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var span = document.createElement("span");
    var img = document.createElement("img");
    // link btns
    var tab = document.createElement("div")
    var links = document.createElement("span")
    var store = document.createElement("img")
    var draw = document.createElement("img")
    var instant = document.createElement("img")
    var top_client = document.createElement("img")
    var top_epal = document.createElement("img")
    // links
    var aStore = document.createElement('a')
    var aDraw = document.createElement("a")
    var aInstant = document.createElement("a")
    var aTop_client = document.createElement("a")
    var aTop_epal = document.createElement("a")

    // STYLE ELEMS
    container.className = 'quicklinks'
    //button
    btn.style = "margin-left: 12px; display: inline; cursor: pointer; display: inline-block; z-index: 10;"
    div1.className = "animate__animated animate__slow animate__repeat-2"
    div2.className = "smallIcon___1hQS7"
    span.className = "ant-avatar ant-avatar-square ant-avatar-image"
    span.style = "width: 32px; height: 32px; line-height: 32px; font-size: 18px;"
    img.src = `${drive}1XezV4qAYvR4FMri3sbKsWzsCOecG6ddC`
    img.style = "border-radius: 25%"
    //link btns
    store.id = "storeBTN"; draw.id = "drawBTN"; instant.id = "instBTN"; top_client.id = "topcBTN"; top_epal.id = "topeBTN";
    store.className = draw.className = instant.className = top_client.className = top_epal.className = "link"
    store.style = "width: 15%; margin-left: 20px; margin-right: 2.5px; margin-bottom: 3.5px; margin-top: 3.5px; display: inline-block;"
    draw.style = instant.style = top_client.style = top_epal.style = "width: 15%; margin: 3.5px 2.5px 3.5px; display: inline-block;"
    tab.style = "background-color: #7b47ff3a; border-radius: 15px; width: 175px; height: 32px; position: absolute; margin-left: 30px; bottom: 16px;"
    links.style = "display: inline;"
    store.src = `${drive}19nb7xma4_7fneftwCPqs3xDKSjysKJej`
    draw.src = `${drive}1D6uSuVz6t1kD5IBEpW1LfeFoO3uk8Ckb`
    instant.src = `${drive}1Cz5PjTC_NFgDMdEo_Wrp-yoNshZPYo60`
    top_client.src = `${drive}1WJVkH6pOTbFlRecoAlo3wqmNK-09dHX_`
    top_epal.src = `${drive}1AACcCm7Gp-lmNGIkgsHoTaM80HUGT77f`
    // links
    aStore.href = "https://www.epal.gg/myStore"
    aDraw.href = "https://www.epal.gg/store"
    aInstant.href = "https://www.epal.gg/instant"
    aTop_client.href = "https://www.epal.gg/leaderboard"
    aTop_epal.href = "https://www.epal.gg/leaderboard/epal"

    // make tab invis
    //tab.style.display = "none"

    // APPEND ELEMS
    // button
    btn.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(span)
    span.appendChild(img)
    // links
    aStore.append(store)
    aDraw.append(draw)
    aInstant.append(instant)
    aTop_client.append(top_client)
    aTop_epal.append(top_epal)
    links.append(aStore, aDraw, aInstant, aTop_client, aTop_epal)
    tab.appendChild(links)
    // put them in container
    container.append(btn, tab)

    // INJECT ELEMS
    document.querySelector(".rightContent___36h2s").prepend(container)
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function configChat() {
    // get elems
    var giftBtn = document.querySelector("#lottie").parentElement.parentElement.parentElement.parentElement
    // GIFT CONFIG
    // remove from slot
    giftBtn.style.display = "none"
    // re-customize gift button
    giftBtn.querySelector('#lottie').style.width = "28px"
    giftBtn.querySelector('#lottie').style.height = "28px"
    giftBtn.querySelector('#lottie').style.position = "relative"
    giftBtn.querySelector('#lottie').style.bottom = "7px"
    // REPLY CONFIG
    // add elems
    var img = document.createElement('img')
    var text = document.createElement('p')
    // customize elems
    img.src = `${drive}1uljdPvBt7bKkKW-9dW6IaFaw-PkzQLse`
    img.style = "display: inline-block; width: 32px; margin-right: 10px;"
    text.innerHTML  = "Automated Replies"
    text.style.display = "inline-block"
    // inject elems
    waitForElm('.epal-button.epal-button-default-tertiary.epal-button-block').then((elm)=> {
        var replyBtn = document.querySelector(".epal-button.epal-button-default-tertiary.epal-button-block")
        replyBtn.firstChild.remove()
        replyBtn.append(img, text)
    })
    // after emoji tab is opened, move gift button
    waitForElm('.tabs___FC4bS').then((elm)=> {
        var tab = document.querySelector(".tabs___FC4bS")
        tab.querySelector('.ant-space.ant-space-vertical').style.gap = "2px"
        tab.prepend(giftBtn)
        giftBtn.style.display = "block"
    });
}

function getElementsByXPath(xpath, parent)
{
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

function toLink() {
    // search entire page for link
    // // get a list of all the text elems that have links in them
    // var links = getElementsByXPath("*[text()[contains(.,'http')]]");
    // // iterate through each text
    // links.forEach(function(element) {
    //     // create and append link
    //     var a = document.createElement('a');
    //     element.parentElement.append(a)
    //     a.append(element)
    //     // find the link in the text
    //     var link = element.innerHTML.split(' ');
    //     // loop to find link
    //     for (i=0; i < link.length; i++) {
    //         if (link[i].includes('http')) {
    //             link = link[i]
    //             break
    //         }
    //     }
    //     // make link clickable
    //     a.href = link;
    //})
    
}

window.onload = init;

  function init(){ // the code to be called when the dom has loaded
    addCss('style.css');
    addElems();
    var container = document.querySelector('.quicklinks')
    var ids = ['#storeBTN', '#drawBTN', '#instBTN', '#topcBTN', '#topeBTN']

    

    // hover transition
    container.addEventListener('mouseenter', async function (e) {
        await sleep(500)
        for (i=0; i < ids.length; i++) {
            document.querySelector(ids[i]).classList.add('active');
            document.querySelector(ids[i]).classList.remove('inactive');
        }
    });
    container.addEventListener('mouseleave', async function () {
        await sleep(500)
        for (i=0; i < ids.length; i++) {
            document.querySelector(ids[i]).classList.remove('active');
            document.querySelector(ids[i]).classList.add('inactive');
        }
    })

    // wait for the button and emoji tab to appear to config
    waitForElm('#lottie').then((elm) => {
        configChat()
    });
    
    // wait for (what i observed to be) the last elem that loads to load
    waitForElm('.iconfont.icon-icon-helpCenter').then((elm) => {
        toLink();
    });
    }

})(window, document, undefined);
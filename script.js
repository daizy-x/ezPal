(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){ // the code to be called when the dom has loaded
    // TABS SCRIPTS
    let tab_btns = document.getElementsByClassName("tablinks")
    let tabs = document.getElementsByClassName("tabcontent")
    // consider making this a loop and dictionary
    let home_tab = document.getElementById('Home btn')
    let reply_tab = document.getElementById('Reply btn')
    let collect_tab = document.getElementById('Collect btn')
    let stats_tab = document.getElementById('Stats btn')
    let settings_tab = document.getElementById('Settings btn')
    // onclick function (MAKE THIS A LOOP)
    home_tab.addEventListener("click", () => {
        // close all the other tabs
        for (i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        // make tab descriptor inactive
        for (i = 0; i < tab_btns.length; i++) {
            tab_btns[i].className = tab_btns[i].className.replace('*', '');
        }
        // open this tab and make desc active
        document.getElementById(home_tab.id.replace(' btn', '')).style.display = "block";
        home_tab.className += "*";
        })
    }

})(window, document, undefined);
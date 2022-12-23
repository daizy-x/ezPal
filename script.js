(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){ // the code to be called when the dom has loaded
    // TABS SCRIPTS
    let tab_btns = document.getElementsByClassName("tablinks")
    let tabs = document.getElementsByClassName("tabcontent")
    // consider making this a loop and dictionary
    tab_names = ['Home', 'Reply', 'Collect', 'Stats', 'Settings']
    for (i=0; i < tab_names.length; i++) {
        tab = document.getElementById(tab_names[i])
        tab_btn = document.getElementById(tab_names[i]+" btn")
        //window.alert(i, tab_names[i])
        tab_btn.addEventListener("click", (event) => {
            // close other tabs
            for (t = 0; t < tabs.length; t++) {
                tabs[t].style.display = "none";
            }
            // mark tabs inactive
            for (t = 0; t < tab_btns.length; t++) {
                tab_btns[t].className = tab_btns[t].className.replace("*", '');
            }
            // open tab & mark active
            document.getElementById(event.target.id.replace(' btn', '')).style.display = "block";
            event.target.className += "*"
        })
    }

    /*let home_tab = document.getElementById('Home btn')
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
        })*/
    }

})(window, document, undefined);
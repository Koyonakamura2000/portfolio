(function() {
  "use strict";
  window.addEventListener("load", init);

  // const iconPaths = {"Overview": ["../images/icons/overview-deselected.svg", "../images/icons/overview-selected.svg"], "Method": ["../images/icons/method-deselected.svg", "../images/icons/method-selected.svg"], "Reflection": ["../images/icons/reflection-deselected.svg", "../images/icons/reflection-selected.svg"]};

  const iconPaths = {"Overview": {"gray": "../images/icons/overview-gray.svg", "black": "../images/icons/overview-black.svg", "white": "../images/icons/overview-white.svg"}, "Method": {"gray": "../images/icons/method-gray.svg", "black": "../images/icons/method-black.svg", "white": "../images/icons/method-white.svg"}, "Reflection": {"gray": "../images/icons/reflection-gray.svg", "black": "../images/icons/reflection-black.svg", "white": "../images/icons/reflection-white.svg"}}

  function init() {
    let navItems = id("method-nav").querySelectorAll(".method-nav-item, .method-nav-submenu");
    console.log(navItems);
    for(let i = 0; i < navItems.length; i++) {
      if(navItems[i].classList.contains("method-nav-item")) {
        navItems[i].addEventListener("click", updateNav);
      } else if(navItems[i].classList.contains("method-nav-submenu")) {
        let subnavItems = navItems[i].querySelectorAll("h3");
        for(let j = 0; j < subnavItems.length; j++) {
          subnavItems[j].addEventListener("click", updateSubnav);
        }
      }
    }
  }

  function updateNav() {
    console.log(this);
    let parent = id("method-nav");
    if(!this.classList.contains("selected")) {
      deselectSubnav();
      // start here - change boldness of text, icon
      let previousSelection = parent.querySelector(".selected");
      if(previousSelection != undefined) {
        toggleSelect(previousSelection);
      }
      toggleSelect(this);
    }
  }

  function toggleSelect(nav) {
    let optionName = nav.innerText;
    if(id("method-nav").classList.contains("text-white")) {
      if(nav.classList.contains("selected")) {
        nav.classList.remove("selected");
        let deselectedIcon = document.createElement("img");
        deselectedIcon.src = iconPaths[optionName]["gray"];
        let previousIcon = nav.querySelector("img");
        nav.replaceChild(deselectedIcon, previousIcon);
      } else {
        nav.classList.add("selected");
        let selectedIcon = document.createElement("img");
        selectedIcon.src = iconPaths[optionName]["white"];
        let previousIcon = nav.querySelector("img");
        nav.replaceChild(selectedIcon, previousIcon);
      }
    } else {
      if(nav.classList.contains("selected")) {
        nav.classList.remove("selected");
        let deselectedIcon = document.createElement("img");
        deselectedIcon.src = iconPaths[optionName]["gray"];
        let previousIcon = nav.querySelector("img");
        nav.replaceChild(deselectedIcon, previousIcon);
      } else {
        nav.classList.add("selected");
        let selectedIcon = document.createElement("img");
        selectedIcon.src = iconPaths[optionName]["black"];
        let previousIcon = nav.querySelector("img");
        nav.replaceChild(selectedIcon, previousIcon);
      }
    }
  }

  function deselectSubnav() {
    let subnav = id("method-nav").querySelector(".method-nav-submenu");
    let selected = subnav.querySelector(".selected");
    if(selected != null) {
      selected.classList.remove("selected");
    }
  }

  function updateSubnav() {
    let nav = id("method-nav").querySelectorAll(".method-nav-item");
    for(let i = 0; i < nav.length; i++) {
      if(nav[i].innerText == "Method") {
        if(!nav[i].classList.contains("selected")) {
          toggleSelect(nav[i]);
        }
      } else {
        if(nav[i].classList.contains("selected")) {
          toggleSelect(nav[i]);
        }
      }
    }
    let subnav = id("method-nav").querySelector(".method-nav-submenu");
    let previousSelection = subnav.querySelector(".selected");
    if(previousSelection) {
      previousSelection.classList.remove("selected");
    }
    this.classList.add("selected");
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();

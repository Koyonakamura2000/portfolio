(function() {
  "use strict";
  window.addEventListener("load", init);

  // edit this to change projects that appear on home page
  const projectLinks = {"Modern Commerce Landscape": "projects/moderncommercelandscape.html", "Symbiosis": "projects/symbiosis.html", "Night-Time Reflection Research": "projects/nightreflection.html", "Watchful Walking": "projects/watchfulwalking.html"};

  /**
    when the page loads, the page attaches event listeners to interactive
    elements: the button that adds a text box and the background color setting
    @param {null} runs when the webpage is opened
  */
  function init() {
    makeThumbnails();
  }

  function makeThumbnails() {
    let container = id("thumbnails");
    let thumbnails = container.getElementsByClassName("thumbnail");
    for(let i = 0; i < thumbnails.length; i++) {
      let projectName = thumbnails[i].querySelector("h2").innerText;
      if(projectName in projectLinks) {
        // add redirect listener
        thumbnails[i].addEventListener("click", redirect.bind(projectLinks[projectName]));
      } else {
        thumbnails[i].classList.add("hidden");
      }
    }
  }

  function redirect() {
    location.href = this;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }
})();

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
    attachLinks();
  }

  function attachLinks() {
    id("yt1").addEventListener("click", redirect.bind("https://www.youtube.com/channel/UCiD7Wb-eQZ08a4_XFT3v2Hg"));
    id("yt2").addEventListener("click", redirect.bind("https://www.youtube.com/channel/UC6nFjB0GtJPuoqcakJf-lZg"));
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

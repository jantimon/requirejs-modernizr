/* global define: false, require: false */

// Define App
define("demo", ["Modernizr", "feature-detects/svg", "feature-detects/css/transforms3d"],
  function (Modernizr) {
    "use strict";

    alert(document.body.parentNode.className);
  });

// Launch app
require(["demo"]);
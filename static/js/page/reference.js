var NavTree = require('../com/nav-tree');
var ExecutableCodeFragment = require('../com/executable-code');
const CodeMirror = require('../com/CodeMirror');

const $ = require('jquery');

$(document).ready(function () {
  $(':header').each(function (ind, element) {
                var id = element.getAttribute("id");
                var tagName = element.tagName.toLowerCase();
                if( id == null) return;
                if(!(tagName == "h1" || tagName == "h2" || tagName == "h3")) return;
                var referenceElement = document.createElement("a");
                referenceElement.className = "anchor";
                referenceElement.href = "#" + id;
                element.appendChild(referenceElement)
  });

  $('.sample').each(function (ind, element) {
    new ExecutableCodeFragment(element);
  });

  CodeMirror.colorize($('.code._highlighted'));

  new NavTree(document.getElementById('reference-nav'));
});
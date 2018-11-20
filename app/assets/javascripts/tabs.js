
  /* show the cards */
  function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    var prev = document.getElementById(tabName).style.display;
    tabcontent = document.getElementsByClassName("intab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-title");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if (prev == "block")  {
      document.getElementById(tabName).style.display = "none";
    }
    else {
      document.getElementById(tabName).style.display = "block";
    }
    evt.currentTarget.className += " active";
  }
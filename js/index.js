const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

  var dashboard_page_header = document.getElementById("dash");
  var menubar = document.querySelector(".menu-bar");
  
  var x = 1;
  
  toggle.addEventListener("click", () => {
    if (dashboard_page_header.className === "dashboard_page_header") {
      dashboard_page_header.className = "dashBoard_toggle";
    } else if (dashboard_page_header.className === "dashBoard_toggle") {
      dashboard_page_header.className = "dashboard_page_header";
    }
    sidebar.classList.toggle("close");
    x = document.getElementsByClassName("sidebar close");
    x = x.length;
    console.log(x);
  });


// if (x === 1) {
//   menubar.addEventListener("mouseenter", () => {
//     if (dashboard_page_header.className === "dashboard_page_header") {
//       dashboard_page_header.className = "dashBoard_toggle";
//     } else if (dashboard_page_header.className === "dashBoard_toggle") {
//       dashboard_page_header.className = "dashboard_page_header";
//     }
//     sidebar.classList.toggle("close");
//   })   
// }



$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
$(".feat-btn_1").click(function () {
  $("nav ul ul .feat-show_1").toggleClass("show");
});

$(".feat-btn_2").click(function () {
  $("nav ul ul .feat-show_2").toggleClass("show");
});

$(".feat-btn_12").click(function () {
  $("nav ul ul ul .feat-show_12").toggleClass("show");
});

$(".feat-btn_13").click(function () {
  $("nav ul ul ul ul .feat-show_13").toggleClass("show");
});

$(".clock").click(function () {
  $(".time-show").toggleClass("show");
});

var dropContent = document.getElementById("drop-content");
var login_box = document.getElementById("login_box");
login_box.addEventListener("click", () => {
  if (dropContent.style.display === "none") {
    dropContent.style.display = "block";
  } else {
    dropContent.style.display = "none";
  }
});

// dropdown top

function myFunction() {
  document.getElementById("myDrpdown").classList.toggle("shw");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drpbtn")) {
    var dropdowns = document.getElementsByClassName("drpdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("shw")) {
        openDropdown.classList.remove("shw");
      }
    }
  }
};
// other one

function myFunction_1() {
  document.getElementById("myDrpdown_1").classList.toggle("shw_1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drpbtn_1")) {
    var dropdowns = document.getElementsByClassName("drpdown-content_1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("shw_1")) {
        openDropdown.classList.remove("shw_1");
      }
    }
  }
};

function myFunction_w() {
  document.getElementById("myDrpdown_w").classList.toggle("shw_w");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drpbtn_w")) {
    var dropdowns = document.getElementsByClassName("drpdown-content_w");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("shw_w")) {
        openDropdown.classList.remove("shw_w");
      }
    }
  }
};

// accordian content

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const graphPage = document.getElementById("workFlow");
const Gib = document.getElementById("g_i_b");
graphPage.addEventListener("click", () => {
  if (Gib.style.marginLeft === "280px") {
    Gib.style.marginLeft = "30px";
  }
  else {
    Gib.style.marginLeft = "280px";
  }
})

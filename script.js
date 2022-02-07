var subY1 = document.getElementById("subY1");
var subY2 = document.getElementById("subY2");
var subY3 = document.getElementById("subY3");

var subN1 = document.getElementById("subN1");
var subN2 = document.getElementById("subN2");
var subN3 = document.getElementById("subN3");

var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");
var no3 = document.getElementById("no3");

var quiz1 = document.getElementById("quiz1");
var quiz2 = document.getElementById("quiz2");
var quiz3 = document.getElementById("quiz3");

var yes1 = document.getElementById("yes1");
var yes2 = document.getElementById("yes2");
var yes3 = document.getElementById("yes3");

var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");
var no3 = document.getElementById("no3");

subY1.onclick = function () {
  yes1.style.display = "none";
  no1.style.display = "none";

  quiz1.style.display = "none";
  quiz2.style.display = "block";

  yes1.style.display = "block";
};
subN1.onclick = function () {
  yes1.style.display = "none";
  no1.style.display = "none";

  quiz1.style.display = "none";
  quiz2.style.display = "block";

  no1.style.display = "block";
};

subY2.onclick = function () {
  yes2.style.display = "none";
  no2.style.display = "none";

  quiz2.style.display = "none";
  quiz3.style.display = "block";

  yes2.style.display = "block";
};
subN2.onclick = function () {
  yes2.style.display = "none";
  no2.style.display = "none";

  quiz2.style.display = "none";
  quiz3.style.display = "block";

  no2.style.display = "block";
};

subY3.onclick = function () {
  yes3.style.display = "none";
  no3.style.display = "none";

  quiz3.style.display = "none";
  quiz1.style.display = "block";

  yes3.style.display = "block";
};
subN3.onclick = function () {
  yes3.style.display = "none";
  no3.style.display = "none";

  quiz3.style.display = "none";
  quiz1.style.display = "block";

  no3.style.display = "block";
};
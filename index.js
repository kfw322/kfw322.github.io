var $tbody = document.querySelector("tbody");
var $datetimeinput = document.querySelector("#datetime");
var $cityinput = document.querySelector("#city");
var $stateinput = document.querySelector("#state");
var $countryinput = document.querySelector("#country");
var $shapeinput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
$(document).ready(function() {
  $('#table').DataTable( {
      "pagingType": "full_numbers"
  } );
} );
$searchBtn.addEventListener("click", clicked);
var f = partDataSet;
renderTable();

function clicked() {

  f = partDataSet;
  renderTable();
  if ($datetimeinput.value.trim()){ //DATETIME
    f = f.filter(function(entry) {
      return entry.datetime.trim() == $datetimeinput.value.trim();
    });
  renderTable();
  }
 if ($cityinput.value.trim()){ //CITY
   f = f.filter(function(entry) {
     return entry.city.trim() == $cityinput.value.trim();
    });
  renderTable();
  }
  if ($stateinput.value.trim()){ //STATE
    f = f.filter(function(entry) {
      return entry.state.trim() == $stateinput.value.trim();
    });
  renderTable();
  }
  if ($countryinput.value.trim()){ //COUNTRY
    f = f.filter(function(entry) {
      return entry.country.trim() == $countryinput.value.trim();
    });
  renderTable();
  }
  if ($shapeinput.value.trim()){ //SHAPE
    f = f.filter(function(entry) {
      return entry.shape.trim() == $shapeinput.value.trim();
    });
  renderTable();
  }
}
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < f.length; i++) {
    var entry = f[i];
    var fields = Object.keys(entry);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = entry[field];
    }
  }
}
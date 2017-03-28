$(document).ready(function() {
  $("#form").submit(function(event) {

    var number= $("#userNum").val();
    total=1;
    for (var mult = number; mult > 0; mult -= 1){

    total*=mult
    };

    alert(total);
  });
});

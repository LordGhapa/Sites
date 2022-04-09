var i = 1;

$("#botao").mousedown(function () {
  if (i == 1) {
    $("#text").html("<b style='color:red;'>VOCE É MUITO CURIOSO!!!</b>");
  }
  if (i == 2) {
    $("#botao").slideUp("50ms");
    $("#text").html(
      "<b style='color:red;font-size:30px;'>DA PRA PARAR É APENAS DE ENFEITE!!!</b>"
    );
  }
  i++;
});

$(".barras").click(function () {
  $(".menu-mobile > div").slideToggle();
});

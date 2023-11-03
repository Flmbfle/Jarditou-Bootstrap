
$(document).ready(function() {
    $("#btn1").click(function() {
      if ($("#div1").is(":visible")) {
        $("#div1").hide();
        $(this).text("Voir la liste des produits");
      } else {
        $("#div1").html('<img src="/assets/img/loading.gif" alt="Chargement en cours..." />');
        $(this).text("Masquer la liste des produits");
  
        // Charge le contenu de partiel1.html et affiche la div après le chargement
        $("#div1").load("partiel1.html", function() {
          $("#div1").show();
        });
      }
    });
  });

  
$(document).ready(function() {
    // Sélection des menus déroulants
    var departementSelect = $('#departementSelect');
    var regionSelect = $('#regionSelect');

    // Remplir le menu des régions
    $.ajax({
      url: '/assets/js/ajax_regions.json',
      dataType: 'json',
      success: function(data) {
        $.each(data.Régions, function(index, region) {
          regionSelect.append($('<option>', {
            value: region.reg_id,
            text: region.reg_v_nom
          }));
        });

        // Gestionnaire d'événement de changement sur le menu déroulant région
        regionSelect.on('change', function() {
          var selectedRegion = regionSelect.val();
          if (selectedRegion) {
            // Si région est sélectionnée, filtrez les départements
            departementSelect.empty(); // Supprimez les anciennes options
            departementSelect.append($('<option>', {
              value: '',
              text: 'Sélectionnez un département'
            }));

            $.each(data.départements, function(index, departement) {
              if (departement.dep_reg_id == selectedRegion) {
                departementSelect.append($('<option>', {
                  value: departement.id_dep,
                  text: departement.dep_nom
                }));
              }
            });

            departementSelect.prop('disabled', false); // Activez le menu déroulant des départements
          } else {
            // Si aucune région n'est sélectionnée, désactivez le menu déroulant des départements
            departementSelect.empty(); // Supprimez les anciennes options
            departementSelect.prop('disabled', true);
          }
        });
      },
      error: function() {
        console.error('Erreur lors de la récupération des données JSON');
      }
    });
  });
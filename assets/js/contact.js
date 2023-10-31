$(document).ready(function() {
    function verif() {
        var envoi = true;

        // Réinitialisez les messages d'erreur et masquez-les au début de la validation
        $(".text-danger").text("").addClass("d-none");

        var prenom = $("#exampleInputPrenom").val();
        var nom = $("#exampleInputNom").val();
        var cp = $("#exampleInputCp").val();
        var ville = $("#exampleInputVille").val();
        var adresse = $("#exampleInputAdresse").val();
        var email = $("#exampleInputEmail").val();
        var sexeFeminin = $("#inlineRadioFeminin").is(":checked");
        var sexeMasculin = $("#inlineRadioMasculin").is(":checked");
        var dateNaissance = $("#exampleInputDate").val();
        var question = $("#textQuestion").val();
        var sujet = $("#sujet").find(":selected").val();
        var conditionsAcceptees = $("#conditions").is(":checked");

        if (nom.length < 1) {
            envoi = false;
            $("#NomError").text("Votre nom doit comporter au moins 1 caractère.").removeClass("d-none");
        }
        if (prenom.length < 1) {
            envoi = false;
            $("#PrenomError").text("Votre prénom doit comporter au moins 1 caractère.").removeClass("d-none");
        }
        if (!sexeFeminin && !sexeMasculin) {
            envoi = false;
            $("#SexeError").text("Veuillez sélectionner votre sexe.").removeClass("d-none");
        }
        if (dateNaissance === "") {
            envoi = false;
            $("#DateError").text("La date de naissance est obligatoire.").removeClass("d-none");
        }
        if (!/^\d{5}$/.test(cp)) {
            envoi = false;
            $("#CpError").text("Le code postal doit contenir 5 chiffres.").removeClass("d-none");
        }
        if (adresse.length < 1) {
            envoi = false;
            $("#AdresseError").text("Veuillez entrer votre adresse.").removeClass("d-none");
        }
        if (ville.length < 1) {
            envoi = false;
            $("#VilleError").text("La ville doit comporter au moins 1 caractère.").removeClass("d-none");
        }
        if (email.indexOf("@") === -1) {
            envoi = false;
            $("#EmailError").text("L'adresse email doit contenir le caractère '@'.").removeClass("d-none");
        }
        if (sujet === "") {
            console.log('dfsdfi')
            envoi = false;
            $("#SujetError").text("Veuillez sélectionner un sujet.").removeClass("d-none");
        }
        if (question.trim() === "") {
            envoi = false;
            $("#QuestionError").text("Veuillez renseigner ce champ.").removeClass("d-none");
        }
        if (!conditionsAcceptees) {
            envoi = false;
            $("#ConditionError").text("Merci de bien vouloir accepter les conditions !").removeClass("d-none");
        }
        // +++ CONTROLES DES AUTRES CHAMPS +++
        
        if (envoi) {
            alert("Formulaire soumis avec succès!");
            // Vous pouvez soumettre le formulaire ici ou effectuer d'autres actions.
        }
    }

    $("#btn_envoyer").click(function(e) {
        e.preventDefault();
        verif();
    });
});
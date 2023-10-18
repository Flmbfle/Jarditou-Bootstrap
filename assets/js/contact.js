var contactForm = document.getElementById("formulaire");

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            // Réinitialisez les messages d'erreur précédents
            var errorElements = document.getElementsByClassName("error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = "";
            }

            var nom = document.getElementById("exampleInputNom").value;
            var prenom = document.getElementById("exampleInputPrenom").value;
            var cp = document.getElementById("exampleInputCp").value;
            var ville = document.getElementById("exampleInputVille").value;
            var email = document.getElementById("exampleInputEmail").value;
            var sexeFeminin = document.getElementById("sexeFeminin");
            var sexeMasculin = document.getElementById("sexeMasculin");//.checked;
            var conditionsAcceptees = document.getElementById("conditions").checked;
            var isValid = true;

            if (nom.length < 1) {
                console.log('nom invalide')
                document.getElementById("nomError").textContent = "Votre nom doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (prenom.length < 1) {
                console.log('prenom invalide')
                document.getElementById("prenomError").textContent = "Votre prénom doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (!/^\d{5}$/.test(cp)) {
                console.log('cp invalide')
                document.getElementById("cpError").textContent = "Le code postal doit comporter 5 caractères numériques.";
                isValid = false;
            }

            if (ville.length < 1) {
                console.log('ville invalide')
                document.getElementById("villeError").textContent = "La ville doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (email.indexOf("@") === -1) {
                console.log('email invalide')
                document.getElementById("emailError").textContent = "L'adresse email doit contenir le caractère '@'.";
                isValid = false;
            }
            
            // if (!sexeFeminin && !sexeMasculin) {
            //     document.getElementById("sexeError").textContent = "Veuillez sélectionner votre sexe.";
            //     isValid = false;
            // }
        
            if (!conditionsAcceptees) {
                console.log('conditions invalide')
                document.getElementById("conditionsError").textContent = "Vous devez accepter les conditions.";
                isValid = false;
            }

            if (isValid) {
                console.log('Formulaire OK')
                // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire ici
                // contactForm.submit();
                alert("Formulaire soumis avec succès!");
            }
        });
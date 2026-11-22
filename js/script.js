
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = document.querySelector("#nom").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        // Remplacer par ton adresse email
        const destinataire = "TON_EMAIL";

        const sujet = encodeURIComponent(
            "Contact portfolio - " + nom
        );

        const contenu = encodeURIComponent(
            "Nom : " + nom + "\n" +
            "Email : " + email + "\n\n" +
            "Message :\n" + message
        );

        window.location.href =
            `mailto:${destinataire}?subject=${sujet}&body=${contenu}`;
    });
}

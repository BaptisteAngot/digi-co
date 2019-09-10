<?php

if (empty($_POST['prenom']) ||
    empty($_POST['nom']) ||
    empty($_POST['mail']) ||
    empty($_POST['societe']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided !";
    return false;
}
$prenom = strip_tags(htmlspecialchars($_POST['prenom']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$societe = strip_tags(htmlspecialchars($_POST['societe']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = 'contact@deshaisarmand.fr';
$email_subject = "Formulaire de contact SiteWeb |  $name";
$email_body = "Message recu sur le site digiandco.com : prenom: $prenom\n\nName: $name\n\nEmail: $email_address\n\nSociété: $societe\n\nMessage:\n$message";
$headers = "From: contact@deshaisarmand.fr\n";
$headers .= "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);
return true;
?>

<?php

// L'utilisateur a 3 essais max, et ensuite on lui dit Erreur
// Le mot de passe ait 1 minuscule, 1 majuscule et 1 caractère spéciale et 1 chiffre et au minimum 8 caractères


// Je veux un tableau multidimensionnel avec plusieurs email et mot de passe

$utilisateurs = [
    ["sambeauprak@gmail.com", "zsA7j#jK"],
    ["alice@example.com", "Abc123!x"],
    ["bob@example.com", "Qwerty9$"],
    ["carol@example.com", "Passw0rd#"],
    ["dave@example.com", "Secure8@"],
];

// Créer une function login($email, $password), la fonction retourne Ok, ou pas Ok


function login($email, $password, $utilisateurs) {
    foreach ($utilisateurs as $user) {
        if ($user[0] === $email && $user[1] === $password) {
            return "Ok";
        }
    }
    return "Pas Ok";
}

function validpassword($password) {
    if (strlen($password) < 8) {
        return false;
    }
    if (!preg_match('/[a-z]/', $password)) {
        return false;
    }
    if (!preg_match('/[A-Z]/', $password)) {
        return false;
    }
    if (!preg_match('/[0-9]/', $password)) {
        return false;
    }
    if (!preg_match('/[\W_]/', $password)) {
        return false;
    }
    return true;
    }


$attempts = 0;
$maxAttempts = 3;

while ($attempts < $maxAttempts) {
    $email = readline("enter your email: ");
    $password = readline("enter your password: ");

        if (validpassword($password)) {
            $result = login($email, $password, $utilisateurs);
            if ($result === "Ok") {
                echo "Youhou ! Connexion réussie !";
                break;
            } else {
                echo "Erreur de connexion. Veuillez réessayer.\n";
                $attempts++;
            }
        } else {
            echo "Mot de passe invalide. Veuillez réessayer.\n";
            $attempts++;
        }

        if ($attempts >= $maxAttempts) {
            echo "Vous avez dépassé le nombre maximum de tentatives. Veuillez réessayer plus tard.\n";
            break;
        }
}



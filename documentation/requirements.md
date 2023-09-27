# Critères d'évaluation

## Git

- :white_check_mark: Versionné régulièrement et de manière atomique (Plusieurs "commit" par jour pendant toute la durée du projet)
- :white_check_mark: Historique de commit propre (éviter les doublons, les commits inutiles)
- :white_check_mark: Mise en plance d'une branche de développement supplémentaire, voire plusieurs selon l'architecture du site
- :white_check_mark: Fonction "pull request"
- :white_check_mark: Mise en place un Github Action (automatisation de tests intégration, vulnérabilité, ...)

## Sécurité

- :white_check_mark: Prévenir les vulnérabilités principales (cross site, injection sql, protection des tokens, validation des données) => GoogleSearchConsole, Sucuri
- :white_check_mark: Respect de la protection des données (RGPD, encapsulation)
- :white_square_button: Utilisation des chemins absolus

## SEO

- :white_check_mark: Mise en place de la stratégie SEO : données structurées, ...
- :white_square_button: PWA (Progressive Web App) : services workers (microphone, localisation, ...)
- :white_square_button: HTML sémantique

## Performance

- :white_square_button: Bon résultat sur PageSpeed Insights
- :white_square_button: Optimisation images (surtout mobile)
- :white_check_mark: Limiter le nombre de requêtes

## Accessibilité

- :white_square_button: Accessibilité : title, aria-label, alt
- :white_square_button: Optimisation des images : poids et formats adaptés
- :white_square_button: Fournir un site web avec une bonne expérience utilisateur
- :white_square_button: Texte lisible : interlinéage suffisant, taille des polices proportionnelles, contraste des couleurs optimale, ...

## Architecture

-  :white_check_mark: Bons principes de structuration respectés, y compris pour le web mobile
-  :white_check_mark: Eviter les répétitions en utilisant des fonctions

## Contenu

- :white_check_mark: Contenu vérifié : informations croisées, résumé de plusieurs sources, ...
- :white_check_mark: Détail des étapes pour chaque diagramme

## UI/UX

- :white_check_mark: Features d'animations, transitions, barre de navigation => vérif du site
- :white_check_mark: Design cohérent (couleur, forme, police)
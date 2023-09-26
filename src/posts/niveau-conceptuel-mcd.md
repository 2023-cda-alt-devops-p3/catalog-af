---
title: Niveau conceptuel (MCD)
description: Le niveau conceptuel, il s'agit du MCD (Modèle Conceptuel des Données).
date: '2023-09-25'
categories:
  - méthodes
  - merise
published: true
---

## Niveau conceptuel (MCD)
Le MCD permet de représenter le système d'information indépendamment de son aspect informatique, il doit être compréhensible par tous: informaticiens, employés, secrétaires, personnel de direction, etc.

Pour ce faire la méthode Merise utilise 2 représentations:

- l'**entité**: elle regroupe l'information <ins>statique et durable</ins>.
  > Par exemple, l’entité employe rassemble toutes les informations communes aux employés d'une entreprise
  >
  > <span style="color:red">Une entité est représentée par un nom commun écrit en majuscules et au sungulier.</span>
  >
  > Exemples: EMPLOYE, DIPLOME, COMMUNE, FOURNISSEUR, etc.
- l'**association**: elle matérialise la <ins>dynamique du système</ins> et donc les relations entre les entités.
  > Par exemple, l'entité employe est en relation avec l'entité service de l'entreprise.
  >
  > <span style="color:red">L'association (ou relation) est représentée par un verbe d'action ou d'éta à l'infinitif.</span>
  >
  > Exemples: HABITER, LOUER, JOUER, CARACTERISER, etc.

### L'entité
Lorsque le dictionnaire des données est terminé on regroupe les données dans des ensembles cohérents: les **entités**.

Par conventions ces **entités** sont symbolisées par des <ins>rectangles</ins>. Chaque entité porte un nom, qui l'identifie de manière unique. Ce nom sera obligatoirement un <ins>substantif</ins> en majuscules et au singulier.

> Une entité regroupe des informations de même nature, ces informations sont représentées par les attributs de l'entité.

Chaque attribut répond aux règles suivantes (voir normalisation):

- Un attribut ne peut en aucun cas être partagé par plusieurs entités ou associations (polysémie).
- Un attribut est une donnée élémentaire, ce qui exclut des données calculées ou déduites d'autres attributs.
- Une entité et ses attributs doivent être cohérents entre eux (ne traiter que d’un seul sujet).
- Un ou un ensemble d'attributs constituent la clé primaire de l'entité.

Afin d'éviter les synonymes et les polysème on fera suivre le nom de l'attribut par un suffixe de 4 caractères: l'underscore et les 3 premières lettres de l'entité auquel il appartient.

![mcd](./images/merise-mcd-01.jpg)

### L'association
On met les entités en relation au moyen d'une association.

> Une association (ou une relation) est un lien entre plusieurs entités.

L'association représente la <ins>dynamique</ins> du système, elle exprime l'activité du système d'information, elle est caractérisée par les cardinalités.

L'association est représentée par un ovale dont le titre est un <ins>verbe d'action ou d'état</ins>.

### La cardinalité
> La cardinalité d’une patte reliant une association et une entité précise le nombre de fois minimal et maximal d’interventions d’une occurence de l'entité avec l'association. La cardinalité minimale doit être inférieure ou égale à la cardinalité maximale.

Les seuls cardinalités admises sont donc :

- **1-1**: une occurrence de l'entité participe minimum et maximum 1 fois à l'association
- **0-1**: une occurrence de l'entité peut exister sans pour autant participer à la relation et ne participe jamais plus d'une fois
- **1-n**: une occurrence de l'entité participe au moins une fois à l'association et peut participer sans limitation
- **0-n**: une occurrence de l'entité peut exister sans pour autant participer à la relation et peut participer sans limitation

![mcd](./images/merise-mcd-02.jpg)

Une commune peut héberger <ins>aucun</ins> employé mais une commune peut héberger <ins>plusieurs</ins> employés.
Un employé ne peut avoir <ins>qu'un et un seul</ins> domicile (une résidence secondaire n'est pas le domicile d'une personne!)

<ins>Un employé</ins> travaille dans un service ou plusieurs services,la cardinalité 0 est impossible, cela voudrait dire qu'un employé n'a pas de service où travailler!
Un service peut occupé <ins>1 ou plusieurs employés</ins>, la cardinalité 0 est impossible, cela voudrait dire qu'il est possible que personne ne travaille dans un service!

---

## Normaliser le MCD
>!!!Petit truc de la mort qui tue!!!  
>L'attribut d'une entité est toujours en relation [1-1 1-1] avec la clé.

- **Première forme normale (1NF)**: Chaque cellule d'une table doit contenir une valeur unique et cette valeur doit être élémentaire.
- **Deuxième forme normale (2NF)**: Chaque attribut de la table doit dépendre de la clé primaire au complet et non d'une partie de la clé.
- **Troisième forme normale (3NF)**: Aucun attribut non-clé doit dépendre d'un autre attribut non-clé.
- **Boyd-Codd**: tous les attributs non-clé ne sont pas source de dépendance fonctionnelle (DF) vers une partie de la clé
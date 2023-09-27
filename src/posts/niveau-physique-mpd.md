---
title: Niveau physique (MPD)
description: Il est utilisé pour définir la façon dont les données sont stockées et gérées sur un système de stockage.
date: '2023-09-25'
categories:
  - merise
published: true
---

## Niveau physique (MPD)

Un niveau physique MPD est une représentation de la structure des données d'un système, telle qu'elle est stockée sur un système de stockage. Il est utilisé pour définir la façon dont les données sont physiquement stockées et gérées.

En termes simples, un niveau physique MPD est une description de la façon dont les données sont organisées sur un disque dur, une bande ou un autre type de stockage. Il décrit les fichiers, les répertoires et les index qui sont utilisés pour stocker les données.

Par exemple, un niveau physique MPD pourrait décrire un système de commande en ligne qui stocke les données des clients dans un fichier appelé "clients.csv" et les données des commandes dans un fichier appelé "commandes.csv". Les deux fichiers seraient stockés dans un répertoire appelé "base de données".

Le niveau physique MPD est important car il permet de comprendre la façon dont les données sont réellement stockées sur un système de stockage. Cela est important pour des raisons de performance, de fiabilité et de sécurité.

Voici quelques exemples de la façon dont un niveau physique MPD peut être utilisé :

* Pour concevoir un système de stockage qui répond aux besoins d'un application
* Pour documenter la structure des données d'un système
* Pour analyser les performances d'un système

En quelques mots, un niveau physique MPD est une description de la façon dont les données sont physiquement stockées sur un système de stockage. Il est utilisé pour définir la façon dont les données sont stockées et gérées, et il est important pour des raisons de performance, de fiabilité et de sécurité.

Il s'agit de la représentation modélisée qui précède l'implémentation dans le SGBDR.

![mpd](./images/merise-mpd.jpg)

---

## Vocabulaire

Selon l'étape de l'analyse on utilise un vocabulaire particulier.

| MCD                 | Relation      | SGBD                      |
| ------------------- | ------------- | ------------------------- |
| Entité              | Association   | Table                     |
| Association         | Association   | Table                     |
| Identifiant         | Clé primaire  | Clé étrangère             |
|                     | Clé étrangère | Clé étrangère             |
| Attribut, propriété | Attribut      | Champs, colonne           |
| Occurence, instance | Occurence     | Occurence, enregistrement |

---

_Source : [MCD, MLD et MPD](https://louisvandevelde.be/index.php?dos=my&fic=meris)_

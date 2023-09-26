---
title: Niveau physique (MPD)
description: Le niveau physique, il s'agit du MPD (Modèle Physique des Données).
date: '2023-09-25'
categories:
  - méthodes
  - merise
published: true
---

## Niveau physique (MPD)

Il s'agit de la représentation modélisée qui précède l'implémentation dans le SGBDR.

![mpd](./images/merise-mpd.jpg)

---

## Vocabulaire

Selon l'étape de l'analyse on utilise un vocabulaire particulier.

| MCD | Relation |	SGBD |
| --- | --- | --- |
| Entité | Association | Table |
| Association | Association | Table |
| Identifiant | Clé primaire | Clé étrangère |
| | Clé étrangère | Clé étrangère |
| Attribut, propriété | Attribut | Champs, colonne |
| Occurence, instance | Occurence | Occurence, enregistrement |

---

*Source : [MCD, MLD et MPD](https://louisvandevelde.be/index.php?dos=my&fic=meris)*
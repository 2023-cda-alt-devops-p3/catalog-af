---
title: Diagramme de communication
description: Information sur les diagrammes de communication.
date: '2023-09-25'
categories:
  - uml
published: true
---

## Diagramme de communication

Un **diagramme de communication** est un type de diagramme utilisé en **génie logiciel** pour représenter les **interactions** entre les **objets logiciels**. Il montre comment les parties d'un système interagissent ou communiquent entre elles. Les diagrammes de communication sont utilisés pour décrire les interactions entre les objets d'un système, en se concentrant sur la manière dont ils communiquent.

Dans un diagramme de communication, chaque objet est représenté par une ligne de vie verticale. Les messages sont représentés par des flèches qui relient les lignes de vie des objets qui communiquent. Les messages sont étiquetés avec des nombres pour indiquer l'ordre dans lequel ils ont été envoyés¹. Les diagrammes de communication sont utiles pour comprendre comment les objets interagissent et communiquent entre eux dans un système.

Pour créer un diagramme de communication en UML, vous pouvez utiliser des outils tels que GitMind, Miro ou EdrawMax. Ces outils vous permettent de créer facilement des diagrammes de communication en utilisant des modèles pré-conçus et des formes personnalisées. Vous pouvez également trouver des tutoriels en ligne pour vous aider à créer votre propre diagramme de communication UML étape par étape.

---

## Comment créer un diagramme de communication

Pour créer un diagramme de communication UML, suivez ces étapes :

1. **Définir les objets.** La première étape consiste à identifier les objets qui composent votre système. Un objet peut représenter un objet du monde réel, comme un utilisateur, un produit ou une commande.

2. **Définir les messages.** Les messages représentent les interactions entre les objets. Un message est composé d'un nom, d'une liste d'arguments et d'un type de retour.

3. **Dessiner le diagramme.** Une fois que vous avez défini les objets et les messages, vous pouvez dessiner le diagramme. Les objets sont représentés par des boîtes rectangulaires, les messages par des lignes pointillées et les arguments par des flèches.

Voici un exemple de diagramme de communication UML pour un système de gestion de bibliothèque :

```
[Object] Utilisateur
[Object] Livre
[Object] Système

[Message] Utilisateur -> Système (emprunterLivre(livre))
[Message] Système -> Livre (vérifierDisponibilité())
[Message] Système -> Utilisateur (livreEmprunte())
```

Ce diagramme montre qu'un utilisateur emprunte un livre au système. Le système vérifie d'abord la disponibilité du livre. Si le livre est disponible, le système l'emprunte à l'utilisateur.

Voici quelques conseils pour créer des diagrammes de communication UML :

* Utilisez des noms clairs et concis pour les objets et les messages.
* Utilisez des flèches pour représenter les arguments des messages.
* Utilisez des annotations pour fournir des informations supplémentaires sur les objets, les messages et les arguments.

Les diagrammes de communication UML sont un outil utile pour la modélisation de systèmes logiciels. Ils peuvent être utilisés pour visualiser le flux de contrôle d'un système, comprendre les interactions entre les objets, et identifier les opportunités d'optimisation.

Voici quelques explications supplémentaires pour les étapes décrites ci-dessus :

**Définir les objets**

Lorsque vous définissez les objets, vous devez vous poser les questions suivantes :

* Quels sont les objets qui composent mon système ?
* Quels sont les rôles que ces objets jouent ?
* Quels sont les attributs et les opérations de ces objets ?

**Définir les messages**

Lorsque vous définissez les messages, vous devez vous poser les questions suivantes :

* Quels sont les interactions entre les objets ?
* Quels sont les noms des messages ?
* Quels sont les arguments des messages ?
* Quel est le type de retour des messages ?

**Dessiner le diagramme**

Lorsque vous dessinez le diagramme, vous devez vous poser les questions suivantes :

* Comment placer les objets sur le diagramme ?
* Comment représenter les messages sur le diagramme ?
* Comment représenter les arguments des messages sur le diagramme ?

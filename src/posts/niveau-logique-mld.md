---
title: Niveau logique (MLD)
description: Il est utilisé pour définir la structure des données d'un système, telles que les tables, les colonnes et les contraintes.
date: '2023-09-25'
categories:
  - merise
published: true
---

Les entités mises en relation deviennent des **tables**.

- **EMPLOYE**: <span style="color:red">id_emp</span>, id_emp, nom_emp, preno_emp, daten_emp, adres_emp
- **COMMUNE**: <span style="color:red">id_com</span>, id_com, nom_com, codep_com
- **SERVICE**: <span style="color:red">id_ser</span>, id_ser, nom_ser

### Association (1-1)(1-n)

L'association disparaît, elle est matérialisée par la duplication de la clé côté (1-n) du côté (1-1).

**EMPLOYE**: <span style="color:red">id_emp</span>, id_emp, nom_emp, preno_emp, daten_emp,id_com

La clé dupliquée est appelée clé étrangère

### Association (1-n)(1-n)

L'association devient une table ayant comme clef primaire la concaténation des clefs primaires des 2 entités.

**TRAVAILLER**: <span style="color:red">id_emp, id_emp, id_ser</span>

Une table issue d'une association peut avoir des attributs au même titre que n'importe quelle autre table

### Au final, le MLD est le suivant:

- **EMPLOYE**: <span style="color:red">id_emp</span>, id_emp, nom_emp, preno_emp, daten_emp, <span style="color:green">id_com</span>
- **COMMUNE**: <span style="color:red">id_com</span>, id_com, nom_com, codep_com
- **SERVICE**: <span style="color:red">id_ser</span>, id_ser, nom_ser
- **TRAVAILLER**: <span style="color:red">id_emp, id_ser</span>

---

_Source : [MCD, MLD et MPD](https://louisvandevelde.be/index.php?dos=my&fic=meris)_

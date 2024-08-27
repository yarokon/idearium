# Débriefing de la Formation 7

## Ce qui était génial

- Facile d'ajouter du contenu distant.
- Synchronisation du contenu distant.

## Ce que nous pouvons améliorer

- Nous ne pouvons pas ajouter un fichier distant en tant que fichier unique 😢.
- La création de contenu distant sur la branche par défaut ne déclenche pas la fenêtre de protection de branche.
- **Auto-merge** pourrait être activé sans **Auto-sync**.
- Les descriptions de **Auto-sync** et **Auto-merge** sont difficiles à comprendre.
  - Pouvons-nous connecter une branche non par défaut ?
  - Les synchronisations distantes ne fonctionnent-elles que pour les projets Reunite ?
  - Le nom Redocly devrait être remplacé par Reunite.

![img](/images/debrief-7.png)

<hr />

{% admonition type="info" name="" %}
Nous suggérons de conserver **Auto-sync** (ou peut-être de le renommer en **Synchronisation unidirectionnelle**) et de remplacer **Auto-merge** par **Créer une pull request** (par défaut désactivé).
{% /admonition %}

Pourquoi ?

> - Les noms **Auto-sync** et **Auto-merge** sont confus ensemble.
> - **Auto-sync** ne synchronise que dans un sens. Je ne sais pas si c'est prévu, mais probablement à l'avenir, nous pourrons ajouter **Synchronisation bidirectionnelle**. Dans ce cas, **Synchronisation unidirectionnelle** serait un meilleur nom.
> - **Créer une pull request** est beaucoup plus explicite que **Auto-merge**.

<hr />

- Il n'était pas simple de trouver la documentation sur le contenu distant.
  - Pour nous, [une structure de fichier comme celle-ci](https://redoc-ly.slack.com/archives/C01D9NU7R4P/p1717765985888739?thread_ts=1717762959.392809&cid=C01D9NU7R4P) serait meilleure (mais ce n'est pas approuvé).
  - Ajouter un lien vers la documentation à l'intérieur de la fenêtre "Connect remote Git".
  - Sur la page "Contenu distant", les icônes d'aide mènent à https://beta-docs.redocly.com/ au lieu de la page de documentation sur le contenu distant.

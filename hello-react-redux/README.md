# Exercices Redux

## HelloPage

Dans HelloPage utiliser les 3 composants :
- Hello
- Select
- MultiStateButton

Comme dans les projets précédents les choix possible seront
`['Toto', 'Titi', 'Tata']`

En réutilisant `setName` et `nameReducer` du projet demo-redux

Stocker le nom à afficher dans ces composants dans le store redux.

Vous pouvez appeler les hooks redux directement dans HelloPage (ou créer les containers au choix).

## Todos

Migrer le state de Todos vers Redux

Le state global devra avoir cette forme là

```
{
  count: 1,
  counter: {
    value: 56
  },
  todos: {
    newTodo: 'Achet',
    items: [{
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    }, {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    }, {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    }],
  }
}
```

## Actions

Avec createAction (ou les slices) créer 2 actions :
- todoAdd (ajoute une todo au tableau)
- todoChange (éditer la valeur dans le champs)

## Reducers

Avec createReducer (ou les slices) créer un reducer `todosReducer` qui va traiter les 2 actions précédentes.

Et enregistrer ce reducer à l'appel de configureStore.

Traiter todoChange. L'action todoChange ressemblera à :

```
{
  type: 'todos/todoChange',
  payload: 'Ache'
}
```

Traiter todoAdd. L'action todoAdd ressemblera à :

```
{
  type: 'todos/todoAdd',
  payload: {
    id: 123,
    title: 'Acheter du pain',
    completed: false,
  }
}
```

Avec l'extension Redux Devtools, tester via le bouton dispatch que le reducer fonctionne

## Ecrire la version connectée du composant Todos

Avec useAppDispatch (ou useDispatch) et useAppSelector (ou useSelector) écrire la version Todos connectée au store redux

## Optionnel (TODO_DELETE)  
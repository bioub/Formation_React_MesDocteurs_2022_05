import React, { Component } from 'react';

class MultiStateButton extends Component {
  handleClick = () => {
    const { items, value, onSelect } = this.props;

    const index = items.indexOf(value);
    onSelect(items[(index + 1) % items.length]);
  };
  render() {
    const { value } = this.props;
    return (
      <button className="MultiStateButton" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default MultiStateButton;

/*
Exercice 2 :
- appeler MuliStateButton depuis app comme ceci <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
- ajouter une clé selected sur le state (qui sera la valeur séléctionnée)
- dans le constructeur de MultiStateButton affecter le premier élement
du tableau au state selected (MAUVAISE pratique)
- au clic du bouton mettre à jour selected
(si vous êtes sur le dernier élément revenir au premier)
*/

/*
Exercice 4 :
Transformer MultiStateButton en un composant controllé
Remonter la valeur selected au niveau du state de App (clé name)

Exercice 5 :
Slide 60
*/

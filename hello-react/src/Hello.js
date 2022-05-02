// Exemple avec le DOM

// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.id = 'box';
//   divEl.title = 'Mon composant';

//   const textNode = document.createTextNode('Hello ');

//   const spanEl = document.createElement('span');
//   spanEl.className = 'prenom';
//   spanEl.innerText = 'Romain';

//   divEl.append(textNode, spanEl);

//   document.body.append(divEl);
// }

// <div class="Hello" id="box" title="Mon composant">
//   Hello <span class="prenom">Romain</span>
// </div>

// Exemple avec React.createElement
// import React from 'react';

// function Hello() {
//   return React.createElement(
//     'div',
//     {
//       className: 'Hello',
//       id: 'box',
//       title: 'Mon Composant',
//     },
//     'Hello ',
//     React.createElement('span', { className: 'prenom' }, 'Romain'),
//   );
// }

// Exemple avec JSX
// Depuis React 17, plus besoin d'importer React lorsqu'on fait du JSX

// function Hello(props) {
//   const name = props.name ?? "Jean";
//   const age = props.age ?? "Jean";
//   return (
//     <div className="Hello" id="box" title="Mon composant">
//       Hello <span className="prenom">{name}</span>, I'm {age}
//     </div>
//   );
// }

function Hello({ name = 'Jean', age = 20 }) {
  console.log('Hello');
  
  return (
    <div className="Hello" id="box" title="Mon composant">
      Hello <span className="prenom">{name}</span>, I'm {age}
    </div>
  );
}

export default Hello;

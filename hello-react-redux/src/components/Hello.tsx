type Props = {
  name?: string;
  age?: number;
};

function Hello({ name = 'Jean', age = 20 }: Props) {
  return (
    <div className="Hello" id="box" title="Mon composant">
      Hello <span className="prenom">{name}</span>, I'm {age}
    </div>
  );
}

export default Hello;

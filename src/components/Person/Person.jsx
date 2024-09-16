export function Person({ person }) {
  const marriedMessage = `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;
  const notMarriedMessage = `I am not married`;
  const ageMessage = `I am ${person.age}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className={person.age ? 'Person__age' : ''}>
        {person.age ? ageMessage : ''}
      </p>
      <p className="Person__partner">
        {person.isMarried ? marriedMessage : notMarriedMessage}
      </p>
    </section>
  );
}

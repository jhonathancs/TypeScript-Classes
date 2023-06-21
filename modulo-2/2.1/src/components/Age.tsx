import { calculateAge } from "./calculateAge";

function Age() {
    const name = 'Jhonathan';
    const birth = '23/05/1996';
    const age = calculateAge(birth);
  
    return (
      <div>
        <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
        <p style={{ color: 'green', textAlign: 'center' }}>{`Age ${age}`}</p>
      </div>
    );
}

export default Age;
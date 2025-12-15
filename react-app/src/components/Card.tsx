interface Props {
  name: string;
  age: number
  sex: string;
  height: number;
  location: string;
  position: string;
  isEmployed: boolean;
}

function Card({ name, sex, age, height, location, position, isEmployed }: Props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 className="name">{name}</h2>
          <p className="position">{position}</p>
        </div>
        <div className="card-details">
          <div className="row">
            <p className="label">Sex:</p>
            <span>{sex}</span>
          </div>
          <div className="row">
            <p className="label">Age:</p>
            <span>{age}</span>
          </div>
          <div className="row">
            <p className="label">Height:</p>
            <span>{height}m</span>
          </div>
          <div className="row">
            <p className="label">Location:</p>
            <span>{location}</span>
          </div>
          <div className="row">
            <p className="label">Employee Status:</p>
            <span style={{ color: isEmployed ? 'green' : 'red'}}>{isEmployed === true ? 'Employed' : 'Unemployed'}</span>
          </div>

        </div>
      </div>


    </>
  );
}

export default Card;
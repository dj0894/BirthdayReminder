import data from './data';
import './App.css';

function List({ people }) {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div className="person-details">
                            <h1>Name: {name}</h1>
                            <p>Age: {age}</p>
                        </div>
                    </article>

                )
            })

            }
        </>
    )
}

export default List;
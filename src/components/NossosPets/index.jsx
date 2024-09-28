import { useEffect, useState } from 'react';
import api from '../../services/Api';


const NossosPets = () => {
  const [pets, setPets] = useState([]); 

  async function getAllAnimals() {
    try {
      const response = await api.get('/animals/all');
      setPets(response.data); 
    } catch (err) {
      console.error('Erro na requisição!', err);
    }
  }

  useEffect(() => {
    getAllAnimals(); 
  }, []);

  return (
    <section className="nossos-pets">
      <div className="container">
        <div className="hero-text">
          <h1>Nossos <span className="preto">Pets</span></h1>
          <div className="lista-animais-adocao" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {pets.map(animal => (
              <div key={animal.id} className="wrap-cards">
                <div className="content">
                  <div className="main">
                    <h2 className="name">{animal.nome}</h2>
                    <p className="idade">Idade: {animal.idade} anos</p>
                    <p className="descricao">Descrição: {animal.descricao || 'Sem descrição disponível.'}</p>
                    <button className="adopt-btn">Adotar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="explore-button saiba-button">Conheça todos</button>
        </div>
      </div>
    </section>
  );
}

export default NossosPets;

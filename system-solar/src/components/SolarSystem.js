import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className='divplanetas'>
        {planets
          .map((e) => (<PlanetCard
            planetName={ e.name }
            planetImage={ e.image }
            key={ e.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

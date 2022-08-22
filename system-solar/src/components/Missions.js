import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className='divmissoes'>
        {missions
          .map((e) => (<MissionCard
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
            key={ e.name }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;

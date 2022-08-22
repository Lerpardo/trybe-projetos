import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className='conjp' data-testid="planet-card">
        <p className={`nome_planeta ${planetName}`} data-testid="planet-name">
          {planetName}
        </p>
        <img className={`imagem_planeta ${planetName}`} src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

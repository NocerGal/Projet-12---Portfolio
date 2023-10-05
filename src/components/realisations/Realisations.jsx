import React from 'react';
import realisations from '../../assets/realisation.json';
import RealisationContainer from './imagecontainer/RealisationContainer';

export default function Realisations() {
  return (
    <section id="realisations">
      <h2>Réalisations</h2>
      <div className="realisations-container">
        {realisations.realisations.map((realisation) => (
          <RealisationContainer
            image={realisation.imageLink}
            alt={`Image présentant la réalisation du site ${realisation.title}`}
            description={realisation.description}
            date={realisation.date}
            url={realisation.url}
          />
        ))}
      </div>
    </section>
  );
}

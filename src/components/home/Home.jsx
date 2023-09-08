import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home({ picture, alt }) {
  return (
    <section className="home">
      <div className="pres--container">
        <img src={picture} alt={alt} />
        <div className="pres">
          <h1>Schenherr Luc</h1>
          <h2>Développeur Web</h2>
          <div className="circle--1"></div>
        </div>
      </div>
      <div className="next--section">
        <a>
          <FontAwesomeIcon
            icon={faArrowRight}
            rotation={90}
            style={{ color: '#f7f9fd' }}
          />
        </a>
      </div>
    </section>
  );
}

export default Home;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Picture from '../../assets/photoLuc.jpeg';
import {
  faCss3,
  faGithub,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  redirectSectionPresentation,
  redirectGitHub,
} from '../../functions/redirection/redirection';
import { useEffect } from 'react';

function Infos({ github, alt }) {
  useEffect(() => {
    const pictureElement = document.querySelector('.picture');
    const selectH1 = document.querySelector('h1');
    const selectH2 = document.querySelector('h2');
    const selectSvg = document.querySelectorAll('.icon');
    if (pictureElement) {
      pictureElement.style.transform = 'translateX(0)';
    }
    if (selectH1) {
      selectH1.style.transform = 'translateY(0)';
    }
    if (selectH2) {
      selectH2.style.transform = 'translateY(0)';
    }
    if (selectSvg.length) {
      selectSvg.forEach((element) => {
        element.style.transform = 'translateY(0)';
      });
    }
  }, []);

  return (
    <section id="home">
      <div className="pres--container">
        <img src={Picture} alt={alt} className="picture" />
        <div className="pres">
          <div className="pres__name">
            <h1>Schenherr Luc</h1>
            <h2>Développeur Web</h2>
          </div>
          <div className="pres__skills">
            <FontAwesomeIcon
              className="html icon"
              icon={faHtml5}
              style={{ color: '#f7f9fd' }}
            />
            <FontAwesomeIcon
              className="css icon"
              icon={faCss3}
              style={{ color: '#f7f9fd' }}
            />
            <FontAwesomeIcon
              className="github icon"
              icon={faGithub}
              style={{ color: '#f7f9fd' }}
              onClick={() => redirectGitHub(github)}
            />
            <FontAwesomeIcon
              className="sass icon"
              icon={faSass}
              style={{ color: '#f7f9fd' }}
            />
            <FontAwesomeIcon
              className="javascript icon"
              icon={faSquareJs}
              style={{ color: '#f7f9fd' }}
            />
            <FontAwesomeIcon
              className="react icon"
              icon={faReact}
              style={{ color: '#f7f9fd' }}
            />
          </div>
          <div className="rectangle--1"></div>
          <div className="rectangle--2"></div>
          <div className="rectangle--3"></div>
          <div className="circle--1"></div>
        </div>
      </div>
      <div className="next--section">
        <a>
          <FontAwesomeIcon
            icon={faArrowRight}
            rotation={90}
            style={{ color: '#f7f9fd' }}
            onClick={redirectSectionPresentation}
          />
        </a>
      </div>
    </section>
  );
}

export default Infos;

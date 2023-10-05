export const redirectSectionPresentation = () => {
  const sectionPresentation = document.querySelector('#presentation');
  sectionPresentation.scrollIntoView({ behavior: 'smooth' });
};

export const redirectSectionRealisation = () => {
  const sectionRealisations = document.querySelector('#realisations');
  sectionRealisations.scrollIntoView({ behavior: 'smooth' });
};

export const redirectGitHub = (githublink) => {
  window.open(githublink, '_blank');
};

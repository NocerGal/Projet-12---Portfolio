export const redirectSectionPresentation = () => {
  const sectionPresentation = document.querySelector('#presentation');
  sectionPresentation.scrollIntoView({ behavior: 'smooth' });
};

export const redirectGitHub = (githublink) => {
  window.open(githublink, '_blank');
};

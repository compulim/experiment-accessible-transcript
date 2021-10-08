import './ForkOnGitHub.css';
import './ForkOnGitHub.github-fork-ribbon-css.css';

const ForkOnGitHub = () => {
  return (
    <a
      className="github-fork-ribbon right-bottom"
      data-ribbon="Fork me on GitHub"
      href="https://github.com/compulim/experiment-accessible-transcript"
      rel="noopener noreferrer"
      target="_blank"
      title="Fork me on GitHub"
    >
      Fork me on GitHub
    </a>
  );
};

export default ForkOnGitHub;

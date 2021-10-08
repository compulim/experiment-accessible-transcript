import './References.css';

const References = () => {
  return (
    <div className="references">
      <p className="references__note">Here are some articles we read when studying this topic.</p>
      <ul className="references__list">
        <li>
          <a href="https://www.w3.org/TR/wai-aria/#managingfocus" rel="noopener noreferrer" target="_blank">
            WAI-ARIA: Managing Focus
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria/#aria-activedescendant" rel="noopener noreferrer" target="_blank">
            WAI-ARIA:{' '}
            <nobr>
              <code>aria-activedescendant</code>
            </nobr>{' '}
            property
          </a>
        </li>
        <li>
          <a
            href="https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te"
            rel="noopener noreferrer"
            target="_blank"
          >
            Accessible Name and Description Computation 1.1
          </a>
        </li>
      </ul>
    </div>
  );
};

export default References;

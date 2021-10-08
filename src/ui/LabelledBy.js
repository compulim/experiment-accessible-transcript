import { useRef } from 'react';

import './LabelledBy.css';
import uniqueId from '../util/uniqueId';

const LabelledBy = () => {
  const idRef = useRef(`labelled-by__id-${uniqueId()}`);

  return (
    <div className="labelled-by">
      <h2 className="labelled-by__header">
        Understanding how <code>aria-labelledby</code> affect screen reader
      </h2>
      <p>
        When focused on the button below, listen to what screen reader narrated. It should narrate the boxed content
        below, through the{' '}
        <nobr>
          <code>aria-labelledby</code>
        </nobr>{' '}
        attribute.
      </p>
      <button aria-labelledby={idRef.current} className="labelled-by__button" type="button">
        Focus on this button
      </button>
      <blockquote className="labelled-by__label" id={idRef.current}>
        You can check the{' '}
        <a href="https://www.bing.com/search?q=weather+in+redmond" rel="noopener noreferrer" target="_blank">
          weather forecast
        </a>{' '}
        on Bing.
      </blockquote>
      <p>
        On Edge/Chrome, it will narrate "You can check the weather forecast on Bing, button." Probably text alternative
        computation do not concatenate accessible name or{' '}
        <nobr>
          <code>aria-roledescription</code>
        </nobr>{' '}
        for the label content.
      </p>
    </div>
  );
};

export default LabelledBy;

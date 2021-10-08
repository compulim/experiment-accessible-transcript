import { forwardRef, useCallback, useMemo, useState } from 'react';

import './Transcript.css';
import Activity from './Activity';
import uniqueId from '../util/uniqueId';
import useValueRef from '../hook/useValueRef';

const TRANSCRIPT = {
  a0: {
    from: 'user',
    text: 'Hello, World!',
    timestamp: 0
  },
  a1: {
    from: 'bot',
    text: 'Aloha!',
    timestamp: 1
  },
  a2: {
    from: 'user',
    text: 'Good morning.',
    timestamp: 2
  },
  a3: {
    from: 'bot',
    text: 'Hello, Alex.',
    timestamp: 3
  },
  a4: {
    from: 'bot',
    text: (
      <>
        You can check the{' '}
        <a href="https://www.bing.com/search?q=weather+in+redmond" rel="noopener noreferrer" target="_blank">
          weather forecast
        </a>{' '}
        on Bing.
      </>
    ),
    timestamp: 4
  }
};

const Transcript = forwardRef((_, ref) => {
  const sortedTranscriptArray = Object.entries(TRANSCRIPT).sort(([, { timestamp: x }], [, { timestamp: y }]) => x - y);

  const sortedTranscriptArrayRef = useValueRef(sortedTranscriptArray);

  const [focusedActivityKey, setFocusedActivityKey] = useState(() => sortedTranscriptArray[0][0]);

  const activeDescendantId = useMemo(() => {
    return `transcript__active-descendant-${uniqueId()}`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedActivityKey]);

  const focusRelativeActivity = useCallback(
    delta => {
      setFocusedActivityKey(focusedActivityKey => {
        const index = sortedTranscriptArrayRef.current.findIndex(([key]) => key === focusedActivityKey);

        const nextIndex = Math.max(0, Math.min(sortedTranscriptArrayRef.current.length - 1, index + delta));

        return sortedTranscriptArrayRef.current[nextIndex][0];
      });
    },
    [setFocusedActivityKey, sortedTranscriptArrayRef]
  );

  const handleKeyDown = useCallback(
    event => {
      switch (event.key) {
        case 'ArrowUp':
          focusRelativeActivity(-1);
          event.preventDefault();
          break;

        case 'ArrowDown':
          focusRelativeActivity(1);
          event.preventDefault();
          break;

        default:
          break;
      }
    },
    [focusRelativeActivity]
  );

  return (
    <div
      aria-activedescendant={activeDescendantId}
      aria-roledescription="transcript"
      className="transcript"
      onKeyDown={handleKeyDown}
      ref={ref}
      role="group" // Safari: role="group" is required, otherwise, it won't narrate on active descendant change.
      tabIndex={0}
    >
      <ul className="transcript__list" role="feed">
        {sortedTranscriptArray.map(([key, activity]) => (
          <li
            aria-labelledby={`transcript__row-id-${key}`}
            aria-roledescription="message"
            aria-setsize={-1} // Edge: aria-setsize="-1" has no effect. Will continue to narrate "X of 5".
            className="transcript__row"
            id={key === focusedActivityKey ? activeDescendantId : undefined}
            key={key}
            role="article"
          >
            <Activity end={activity.from === 'user'} id={`transcript__row-id-${key}`}>
              {activity.text}
            </Activity>
            {key === focusedActivityKey && <div className="transcript__row-focus-ring" />}
          </li>
        ))}
      </ul>
      <div className="transcript__focus-ring" />
    </div>
  );
});

export default Transcript;

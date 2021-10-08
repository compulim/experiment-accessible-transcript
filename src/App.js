import { useRef } from 'react';
import './App.css';

import ForkOnGitHub from './ui/ForkOnGitHub';
import OuterHTMLView from './ui/OuterHTMLView';
import Transcript from './ui/Transcript';

function App() {
  const transcriptRef = useRef();

  return (
    <div className="app">
      <section className="app__panel">
        <h1 className="app__panel-header">Accessible transcript</h1>
        <div className="app__panel-body">
          <Transcript ref={transcriptRef} />
        </div>
      </section>
      <section className="app__panel">
        <h1 className="app__panel-header">Outer HTML</h1>
        <div className="app__panel-body">
          <OuterHTMLView elementRef={transcriptRef} />
        </div>
      </section>
      <ForkOnGitHub />
    </div>
  );
}

export default App;

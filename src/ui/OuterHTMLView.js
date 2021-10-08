import { format } from 'prettier/standalone';
import parserHTML from 'prettier/parser-html';

import './OuterHTMLView.css';
import { useCallback, useEffect, useState } from 'react';

const OuterHTMLView = ({ elementRef }) => {
  const [outerHTML, setOuterHTML] = useState('');

  const updateOuterHTML = useCallback(() => {
    setOuterHTML(format(elementRef.current.outerHTML, { parser: 'html', plugins: [parserHTML] }));
  }, [elementRef, setOuterHTML]);

  useEffect(() => {
    const observer = new MutationObserver(updateOuterHTML);

    observer.observe(elementRef.current, {
      attributes: true,
      childList: true,
      subtree: true
    });

    updateOuterHTML();

    return () => observer.disconnect();
  }, [elementRef, updateOuterHTML]);

  return (
    <div className="outer-html-view">
      <pre className="outer-html-view__code">{outerHTML}</pre>
    </div>
  );
};

export default OuterHTMLView;

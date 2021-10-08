import classNames from 'classnames';

import './Activity.css';

const Activity = ({ children, end, id }) => {
  return (
    <div className={classNames('activity', { 'activity--end': end })} id={id}>
      <div aria-roledescription="message" className="activity__bubble">
        {children}
      </div>
      <div className="activity__timestamp">Just now</div>
    </div>
  );
};

export default Activity;

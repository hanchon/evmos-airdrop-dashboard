import React, { useEffect, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

// Styles
import cn from 'classnames';
import css from './index.module.css';
import MountainOne from './MountainOne';
import MountainTwo from './MountainTwo';
import MountainThree from './MountainThree';
import MountainFour from './MountainFour';
import Sun from './Sun';

const Backdrop: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  const location = useLocation();
  const isInnerPage = useMemo(() => location.pathname !== '/', [location]);

  const pageClasses = cn({
    [css.page]: true,
    [css.inner]: isInnerPage,
  });

  const backdropClasses = cn({
    [css.mWrapper]: true,
    [css.inner]: isInnerPage,
  });

  return (
    <div className={css.backdrop}>
      <div className={pageClasses}>{children}</div>
      <div className={backdropClasses}>
        <MountainOne preserveAspectRatio="none" className={cn(css.m, css.m1)} />
        <MountainTwo preserveAspectRatio="none" className={cn(css.m, css.m2)} />
        <MountainThree
          preserveAspectRatio="none"
          className={cn(css.m, css.m3)}
        />
        <MountainFour
          preserveAspectRatio="none"
          className={cn(css.m, css.m4)}
        />
        {!isInnerPage ? <Sun className={cn(css.sun)} /> : null}
      </div>
    </div>
  );
};

export default Backdrop;

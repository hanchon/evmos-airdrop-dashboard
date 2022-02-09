import React, { useEffect, useMemo } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import LandingPage from '@pages/Landing';

// Constants
import { MISSION_CONTROLL_ROUTE } from '@constants/routes';
import { WalletContext } from '@constants/contexts';

// Components
import InnerRoutes from '../../InnerRoutes';

// Styles
import cn from 'classnames';
import css from './index.module.css';
import MountainOne from './MountainOne';
import MountainTwo from './MountainTwo';
import MountainThree from './MountainThree';
import MountainFour from './MountainFour';
import Sun from './Sun';

const Backdrop: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.page}>{children}</div>
      <div className={css.mWrapper}>
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
        <Sun className={cn(css.sun)} />
      </div>
    </div>
  );
};

export default Backdrop;

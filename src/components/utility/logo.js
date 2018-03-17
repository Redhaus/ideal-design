import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/idealNameSvg.svg';

import icon from '../../image/idealIconSvg.svg';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
        <img className="icon-logo" src={icon} alt=""/>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
        <img className="sidebar-logo" src={logo} alt=""/>
          
          
          </Link>
        </h3>
      )}
    </div>
  );
};

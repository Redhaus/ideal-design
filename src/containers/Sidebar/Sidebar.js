import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Scrollbars from '../../components/utility/customScrollBar.js';
import Menu from '../../components/uielements/menu';
import IntlMessages from '../../components/utility/intlMessages';
import SidebarWrapper from './sidebar.style';

import appActions from '../../redux/app/actions';
import Logo from '../../components/utility/logo';
import { getCurrentTheme } from '../ThemeSwitcher/config';
import { themeConfig } from '../../config';


const { Sider } = Layout;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  render() {
    const { url, app, toggleOpenDrawer } = this.props;
    const customizedTheme = getCurrentTheme('sidebarTheme', themeConfig.theme);
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars style={{ height: scrollheight - 70 }}>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"
            >

            <Menu.Item key="overview">
            <Link to={`${url}`}>
              <span className="isoMenuHolder" style={submenuColor}>
                <Icon type="appstore-o" />
                <span className="nav-text">
                  <IntlMessages id="sidebar.overview" />
                </span>
              </span>
            </Link>
          </Menu.Item>

        


              <Menu.Item key="primaryreadings">
                <Link to={`${url}/primaryreadings`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                  <Icon type="book" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.primaryReadings" />
                    </span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="lexis">
              <Link to={`${url}/lexis`}>
                <span className="isoMenuHolder" style={submenuColor}>
                <Icon type="profile" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.lexis" />
                  </span>
                </span>
              </Link>
            </Menu.Item>

          <Menu.Item key="furtherreadings">
            <Link to={`${url}/furtherreadings`}>
              <span className="isoMenuHolder" style={submenuColor}>
              <Icon type="solution" />
                <span className="nav-text">
                  <IntlMessages id="sidebar.furtherReadings" />
                </span>
              </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="keyquestions">
          <Link to={`${url}/keyquestions`}>
            <span className="isoMenuHolder" style={submenuColor}>
            <Icon type="question-circle-o" />
              <span className="nav-text">
                <IntlMessages id="sidebar.keyQuestions" />
              </span>
            </span>
          </Link>
        </Menu.Item>

          <Menu.Item key="performance">
          <Link to={`${url}/performance`}>
            <span className="isoMenuHolder" style={submenuColor}>
            <Icon type="line-chart" />
              <span className="nav-text">
                <IntlMessages id="sidebar.performance" />
              </span>
            </span>
          </Link>
        </Menu.Item>

        <Menu.Item key="extensions">
        <Link to={`${url}/extensions`}>
          <span className="isoMenuHolder" style={submenuColor}>
          <Icon type="share-alt" />
            <span className="nav-text">
              <IntlMessages id="sidebar.extensions" />
            </span>
          </span>
        </Link>
      </Menu.Item>

      <Menu.Item key="continualgoals">
      <Link to={`${url}/continualgoals`}>
        <span className="isoMenuHolder" style={submenuColor}>
        <Icon type="check-square-o" />
          <span className="nav-text">
            <IntlMessages id="sidebar.continualGoals" />
          </span>
        </span>
      </Link>
    </Menu.Item>

    <Menu.Item key="annotation">
    <Link to={`${url}/annotation`}>
      <span className="isoMenuHolder" style={submenuColor}>
      <Icon type="ellipsis" />
        <span className="nav-text">
          <IntlMessages id="sidebar.annotation" />
        </span>
      </span>
    </Link>
  </Menu.Item>


  <Menu.Item key="weeklyoutline">
  <Link to={`${url}/outline`}>
    <span className="isoMenuHolder" style={submenuColor}>
      <Icon type="file-text" />
      <span className="nav-text">
        <IntlMessages id="sidebar.weeklyoutline" />
      </span>
    </span>
  </Link>
</Menu.Item>


  <Menu.Item key="Results">
  <Link to={`${url}/results`}>
    <span className="isoMenuHolder" style={submenuColor}>
    <Icon type="copy" />
      <span className="nav-text">
        <IntlMessages id="sidebar.results" />
      </span>
    </span>
  </Link>
</Menu.Item>


            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS(),
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);

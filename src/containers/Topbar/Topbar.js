import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Select } from 'antd';
import appActions from '../../redux/app/actions';
import TopbarUser from './topbarUser';
import TopbarWrapper from './topbar.style';
import themes from '../../config/themes';
import { themeConfig } from '../../config';
import {languageSelection} from '../../redux/actions';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];
const Option = Select.Option;

class Topbar extends Component {

  constructor(props){
    super(props)


  }

  handleLanguageChange = (lang) => {
    this.props.languageSelection(lang)
    // console.log(lang)
  }

  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <h3>Survey of Western Literature I</h3>

          <ul className="isoRight">
          <li>
          
          <Select
          value={this.props.languageSelect}
          size="small"
          // style={{ width: '32%' }}
          onChange={ (value) => {  this.handleLanguageChange(value) } }
          >
          <Option value="EN">EN</Option>
          <Option value="CH">CH</Option>
        </Select>
          
          </li>

            <li
              onClick={() => this.setState({ selectedItem: 'user' })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
            
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    ...state.App.toJS(),
    languageSelect: state.languageSelect
  })
}

export default connect(mapStateToProps, {toggleCollapsed, languageSelection})(Topbar);

// export default connect(
//   state => ({
//     ...state.App.toJS()
//   }),
//   { toggleCollapsed }
// )(Topbar);





// const mapStateToProps = state => {
//   return ({
//     lexisSelect: state.lexisSelect,
//     performanceSelect: state.performanceSelect,
//     primarySelect: state.primarySelect,
//     poemSelect: state.poemSelect,
//     essaySelect: state.essaySelect,
//     movieSelect: state.movieSelect,
//     performanceSelect: state.performanceSelect,
//     questionSelect: state.questionSelect,
//     extensionSelect: state.extensionSelect,
//     goalSelect: state.goalSelect
  

//   })
// }





// export default connect(
//   state => ({
//     ...state.App.toJS()
//   }),
//   { toggleCollapsed }
// )(Topbar);

import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '../../config/withDirection';

const WDContactsWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  ${'' /* max-height: calc(100vh - 130px); */} @media only screen and (max-width: 767px) {
    padding: 30px 20px;
    flex-direction: column;
    height: auto;
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 20px 30px;
  }

 

  .isoContactBoxWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border: 1px solid ${palette('border', 0)};
    border-left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    border-right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
    position: relative;


    .contactBoxScrollbar {
      height: calc(100vh - 225px);
    }

   
  }
`;

const ContactsWrapper = WithDirection(WDContactsWrapper);

export { ContactsWrapper };

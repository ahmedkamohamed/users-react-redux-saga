
import styled, {keyframes} from 'styled-components';
import Image from '../common/Image.js';

const logoAnnimation = keyframes`{
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;

export const Logo = styled(Image)`
    animation: ${logoAnnimation}  infinite 20s linear;
       height: 80px;
`;

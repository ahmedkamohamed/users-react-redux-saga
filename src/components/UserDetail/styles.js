import styled from 'styled-components';
import Image from '../common/Image.js';

export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  width: 65%;
  border: solid 1px lightgray;
  flex-direction: column;
`;


export const Avatar = styled(Image)`
       height: 120px;
       width:120px;
       margin-right:20px;
       border-radius:50%;
       border: solid 1px lightgray;
`;

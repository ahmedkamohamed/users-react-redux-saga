import styled from 'styled-components';
import Image from '../common/Image.js';

export const Wrapper = styled.li`
  display: flex;
  list-style: none;
  border: solid 1px lightgray;
  min-height: 40px;
  padding:10px;
  justify-content: center;
  align-items: center;
`;


export const Avatar = styled(Image)`
       height: 40px;
       width:40px;
       margin-right:10px;
       border-radius:50%;
       border: solid 1px lightgray;
`;

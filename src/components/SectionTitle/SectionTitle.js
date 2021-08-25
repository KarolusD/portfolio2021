import { H1 } from '../Typography/Typography'
import styled from 'styled-components'

const SectionTitle = styled(H1)`
  color: ${({ theme }) => theme.darkGray};
  font-size: ${({ theme }) => theme.font.size.h4};
  position: relative;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 8rem;

  &::before {
    content: ${({ content }) => `'${content}'`};
    color: ${({ theme }) => theme.transparentGray};
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    font-size: ${({ theme }) => theme.font.size.h1};
    white-space: nowrap;
    text-align: center;
    transform: translateX(-50%);
  }
`

export default SectionTitle

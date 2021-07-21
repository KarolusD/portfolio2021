import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  font-size: ${({ theme }) => theme.font.size.h1};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 128%;
  transition: ${({ theme }) => theme.themeTransition};
`

export const BigH1 = styled(H1)`
  font-size: 4rem;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.h1};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(1.4 * ${({ theme }) => theme.font.size.h1});
  }
`

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.h2};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 150%;
  transition: ${({ theme }) => theme.themeTransition};
`

export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  font-size: ${({ theme }) => theme.font.size.h3};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 150%;
  transition: ${({ theme }) => theme.themeTransition};
`

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.h4};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 150%;
  transition: ${({ theme }) => theme.themeTransition};
`

export const P = styled.p`
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body};
  color: ${({ theme }) => theme.text};
  line-height: 150%;
  transition: ${({ theme }) => theme.themeTransition};
`

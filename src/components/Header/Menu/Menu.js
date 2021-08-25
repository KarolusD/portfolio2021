import { Link } from 'gatsby'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'
import { useActiveSection } from 'hooks/useActiveSection'

const MENU_ITEMS = [
  {
    name: 'home',
    link: '/#home',
  },
  {
    name: 'projects',
    link: '/#projects',
  },
  {
    name: 'about me',
    link: '/#about-me',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'contact',
    link: '/#contact',
  },
]

const Menu = ({ isMenuOpen, toggleMobileMenu }) => {
  const [activeSection] = useActiveSection({
    targets: ['home', 'projects', 'about-me', 'blog', 'contact'],
    offset: 400,
  })

  const renderItems = () => {
    return MENU_ITEMS.map((item, idx) => {
      return (
        <MenuItem key={item.name} idx={idx}>
          <MenuLink
            $isActive={
              activeSection &&
              activeSection?.name === item.name.replaceAll(' ', '-')
            }
            to={item.link}
            onClick={toggleMobileMenu}
          >
            {item.name}
          </MenuLink>
        </MenuItem>
      )
    })
  }

  return (
    isMenuOpen && (
      <MenuWrapper>
        <MenuList>{renderItems()}</MenuList>
        <ThemeToggle />
      </MenuWrapper>
    )
  )
}

export default Menu

const MenuWrapper = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  ${({ theme }) => theme.mq.desktop} {
    background-color: transparent;
    position: relative;
    width: auto;
    height: auto;
  }
`

const MenuList = styled.ul`
  align-items: center;
  background: none;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
  }
`

const MenuItem = styled.li`
  margin-bottom: 6.4rem;
  position: relative;
  animation-name: ${() => floatingItem};
  animation-duration: 500ms;
  animation-delay: ${({ idx }) => `${100 * idx}ms`};
  animation-fill-mode: both;
  animation-timing-function: ease-out;

  ${({ theme }) => theme.mq.desktop} {
    animation: none;
    margin-bottom: 0;
    margin: 3.2rem;
  }
`

const MenuLink = styled(Link)`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.brandOrange : theme.text};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  text-decoration: none;
  padding: 0.4rem;
`

const floatingItem = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem)
  }

  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`

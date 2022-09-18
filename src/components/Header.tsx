import { Link } from 'react-router-dom'
import { DiscordLogo } from 'phosphor-react'

import { Button } from './Button'

import logoImg from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <Link to="/" className="w-40">
        <img src={logoImg} alt="" />
      </Link>

      <Button leftIcon={<DiscordLogo className="h-6 w-6" />}>
        Entrar com Discord
      </Button>
    </header>
  )
}

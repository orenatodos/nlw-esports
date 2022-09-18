import { useLoaderData } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'

import { supabase } from '../libs/supabase'

import { CardGameProps } from '../components/CardGame'
import { CarouselGames } from '../components/CarouselGames'
import { CreateAdBanner } from '../components/CreateAdBanner'
import { Modal } from '../components/Modal'

export type Game = {
  id: string
  title: string
  banner_url: string
  ad: object[]
}

export const HomeLoader = async () => {
  const { data } = await supabase.from('game').select(`
    *,
    ads_count:ad(count)
  `)

  return {
    games: data
  }
}

type LoaderData = {
  games: CardGameProps[]
}

export const Home = () => {
  const { games } = useLoaderData() as LoaderData

  return (
    <>
      <h1 className="text-6xl text-white font-black mt-20 mb-16">
        Seu{' '}
        <span className="bg-mainGradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <CarouselGames games={games} />

      <Dialog.Root>
        <CreateAdBanner />
        <Modal />
      </Dialog.Root>
    </>
  )
}

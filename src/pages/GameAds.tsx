import { useLoaderData } from 'react-router-dom'

import { supabase } from '../libs/supabase'

import { CardGameAd } from '../components/CardGameAd'

export const AdsLoader = async ({ params }) => {
  const getAds = supabase
    .from('ad')
    .select(`*, game!inner(*)`)
    .eq('game.title', `${params.game}`)

  const getGameByName = supabase
    .from('game')
    .select('*')
    .eq('title', `${params.game}`)
    .single()

  const [adsResponse, gameResponse] = await Promise.all([
    getAds,
    getGameByName
  ])

  return {
    ads: adsResponse.data,
    game: gameResponse.data
  }
}

type Ad = {
  id: string
  nickname: string
  years_playing: number
  hour_end: string
  hour_start: string
  week_days: unknown
  use_voice_channel: boolean
}

type Game = {
  id: string
  banner_url: string
  title: string
}

type LoaderData = {
  ads: Ad[]
  game: Game
}

export const GameAds = () => {
  const { ads, game } = useLoaderData() as LoaderData

  return (
    <>
      <div className="flex items-center gap-6 my-10">
        <img
          src={game.banner_url}
          alt={game.title}
          className="max-h-56 rounded"
        />

        <div>
          <h1 className="text-4xl font-bold text-white mb-3">
            {game.title}
          </h1>
          <p className="text-xl text-gray-100">
            <span className="font-bold text-white">{ads.length}</span>{' '}
            anúncio(s)
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white mb-5">Todos anúncios</h2>
      {ads.length ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {ads.map((ad) => (
            <CardGameAd
              key={ad.id}
              nickname={ad.nickname}
              years_playing={ad.years_playing}
              hour_end={ad.hour_end}
              hour_start={ad.hour_start}
              week_days={{}}
              use_voice_channel={ad.use_voice_channel}
            />
          ))}
        </div>
      ) : (
        <strong className="text-white font-bold text-3xl text-center block mt-16">
          Sem anúncios no momento =(
        </strong>
      )}
    </>
  )
}

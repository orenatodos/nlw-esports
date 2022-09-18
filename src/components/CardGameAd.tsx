import { GameController, Star } from 'phosphor-react'

import { Button } from './Button'

type CardGameAdProps = {
  nickname: string
  hour_end: string
  hour_start: string
  use_voice_channel: boolean
  week_days: object
  years_playing: number
}

export const CardGameAd = (props: CardGameAdProps) => {
  return (
    <article className="p-5 rounded-lg bg-[#2A2634] flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        <li>
          <small className="text-sm text-secondary-400">Nickname</small>
          <p className="font-bold text-sm text-white">{props.nickname}</p>
        </li>

        <li>
          <small className="text-sm text-secondary-400">
            Tempo de jogo
          </small>
          <p className="font-bold text-sm text-white">
            {props.years_playing} ano(s)
          </p>
        </li>

        <li>
          <small className="text-sm text-secondary-400">
            Disponibilidade
          </small>
          <p className="font-bold text-sm text-white">Todos os dias</p>
        </li>

        <li>
          <small className="text-sm text-secondary-400">
            Chamada de áudio?
          </small>
          <p
            className={`font-bold text-sm text-white ${
              props.use_voice_channel ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {props.use_voice_channel ? 'Sim' : 'Não'}
          </p>
        </li>

        <li>
          <small className="text-sm text-secondary-400 mb-1 block">
            Avaliação
          </small>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" weight="fill" />
            <Star className="w-5 h-5 text-yellow-500" weight="fill" />
            <Star className="w-5 h-5 text-yellow-500" weight="fill" />
            <Star className="w-5 h-5 text-yellow-500" weight="fill" />
            <Star className="w-5 h-5 text-yellow-500" weight="fill" />
          </div>
        </li>
      </ul>

      <Button
        leftIcon={<GameController weight="bold" className="h-5 w-5" />}
      >
        Conectar
      </Button>
    </article>
  )
}

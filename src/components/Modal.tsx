import { FormEvent, useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'

import { supabase } from '../libs/supabase'

import { Button } from './Button'
import { ButtonToggle } from './ButtonToogle'
import { Checkbox } from './Checkbox'
import { FormControl } from './FormControl'
import { Input } from './Input'
import { Select } from './Select'

type Game = {
  id: string
  title: string
}

const weekDaysList = [
  {
    title: 'Domingo',
    label: 'D',
    value: '0'
  },
  {
    title: 'Segunda-feira',
    label: 'S',
    value: '1'
  },
  {
    title: 'Terça-feira',
    label: 'T',
    value: '2'
  },
  {
    title: 'Quarta-feira',
    label: 'Q',
    value: '3'
  },
  {
    title: 'Quinta-feira',
    label: 'Q',
    value: '4'
  },
  {
    title: 'Sexta-feira',
    label: 'S',
    value: '5'
  },
  {
    title: 'Sabádo',
    label: 'S',
    value: '6'
  }
]

export const Modal = () => {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const [isLoadingGames, setIsLoadingGames] = useState(true)

  useEffect(() => {
    try {
      const loadGames = async () => {
        const { data } = await supabase.from('game').select(
          `
          *,
          ad (*)
        `
        )

        setGames(data as Game[])
      }

      loadGames()
    } catch (err) {
      console.log('Ocorreu um erro ao carregar os jogos')
    } finally {
      setIsLoadingGames(false)
    }
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if (!data.nickname) {
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.nickname,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      console.error(err)

      alert('Erro ao criar o anúncio!')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25 z-50">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <FormControl label="Qual o game?">
            <Select
              name="game"
              id="game"
              defaultValue=""
              loading={isLoadingGames}
            >
              <option value="">Selecione o game que deseja jogar</option>

              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl label="Qual seu nickname?">
            <Input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Nickname dentro do game"
            />
          </FormControl>

          <div className="grid grid-cols-2 gap-6">
            <FormControl label="Joga há quantos anos?">
              <Input
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
              />
            </FormControl>
            <FormControl label="Qual seu discord?">
              <Input
                type="text"
                name="discord"
                id="discord"
                placeholder="Usuario#4312"
              />
            </FormControl>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FormControl label="Quando costuma jogar?">
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                onValueChange={setWeekDays}
              >
                {weekDaysList.map((day) => (
                  <ButtonToggle
                    key={day.value}
                    value={day.value}
                    title={day.title}
                  >
                    {day.label}
                  </ButtonToggle>
                ))}
              </ToggleGroup.Root>
            </FormControl>

            <FormControl label="Qual horário do dia?">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="time"
                  name="hourStart"
                  id="hourStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  name="hourEnd"
                  id="hourEnd"
                  placeholder="Até"
                />
              </div>
            </FormControl>
          </div>

          <div>
            <Checkbox
              label="Costumo me conectar ao chat de voz"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true)
                } else {
                  setUseVoiceChannel(false)
                }
              }}
            />
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close asChild>
              <Button variant="secondary">Cancelar</Button>
            </Dialog.Close>

            <Button
              type="submit"
              variant="primary"
              leftIcon={<GameController className="w-6 h-6" />}
            >
              Encontrar duo
            </Button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

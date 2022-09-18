import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from './Button'

export const CreateAdBanner = () => {
  return (
    <div className="mt-8 pt-1 bg-mainGradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-secondary-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger asChild>
          <Button
            variant="primary"
            leftIcon={<MagnifyingGlassPlus size={24} />}
          >
            Publicar anúncio
          </Button>
        </Dialog.Trigger>
      </div>
    </div>
  )
}

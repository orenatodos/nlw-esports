import { Carousel, CarouselItem } from './Carousel'
import { CardGame, CardGameProps } from './CardGame'
import { Link } from 'react-router-dom'

type CarouselGamesProps = {
  games: CardGameProps[]
}

export const CarouselGames = ({ games }: CarouselGamesProps) => {
  return (
    <Carousel
      slidesPerView={1.4}
      spaceBetween={24}
      freeMode={true}
      loop
      breakpoints={{
        640: {
          slidesPerView: 2.4
        },
        768: {
          slidesPerView: 4.4
        },
        1024: {
          slidesPerView: 6.4
        }
      }}
      className="p-0.5"
    >
      {games.map((game) => (
        <CarouselItem key={game.id}>
          <Link to={game.title}>
            <CardGame {...game} />
          </Link>
        </CarouselItem>
      ))}
    </Carousel>
  )
}

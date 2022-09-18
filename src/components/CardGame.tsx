export type CardGameProps = {
  id: string
  title: string
  banner_url: string
  ads_count: [
    {
      count: number
    }
  ]
}

export const CardGame = (props: CardGameProps) => (
  <article className="relative rounded-lg overflow-hidden block focus">
    <img
      src={props.banner_url}
      alt=""
      className="w-[100%] max-w-[100%] h-[100%] block object-cover"
    />

    <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block">{props.title}</strong>
      <span className="text-secondary-300 text-sm block">
        {props.ads_count[0].count} anúncio(s)
      </span>
    </div>
  </article>
)

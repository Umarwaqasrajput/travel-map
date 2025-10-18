interface Props {
  name: string
  description: string
  color?: string
}

export default function DestinationCard({ name, description, color }: Props) {
  return (
    <div className="p-4 my-2 rounded shadow" style={{ backgroundColor: color || 'rgb(200,200,200)' }}>
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{description}</p>
    </div>
  )
}

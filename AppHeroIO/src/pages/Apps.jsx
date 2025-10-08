import { Link } from 'react-router-dom'

const demoApps = [
  { id: '1', name: 'Demo App One' },
  { id: '2', name: 'Demo App Two' },
  { id: '3', name: 'Demo App Three' },
]

export default function Apps() {
  return (
    <section style={{padding:20}}>
      <h2>Apps</h2>
      <ul>
        {demoApps.map((a) => (
          <li key={a.id}>
            <Link to={`/apps/${a.id}`}>{a.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

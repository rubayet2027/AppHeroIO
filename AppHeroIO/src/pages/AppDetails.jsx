import { useParams, Link } from 'react-router-dom'

export default function AppDetails() {
  const { id } = useParams()

  return (
    <section style={{padding:20}}>
      <h2>App Details</h2>
      <p>Showing details for app id: <strong>{id}</strong></p>
      <p>
        <Link to="/apps">Back to apps</Link>
      </p>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound404() {
  return (
    <section style={{padding:20}}>
      <h2>404 — Not Found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </section>
  )
}

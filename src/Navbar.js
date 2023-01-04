export default function Navbar() {

      const path = window.location.pathname

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/create">About</a>
        </li>
      </ul>
    </nav>
  )
}


import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>HIGH-CAR</span>
      </div>
      <div className="icons">
        <img src="/recherche.png" alt="" className="icon" />
        <div className="notification">
          <img src="/notification.png" alt="" className="icon"/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="/dazo.png" alt="" />
          <span>Zokely</span>
        </div>
        <img src="/settings.png" alt="" className="icon" />
      </div>
    </div>
  )
}


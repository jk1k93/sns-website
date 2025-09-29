import logo from '../../assets/Vector_logo.png'

export function Header() {
  return (
    <header style={{ 
      background: 'transparent', 
      position: 'sticky', 
      
      top: 20, 
      zIndex: 10,
      padding: '24px 80px'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        width:'100%',
        alignItems: 'center', 
        justifyContent: 'space-around', 
        height: 90, 
        background: '#ffffff',
        border: '1px solid #C1C1C1',
        borderRadius: 999,
        boxShadow: '0px 4px 60px rgba(0,0,0,0.10)', 
        padding: '0 32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={logo} alt="logo" style={{ width: 43, height: 43 }} />
          <strong style={{ 
            fontSize: '28px', 
            fontWeight: 400, 
            color: '#3B3A3A',
            fontFamily: 'var(--font-karantina)'
          }}>SPORTSNSTATS</strong>
        </div>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Home</a>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Booking</a>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Tournaments</a>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Player Profiles</a>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Coaching</a>
          <a href="#" style={{ 
            color: '#1B4B5E', 
            fontWeight: 400, 
            fontSize: '16px',
            fontFamily: 'var(--font-sans)'
          }}>Local Tournament News</a>
          <button className="btn btn--primary" style={{ 
            background: '#52B69A',
            color: '#FFFFFF',
            padding: '15px 29px',
            fontSize: '20px',
            fontWeight: 600,
            border: 'none',
            borderRadius: 999,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'var(--font-sans)'
          }}>Join Waitlist</button>
        </nav>
      </div>
    </header>
  )
}



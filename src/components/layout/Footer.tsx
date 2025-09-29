import logo from '../../assets/Vector_logo.png'

export function Footer() {
  return (
    <footer style={{ 
      background: '#184E77', 
      color: 'white', 
      marginTop: 80,
      padding: '48px 120px 24px'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: 32, 
          flexWrap: 'wrap',
          marginBottom: 32
        }}>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <img src={logo} alt="logo" style={{ width: 43, height: 43 }} />
            <strong style={{ 
              fontSize: '28px', 
              fontWeight: 400,
              lineHeight:'100%',
              letterSpacing:'6%',
              color: '#FFFFFF',
              fontFamily: 'var(--font-karantina)',
              paddingTop:10,
              paddingBottom:10
            }}>SPORTSNSTATS</strong>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <h4 style={{ 
                fontSize: '24px', 
                fontWeight: 500, 
                marginBottom: '40px',
                color: 'white',
                fontFamily: 'var(--font-sans)',
              }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop:0 }}>
                <li style={{ marginBottom: 8 }}>
                  <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>About us</a>
                </li>
                <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>Booking</a>
                </li>
                <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>Tournaments</a>
                </li>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 70 }}>
                <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>Player Profiles</a>
                </li>
                <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>Coaching</a>
                </li>
                <li style={{ marginBottom: 8 }}>
                <a href="#" style={{ 
                    color: '#FFFFFF', 
                    fontSize:'20px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400
                  }}>Local Tournament News</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ 
          borderTop: '1px solid #FFF)', 
          paddingTop: 24, 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16
        }}>
          <div style={{ 
            fontSize: '16px', 
            opacity: 0.9,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}>
            Copyright © 2025, SNS. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {/* Social Media Icons */}
            <div style={{ 
              width: 36, 
              height: 36, 
              borderRadius: '50%', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#1877f2',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>f</div>
            <div style={{ 
              width: 36, 
              height: 36, 
              borderRadius: '50%', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>X</div>
            <div style={{ 
              width: 36, 
              height: 36, 
              borderRadius: '50%', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#0077b5',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>in</div>
            <div style={{ 
              width: 36, 
              height: 36, 
              borderRadius: '50%', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff0000',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>▶</div>
          </div>
        </div>
      </div>
    </footer>
  )
}



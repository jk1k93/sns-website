import phone from '../assets/phone.png'
import phone1 from '../assets/Flat iPhone.png'
import phone2 from '../assets/Flat iPhone (1).png'
import About1 from '../assets/About_1.png'
import About2 from '../assets/About_2.png'
import About3 from '../assets/About_3.png'
import About4 from '../assets/About_4.png'
import About5 from '../assets/About_5.png'
import Use1 from '../assets/Use_1.png'
import Use2 from '../assets/Use_2.png'
import Use3 from '../assets/Use_3.png'
import Features1 from '../assets/Features_1.png'
import Features2 from '../assets/Features_2.png'
import News1 from '../assets/News_1.png'
import News2 from '../assets/News_2.png'
import News3 from '../assets/News_3.png'
import iPhoneBar from '../assets/phone_5.png'
import GooglePlayBadge from '../assets/Google Play Badge.png'
import AppStoreBadge from '../assets/App Store Badge.png'
export function HomePage() {
  return (
    <main>
      <section className="section" style={{ 
        background: 'linear-gradient(180deg,#fff,#E0EDEE,#C6DCD6)', 
        // paddingTop: 180, 
        // paddingBottom: 120,
        width:'100%',
        overflow: 'hidden',
        flex:1,
        position: 'relative',
        marginTop:-150,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        borderBottom: '10px solid #FFFFFF',
      }}>
        {/* Background dotted pattern */}
        <div style={{
        //   position: 'relative',
          marginTop:120,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#F2F4F7',
                backgroundImage: 'radial-gradient(circle, rgba(14, 11, 41, 0.98) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
        //   backgroundImage: 'radial-gradient(circle, rgba(113, 45, 45, 0.97) 5px, transparent 4px)',
          
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ textAlign: 'center',  zIndex: 1 }}>
          <div className="badge center" style={{ 
            margin: '0px auto 32px', 
            width: 'fit-content',
            background: '#D6ECED',
            color: '#397554',
            padding: '16px 20px',
            borderRadius: '50px',
            border: '2px solid #FFFFFF',
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'var(--font-sans)',
          }}>
            Tournaments, fixtures and live scoring — in one app
          </div>
          <h1 className="h1" style={{ 
            maxWidth: 950, 
            margin: '0 auto',
            color: '#0E0B29',
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Sora, sans-serif',
            letterSpacing:0.5,
            lineHeight:'129%'
          }}>
            Run your tournament
          </h1>
          <h1 className="h1" style={{ 
            maxWidth: 950, 
            margin: '0 auto 24px',
            color: '#0E0B29',
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Sora, sans-serif',
            letterSpacing:0.5,
            lineHeight:'129%'
          }}>
            like the pros do
          </h1>
          <p className="lead" style={{ 
            maxWidth: 720, 
            margin: '0 auto 32px',
            color: '#0E0B29',
            fontSize: '20px',
            fontWeight: 300,
            fontFamily: 'Sora, sans-serif',
            letterSpacing:'0.5px',
            lineHeight:'129%'
          }}>
            SportsNStats takes a tournament from sign-up to trophy — draws, fixtures, player auctions, ball-by-ball scoring and live standings. Built for cricket and badminton, with more sports on the way.
          </p>
          <button className="btn btn--primary" style={{ 
            background: '#4fbf9f',
            color: 'white',
            padding: '16px 32px',
            fontFamily: 'var(--font-sans)',
            fontSize: '20px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer'
          }}>
            Join the Waitlist
          </button>

          {/* Phone mockups placeholder */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: 40, 
            marginBottom: -170, 
            alignItems: 'flex-start', 
          }}>
            <img src={phone1} style={{ 
              width: 441, 
              height: 445, 
              marginRight:-50,
              zIndex:1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              textAlign: 'center'
            }} />
            <img src={phone} style={{ 
              width: 426, 
              height: 586, 
              objectFit: 'contain',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginTop:-35,
              fontSize: '12px',
              textAlign: 'center'
            }} />
            <img src={phone2} style={{ 
              width:441, 
              height: 445, 
              marginLeft:-50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              textAlign: 'center'
            }} />              
          </div>
        </div>
      </section>

      {/* About/Images grid */}
        
          <div id="about" className="container" style={{ padding: '96px 64px 64px', background: '#FFFFFF', scrollMarginTop: 140 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 28 }}>
              <div style={{ flex: '0 0 46%' }}>
                <div className="badge" style={{ 
                  background: '#000',
                  color: 'white',
                  padding: '24px 32px',
                  borderRadius: '999px',
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: 20,
                  width: 'fit-content',
                  lineHeight: '129%',
                  letterSpacing:'0.5px',
                  fontFamily: 'Sora, sans-serif'
                }}>
                  About us
                </div>
                <h2 className="h2" style={{ 
                  marginBottom: 16,
                  color: '#0E0B29',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '129%',
                  letterSpacing:'0.5px'
                }}>
                  One platform for organisers, players and fans
                </h2>
              </div>
              <div style={{ flex: '0 0 50%', display: 'flex' }}>
                <p className="lead" style={{ 
                  maxWidth: 1080,
                  color: '#535353',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '180%',
                  letterSpacing: 0.2,
                  wordSpacing: 1,
                  margin: 0,
                  fontFamily: 'var(--font-sans)'
                }}>
                  SportsNStats is built by TurfRank Technologies for the people who actually run local sport. Organisers set up a tournament in minutes, players register and get drafted into teams, and every match is scored live from the ground — so standings, scorecards and results are always current, without a spreadsheet in sight. Cricket and badminton are fully supported today, with football next.
                </p>
              </div>
            </div>
          </div>

          <div className="container" style={{  background: '#FFFFFF' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 1fr 1fr 1fr 0.5fr', gap: 32 }}>
              {[About1, About2, About3, About4, About5].map((src, i) => (
                <div key={i} style={{ height: 400, overflow: 'hidden', background: '#e5e7eb' }}>
                  <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        

      {/* Stats */}
      <section className="section center section--alt" style={{ 
        paddingTop: 120, 
        paddingBottom: 60,
        paddingLeft:80,
        paddingRight:80,
        background: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ 
            maxWidth: 800, 
            margin: '0 auto 64px',
            color: '#0E0B29',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '129%',
            fontFamily: 'Sora, sans-serif',
          }}>
            Everything a tournament needs, from the first draw to the final
          </h2>
          <div className="grid-3" style={{ gap: 32 }}>
            {[
              { label: 'Live cricket scoring', value: 'Ball by ball' },
              { label: 'Live badminton scoring', value: 'Rally by rally' },
              { label: 'Groups · Round robin · Knockout', value: '3 formats' },
            ].map((stat) => (
              <div key={stat.label} style={{ 
                position: 'relative',
                borderRadius: 28, 
                padding: 48, 
                fontFamily: 'Sora, sans-serif',
                backgroundColor: '#F2F4F7',
                backgroundImage: 'radial-gradient(circle, rgba(14,11,41,0.06) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
                border: '1px solid rgba(14,11,41,0.08)'
              }}>
                <div className="h2" style={{ 
                  marginBottom: 8,
                  color: '#0E0B29',
                  fontSize: '36px',
                  fontWeight: 700,
                  fontFamily: 'Sora, sans-serif',
                }}>{stat.value}</div>
                <div style={{ 
                  color: '#0E0B29',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '129%',
                  fontFamily: 'Sora, sans-serif',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section id="how-it-works" className="section" style={{  padding:'0 64px 120px', background:'#FFFFFF', scrollMarginTop: 140 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge" style={{ 
            background: '#ECF3F1',
            color: '#000000',
            padding: '14px 28px',
            borderRadius: '999px',
            fontSize: '20px',
            fontWeight: 600,
            margin: '0 auto 20px',
            width: 'fit-content',
            fontFamily: 'Sora, sans-serif',
            border: '1px solid #D3DDDA'
          }}>
            How it works
          </div>
          <h2 className="h2" style={{ 
            marginBottom: 16,
            color: '#0E0B29',
            fontFamily: 'Sora, sans-serif',
            fontSize: '32px',
            letterSpacing:'0.5px',
            fontWeight: 700
          }}>
            From sign-up to trophy in three steps
          </h2>
          <p className="lead" style={{ 
            maxWidth: 560, 
            margin: '0 auto 36px',
            color: '#535353',
            fontWeight:400,
            fontFamily: 'var(--font-sans)',
            fontSize: '20px'
          }}>
            Set up once, then let the platform handle the schedule, the scoring and the points table.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, padding:'20px 16px', height: 540 }}>
            {[
              { title: 'Book a venue and lock in your dates.', img: Use1 },
              { title: 'Create the tournament and pick a format.', img: Use2 },
              { title: 'Register teams and players, then play.', img: Use3 },
            ].map((item, i) => (
              <div key={i} style={{ 
                borderRadius: 28, 
                border:'1px solid #A8DFD0',
                paddingTop:20,
                paddingLeft:10,
                paddingRight:10,
                background: 'linear-gradient(180deg, #ECF3F1 0%, #D9ED92 50%)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle, rgba(14, 11, 41, 0.11) 1.3px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  pointerEvents: 'none'
                }} />
                <h3 style={{ 
                  color: '#0E0B29', 
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '22px', 
                  fontWeight: 700,
                //   margin: '0 0 12px',
                  lineHeight: 1.4
                }}>{item.title}</h3>
                <div style={{ 
                  borderRadius: 24,
                  height: 482,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  background: 'transparent'
                }}>
                  <img src={item.img} style={{ height: 362, width: 'auto', objectFit: 'contain', display: 'block', zIndex:1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + mockup */}
      <section id="features" className="section" style={{ padding:'0 60px 0', background:'#FFF', scrollMarginTop: 140 }}>
        {/* Row 1: Text left, stacked phones right */}
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <h2 className="h2" style={{ 
              maxWidth: 560,
              marginBottom: 16,
              color: '#0E0B29',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              fontSize: '42px'
            }}>
              Fixtures that build themselves
            </h2>
            <p className="lead" style={{ 
              marginBottom: 30,
              fontWeight:400,
              fontSize:'20px',
              fontFamily: 'var(--font-sans)',
              color: '#535353'
            }}>
              Choose groups, round robin or knockout — or chain them together. The platform draws the groups, seeds the bracket, hands out byes and promotes qualifiers to the next stage on its own.
            </p>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'Automatic or manual group draws, with seeding and byes.',
                'Knockout brackets generated straight from the standings.',
                'Live points table with net run rate, updated every ball.',
              ].map((feature, i) => (
                <div key={i} style={{ 
                  background: '#ECF3F1', 
                  borderRadius: 999, 
                  padding: '10px 16px', 
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  border:'1px solid #D3DDDA'
                }}>
                  <div style={{ 
                    width: 16, 
                    height: 16, 
                    background: '#4FBF9F', 
                    borderRadius: '50%' 
                  }} />
                  <span style={{ 
                    color: '#535353',
                    fontSize: '20px',
                    fontWeight: 400,
                    fontFamily: 'var(--font-sans)',
                  }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: 520 }}>
            <div style={{
              position: 'absolute',
              inset: 'auto 0 40px 0',
              margin: '0 auto',
              width: '80%',
              height: 180,
              background: '#EDEAF4',
              borderRadius: 24
            }} />
            <img src={Features1} style={{ position: 'absolute', right: 80, top: 0, height: 520, width: 'auto' }} />
          </div>
        </div>

        {/* Row 2: Phones left, text + feature cards right */}
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 520 }}>
            <div style={{
              position: 'absolute',
              inset: 'auto 0 40px 0',
              margin: '0 auto',
              width: '80%',
              height: 180,
              background: '#ECF3F1',
              borderRadius: 24
            }} />
            <img src={Features2} style={{ position: 'absolute', right: 80, top: 0, height: 520, width: 'auto' }} />
            {/* <img src={Features2} style={{ position: 'absolute', left: 80, top: 40, height: 480, width: 'auto' }} /> */}
          </div>
          <div>
            <h2 className="h2" style={{ 
              maxWidth: 720,
              marginBottom: 16,
              color: '#0E0B29',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              fontSize: '42px'
            }}>
              Live scoring built for the ground
            </h2>
            <p className="lead" style={{ marginBottom: 30, fontWeight:400, fontSize:'20px', fontFamily: 'var(--font-sans)', color: '#535353' }}>
              Score from a phone at the boundary rope. Every delivery and every rally is recorded as it happens — with undo for when it isn't — and followers watch the scorecard update live.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                'Cricket: toss, innings, and ball-by-ball with extras and wickets.',
                'Badminton: rally engine with golden point and deuce cap.',
                'Undo the last ball or rally — no questions asked.',
                'Live polling so fans follow along from anywhere.'
              ].map((text, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: '#ECF3F1',
                  borderRadius: 12,
                  border:'1px solid #D3DDDA',
                  padding: 20
                }}>
                  <div style={{ width: 28, height: 28, background: '#4FBF9F', borderRadius: 8 }} />
                  <div style={{ color: '#535353', fontSize: 16, fontWeight: 400 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News cards */}
      <section id="explore" className="section section--alt" style={{ 
        padding:'100px 60px 0px',
        scrollMarginTop: 140,
        background: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge" style={{ 
            background: '#ECF3F1',
            color: '#000000',
            border:'1px solid #D3DDDA',
            padding: '12px 22px',
            borderRadius: '999px',
            fontFamily: 'Sora, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            margin: '0 auto 20px',
            width: 'fit-content'
          }}>
            In depth
          </div>
          <h2 className="h2" style={{ 
            marginBottom: 16,
            color: '#0E0B29',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            letterSpacing:'0.5px',
            lineHeight:'129%'
          }}>
            Built around how tournaments are really played
          </h2>
          <p className="lead" style={{ 
            maxWidth: 680, 
            margin: '0 auto 56px',
            color: '#535353',
            fontSize:20,
            fontFamily: 'var(--font-sans)',
            fontWeight:400,
          }}>
            A closer look at the three things organisers ask us for most.
          </p>
          <div className="grid-3" style={{ gap: 28 }}>
            {[
              {
                title: 'Player auctions that build balanced squads',
                tag: 'Cricket',
                body: 'Set a purse and base prices, bid live, reserve squad slots with a max bid, and re-auction unsold players in later rounds — IPL-style, for your local league.',
                img: News1,
              },
              {
                title: 'One tournament, five events, five draws',
                tag: 'Badminton',
                body: "Men's and women's singles, doubles and mixed — each with its own entries, its own format, and standings ranked in BWF order.",
                img: News2,
              },
              {
                title: 'Find a turf, book a slot, pay in-app',
                tag: 'Bookings',
                body: 'Search venues by sport and distance, pick a time slot, and pay securely by UPI, card or wallet. Hosts manage hours, pricing and bookings from the same app.',
                img: News3,
              },
            ].map((article, i) => (
              <article key={i} style={{ 
                textAlign: 'left', 
                background: '#ECF3F1', 
                borderRadius: 20,
                height:520,
                padding: 24, 
                border: '1px solid #A8DFD0',
              }}>
                <div style={{ 
                  position: 'relative',
                  height: 220, 
                  borderRadius: 16, 
                  background: '#D9E7E1', 
                  marginBottom: 16,
                  overflow: 'hidden'
                }}>
                  <img src={article.img} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', left: 16, bottom: 16, background: '#4FBF9F', color: '#FFFFFF', padding: '10px 20px', borderRadius: 999, fontWeight: 600, fontSize: 18 }}>
                    {article.tag}
                  </div>
                </div>
                <h3 className="h3" style={{ 
                  marginBottom: 12,
                  color: '#0E0B29',
                  fontSize: '20px',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing:0.5
                }}>{article.title}</h3>
                <p style={{ 
                  color: '#535353',
                  marginBottom: 20,
                  fontSize: '16px',
                  fontWeight:400,
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.6
                }}>
                  {article.body}
                </p>
                <button className="btn" style={{ 
                  background: '#FFFFFF',
                  color: '#0E0B29',
                  border: '1px solid #E5E7EB',
                  padding: '16px 28px',
                  borderRadius: '40px',
                  fontSize: '18px',
                  fontWeight: 600,
                  fontFamily: 'Sora, sans-serif',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* App banner */}
      <section className="section" style={{background:'#FFFFFF', paddingLeft:60, paddingRight:60,  }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(90deg,#1aa27a,#356c8b)', 
            color: 'white', 
            borderRadius: 24, 
            padding: 48, 
            flex:1,
            display: 'grid', 
            gridTemplateColumns: '1fr 500px', 
            alignItems: 'center', 
            gap: 48 
          }}>
            <div>
              <h2 className="h2" style={{ 
                marginBottom: 20,
                color: 'white',
                fontSize:'32px',
                fontWeight:700,
                fontFamily: 'var(--font-sans)',
                lineHeight: '54px'
              }}>
                Take your tournament with you — the SportsNStats app
              </h2>
              <p className="lead" style={{ 
                marginBottom: 32,
                color: '#FFFFFF',
                fontWeight:400,
                maxLines:4,
                fontSize:'16px',
                fontFamily: 'var(--font-sans)',
                lineHeight: '26px'
              }}>
                Organise, score and follow from iOS and Android. Coming soon to the App Store and Google Play — join the waitlist for early access.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <img src={GooglePlayBadge} style={{ height: 60, width: 'auto' }} />
                <img src={AppStoreBadge} style={{ height: 60, width: 'auto' }} />
              </div>
            </div>
            <div style={{ 
              position: 'relative',
              height: 300, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={iPhoneBar} style={{ height: 350, width: 'auto', objectFit: 'contain', flex:1, alignItems:'flex-end', justifyContent:'flex-end', marginTop:45 }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



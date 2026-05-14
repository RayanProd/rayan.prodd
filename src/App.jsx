import React, { useState } from 'react'

const formations = [
  { title: 'Montage Vidéo', price: '49€', desc: 'Apprends le montage vidéo pro' },
  { title: 'Audio Pro', price: '79€', desc: 'Mixage et mastering audio' },
  { title: 'Création de contenu', price: '99€', desc: 'YouTube, TikTok, Instagram' }
]

export default function App() {
  const [selected, setSelected] = useState(null)

  const buy = (title) => {
    alert('Paiement Netlify (simulation) pour : ' + title)
  }

  return (
    <div style={{fontFamily:'Arial', background:'#0b0f19', color:'white', minHeight:'100vh'}}>

      <header style={{display:'flex', justifyContent:'space-between', padding:20}}>
        <h1>Rayan Prod 🎬</h1>
      </header>

      <section style={{textAlign:'center', padding:'60px 20px'}}>
        <h2>Formations Audiovisuel Pro</h2>
        <p>Plateforme simple prête pour Netlify</p>
      </section>

      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:20, padding:20}}>
        {formations.map((f,i)=>(
          <div key={i} style={{background:'#111827', padding:20, borderRadius:10}}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <b>{f.price}</b>
            <br/><br/>
            <button onClick={()=>setSelected(f)} style={{marginRight:10}}>Voir</button>
            <button onClick={()=>buy(f.title)}>Acheter</button>
          </div>
        ))}
      </section>

      {selected && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{background:'#111827', padding:20, borderRadius:10}}>
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <button onClick={()=>setSelected(null)}>Fermer</button>
          </div>
        </div>
      )}

    </div>
  )
}

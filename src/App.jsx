import React, { useState } from "react";

/* ===== FAKE USERS (SaaS DEMO) ===== */
const USERS = [
  { email: "test@rayan.com", password: "1234" }
];

/* ===== COURSES ===== */
const COURSES = [
  {
    id: 1,
    title: "🎬 Master Montage Vidéo",
    desc: "Deviens expert Premiere Pro / CapCut / DaVinci",
    price: "49€",
  },
  {
    id: 2,
    title: "🎧 Audio Engineering Pro",
    desc: "Mixage, mastering et production audio pro",
    price: "79€",
  },
  {
    id: 3,
    title: "📱 Social Media Growth",
    desc: "Deviens viral sur TikTok & YouTube",
    price: "99€",
  },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(null);

  /* ===== LOGIN ===== */
  const login = () => {
    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (found) setUser(found);
    else alert("Identifiants incorrects");
  };

  /* ===== LOGOUT ===== */
  const logout = () => {
    setUser(null);
  };

  /* ===== PAY BUTTON (STRIPE READY) ===== */
  const buyCourse = (course) => {
    alert("Stripe prêt à connecter pour : " + course.title);
  };

  /* ===== LOGIN PAGE ===== */
  if (!user) {
    return (
      <div style={styles.login}>
        <h1>Rayan Prod SaaS 🔐</h1>

        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={login} style={styles.btn}>
          Se connecter
        </button>

        <p style={{ opacity: 0.5, marginTop: 20 }}>
          test@rayan.com / 1234
        </p>
      </div>
    );
  }

  /* ===== DASHBOARD ===== */
  return (
    <div style={styles.body}>

      {/* NAV */}
      <header style={styles.nav}>
        <h2>Rayan Prod SaaS</h2>
        <button onClick={logout} style={styles.btn}>
          Logout
        </button>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1>Bienvenue 👋</h1>
        <p>Accède à tes formations premium</p>
      </section>

      {/* COURSES GRID (Netflix style) */}
      <section style={styles.grid}>
        {COURSES.map((c) => (
          <div key={c.id} style={styles.card}>
            <h3>{c.title}</h3>
            <p style={{ opacity: 0.7 }}>{c.desc}</p>
            <h2>{c.price}</h2>

            <button
              style={styles.btnPrimary}
              onClick={() => setSelected(c)}
            >
              Voir
            </button>

            <button
              style={styles.btn}
              onClick={() => buyCourse(c)}
            >
              Acheter 💳
            </button>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selected && (
        <div style={styles.modalBg}>
          <div style={styles.modal}>
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <h3>{selected.price}</h3>

            <button
              style={styles.btn}
              onClick={() => setSelected(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

/* ===== STYLE SAAS ===== */
const styles = {
  body: {
    fontFamily: "Arial",
    background: "#0b0f19",
    color: "white",
    minHeight: "100vh",
  },

  login: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    background: "#0b0f19",
    color: "white",
  },

  input: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    width: 220,
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },

  hero: {
    textAlign: "center",
    padding: 40,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 20,
    padding: 20,
  },

  card: {
    background: "#111827",
    padding: 20,
    borderRadius: 15,
  },

  btn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
  },

  btnPrimary: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    border: "none",
    background: "white",
    color: "black",
    cursor: "pointer",
  },

  modalBg: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#111827",
    padding: 20,
    borderRadius: 15,
    width: 300,
  },
};

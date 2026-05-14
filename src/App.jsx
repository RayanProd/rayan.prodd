<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Rayan Prod</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">

<style>
body {
  margin: 0;
  font-family: Inter, sans-serif;
  background: #000;
  color: white;
}

nav {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  z-index: 10;
  mix-blend-mode: difference;
}

.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.55);
}

.hero h1 {
  position: relative;
  font-weight: 200;
  font-size: 70px;
  letter-spacing: 6px;
}

.section {
  padding: 160px 10%;
}

.label {
  font-size: 12px;
  opacity: 0.6;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.work {
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
}

.item {
  position: relative;
  overflow: hidden;
  height: 75vh;
  border-radius: 10px;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.2s ease;
  filter: brightness(0.8) contrast(1.05);
}

.item:hover img {
  transform: scale(1.03);
  filter: brightness(1);
}

.caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.9;
}

.about {
  max-width: 700px;
  font-size: 18px;
  line-height: 1.8;
  opacity: 0.85;
}

footer {
  padding: 120px 10%;
  font-size: 12px;
  opacity: 0.5;
  letter-spacing: 2px;
}
</style>
</head>

<body>

<nav>
  <div>RAYAN PROD</div>
  <div>WORK / ABOUT / CONTACT</div>
</nav>

<section class="hero">
  <video autoplay muted loop>
    <source src="https://cdn.coverr.co/videos/coverr-filming-city-views-6970/1080p.mp4">
  </video>
  <h1>RAYAN PROD</h1>
</section>

<section class="section">
  <div class="label">Selected Work</div>

  <div class="work">

    <div class="item">
      <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c?q=80&w=1600" />
      <div class="caption">Cinematic Project I</div>
    </div>

    <div class="item">
      <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600" />
      <div class="caption">Urban Film Concept</div>
    </div>

    <div class="item">
      <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600" />
      <div class="caption">Night Visual Story</div>
    </div>

  </div>
</section>

<section class="section">
  <div class="label">About</div>

  <div class="about">
    Rayan Prod est une production audiovisuelle spécialisée dans la création de contenus cinématiques, publicitaires et artistiques.
    Nous racontons des histoires visuelles avec une approche minimaliste et émotionnelle.
  </div>
</section>

<footer>
  © RAYAN PROD — ALL RIGHTS RESERVED
</footer>

</body>
</html>

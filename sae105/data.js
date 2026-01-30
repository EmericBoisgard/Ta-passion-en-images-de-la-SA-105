// IMAGES
const images = [
  "Images/fond_noir.jpg",
  "Images/Système_solaire.gif",
  "Images/Soleil.jpg",
  "Images/Mercure.jpg",
  "Images/Vénus.jpg",
  "Images/Terre.jpg",
  "Images/Mars.jpg",
  "Images/Jupiter.jpg",
  "Images/Saturne.jpg",
  "Images/Uranus.jpg",
  "Images/Neptune.jpg",
];

// TEXTES
const textes = [
  `<h1 style="color: #00d4ff;">E-SPACE - Le voyage dans le système solaire</h1>
   
   <p><strong>L'espace.</strong> Des milliards d'étoiles, des planètes incroyables, des mystères insondables. Depuis quelques années, je lève les yeux vers le ciel en me demandant : qu'y a-t-il qu'on n'ait pas encore découvert là-haut ? Sommes-nous seuls dans l'Univers ? Qu'y a-t-il au-delà du bord de l'Univers ? L'infinité, ou l'absence d'espace, de temps et de matière ?</p>
   
   <p>Moi, c'est <strong style="color: #00d4ff;">Émeric</strong>, je suis étudiant en BUT MMI à Champs-sur-Marne et ce site, c'est ma réalisation de la SAÉ 1.05. Aujourd'hui, je t'emmène explorer notre magnifique système solaire. Nous restons dans notre voisinage cosmique : <strong>8 planètes, 1 étoile, des millions de kilomètres</strong>... </p>
   
   <p><em>Comment ça marche ?</em> Clique sur une image pour zoomer et l'admirer, puis reclique pour passer à la suivante. On décolle ? 🚀</p>`,

  // SYSTEME SOLAIRE
  `<h1 style="color: #ffd700;">Le Système Solaire</h1>
   
   <p>Voici notre voisinage cosmique ! Notre système solaire s'étend sur des milliards de kilomètres.</p>
   
   <p>Au centre, <strong>le Soleil</strong>, notre étoile. Autour de lui gravitent les 8 planètes que nous allons découvrir ensemble.</p>

   <p>Notre galaxie contient plus de 100 milliards d'étoiles comme le Soleil. Maintenant, on recule encore. La voie Lactée n'est qu'une galaxie parmi des centaines de milliards d'autres dans l'univers observable. Autant te dire que le voyage que tu t'apprêtes à faire est petit, malgré ses distances faramineuses !</p>
   
   <p style="color: #00d4ff;">Prêt à commencer le voyage ? C'est parti ! ✨</p>`,

  // SOLEIL
  `<h1 style="color: #ffaa00;">Le Soleil</h1>
   
   <p>Le Soleil, c'est littéralement le <strong>cœur battant</strong> de notre système.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 1,4 million de km</li>
     <li>Température de surface : 5500°C</li>
     <li>Température du noyau : 15 millions de degrés</li>
     <li>Masse : 99,86% du système solaire</li>
   </ul>
   
   <p>Cette boule de plasma fait 1,4 million de kilomètres de diamètre : tu pourrais mettre <span style="color: #ffaa00; font-weight: bold;">1,3 million de Terres</span> dedans !</p>
   
   <p>C'est là que se passe la magie : des réactions de fusion nucléaire transforment l'hydrogène en hélium, libérant une énergie colossale. Cette énergie met <strong>8 minutes</strong> pour nous atteindre, et c'est elle qui permet la vie sur Terre.</p>
   
   <p style="color: #ffaa00; font-weight: bold;">Sans lui, on n'existerait même pas.</p>`,

  // MERCURE
  `<h1 style="color: #999999;">Mercure</h1>
   
   <p>La plus petite planète du système et la plus proche du Soleil.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 4880 km</li>
     <li>Révolution : 88 jours terrestres</li>
     <li>Rotation : 59 jours terrestres</li>
     <li>Température : -180°C à +430°C</li>
   </ul>
   
   <p>Elle fait le tour du Soleil en seulement 88 jours, mais elle met 59 jours terrestres pour faire un tour sur elle-même ! Ça crée des situations complètement dingues. Si tu étais sur Mercure, tu verrais le Soleil 2 fois plus gros !</p>
   
   <p style="color: #ff6b6b; font-weight: bold;">Sa surface est criblée de cratères, comme la Lune, car elle n'a pas d'atmosphère pour la protéger des impacts. Malgré sa taille, Mercure cache un énorme noyau de fer qui représente 75% de son rayon.</p>
   
   <p><strong>C'est la planète des records extrêmes !</strong></p>`,

  // VÉNUS
  `<h1 style="color: #ffcc66;">Vénus</h1>
   
   <p>Souvent appelée l'étoile du berger.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 12 104 km</li>
     <li>Température : 465°C</li>
     <li>Atmosphère : 96% CO₂</li>
     <li>Rotation : Sens inverse (243 jours)</li>
   </ul>
   
   <p>De loin, elle est magnifique: c'est l'objet le plus brillant du ciel après le Soleil et la Lune. Mais de près, <span style="color: #ff6b6b; font-weight: bold;">c'est l'enfer absolu</span>.</p>
   
   <p>Son atmosphère ultra-dense (90 fois celle de la Terre) crée un effet de serre démentiel : jusqu'à <span style="color: #ff6b6b; font-weight: bold;">500°C</span> en surface ! La pression atmosphérique écrase tout.</p>
   
   <p style="color: #ffcc66;">Les scientifiques pensent qu'elle a peut-être été habitable il y a des milliards d'années, avant que tout parte en vrille.</p>`,

  // TERRE
  `<h1 style="color: #00aaff;">La Terre</h1>
   
   <p><strong>Notre maison !</strong></p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 12 742 km</li>
     <li>Surface océanique : 71%</li>
     <li>Atmosphère : 21% O₂</li>
     <li>Distance au Soleil : 150 millions de km</li>
   </ul>
   
   <p style="color: #00d4ff; font-weight: bold;">C'est la seule planète qui contient de l'eau liquide, indispensable à la vie. La Terre est à ce jour le seul endroit connu dans l'univers où la vie existe.</p>
   
   <p>La Terre a un champ magnétique puissant qui nous protège du vent solaire mortel. Elle possède aussi une Lune massive (le plus gros satellite par rapport à sa planète) qui stabilise son axe et crée les marées.</p>`,

  // MARS
  `<h1 style="color: #ff6b6b;">Mars</h1>
   
   <p>La <strong style="color: #ff6b6b;">planète rouge</strong> qui fait rêver l'humanité.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 6779 km</li>
     <li>Température moyenne : -63°C</li>
     <li>Atmosphère : 95% CO₂</li>
     <li>Lunes : Phobos et Deimos</li>
   </ul>
   
   <p style="color: #EEC4C9; font-weight: bold;">Son sol est recouvert d'une poussière rouge qui, balayée par le vent, forme des nuages roses !</p>
   
   <p style="color: #00d4ff; font-weight: bold;">Mais voilà le truc fou : Mars a eu de l'eau liquide en surface !</p>
   
   <p>On voit encore d'anciens lits de rivières, des deltas, des minéraux qui se forment uniquement dans l'eau. Il y a peut-être même encore de l'eau liquide sous la surface.</p>
   
   <p><strong>C'est notre meilleure chance de devenir une espèce multi-planétaire</strong> : SpaceX et la NASA préparent déjà les missions habitées pour les années 2030. 🚀</p>`,

  // JUPITER
  `<h1 style="color: #cc8866;">Jupiter</h1>
   
   <p>Le <strong style="color: #cc8866;">géant gazeux</strong> absolu.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 143 000 km</li>
     <li>Rotation : 10 heures</li>
     <li>Lunes : Au moins 95</li>
     <li>Grande Tache Rouge : Depuis 300+ ans</li>
   </ul>
   
   <p>Avec ses 143 000 km de diamètre : tu pourrais mettre <strong style="color: #cc8866;">les 7 autres planètes</strong> dedans !</p>
   
   <p>C'est une boule de gaz sans surface solide, principalement de l'hydrogène et de l'hélium. Sa Grande et Énigmatique Tache Rouge est une tempête qui fait rage depuis au moins 300 ans, plus grande que la Terre entière.</p>
   
   <p>Jupiter tourne sur elle-même en seulement 10 heures, ce qui crée des bandes de nuages spectaculaires. Elle possède au moins 95 lunes connues, dont les 4 lunes galiléennes : <strong>Io</strong> (volcanique), <strong>Europe</strong> (océan sous la glace), <strong>Ganymède</strong> (plus grosse lune du système), et <strong>Callisto</strong> (criblée de cratères).</p>
   
   <p style="color: #ffaa00; font-weight: bold;">Jupiter est notre bouclier cosmique</p>
   
   <p>Sa gravité massive dévie les astéroïdes et les comètes qui pourraient foncer vers la Terre. Sans elle, la vie sur Terre aurait été constamment bombardée.</p>`,

  // SATURNE
  `<h1 style="color: #ddbb88;">Saturne</h1>
   
   <p>La planète aux <strong style="color: #ddbb88;">anneaux légendaires</strong>.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 120 000 km</li>
     <li>Rotation : 10h45</li>
     <li>Lunes : 146 connues</li>
     <li>Anneaux : 282 000 km de largeur</li>
   </ul>
   
   <p>Elle pourrait flotter dans l'eau si on trouvait un océan assez grand (sa densité est inférieure à celle de l'eau) !</p>
   
   <p>Ses anneaux s'étendent sur 282 000 km mais ne font que <strong>10 mètres d'épaisseur</strong> en moyenne. Ils sont composés de milliards de particules de glace, de la taille d'un grain de sable à celle d'une maison.</p>
   
   <p>Saturne possède 146 lunes connues, dont <strong>Titan</strong> qui a une atmosphère dense et des lacs de méthane liquide : le seul endroit à part la Terre avec des liquides stables en surface. <strong>Encelade</strong>, une autre lune, crache des geysers d'eau dans l'espace depuis un océan souterrain.</p>
   
   <p style="color: #ddbb88; font-weight: bold;">Ses anneaux scintillants font d'elle la plus belle planète du système solaire. ❤️</p>`,

  // URANUS
  `<h1 style="color: #66cccc;">Uranus</h1>
   
   <p>La <strong style="color: #66cccc;">planète la plus étrange</strong> du système.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Diamètre : 51 000 km</li>
     <li>Température : -224°C (la plus froide !)</li>
     <li>Inclinaison : 98°</li>
     <li>Anneaux : 13</li>
     <li>Lunes : 27</li>
   </ul>
   
   <p>C'est une balle de ping pong version gigantesque !</p>
   <p>Elle est inclinée à 98° : <strong>elle roule littéralement sur le côté !</strong> On pense qu'un impact géant l'a basculée il y a des milliards d'années.</p>
   
   <p>Résultat : ses pôles passent 42 ans dans le noir, puis 42 ans au soleil.</p>
   
   <p>Uranus est d'un bleu-vert magnifique à cause du méthane dans son atmosphère. C'est la planète la plus froide du système (-224°C), plus froide même que Neptune pourtant plus éloignée.</p>
   
   <p>Son atmosphère cache probablement un océan d'eau, d'ammoniac et de méthane sous pression.</p>
   
   <p style="color: #66cccc;">Uranus a été visitée une seule fois, par Voyager 2 en 1986. Elle reste mystérieuse et fascinante.</p>`,

  // NEPTUNE
  `<h1 style="color: #3366ff;">Neptune</h1>
   
   <p>La <strong style="color: #3366ff;">dernière planète</strong> du système solaire.</p>
   
   <h3>Caractéristiques :</h3>
   <ul>
     <li>Distance au Soleil : 4,5 milliards de km</li>
     <li>Diamètre : 49 000 km</li>
     <li>Révolution : 165 ans terrestres</li>
     <li>Vents : Jusqu'à 2000 km/h !</li>
     <li>Lunes : 16 (dont Triton)</li>
   </ul>
   
   <p>Neptune est un géant de glace d'un bleu profond à cause du méthane atmosphérique.</p>
   
   <p style="color: #ff6b6b; font-weight: bold;">Elle possède les vents les plus rapides du système solaire : jusqu'à 2000 km/h !</p>
   
   <p>Sa Grande Tache Sombre était un anticyclone comparable à celui de Jupiter, mais il a disparu dans les années 90.</p>
   
   <p>Neptune a 16 lunes connues, dont <strong>Triton</strong> qui orbite à l'envers et possède des geysers d'azote.</p>
   
   <p style="color: #3366ff; font-weight: bold;">Au-delà de Neptune se trouvent des milliers d'éléments glacés, encore méconnus pour la plupart, appelés objets de la ceinture de Kuiper, et dont Pluton et Éris font aujourd'hui partie.</p>
   
   <p><strong>Il y fait -200°C ! 🥶</strong></p>`,

  `<p>J'espère que cette visite t'a plu... Mais elle n'est pas encore finie ! Tu peux à présent ajouter une planète qui te plaît à l'aide du formulaire présent ci-dessous. J'espère que E-SPACE a répondu à tes attentes, j'ai hâte de voir ta planète. A bientôt !</p>`,
];

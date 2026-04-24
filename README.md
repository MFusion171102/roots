# ✦ GreenChem — La Chimica per un Pianeta Vivo

> *"Una chimica che guarisce invece di nuocere."*

Un sito web statico multi-pagina dedicato alla **chimica verde** — progettato con HTML5 semantico, CSS moderno e JavaScript vanilla. Nessun framework, nessun build tool, zero dipendenze.

---

## 🖼️ Anteprima

| Desktop | Mobile |
|---|---|
| Sidebar fissa + layout a griglia | Sidebar collassabile + topbar |

---

## 📁 Struttura del progetto

```
greenchem/
├── index.html       # Pagina principale (in italiano)
├── styles.css       # Tutti gli stili — palette, layout, responsive
└── script.js        # Sidebar toggle + carosello interattivo
```

---

## ✨ Funzionalità

- **Sidebar di navigazione** fissa su desktop, collassabile su mobile con overlay
- **Hero section** con gradiente, texture noise e blob animati
- **Card informative** per fonti di energia sostenibile (Solare, Eolica, Biomassa, Idrogeno)
- **Sezione editoriale** split-layout con badge flottante e lista dei principi chiave
- **Carosello immagini** con controlli prev/next, dot navigation, autoplay e supporto swipe
- **Card "Carburante dagli Oli Esausti"** in stile numerato
- **Footer** completo con descrizione e link placeholder

---

## 🎨 Scelte di design

| Elemento | Scelta |
|---|---|
| **Stile** | Editorial organic-minimalism |
| **Heading font** | Playfair Display (serif) |
| **Body font** | DM Sans |
| **Colore primario** | `#2D6A4F` — verde foresta profondo |
| **Sfondo** | `#F7F5F0` — crema caldo |
| **Accento** | `#C77B1A` — ambra calda |
| **Sidebar** | `#0D1F14` — foresta quasi nera |

---

## 🚀 Come avviare

Non è richiesta alcuna installazione. Basta aprire il file direttamente nel browser:

```bash
# Clona la repo
git clone https://github.com/tuo-utente/greenchem.git
cd greenchem

# Apri nel browser (oppure usa un live server)
open index.html
```

In alternativa, con [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) su VS Code:

1. Apri la cartella del progetto
2. Tasto destro su `index.html` → **"Open with Live Server"**

---

## 📱 Responsive

| Breakpoint | Comportamento |
|---|---|
| `> 900px` | Sidebar fissa a sinistra, contenuto offset di 260px |
| `≤ 900px` | Sidebar nascosta, topbar fissa, toggle hamburger |
| `≤ 620px` | Card in colonna singola, padding ridotto |

---

## ♿ Accessibilità

- HTML5 semantico con landmark `<main>`, `<aside>`, `<nav>`, `<footer>`
- Attributi `aria-label`, `aria-expanded`, `aria-selected` su tutti i controlli interattivi
- Carosello con `role="region"`, `role="group"`, `role="tab"` e `role="tablist"`
- Navigazione da tastiera (frecce ← → sul carosello, Escape per chiudere la sidebar)
- Focus ring visibile per tutti gli elementi interattivi

---

## 🛠️ Tecnologie

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Font: Google Fonts](https://img.shields.io/badge/Fonts-Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)
![Icons: Phosphor](https://img.shields.io/badge/Icons-Phosphor-8B5CF6?style=flat-square)

---

## 📄 Licenza

Distribuito sotto licenza **MIT**. Consulta il file `LICENSE` per i dettagli.

---

<p align="center">
  Fatto con 🌿 per un pianeta più verde &nbsp;·&nbsp; © 2026 GreenChem
</p>

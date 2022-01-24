---
title: "Hierarchical robust adaptive control for wind turbines with actuator fault"
authors:
- Ameli, Sina
- Anubi, Olugbenga Moses
date: "2022-01-22T00:00:00Z"
doi: "10.1115/1.4053497"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: Submitted to *ASME Letters in Dynamic Systems and Control*
publication_short: In *LDSC*

abstract: This paper solves the problem of regulating the rotor speed tracking error for wind turbines in the full-load region by an effective robust-adaptive control strategy. The developed controller compensates for the uncertainty in the control input effectiveness caused by a pitch actuator fault, unmeasurable wind disturbance, and nonlinearity in the model. Wind turbines have multi-layer structures such that the high-level structure is nonlinearly coupled through an aggregation of the low-level control authorities. Hence, the control design is divided into two stages. First, an L2 controller is designed to attenuate the influence of wind disturbance fluctuations on the rotor speed. Then, in the low-level layer, a controller is designed using a proposed adaptation mechanism to compensate for actuator faults. The theoretical results show that the closed-loop equilibrium point of the regulated rotor speed tracking error dynamics in the high level is finite-gain L2 stable, and the closed-loop error dynamics in the low level is globally asymptotically stable. Simulation results show that the developed controller significantly reduces the root-mean- square of the rotor speed error compared to some well-known works, despite the largely fluctuating wind disturbance, and the time-varying uncertainty in the control input effectiveness.

# Summary. An optional shortened abstract.
summary: 

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/new/main/content/publication/hracwtaf/hracwtaf.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: '[**featured figure**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides:
---


---
title: "Moving-horizon false data injection attack design against cyber-physical systems"
authors:
- Yu Zheng
- Sridhar Babu Mudhangulla
- Olugbenga Moses Anubi
date: "2023-04-22T00:00:00Z"
doi: "10.1016/j.conengprac.2023.105552"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Control Engineering Practice*
publication_short: In *CEP*

abstract: Systematic attack design is essential to understanding the vulnerabilities of cyber–physical systems (CPSs), to better design for resiliency. In particular, false data injection attacks (FDIAs) are well-known and have been shown to be capable of bypassing bad data detection (BDD) while causing targeted biases in resulting state estimates. However, their effectiveness against moving horizon estimators (MHE) is not well understood. In fact, this paper shows that conventional FDIAs are generally ineffective against MHE. One of the main reasons is that the moving window renders the static FDIA recursively infeasible. This paper proposes a new attack methodology, moving-horizon FDIA (MH-FDIA), by considering both the performance of historical attacks and the current system’s status. Theoretical guarantees for successful attack generation and recursive feasibility are given. Numerical simulations on the IEEE-14 bus system further validate the theoretical claims and show that the proposed MH-FDIA outperforms state-of-the-art counterparts in both stealthiness and effectiveness. In addition, an experiment on a path-tracking control system of an autonomous vehicle shows the feasibility of the MH-FDIA in real-world nonlinear systems.

# Summary. An optional shortened abstract.
summary: 

tags:
- Source Themes
featured: true

links:
url_pdf: 'https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/mhfdiacps/mhfdiacps.pdf'
url_code: 'https://github.com/ZYblend/Moving-horizon-FDIA'
url_dataset: ''
url_poster: 'https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/mhfdiacps/slide.pdf'
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: '[**Poster**](https://unsplash.com/photos/pLCdAaMFLTE)'
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


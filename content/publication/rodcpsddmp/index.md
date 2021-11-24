---
title: "Resilient Observer Design for Cyber-Physical Systems with Data-Driven Measurement Pruning"
authors:
- Yu Zheng
- Olugbenga Moses Anubi
date: "2021-12-30T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["5"]

# Publication name and optional abbreviated publication name.
publication: In *2021 Electric Ship Technologies Symposium*
publication_short: In *ESTS*

abstract: Resilient observer design for Cyber-Physical Systems (CPS) in the presence of adversarial false data injection attacks (FDIA) is an active area of research. Existing state-of-the-art algorithms tend to break down as more and more knowledge of the system is built into the attack model; also as the percentage of attacked nodes increases. From the view of optimization theory, the problem is often cast as a classical error correction problem for which a theoretical limit of 50% has been established as the maximum percentage attacked nodes for which state recovery is guaranteed. Beyond this limit, the performance of L1-minimization based schemes, for instance, deteriorates rapidly. Similar performance degradation occurs for other types of resilient observers beyond certain percentages of attacked nodes. <br> In order to increase the corresponding percentage of attacked nodes for which state recoveries can be guaranteed, researchers have begun to incorporate prior information into the underlying resilient observer design framework. For the most pragmatic cases, this prior information is often obtained through a data-driven machine learning process. Existing results have shown a strong positive correlation between the maximum attacked percentages that can be tolerated and the accuracy of the data-driven model. Motivated by these results, this chapter examines the case for pruning algorithms designed to improve the Positive Prediction Value (PPV) of the resulting prior information, given stochastic uncertainty characteristics of the underlying machine learning model. Theoretical quantification of the achievable improvement is given. Simulation results show that the pruning algorithm significantly increases the maximum correctable percentage of attacked nodes, even for machine learning model whose prediction power is comparable to the random flip of a coin.

# Summary. An optional shortened abstract.
summary: 

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/aropptcwmr/aropptcwmr.pdf
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


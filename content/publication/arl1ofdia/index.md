---
title: "Attack-Resilient Weighted L1 Observer with Prior Pruning"
authors:
- Yu Zheng
- Olugbenga Moses Anubi
date: "2021-05-25T00:00:00Z"
doi: "10.23919/ACC50511.2021.9482913"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *2021 American Control Conference*
publication_short: In *ACC*

abstract: Security related questions for Cyber Physical Systems (CPS) have attracted much research attention in searching for novel methods for attack-resilient control and/or estimation. Specifically, false data injection attacks (FDIAs) have been shown to be capable of bypassing bad data detection (BDD), while arbitrarily compromising the integrity of state estimators and robust controller even with very sparse measurements corruption. Moreover, based on the inherent sparsity of pragmatic attack signals, L1-minimization scheme has been used extensively to improve the design of attack-resilient estimators. For this, the theoretical maximum for the percentage of compromised nodes that can be accommodated has been shown to be 50%. In order to guarantee correct state recoveries for larger percentage of attacked nodes, researchers have begun to incorporate prior information into the underlying resilient observer design framework. For the most pragmatic cases, this prior information is often obtained through some data-driven machine learning process. Existing results have shown strong positive correlation between the tolerated attack percentages and the precision of the prior information. In this paper, we present a pruning method to improve the precision of the prior information, given corresponding stochastic uncertainty characteristics of the underlying machine learning model. Then a weighted L1-minimization is proposed based on the pruned prior. The theoretical and simulation results show that the pruning method significantly improves the observer performance for much larger attack percentages, even when moderately accurate machine learning model used.

# Summary. An optional shortened abstract.
summary: This paper proposed a weighted L1 observer with prior pruning scheme against FDIAs. The pruning method gives a method to improve localization precision of any underlying localization algorithm withot training effort. Moreover, the weighted L1 observer with prior pruning is capable of coping with high-percentage of attacks among measurement nodes, which relaxes the transitional restriction on the maximum attack percentage for resilient L1 observer, thereby improve the resiliency of systems.

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/arl1ofdia/arl1ofdia.pdf
url_code: 'https://github.com/ZYblend/Resilient-Pruning-Observer'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/arl1ofdia/slide.pdf
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


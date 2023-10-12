---
title: "Attack-Resilient Observer Pruning for Path-Tracking Control of Wheeled Mobile Robot"
authors:
- Yu Zheng
- Olugbenga Moses Anubi
date: "2020-10-05T00:00:00Z"
doi: "10.1115/DSCC2020-3139"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *2020 Dynamic Systems and Control Division, DSCC*
publication_short: In *DSCC*

abstract: Path-tracking control of wheeled mobile robot (WMR) has gained a lot of research attention, primarily because of its wide applicability — for example intelligent wheelchairs, exploration-assistant remote WMR. Recent increase in remote and autonomous operations/requirements for WMR has led to more and more use of IoT devices within the control loop. Consequently, providing interfaces for malicious interactions through false data injection attacks (FDIA). Moreover, optimization-based FDIAs have been shown to cause catastrophic consequences in feedback control systems while by-passing any residual-based monitoring system. Since these attacks target system measurement process, this paper focuses on the problem of improving the resiliency of dynamical observers against FDIA. Specifically, we propose an attack-resilient pruning algorithm which attempts to exclude compromised channels from being processed by the observer. The proposed pruning algorithm improves attack-localization precision to 100% with high probability, which correspondingly improves the resiliency of the underlying UKF to FDIA. The improvements due to the developed resilient pruning-based observer is validated through a numerical simulation of a two-layer path-tracking control platform of differential-driven wheeled mobile robot (DDWMR) under FDIA.

# Summary. An optional shortened abstract.
summary: In this paper, an attack-resilient path tracking control scheme for wheeled mobile robot under an optimization-based FDIA was designed. The main contributions include; (1) Stable path-tracking control system for DDWMR, (2) Optimizationbased FDIA for DDWMR, and (3) The pruning-based observer design using UKF as the underlying observer. It was shown that the proposed pruning-based observer significantly improves the signal-to-attack ratio such that the UKF is able to resiliently estimate the state of the DDWMR even when portion of the sensor measurements were subject to an FDIA.

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/aropptcwmr/aropptcwmr.pdf
url_code: 'https://github.com/ZYblend/Resilient-path-tracking-control-for-WMR'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: https://github.com/fsudssAI/starter-hugo-research-group/tree/main/content/publication/aropptcwmr/slide.pdf
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


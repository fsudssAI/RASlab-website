---
title: "Robust Resilient Signal Reconstruction under Adversarial Attacks"
authors:
- Anubi, Olugbenga Moses
- Lalit Mestha
- Hema Achanta
date: "2018-07-20T00:00:00Z"
doi: "arXiv:1807.08004"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: Submitted to *arXiv.org*
publication_short: In *arXiv*

abstract: This paper considers the problem of optimal estimation for linear system with the measurement vector subject to arbitrary corruption by an adversarial agent. This problem is relevant to cyber-physical systems where, due to the tight coupling of physics, communication and computation, a malicious agent is able to exploit multiple inherent vulnerabilities in order to inject stealthy signals into the measurement process. These malicious signals are calculated to serve the attack objectives of causing false situation awareness and/or triggering a sequence of cascading effects leading to an ultimate system failure. We assume that the attacker can only compromise a portion, but not all, of the measurement channels simultaneously. However, once a channel is compromised, the attacker is free to modify the corresponding measurement arbitrarily. Consequently, the problem is formulated as a compressive sensing problem with additional prior-information model. The prior-information considered is a set inclusion constraint on the measurement vector. It is shown that if the prior set satisfies certain conditions, the resulting recovery error bound is much stronger. The approach is applied to the problem of resilient sate estimation of a power system. For this application, Gaussian Process is used to build a prior generative probabilistic regression model from historical data. The resulting Gaussian Process Regression model recursively maps energy market information to Gaussian distributions on the relevant system measurements. An optimization-based resilient state estimator is then developed using a re-weighted L1 minimization scheme. The developed algorithm is evaluated through a numerical simulation example of the IEEE 14-bus system mapped to the New York Independent System Operator (NYISO) grid data.

# Summary. An optional shortened abstract.
summary: 

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/new/main/content/publication/rrsraa/rrsraa.pdf
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


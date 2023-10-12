---
title: "Algorithm Design for Resilient Cyber-Physical Systems using an Automated Attack Generative Model"
authors:
- Yu Zheng
- Ali Sayghe
- Olugbenga Moses Anubi
date: "2021-12-25T00:00:00Z"
doi: "10.36227/techrxiv.17032898.v1"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: Submitted to *IEEE Transactions on Systems, Man, and Cybernetics; Systems*
publication_short: In *TSMC*

abstract: This paper presents a suite of algorithms for detecting and localizing attacks in cyber-physical systems, and performing improved resilient state estimation through a pruning algorithm. High performance rates for the underlying detection and localization algorithms are achieved by generating training data that cover large region of the attack space. An unsupervised generative model trained by physics-based discriminators is designed to generate successful false data injection attacks. Then the generated adversarial examples are used to train a multi-class deep neural network which detects and localizes the attacks on measurements. Next, a pruning algorithm is included to improve the precision of localization result and provide performance guarantees for the resulting resilient observer. The performance of the proposed method is validated using the numerical simulation of a water distribution cyber-physical system.

# Summary. An optional shortened abstract.
summary: In this paper, we present an algorithm design for resilient cyber-physical system, the resiliency is significantly improved by including the proposed automated attack generation in the training of attack detection algorithm. Unlike traditional GANbased FDI attack generation, the automated attack generator does not require the prepared attack samples. This work is supported by U.S. Department of Energy’s Office of Cybersecurity, Energy Security, AND Emergency Response (CESER) under the award number DE-CR0000005.

tags:
- Source Themes
featured: true

links:
url_pdf: https://www.techrxiv.org/articles/preprint/Algorithm_Design_for_Resilient_Cyber-Physical_Systems_using_an_Automated_Attack_Generative_Model/17032898
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


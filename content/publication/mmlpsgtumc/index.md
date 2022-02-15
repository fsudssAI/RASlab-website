---
title: "Multi-modal Learning Pipeline for Smooth Georeferenced Tracking from an Uncalibrated Monocular Camera"
authors:
- Boluwatife Olabiran
- Ashwin Vadivel
- Yu Zheng
- Muhammad Saud Ul Hassan
- Olugbenga Moses Anubi 
date: "2017-08-27T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: preprint
publication_short: preprint

abstract: Automatic generation of georeferenced trajectories for vehicular traffic is critical for situational awareness and monitoring for both manned and unmanned platforms, irrespective of their level of autonomy. The goal is to estimate the world coordinates of one or more vehicles from a sequence of images with known camera world coordinates. Traditional depth estimation techniques rely on cues from feature correspondences of multiple viewpoints or knowledge of the camera parameters based on extensive camera calibration. However, camera calibration is a complex and challenging error-prone task. Also, these camera parameters are not guaranteed to be estimable to desired accuracy. This paper presents a lightweight technique to generate georeferenced tracks of vehicular traffic from monocular camera images using a supervised multi-layer model trained on a sparse dataset. The developed pipeline chains well-known highly efficient detection algorithm with novel multi-modal inference learning algorithm, physics-driven interpolation algorithm and an error evaluation process. The novelty of this inference model is the combination of a highly generalizable layer with an extra precision layer, resulting in a highly accurate process with minimal performance degradation across testing and validation datasets. The developed pipeline was tested using real-world maritime traffic images generated from a generic low-cost webcam with, unknown parameters, mounted on a vessel with known GPS coordinates. The whole pipeline was implemented on an NVIDIA Jetson TX2, an embedded system-on-module (SoM) with dual-core NVIDIA Denver2 + quad-core ARM Cortex-A57, 8GB RAM and integrated 256-core Pascal GPU. The results show that the pipeline produces very accurate world coordinate estimates of unseen data using minimal features with unknown camera parameters. The results also show that proposed inference technique is robust to detection uncertainties.

# Summary. An optional shortened abstract.
summary: 

tags:
- Source Themes
featured: true

links:
url_pdf: https://github.com/fsudssAI/starter-hugo-research-group/new/main/content/publication/mmlpsgtumc/mmlpsgtumc.pdf
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


---
layout: page
title: 

event:
event_url:

location: 
address:
  street: 
  city:
  region:
  postcode:
  country:

summary: We are constucting a cutting-edge self-driving vehicle platform. In this project, several researches are conducted, vison-based lane detection, learning-based object detection, image-based real-world localization, robust motion control and estimation. The self-driving platform is built on a 1/10 vehicle (MicroNole) and a full-size van (AutoNole).
abstract: ""

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: "2030-05-01T13:00:00Z"
date_end: "2030-05-01T15:00:00Z"
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: "2017-01-01T00:00:00Z"

authors: []
tags: []

# Is this a featured talk? (true/false)
featured: true

image:
  caption: ''
  focal_point: Right

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides:

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
---
## <span style="color: #0a7ed1;font-weight:bold">Autonomous Systems Control</span>
![overview](https://user-images.githubusercontent.com/72170474/154105932-8c444e3f-ad14-480e-82d6-62f26f25c594.png)


##  <span style="color: #0a7ed1;font-weight:bold">Capabilities</span>

###  <span style="color: #0a7ed1;font-weight:bold">Localization with Uncalibrated Cameras for Indoor and Outdoor environments (LUCIO)</span>
Lucio system is a multi-Model learning system for smooth Georeferenced Tracking from an Uncalibrated Monocular Camera. 
![Luscio](https://user-images.githubusercontent.com/36635562/150834501-0bce5931-1f70-43e1-b626-de4864cffa22.png)

**Progresses**:
- Won 2nd place in Navy [AI-Track-at-sea](https://www.eng.famu.fsu.edu/news/tracks-at-sea-2021) competition (aacuracy: 57%). (2020 fall)
- Improved the accuracy of localization to 99.7% for indoor training tasks. (2021 fall)

### <span style="color: #0a7ed1;font-weight:bold">Planning and Motion Control</span>
- **Real-time Mapping and Path Planning**
{{< video library="true" src="Nolebot_pp.mp4" controls="yes" >}}

- **Path following control**
A vision-based self-driving car platform is being constructed, including model characterization, parameter estimation, sensor fusion, object detection, optimal path planing, robust motion control. <br>
{{< youtube 7Oz_TR-duHE >}}

- **Resilient Motion Control**
![RMC](https://user-images.githubusercontent.com/72170474/154106839-d696e7f7-2668-4a35-958c-c80238a6283d.png)

## <span style="color: #0a7ed1;font-weight:bold">Paper</span>
- [Multi-modal Learning Pipeline for Smooth Georeferenced Tracking from an Uncalibrated Monocular Camera](https://raslab.netlify.app/publication/mmlpsgtumc/)
- [Attack-Resilient Observer Pruning for Path-Tracking Control of Wheeled Mobile Robot](https://raslab.netlify.app/publication/aropptcwmr/)

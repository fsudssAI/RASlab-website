---
layout: page
title: Distributed Systems

event:
event_url:

location: 
address:
  street: 
  city:
  region:
  postcode:
  country:

summary: A distributed system is a computing environment in which various components are spread across multiple computers (or other computing devices) on a network. These devices split up the work, coordinating their efforts to complete the job more efficiently than if a single device had been responsible for the task. The important properties studied in distributed systems include Scalability, Concurrency, Availability/fault tolerance, Transparency, Heterogeneity, Replication.
abstract: ""

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: "2030-01-02T13:00:00Z"
date_end: "2030-01-02T15:00:00Z"
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
Acknowledgement
- Office of Naval Research (ONR)
- Florida State University (FSU)
- Center for Advanced Power Systems (CAPS)

Distributed Systems Group primarily works on Energy Management (EM) for Ship Power Systems (SPSs) and Hybrid Electric Vehicles (HEVs). The lab is Equipped with Hardware-in-loop (HIL) capabilities to implement the designed EM algorithms. A Single SPEEDGOAT performance target machine along with five individual SPEEDGOAT unit target machines enable broad area for distributed algorithm implementation.
![Ship Power System (SPSs)](https://user-images.githubusercontent.com/36635562/150829476-1838625c-d2a8-41cd-8054-a1c483f58531.png)

Integration of modern defense weapons into ship power systems poses a challenge in terms of meeting the high ramp rate requirements of those loads. It might be demanding for the generators to meet the ramp rates of these loads. Failure to meet so, might lead to stability issues. This is addressed by conglomeration of generators and energy storage elements to handle the required power demand posed by loads. An energy management strategy based on model predictive control that incorporates the uncertainty in the load prediction in a distributed fashion is designed. The proposed controller optimally coordinates the power split between the generators and energy storage elements to guarantee that the power demand is met taking into considerations the ramp rate limitations and the load uncertainty. 
![Hybrid Electric Vehicles (HEVs)](https://user-images.githubusercontent.com/36635562/150829542-f195cde0-ea7a-43f2-8872-e1435e3b5291.png)

Stringent regulations on environmental emissions such as Paris climate accord and fears of extinction of oil and natural gases in near future led the automobile industry to focus on manufacturing more alternate energy dependent, efficient and environmentally clean vehicles. This has resulted in emergence of HEVs and EVs. Currently the distributed group is focusing on developing an EM strategy for HEVs. Optimal Energy management (EM) between engine and battery plays pivotal role in enhancing the fuel efficiency of HEV. The current goal is to design an energy efficient distributed control algorithm while considering the battery degradation characteristics. The Image shown below depicts the idea of a distributed control on HEV.
![image](https://user-images.githubusercontent.com/36635562/150829608-633f4ae4-aa51-4d62-be9c-1462800c7843.png)

**Relevant Papers**:
- [Model and Load Predictive Control for Design and Energy Management of Shipboard Power Systems](https://raslab.netlify.app/publication/mlpcdemsps/)
- [Low-bandwidth Modular Mathematical Modeling of DC Microgrid Systems for Control Development with Application to Shipboard Power Systems](https://raslab.netlify.app/publication/lmmmsdcmgsps/)
- [Degradation Aware Predictive Energy Management Strategy for Ship Power Systems](https://raslab.netlify.app/publication/dapemssps/)




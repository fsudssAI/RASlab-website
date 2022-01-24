---
title: Resilient Control Systems

event: 
event_url: 

location:
address:
  street:
  city:
  region: 
  postcode: 
  country:

summary: Cyber-physical system (CPS) is a new terminology of smart systems referring to the tight conjoining of and coordination between computation, comunication and physical processes.In increasingly serious adversary environment, the quest to synthesize control laws that meet the necessary resiliency requirements will become even more challenging. This research is focusing on vulnerability analysis, anomaly detection, characterization, and localization, to resilient control and state estimation designs against adversarial targeting.
abstract: ""

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: "2030-09-01T13:00:00Z"
date_end: "2030-09-01T15:00:00Z"
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
## Acknowledgement: 
This research is supported by 
- Department of Energy ([CX-021036: REDCS](https://www.energy.gov/nepa/downloads/cx-021036-resilient-energy-delivery-and-control-systems-redcs)) under Award Number DE-CR0000005.
- Florida State University
- Center for Advanced Power sysetms
## Overview
![overview](https://user-images.githubusercontent.com/72170474/150700126-aa8e85bc-1809-46b9-b35b-bd72f41a93aa.png)
Cyber-physical system (CPS) is a relatively young area of research, with the term itself only recently coined in 2006 by the National Science Foundation (NSF) to refer to the tight conjoining of and coordination between computational and physical resources. The seamless integration of computation, networking and physical components is a main characteristic of CPS but also enables malicious agents chances to inject attacks.<br>
Example cyber threats in the history:
- Suspected cyber intruder took control of the power system control center in western Ukraine in December 2015;
- In 2015, 25 cyber attacks were disclosed in several water systems;
- In 2020, a malicious cyber-attack attempted to raise the chlorine level in Israel’s water supply to dangerous proportion ……

## Concurrent Modeling for CPS
![CPS model](https://user-images.githubusercontent.com/72170474/150700418-b937c2ad-bdd6-40a1-915c-375ea4826afa.png)
Model is an abstract representation of the construction and operation of the system of interest, and it should not be so complex but be a close approximation to the real system and incorporate most of its salient features. Based on a reliable model, designer could simulate behavior and perform mathematical analysis offline. For security-related aspect of CPS, modeling provides the chance to design and test the system's robustness and resilience to disturbance, faults, and malicious attacks without exposing a real physical plant to such threats. 

## Attack Characterization
![attack](https://user-images.githubusercontent.com/72170474/150700777-baa14500-e782-4d52-9599-a1408df61870.png)
Security is defined as an ability to place resilience on provided services under malicious attacks. Unlike the traditional attacks on computer system which occurs only in cyber layer, the attacks in CPS would be designed subtly to affect both cyber and physical parts.

## Attack Generation
That an attack is seen to be successful or not depends on its effectiveness and stealthiness. 
![GAN-based attack generation](https://user-images.githubusercontent.com/72170474/150701139-7ec29353-d0d3-41c6-80c5-eea68ed01f48.png)

Relevant paper: 
- [Data-driven approach: Algorithm Design for Resilient Cyber-Physical Systems using an Automated Attack Generative Model](https://raslab.netlify.app/publication/adrcpsaag/)
- [Model-based approach 1: Attack-Resilient Weighted L1 Observer with Prior Pruning](https://raslab.netlify.app/publication/arl1ofdia/)
- [Model-based approach 2: under review]()

## Attack Detection and Identification
![concurrent ADI (CADI)](https://user-images.githubusercontent.com/72170474/150700790-60e5c7ca-10e1-4839-bdf0-429317277b44.png)
Several directions of this researches could be conducted:
- A: Learn the nominal characterization of system, create an additional secure detetion layer that is hidden from attacker;
- B: Learn the characterization of attacks.

Relevant paper: 
- [Approach A: Enhanced resilient state estimation using data-driven auxiliary models](https://raslab.netlify.app/publication/erseddam/)
- [Approach A: Resilient Observer Design for Cyber-Physical Systems with Data-Driven Measurement Pruning](https://raslab.netlify.app/publication/rodcpsddmp/)
- [Approach B: Algorithm Design for Resilient Cyber-Physical Systems using an Automated Attack Generative Model](https://raslab.netlify.app/publication/adrcpsaag/)

## Cocurrent Learning and Resilient Estimation
Traditional attack-resilient observer designs (such as L1 decoder, event-trigger luenberger observer…) require half of measurements to be clean.<br>
Cocurrent Learning and Resilient Estimation (CLRE) is an approach combining learning-based prior information with resilient estimation design in order to improve system's resiliency.
Relevant paper: 
- [Enhanced resilient state estimation using data-driven auxiliary models](https://raslab.netlify.app/publication/erseddam/)
- [Multi-Model Resilient Observer under False Data Injection Attacks](https://raslab.netlify.app/publication/mmrofdia/)
- [Attack-Resilient Weighted L1 Observer with Prior Pruning](https://raslab.netlify.app/publication/arl1ofdia/)
- [Resilient optimal estimation using measurement prior](https://raslab.netlify.app/publication/roemr/)
- [Robust Resilient Signal Reconstruction under Adversarial Attacks](https://raslab.netlify.app/publication/rrsraa/)

## Adversary Machine Learning
In order to protect against cyber attacks, several machine learning algorithms have been proposed for attack detection and identification. However, such methods are susceptible to adversarial examples which could significantly reduce their detection accuracy. 
Relevant paper: 
- [Evasion attacks with adversarial deep learning against power system state estimation](https://raslab.netlify.app/publication/eaadlpsse/)

## Applications
### Resilient Energy Delivery and Control Systems (REDCS)
![REDCS](https://user-images.githubusercontent.com/72170474/150701660-4f0b5fef-0628-4d11-a9db-065759e30b7a.png)
Relevant paper: 
- [Algorithm Design for Resilient Cyber-Physical Systems using an Automated Attack Generative Model](https://raslab.netlify.app/publication/adrcpsaag/)
### Resilient robot motion control system
![image](https://user-images.githubusercontent.com/72170474/150701939-1f52353c-f62c-4536-87ff-aeefa6a0862f.png)
Relevant paper: 
- [Attack-Resilient Observer Pruning for Path-Tracking Control of Wheeled Mobile Robot](https://raslab.netlify.app/publication/aropptcwmr/)
### Resilient water distribution system
![image](https://user-images.githubusercontent.com/72170474/150701940-4bac0d8a-689c-414d-b59d-ebda9d5e540e.png)
Relevant paper: 
- [Algorithm Design for Resilient Cyber-Physical Systems using an Automated Attack Generative Model](https://raslab.netlify.app/publication/adrcpsaag/)
- [Resilient Observer Design for Cyber-Physical Systems with Data-Driven Measurement Pruning](https://raslab.netlify.app/publication/rodcpsddmp/)

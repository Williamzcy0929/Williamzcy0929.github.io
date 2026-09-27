---
title: PaperEval
deliverable_url: https://github.com/Williamzcy0929/PaperEval
description: Reproducible data collection and LLM workflows for peer-review analysis.
category: Methods & Research Infrastructure
layout: page
importance: 4
featured: false
period: March – September 2025
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**March – September 2025**

I built data pipelines and LLM-based workflows for acceptance prediction, manuscript assessment, and review-response evaluation.

## My Contributions

- Built Selenium and asynchronous OpenReview pipelines with JSON storage and resumable checkpoints for papers, reviews, scores, author responses, and metadata; extracted author contact information from PDFs with PyMuPDF.
- Fine-tuned GPT-4o for acceptance prediction with progressively richer inputs: paper metadata, reviewer scores, and review comments. Implemented training-data preparation and classification evaluation.
- Developed agent workflows for manuscript and figure assessment, review-response scoring, and response generation; evaluated generated responses against replies from accepted and rejected submissions.
- Designed a bounded Gaussian-noise mapping from acceptance levels to continuous constructiveness targets.

**Supervisor:** Prof. Jie Ding, University of Minnesota.

[View code on GitHub](https://github.com/Williamzcy0929/PaperEval)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

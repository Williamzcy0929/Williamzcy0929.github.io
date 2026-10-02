---
title: "PaperEval"
description: "Reproducible data collection and LLM workflows for peer-review analysis."
category: "Methods & Research Infrastructure"
importance: 4
featured: false
period: "March – September 2025"
layout: "page"
deliverable_url: "https://github.com/Williamzcy0929/PaperEval"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**March – September 2025**

I built data pipelines and LLM-based workflows for acceptance prediction, manuscript assessment, and review-response evaluation.

## My Contributions

- Built Selenium and asynchronous data-collection pipelines for major machine-learning conferences on OpenReview, storing papers, reviews, scores, author responses, and metadata in JSON with resumable checkpoints.
- Extracted author contact information from conference PDFs with PyMuPDF to enrich OpenReview metadata.
- Fine-tuned GPT-4o for acceptance prediction using progressively richer inputs: paper metadata, reviewer scores, and review comments. Implemented training-data preparation and classification evaluation workflows.
- Developed LLM-based agent workflows for manuscript and figure assessment, review-response scoring, and response generation. Evaluated generated responses against author replies from accepted and rejected submissions.
- Designed a bounded Gaussian-noise mapping to convert acceptance levels into continuous constructiveness targets.

**Supervision:** Prof. Jie Ding, University of Minnesota.

[Software](https://github.com/Williamzcy0929/PaperEval)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

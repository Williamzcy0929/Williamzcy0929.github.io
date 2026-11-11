---
title: "PaperEval"
description: "OpenReview pipelines, manuscript-assessment agents, and fine-tuned models for acceptance prediction and author-response grading."
category: "Methods & Research Infrastructure"
importance: 4
featured: false
period: "March – September 2025"
layout: "page"
deliverable_url: "https://github.com/Williamzcy0929/PaperEval"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**March – September 2025 · School of Statistics, University of Minnesota, Twin Cities**

I built OpenReview data pipelines, fine-tuned acceptance-prediction and response-grading models, and used the fine-tuned grader to evaluate generated author responses.

## My Contributions

- Built resumable OpenReview pipelines using Selenium and asynchronous requests, with structured JSON storage for papers, reviews, scores, and responses. Extracted author contact information from PDFs with PyMuPDF to enrich submission metadata.
- Prepared training data and fine-tuned GPT-4o for paper acceptance prediction. Evaluated predictions using progressively richer inputs comprising paper metadata, reviewer scores, and review text.
- Developed LLM-based agents to assess figures and tables in the context of full manuscripts and suggest improvements to clarity, readability, and presentation.
- Fine-tuned GPT-4o mini as an LLM-based grader to score and compare author responses. Constructed proxy scoring targets from acceptance levels using bounded Gaussian noise.
- Trained a reply-generation model and used the fine-tuned grader to compare generated responses with author replies from accepted and rejected submissions.

**Supervision:** Prof. Jie Ding, University of Minnesota.

[Software](https://github.com/Williamzcy0929/PaperEval)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

---
layout: page
title: Med2State
description: Structured patient-state representations from incomplete multimodal health records.
category: Biomedical AI
importance: 3
featured: true
period: November 2025 – present
status: Ongoing methodological research
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**November 2025 – present · Duke University School of Medicine**

I am developing **Med2State**, a framework for learning structured patient-state representations from available multimodal clinical evidence and longitudinal history. My goal is to build reusable representations that retain clinically relevant information even when some input sources are missing.

## Current Research Direction

- **Configurable evidence encoders.** Designing interfaces for demographics, vital signs, structured EHR events, text, and images, so the framework can use the sources available for each patient and time point.
- **Structured state representations.** Organizing the output into three semantic channels: **DX** for disease-, symptom-, and abnormality-related information; **PROC** for procedure and examination states; and **TREAT** for treatment and medication exposure. Each channel can draw on multiple input sources and relevant history.
- **Learning from incomplete evidence.** Investigating training objectives that combine partial-evidence learning with longitudinal context, while keeping future information out of the current representation.
- **Evaluating what the representation preserves.** Planning concept-readout, similar-state retrieval, and longitudinal analysis experiments to assess semantic content, missing-input behavior, and the value of historical evidence.

The proposed output is a `3 × d` tensor at each state time point, or a `T × 3 × d` sequence across time. The three rows are semantic channels; the columns are learned latent features. Clinical meaning and downstream usefulness require validation through readouts and evaluation. The representation is conditioned on available evidence and is not itself a confirmed diagnosis or a treatment recommendation.

## Implementation Foundation

The earlier note-aware prototype extended Med2Vec with time-by-aspect-by-code patient histories and demographic covariates. I encoded notes with BioClinicalBERT, aligned visit-level note embeddings with structured EHR events, and designed multi-head cross-attention to condition structured embeddings on notes. I implemented the model in PyTorch with Med2Vec-compatible inputs and outputs and tested components through ablation.

Med2State extends this line of work toward a more general framework for evidence-conditioned patient states. The current design and planned evaluations are ongoing research.

**Supervisor:** Prof. Chuan Hong, Duke University.

Earlier prototype: [GitHub](https://github.com/Williamzcy0929/Med2Vec_Plus) · [Hugging Face](https://huggingface.co/Williamzcy0929/Med2Vec_Plus)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

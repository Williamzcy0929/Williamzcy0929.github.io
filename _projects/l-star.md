---
title: L-STAR
description: Visual LLM-guided consensus spatial domain detection.
category: Biomedical AI
layout: page
importance: 1
featured: true
period: September 2025 – present
status: Accepted in principle at Nature Communications
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**September 2025 – present**

_Accepted in principle at Nature Communications._

**Changyue Zhao and Zhicheng Ji.** Visual LLM-guided consensus spatial domain detection with L-STAR.

I developed a workflow that uses visual LLM comparisons to select spatial domain detection methods and combine their clusterings into a consensus tissue partition.

## My Contributions

- Built structured prompts, repeated comparisons of spatial maps and optional histology, JSON logs, and win-rate-based method selection.
- Implemented consensus clustering with co-assignment matrices and average linkage, plus an all-wise comparison mode that aggregates repeated rankings with one LLM call per repeat.
- Designed experiments across six spatial transcriptomics datasets to separate the effects of method selection and clustering aggregation, including ensemble-size, alternative-LLM, and fixed-method baselines.
- Built marker-gene-based annotation with spot- and cell-level labels and an Unknown option; evaluated agreement with manual annotations using BioLORD-2023 embeddings and within-dataset permutation tests.
- Audited sensitivity to color palettes, presentation order, and redundant candidates through ranking agreement, selected-method overlap, and clustering stability.

**Supervisor:** Prof. Zhicheng Ji, Duke University.

[Read the preprint on bioRxiv](https://www.biorxiv.org/content/10.64898/2026.08.25.747158v1.abstract) · [View code on GitHub](https://github.com/Williamzcy0929/L-STAR)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

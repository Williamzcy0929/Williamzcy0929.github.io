---
title: "L-STAR"
description: "Visual LLM-guided consensus spatial domain detection."
category: "Biomedical AI"
importance: 1
featured: true
period: "September 2025 – present"
layout: "page"
status: "First-author manuscript accepted in principle at Nature Communications"
deliverable_url: "https://www.biorxiv.org/content/10.64898/2026.08.25.747158v1.abstract"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**September 2025 – present**

Changyue Zhao and Zhicheng Ji. Visual LLM-guided consensus spatial domain detection with L-STAR.

_First-author manuscript accepted in principle at Nature Communications._

I developed a workflow that uses visual LLM comparisons to select spatial domain detection methods and combine their clusterings into a consensus tissue partition.

## My Contributions

- Developed the L-STAR visual LLM workflow for spatial domain detection, with structured prompts, repeated comparisons of spatial maps and optional histology, JSON logs, and win-rate-based method selection.
- Implemented consensus clustering with co-assignment matrices and average linkage. Added an all-wise comparison mode that aggregates repeated rankings to select ensemble members with one LLM call per repeat.
- Designed comparative experiments across six spatial transcriptomics datasets to examine ensemble size, alternative LLMs, and fixed-method consensus baselines, separating the roles of method selection and clustering aggregation.
- Built marker-gene-based domain annotation with spot- and cell-level labels and an Unknown option. Evaluated agreement with manual annotations using BioLORD-2023 embeddings and within-dataset permutation tests.
- Audited sensitivity to color palettes, presentation order, and redundant candidate methods by examining ranking agreement, selected-method overlap, and clustering stability through repeated runs and controlled perturbations.

**Supervision:** Prof. Zhicheng Ji, Duke University.

[Preprint](https://www.biorxiv.org/content/10.64898/2026.08.25.747158v1.abstract) · [Software](https://github.com/Williamzcy0929/L-STAR)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

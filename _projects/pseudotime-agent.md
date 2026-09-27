---
title: LLM-Guided Pseudotime Analysis
description: Evidence-guided agents for cell-state trajectories and spatial pseudotime.
category: Biomedical AI
layout: page
importance: 2
featured: true
period: January 2026 – present
status: Manuscript in preparation
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**January 2026 – present**

_Manuscript in preparation._

I developed pseudotime-agent, an end-to-end Python package that coordinates R/Seurat analysis and LLM inference through LangGraph, from evidence generation to per-cell pseudotime estimation.

## My Contributions

- Designed parallel UMAP and t-SNE annotation branches, concurrent lineage-family adjudication, and cross-embedding trajectory fusion, using marker-gene and graph evidence to review uncertain relationships.
- Extended the agent with spatial trajectory proposal, relation adjudication, ordering review, and comparison with nonspatial trajectories by combining tissue adjacency and molecular evidence.
- Implemented expression-weighted shortest-path pseudotime for spatially separate instances of a shared process, with synthetic negative controls and perturbation tests for spatial dependence and ordering stability.
- Added JSON schema validation, corrective LLM retries, resumable execution, provenance logging, expert-supplied annotations, and preprocessed Seurat inputs including scATAC-seq gene-activity data.
- Designed and implemented bPOS, an exact branch-aware metric that jointly evaluates lineage membership and within-lineage ordering using scalable block processing and inclusion-exclusion counting.
- Diagnosed a bug in dyneval-based F1branches evaluation; reimplemented its published Jaccard, recovery, relevance, and harmonic-mean definition over the full cell scope and added diagnostic comparisons.
- Built reproducible comparisons with Monocle 3, Slingshot, and TSCAN and curated gold-standard, silver-standard, and synthetic trajectory benchmarks.

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

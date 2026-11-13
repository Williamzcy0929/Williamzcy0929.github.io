---
title: "TRACE: Trajectory Inference via AI-guided Cross-view Evidence"
description: "LLM-guided trajectory inference for scRNA-seq, scATAC-seq, and spatial transcriptomics with Python, LangGraph, R/Seurat, and Signac."
category: "Biomedical AI"
importance: 1
featured: true
period: "January 2026 – present"
layout: "page"
status: "Manuscript in preparation"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**January 2026 – present · Department of Biostatistics and Bioinformatics, Duke University**

_Manuscript in preparation._

I develop TRACE, an LLM-guided trajectory inference agent and end-to-end Python/LangGraph package for scRNA-seq, scATAC-seq, and spatial transcriptomics analysis.

## My Contributions

- Develop TRACE, an LLM-guided trajectory inference agent that automatically identifies root states and achieves high agreement with reference trajectories across evaluated scRNA-seq, scATAC-seq, and spatial transcriptomics datasets.
- Build `trace`, an end-to-end Python package using LangGraph to coordinate LLM reasoning with R analysis. Integrate Seurat preprocessing, dimensionality reduction, clustering, and marker analysis with Signac gene-activity estimation.
- Design structured prompts and targeted molecular-evidence queries to reconcile UMAP and t-SNE views for cell-type annotation, lineage reconstruction, and root-state selection.
- Develop spatial pseudotime inference using molecular evidence and spatial neighborhood graphs to distinguish repeated local processes. Estimate pseudotime from local root cells while retaining ambiguous assignments and partially resolved trajectories.
- Design `pPOS` to jointly evaluate lineage membership and within-lineage ordering, using blockwise pair counting and inclusion-exclusion to avoid double-counting cell pairs shared across branches.
- Benchmark TRACE against Monocle 3, Slingshot, and TSCAN. Investigate discrepancies in `dyneval`-based `F1branches` evaluation and reimplement the published definition over the full cell set, with diagnostics for cell coverage and branch recovery.

**Supervision:** Prof. Zhicheng Ji, Duke University.

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

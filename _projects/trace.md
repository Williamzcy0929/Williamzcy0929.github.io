---
title: "Trajectory Inference via AI-guided Cross-view Evidence (TRACE)"
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

- Develop TRACE, an LLM-guided trajectory inference agent that achieves high agreement with reference trajectories across evaluated scRNA-seq, scATAC-seq, and spatial transcriptomics datasets while automatically identifying root states from molecular evidence.
- Build trace, an end-to-end Python package using LangGraph to coordinate R/Seurat analysis and LLM reasoning. Use Seurat for normalization, dimensionality reduction, clustering, and marker-gene analysis, and Signac for scATAC-seq preprocessing and gene-activity estimation.
- Design structured prompts and targeted molecular-evidence queries to integrate UMAP and t-SNE views for cell-type annotation, lineage reconstruction, and root identification.
- Develop spatial trajectory inference combining molecular evidence and spatial neighborhood graphs to distinguish repeated local processes. Implement graph-based pseudotime estimation with local root cells, retaining ambiguous assignments and partially resolved trajectories.
- Design pPOS to jointly evaluate lineage membership and within-lineage ordering. Implement blockwise pair counting and inclusion-exclusion to avoid double-counting cell pairs shared across branches.
- Investigate discrepancies in dyneval-based F1branches evaluation. Reimplement the metric according to its published definition over the full cell set, with diagnostics for cell coverage and branch recovery.
- Implement comparative evaluation of TRACE, Monocle 3, Slingshot, and TSCAN using branch membership and within-lineage pseudotime ordering.

**Supervision:** Prof. Zhicheng Ji, Duke University.

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

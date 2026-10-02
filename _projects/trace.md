---
title: "TRACE"
description: "Evidence-guided agents for cell-state trajectories and spatial pseudotime."
category: "Biomedical AI"
importance: 2
featured: true
period: "January 2026 – present"
layout: "page"
status: "Manuscript in preparation"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**January 2026 – present**

_Manuscript in preparation._

I developed TRACE, an end-to-end LangGraph workflow for single-cell and spatial pseudotime analysis, implemented in the pseudotime-agent package.

## My Contributions

- Developed pseudotime-agent, an end-to-end LangGraph package coordinating Python, R/Seurat, and LLM inference for single-cell and spatial pseudotime analysis. Implemented schema validation, corrective retries, provenance tracking, and fingerprint-validated replay with support for expert-supplied inputs.
- Designed parallel UMAP and t-SNE workflows for cell-type annotation, lineage-family adjudication, and cross-embedding trajectory fusion, using assay-aware molecular evidence for scRNA-seq and scATAC-seq inputs.
- Designed LLM-guided spatial process-instance resolution using molecular profiles and tissue topology to distinguish repeated local processes within connected tissue, with explicit cell membership, local seeds, and unresolved assignments.
- Implemented expression-weighted graph pseudotime with instance-level ordering review and partial-trajectory support. Separated molecular lineage hypotheses, physical feasibility, and spatial evidence in auditable execution rules.
- Built an optional completion module with evidence-based assignment review and donor-restricted imputation. Preserved original inference outputs and unresolved multi-instance assignments, keeping graph-derived and imputed values distinct.
- Designed and implemented bPOS, an exact branch-aware pseudotime metric that jointly evaluates lineage membership and within-lineage ordering using scalable block processing and inclusion-exclusion counting.
- Diagnosed a bug in the dyneval-based benchmark evaluation of F1branches. Reimplemented the published Jaccard, recovery, relevance, and harmonic-mean definition over the full cell scope and added diagnostic comparisons.
- Built reproducible comparisons with Monocle 3, Slingshot, and TSCAN. Designed synthetic negative controls, perturbation tests, and staged replay experiments to assess spatial assumptions, instance partitioning, and pseudotime stability.

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

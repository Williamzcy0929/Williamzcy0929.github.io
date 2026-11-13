---
title: "L-STAR: Visual LLM-Guided Spatial Domain Detection"
description: "Visual LLM-guided consensus spatial domain detection and the lstar Python package for method selection, consensus clustering, and domain annotation."
category: "Biomedical AI"
importance: 3
featured: true
period: "September 2025 – October 2026"
layout: "page"
status: "Published in Nature Communications (2026)"
deliverable_url: "https://www.nature.com/articles/s41467-026-78923-w"
---

<link rel="stylesheet" href="{{ '/assets/css/william.css' | relative_url }}">

**September 2025 – October 2026 · Department of Biostatistics and Bioinformatics, Duke University**

Zhao, C., and Ji, Z. (2026). Visual LLM-guided consensus spatial domain detection with L-STAR. Nature Communications. doi:10.1038/s41467-026-78923-w.

_Published in Nature Communications (2026)._

I developed L-STAR and its Python package `lstar` for visual LLM-guided method selection, consensus spatial domain detection, and marker-guided domain annotation.

## My Contributions

- Developed L-STAR, a visual LLM-guided spatial domain detection framework that achieved the highest average normalized ARI across six spatial transcriptomics datasets, outperforming individual methods and fixed-method consensus.
- Built `lstar`, a Python package integrating spatial map visualization, LLM-guided method selection, consensus clustering, and biological domain annotation with Scanpy-based marker analysis.
- Designed structured prompts for repeated pairwise comparison of domain maps using tissue context and optional histology. Implemented win-rate ranking and consensus clustering in R using co-assignment matrices.
- Processed study datasets with Seurat and SpatialExperiment and developed marker-guided domain annotation, distinguishing tissue regions from cell types by sampling level and retaining `Unknown` for insufficient evidence. Evaluated annotation agreement using BioLORD-2023 embeddings and within-dataset permutation tests.
- Assessed sensitivity to ensemble size, LLM choice, color palettes, and presentation order, and quantified redundancy among selected methods.

**Supervision:** Prof. Zhicheng Ji, Duke University.

[Software](https://github.com/Williamzcy0929/L-STAR)

[Publication](https://www.nature.com/articles/s41467-026-78923-w) · [DOI](https://doi.org/10.1038/s41467-026-78923-w)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

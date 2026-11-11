---
title: "L-STAR"
description: "Visual LLM-guided consensus spatial domain detection with Python LLM workflows and consensus clustering in R."
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

I developed L-STAR, combining Python LLM workflows for spatial-domain method selection with consensus clustering in R and spatial expression analysis using Seurat and SpatialExperiment.

## My Contributions

- Developed L-STAR, an LLM-guided spatial domain detection framework that achieved the highest average normalized ARI across evaluation datasets, outperforming individual methods and fixed-method consensus.
- Designed structured prompts and implemented Python workflows to compare candidate domain maps using tissue context and optional histology.
- Implemented repeated pairwise comparisons and win-rate ranking for method selection. Combined selected domain assignments through co-assignment matrices and consensus clustering in R.
- Processed spatial expression data with Seurat and SpatialExperiment and built marker-guided domain annotation. Distinguished tissue regions from cell types by sampling level, retaining Unknown for insufficient evidence. Evaluated agreement using BioLORD-2023 embeddings and within-dataset permutation tests.
- Benchmarked L-STAR across six spatial transcriptomics datasets against individual methods and fixed-method consensus. Assessed sensitivity to ensemble size, LLM choice, color palettes, and presentation order, and quantified selected-method redundancy.

**Supervision:** Prof. Zhicheng Ji, Duke University.

[Software](https://github.com/Williamzcy0929/L-STAR)

[Publication](https://www.nature.com/articles/s41467-026-78923-w) · [DOI](https://doi.org/10.1038/s41467-026-78923-w)

[← All research]({{ "/projects/" | relative_url }})

<script src="{{ '/assets/js/typography.js' | relative_url }}" defer></script>

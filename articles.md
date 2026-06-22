---
layout: default
title: Selected Work
permalink: /research/articles/
---

# Selected Work

<p class="work-intro">
My research sits at the intersection of causal inference, machine learning, and global development. Rather than list everything, this page highlights selected work grouped by theme, each with a visualization that captures the core idea. For the complete and always-current list of publications, see my <a href="https://scholar.google.se/citations?user=iCDKhFsAAAAJ&amp;hl=sv" target="_blank" rel="noopener">Google Scholar profile</a>.
</p>

<section class="work-theme">
  <figure>
    <img src="{{ '/assets/images/research/imf-child-health.svg' | relative_url }}" alt="Flow diagram: IMF program to austerity conditions to weaker state capacity to lower child health">
    <figcaption>How IMF programs reach children: austerity conditions constrain public spending and weaken state capacity, with downstream effects on child health.</figcaption>
  </figure>
  <h2>The IMF, austerity, and children</h2>
  <p class="theme-blurb">Loan programs from the International Monetary Fund reshape the budgets of borrowing governments, often through austerity. In a series of studies I trace how these conditions ripple down to the health and welfare of children, and ask what a fairer set of policies would look like.</p>
  <ul class="featured-papers">
    <li>Daoud, Nosrati, Reinsberg, Kentikelenis, Stubbs &amp; King, &ldquo;Impact of IMF programs on child health,&rdquo; <span class="paper-venue">PNAS</span>, 2017. <a class="doi-link" href="https://doi.org/10.1073/pnas.1617353114" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Daoud &amp; Reinsberg, &ldquo;Structural adjustment, state capacity, and child health: Evidence from IMF programs,&rdquo; <span class="paper-venue">International Journal of Epidemiology</span>, 2018.</li>
    <li>Daoud, Reinsberg, Kentikelenis, Stubbs &amp; King, &ldquo;The IMF&rsquo;s Interventions in Food and Agriculture,&rdquo; <span class="paper-venue">Food Policy</span>, 2019. <a class="doi-link" href="https://doi.org/10.1016/j.foodpol.2019.01.005" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Daoud, Herlitz &amp; Subramanian, &ldquo;IMF fairness: Calibrating the policies of the IMF based on distributive justice,&rdquo; <span class="paper-venue">World Development</span>, 2022. <a class="doi-link" href="https://doi.org/10.1016/j.worlddev.2022.105924" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
  </ul>
</section>

<section class="work-theme">
  <figure>
    <img src="{{ '/assets/images/research/eo-poverty.svg' | relative_url }}" alt="Schematic: satellite imagery passed through a deep learning model produces an estimated wealth heatmap">
    <figcaption>From pixels to poverty: deep learning models translate satellite imagery into high-resolution estimates of living standards. Illustrative schematic.</figcaption>
  </figure>
  <h2>Seeing poverty from space</h2>
  <p class="theme-blurb">Surveys and censuses are expensive and quickly go out of date. With co-authors I train deep learning models to read satellite imagery and estimate living standards at fine spatial resolution, building proxies that extend social measurement to places and times where survey data are missing.</p>
  <ul class="featured-papers">
    <li>Daoud, Jordan, Sharma, Johansson, Dubhashi, Paul &amp; Banerjee, &ldquo;Using satellite images and deep learning to measure health and living standards in India,&rdquo; <span class="paper-venue">Social Indicators Research</span>, 2023. <a class="doi-link" href="https://doi.org/10.1007/s11205-023-03112-x" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Kakooei &amp; Daoud, &ldquo;Increasing the confidence of predictive uncertainty: earth observations and deep learning for poverty estimation,&rdquo; <span class="paper-venue">IEEE Transactions on Geoscience and Remote Sensing</span>, 2024. <a class="doi-link" href="https://doi.org/10.1109/TGRS.2024.3392605" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Pettersson, Kakooei, Ortheden, Johansson &amp; Daoud, &ldquo;Time series of satellite imagery improve deep learning estimates of neighborhood-level poverty in Africa,&rdquo; <span class="paper-venue">IJCAI</span>, 2023.</li>
  </ul>
</section>

<section class="work-theme">
  <figure>
    <img src="{{ '/assets/images/research/causal-dag.svg' | relative_url }}" alt="Directed acyclic graph with treatment A, mediator M, and outcomes Y-i and Y-j linked across units">
    <figcaption>A causal graph of the kind these methods reason over: a treatment A acts through a mediator M on outcomes, which may themselves be linked across units.</figcaption>
  </figure>
  <h2>Causal inference with machine learning</h2>
  <p class="theme-blurb">Much of my methodological work asks how machine learning can serve causal questions rather than mere prediction. These papers develop tools for encoding causal assumptions as graphs, estimating heterogeneous effects, and clarifying when learned models can and cannot support causal claims.</p>
  <ul class="featured-papers">
    <li>Balgi, Daoud, Pe&ntilde;a, Wodtke &amp; Zhou, &ldquo;Deep Learning with DAGs,&rdquo; <span class="paper-venue">Sociological Methods &amp; Research</span>, 2025.</li>
    <li>Daoud &amp; Dubhashi, &ldquo;Statistical Modeling: The Three Cultures,&rdquo; <span class="paper-venue">Harvard Data Science Review</span>, 2023. <a class="doi-link" href="https://doi.org/10.1162/99608f92.89f6fe66" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Jerzak, Johansson &amp; Daoud, &ldquo;Image-based Treatment Effect Heterogeneity,&rdquo; <span class="paper-venue">CLeaR</span>, 2023.</li>
    <li>Daoud, Jerzak &amp; Johansson, &ldquo;Conceptualizing Treatment Leakage in Text-based Causal Inference,&rdquo; <span class="paper-venue">NAACL</span>, 2022.</li>
  </ul>
</section>

<section class="work-theme">
  <figure>
    <img src="{{ '/assets/images/research/heterogeneity.svg' | relative_url }}" alt="Distribution of individual treatment effects with a dashed line at the average, spanning harmed and helped regions">
    <figcaption>The average hides the story: a distribution of individual treatment effects, where the mean (dashed) masks people who are helped, unaffected, or harmed. Illustrative.</figcaption>
  </figure>
  <h2>When averages lie: disasters, austerity, and heterogeneous effects</h2>
  <p class="theme-blurb">Average treatment effects can hide as much as they reveal. Using machine learning to estimate individual-level effects, these studies show how the consequences of disasters and austerity fall unevenly across people, and how to recover that heterogeneity from data.</p>
  <ul class="featured-papers">
    <li>Shiba, Daoud, Hikichi, Yazawa, Aida, Kondo &amp; Kawachi, &ldquo;Heterogeneity in cognitive decline after a major disaster: a natural experiment study,&rdquo; <span class="paper-venue">Science Advances</span>, 2021. <a class="doi-link" href="https://doi.org/10.1126/sciadv.abj2610" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Daoud &amp; Johansson, &ldquo;The Impact of Austerity on Children: Uncovering effect heterogeneity in low- and middle-income countries,&rdquo; <span class="paper-venue">Social Science Research</span>, 2024.</li>
    <li>Shiba et al., &ldquo;Long-term Associations Between Disaster-related Home Loss and Health and Wellbeing of Older Survivors,&rdquo; <span class="paper-venue">Environmental Health Perspectives</span>, 2022. <a class="doi-link" href="https://doi.org/10.1289/EHP10903" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
  </ul>
</section>

<section class="work-theme">
  <figure>
    <img src="{{ '/assets/images/research/scarcity-sufficiency.svg' | relative_url }}" alt="A horizontal axis with scarcity, sufficiency, and abundance as three relations between wants and resources">
    <figcaption>Scarcity, sufficiency, and abundance as three relations between human wants and available resources.</figcaption>
  </figure>
  <h2>Scarcity, abundance, and sufficiency</h2>
  <p class="theme-blurb">Before the empirical work, a conceptual question motivated me. What do we actually mean by scarcity? These papers reconstruct the idea across economics and sociology, and connect it to abundance and sufficiency as alternative ways of relating human wants to available resources.</p>
  <ul class="featured-papers">
    <li>Daoud, &ldquo;Unifying studies of Scarcity, Abundance, and Sufficiency,&rdquo; <span class="paper-venue">Ecological Economics</span>, 2018. <a class="doi-link" href="https://doi.org/10.1016/j.ecolecon.2018.01.019" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Daoud, &ldquo;A Framework for Synthesizing the Malthusian and Senian approaches: the 1943 Bengal Famine,&rdquo; <span class="paper-venue">Cambridge Journal of Economics</span>, 2017. <a class="doi-link" href="https://doi.org/10.1093/cje/bew071" target="_blank" rel="noopener">DOI&nbsp;&rarr;</a></li>
    <li>Daoud, &ldquo;(Quasi)Scarcity and Global Hunger: A Sociological Critique of the Scarcity Postulate,&rdquo; <span class="paper-venue">Journal of Critical Realism</span>, 2007.</li>
  </ul>
</section>

<section class="scholar-cta">
  <p>This is a curated selection. For the full and continuously updated list of publications, including working papers and conference proceedings, visit my <a href="https://scholar.google.se/citations?user=iCDKhFsAAAAJ&amp;hl=sv" target="_blank" rel="noopener">Google Scholar profile</a>.</p>
  <p><a class="btn btn-secondary" href="{{ '/research/' | relative_url }}">&larr; Back to Research</a></p>
</section>

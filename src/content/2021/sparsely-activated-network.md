---
title: "Sparsely Activated Network"
date: "2021-01-18"
condensed: ""
type: notes
published: true
displaydate: "January 18, 2021"
tags: ["Research", "AI", "Technology"]
---
<br/>

A deep learning network contains multiple learning nodes separated as layers and interconnected both within and across different layers to create a network. Typically deep learning models are trained by activating all nodes for each training input. Another way to train the network is to sparsely activate the network for each input with the help of a Switch Transformer. This would mean that only a subset of all the nodes would be active and the subset would vary depending on the input. Sparsely activated networks would have a constant computational cost despite the size of the whole network. The key feature of sparse activation is that it enable the different parts of the network to specialize in different kinds of inputs and problems. More like how the brain is. Our brain have different regions that are responsible for different cognitive functions. However, this also brings new challenges like load balancing. To avoid over training of some parts of the network and vice-versa. 

<br>

Google has <span class="inline-link">[trained](https://arxiv.org/pdf/2101.03961.pdf)</span> language models consisting of 1.6 Trillion parameters using this technique. The nearest model in this area was that of GPT-3, which consisted of 175 Billion parameters. This gives an idea of the leverage these models have.


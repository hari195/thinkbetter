---
title: "Federated Learning"
date: "2020-10-25"
condensed: "Learn by collaboration"
type: notes
published: true
displaydate: "October 25, 2020"
tags: ["Technology", "AI", "Research"]
---
<br/>

<span class="inline-link">[Federated Learning](https://ai.googleblog.com/2017/04/federated-learning-collaborative.html)</span> is a machine learning technique that trains algorithms with separate local samples and without exchanging them. This enables training of an algorithm using multiple devices. This is a huge plus from a data privacy and data security point of view. The basic principle is that the algorithm is trained on the locally available data and the resulting model parameters of the algorithm are then exchanged to other instances. The "other instances" can be either centralized or decentralized. Determining data characteristics from just the parameters is close to impossible. Splitting the datasets into smaller local sets counteract the bias that maybe only seen in some data sets. Smartphones use this form of learning where a central model is retrieved from the cloud. The local data produced by the smartphone (for example, usage statistics, keyboard strokes etc.) is used to update the model. The updated model is then sent back to the cloud over secure channels. This shields the raw user data from the external cloud infrastructure. 

<br>

A major field where this can be used is in the <span class="inline-link">[digital health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7490367/)</span> vertical. Starting from all the data that is harvested from wearables of consumers to data from hospitals and insurances. It fits into the criteria of having a very dispersed data and can still fulfill legislation like GDPR.

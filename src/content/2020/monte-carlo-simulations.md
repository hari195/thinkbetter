---
title: "Monte Carlo Simulations"
date: "2020-11-07"
condensed: "Simulating probability."
type: notes
published: true
displaydate: "November 7, 2020"
tags: ["Systems", "Models", "Mathematics"]
---
<br/>

Monte Carlo simulations are used to determine the probability of an outcome from a model by using random variables. When the model contains a variable that is uncertain, Monte Carlo simulation takes that variable and assigns it a random value. Based on repeated runs of the simulation the end result is than averaged to provide an estimate. In many cases, this has proven to be more accurate than "gut feeling" and other soft methods. Since this model can output different outputs for the same input due to the random variable interference, it is a <span class="inline-link">[Stochastic Process](http://thinkbetter.blog/content/2020/stochastic-process/)</span>. This method works when the model contains many coupled variables. The repeated simulation of the model can uncover patterns with varying inputs for the random variable.

<br>

Of course, a model can only predict and account for whatever is built into it. If there are inefficiencies and non-linearities that were approximated to simplify the model, that will be reflected in the outcome as well. Monte Carlo simulations have applications in a wide range of fields including <span class="inline-link">[finance](http://thinkbetter.blog/tags/finance/)</span>, statistical physics, oil exploration etc.
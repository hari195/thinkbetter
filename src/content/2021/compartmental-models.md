---
title: "Compartmental Models"
date: "2021-01-09"
condensed: ""
type: notes
published: true
displaydate: "January 9, 2021"
tags: ["Models", "Systems", "Mental Models"]
---
<br/>

Compartmental models is a type of mathematical model that tries to simulate events and systems by breaking them into compartments. An example of a compartmental model is the material flow in a production plant. A typical production plant would have stations that are sequentially arranged along which the product is built. Each station would have one or many feeder lines feeding different components and tools. Such a model could then be used to optimize the flow of material and effort along the production line. 

<br>

A system needs to be broken down into various compartments first. The relations between these compartments have then to be realized. This is the tricky part. A system can be broken down in multiple ways. This has two implications down the line. Different decomposed versions of the same system can expose different parameters of interest. Since these compartments are dependent on each other, the same parameter can have different behaviour on the same system just because it was decomposed and modelled differently.

<br>

Compartmental models are used in the field of epidemiology, primarily to simplify the mathematical modelling of infectious disease. A simple model uses "susceptible", "infectious" and "recovered" as the 3 compartments to label the population and study the behaviour. A more complex version of the model uses an additional compartment "carrier" as well to model the behaviour of a part of the population that are not suffering from symptoms but is a carrier.

<br>

<figure>
    <div class="flex items-center">
        <img class="mx-auto mb-4 md:w-6/12  " height="auto" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/SIR_with_carrier_model.png"/>
    </div>
</figure>



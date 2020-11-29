---
title: "Data Architectures"
date: "2020-11-01"
condensed: "How to store all the data?"
type: notes
published: true
displaydate: "November 1, 2020"
tags: ["Data", "Internet", "Technology"]
---
<br/>

A data architecture lays out the framework, models and rules under which the data will be stored and managed. This can be both a physical architecture like how the data will be stored in different physical servers and backends. It can also be the logical architecture, how the data has to be stored in different databases and what attributes it should have. The choice of the data architecture depends on the type of data and the application it's being used for. One tricky part is to determine the right architecture is finding a logical abstraction for different kinds of data. The common abstraction example is the layer based architecture for SW that is running on dedicated HW like Android OS on a smartphone. The data architecture also depends on how the people working on this data are organised. The teams that need to use the data and maintain it for various business operations usually have different ways of working, tools, and use-cases. By virtue of how they are organised, there would also exist an abstract data pipeline and a sequence of operations and process. This would then put constraints on the data architecture. Different parts of the data require different exposure to the outside world. Some of it is probably used for internal purposes and might be related to users and must be hidden from the public view. While data the is required to render a product page will be more outward facing.
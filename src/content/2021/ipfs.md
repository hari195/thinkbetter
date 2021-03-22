---
title: "InterPlanetary File System"
date: "2021-03-22"
condensed: ""
type: notes
published: true
displaydate: "March 22, 2021"
tags: ["Crypto", "Technology", "Internet"]
---
<br>

<span class="inline-link">[InterPlanetary File System(IPFS)](https://ipfs.io/)</span> is a protocol that can be used to store and share data in a peer-to-peer system. Similar to HTTP, the protocol on the internet to share and store information. One problem with HTTP is that the computer requesting for a webpage has to directly establish connection to the server storing it. Therefore transactions are serial and singled-out. 

<br>

IPFS on the other hand can download a file from the network from multiple sources. IPFS creates a a cryptographic hash for all the blocks within a file. These blocks can be stored in multiple and different locations. IPFS uses a decentralized name server IPNS (equivalent to DNS for HTTP) to map human readable filenames to these cryptographic hashes. This allows a the requesting node to download several pieces of the file simultaneously from different locations. 

<br>

IPFS essentially decouples the content from the addressing on a network. This would allow the requesting node to download a file from the nearest possible location instead of being bottlenecked to one location.
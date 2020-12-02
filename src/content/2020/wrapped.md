---
title: "Spotify Wrapped"
date: "2020-12-02"
condensed: ""
type: notes
published: true
displaydate: "December 2, 2020"
tags: ["Internet", "Data", "Software"]
---
<br/>

Wrapped is Spotify's year end marketing campaign. This year's campaign was unveiled yesterday. Spotify collects and distills a year of your listening pattern and history to present the top artists, genres etc. for the year. As per Spotify's Q1 report, they have about 286 million (MAU). That is a lot of data to process behind the scenes. This year's Wrapped has some new <span class="inline-link">[features.](https://newsroom.spotify.com/2020-12-01/6-new-features-to-unwrap-in-your-spotify-2020-wrapped/)</span>

<br>

1. In-app quizzes where you can predict your top artist, podcast.
2. Story of Your 2020 with your Top Song. A recollection of your most listened song of the year.
3. Deep dive into podcast listening
4. New badges. Popular playlists can earn you a "Tastemaker". Identifying a song before it becomes a hit makes you a Pioneer". Collecting and curating songs to make playlists make you a "Collector".
5. Personalized playlist with your most loved songs and the ones you missed.
6. Now you can see global listening trends <span class="inline-link">[here.](https://www.spotify.com/ca-en/Wrapped/)</span> This time open for non-users as well.

<br>

The Wrapped involves both distilling data from each user but also presenting it in a meaningful way. An <span class="inline-link">[article](https://engineering.atspotify.com/2020/02/18/spotify-unwrapped-how-we-brought-you-a-decade-of-data/)</span> from last year gives a bit of insight on what happens in the background. Last year's wrapped had an even larger scope where it wrapped the whole decade instead of just one year. They use a data lake backed in <span class="inline-link">[Google Bigtable](https://cloud.google.com/bigtable)</span> which is optimized to aggregate data over an arbitrary period of time. Even though the amount of data was much larger, Spotify was able to reuse previously executed jobs. Each user had a row in the Bigtable with each column having result from each year. Decoupling the data processes improves the overall efficiency. User summaries broken into smaller data stories and workflows allowed for a more flexible system. Insights like songs that you might have missed would need a recommendation system that uses these data stories as inputs.
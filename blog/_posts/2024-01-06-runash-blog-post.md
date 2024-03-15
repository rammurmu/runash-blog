---
title: "Live Streaming"
date: 2024-01-06
author: Posted by 🙋 @rammurmu
---

# ![blob-0040](https://user-images.githubusercontent.com/61916324/132724592-e5bef25e-36d9-4da8-bbc6-84a24183c8e2.png)Live Stream

What is live streaming? | How live streaming works?<br>
Live streaming is the delivery of video or audio data to an audience over the Internet as the data is created.

What is live streaming?<br>
Streaming is the method of data transmission used when someone watches video on the Internet. It is a way to deliver a video file a little bit at a time, often from a remote storage location. By transmitting a few seconds of the file at a time over the internet, client devices do not have to download the entire video before starting to play it.


Live streaming is when the streamed video is sent over the Internet in real time, without first being recorded and stored. Today, TV broadcasts, video game streams, and social media video can all be live-streamed.


Think about the difference between regular streaming and live streaming as the difference between an actor reciting a memorized monologue and improvising a speech. In the former, the content is created beforehand, stored, and then relayed to the audience. In the latter, the audience receives the content in the same moment that the actor creates it – just like in live streaming.


The term live streaming usually refers to broadcast live streams: one-to-many connections that go out to multiple users at once. Videoconferencing technologies like Skype, FaceTime, and Google Hangouts Meet work on real-time communication (RTC) protocols rather than the protocols used by one-to-many live stream broadcasts.


How does live streaming work on a technical level?<br>
These are the main steps that take place behind the scenes in a live stream:


- Compression
- Encoding
- Segmentation
- Content delivery network (CDN) distribution
- CDN caching
- Decoding
- Video playback
- Video capture

Live streaming starts with raw video data: the visual information captured by a camera. Within the computing device to which the camera is attached, this visual information is represented as digital data – in other words, 1s and 0s at the deepest level.


Compression and encoding<br>
Next, the segmented video data is compressed and encoded. The data is compressed by removing redundant visual information. For example, if the first frame of the video displays a person talking against a grey background, the grey background does not need to render for any subsequent frames that have the same background.


Think of video compression as being like adding a piece of new furniture to a living room. It is not necessary to buy entirely new furniture each time a new chair or side table is added. Instead it is possible to keep the room layout roughly the same and change out just one piece at a time, occasionally making larger rearrangements as necessary. Similarly, not every frame of a video stream needs to be rendered in total – just the parts that change from frame to frame, such as the movement of a person's mouth.


"Encoding" refers to the process of converting data into a new format. Live streaming video data is encoded into an interpretable digital format that a wide variety of devices recognize. Common video encoding standards include:


H.264
H.265
VP9
AV1
Segmentation
Video includes a lot of digital information, which is why it takes longer to download a video file than to download a short PDF or an image. Because it would not be practical to send all the video data out over the Internet at once, streaming video is divided into smaller segments a few seconds in length.


CDN distribution and caching
Once the live stream has been segmented, compressed, and encoded (all of which only takes a few seconds), it needs to be made available to the dozens or millions of viewers who want to watch it. In order to maintain high quality with minimal latency while serving the stream to multiple viewers in different locations, a CDN should distribute it.


A CDN is a distributed network of servers that cache and serve content on behalf of an origin server. Using a CDN results in faster performance, because user requests no longer have to travel all the way to the origin server but can instead be handled by a nearby CDN server. Handling requests and delivering content in this manner also reduces the origin server’s workload. Finally, CDNs make it possible to efficiently serve content to users around the world because their servers are located all over the world instead of clustered in a single geographic area.


A CDN will also cache – temporarily save – each segment of the live stream, so most viewers will get the live stream from the CDN cache instead of from the origin server. This actually makes the live stream closer to real-time even though the cached data is a few seconds behind, because it cuts down on round-trip time (RTT) to and from the origin server.


Decoding and video playback<br>
The CDN sends the live stream out to all the users who are watching the stream. Each user's device receives, decodes, and decompresses the segmented video data. Finally, a media player on the user's device – either a dedicated app or a video player within the browser – interprets the data as visual information, and the video plays.


An example<br>
Suppose Alice starts a live stream on her smartphone and Bob, who lives on the other side of the country, tunes into the live stream on his smartphone, along with a few dozen more of Alice's friends. Alice starts out the live stream by turning the smartphone camera on herself and saying, "Hello, world!" What needs to happen for that "Hello, world" section of video to reach Bob on the other side of the country, along with all the other people watching the stream?


First, Alice's smartphone will encode and compress that little segment of video. If Alice is filming the live stream in her kitchen, her kitchen wall is recorded as the first frame of the video, and subsequent frames will leave it out since the background doesn't change.


Now the app Alice is using will send the encoded, compressed version of her saying "Hello, world" out to the app's CDN. Fortunately for Bob, one of the CDN servers is just a few miles away from his home, so his smartphone's request for the first segment of the live stream is answered almost immediately. Other live stream viewers may experience more or less latency than Bob depending on their geographic location.


Bob's phone decodes the video segment and reconstructs the compressed data, so that Alice's kitchen wall appears in every frame. And finally, only a few seconds after Alice said "Hello, world" in her kitchen on the other side of the country, her face appears on Bob's smartphone and Bob sees and hears her greeting.


Why is a CDN important for live streaming?<br>
Bandwidth: Any given point on a network can only have so much data pass through at a time; this measurement is known as "bandwidth." If a stream of data reaches a point on the network where the amount of data exceeds capacity, this is called a "choke point" because data delivery is choked off and slowed down. A choke point is similar to the way traffic slowdowns might occur when too many cars attempt to use a single-lane road.


If all viewers of a stream are getting the stream data from its point of origin, then the origin server and its surrounding network infrastructure becomes a choke point and the stream slows down. But if the main burden of stream delivery is moved to a CDN, then the choke point is eliminated.


Global content delivery: Because CDNs are distributed all around the world, they are able to deliver content to a global audience. An origin server in New York cannot effectively serve content to an audience in Milan, and this is especially the case with heavy content like video. However, a CDN can forward and serve content from any point on its network, so that a person in Milan watching a live stream from New York can get the stream from a server in Milan instead of waiting for it to load all the way from New York.


Latency and RTT reduction: Delivering content globally with a CDN reduces latency for live stream viewers by cutting down on RTT (round-trip time). The request-response round trip is shorter both in terms of distance and in terms of time, as a viewer’s request for a live stream no longer has to travel to the original source of the stream, and the streaming data no longer has to travel from the origin, either. This reduces delays and helps keep the live stream closer to "live."


Workload: Replying to user requests for data costs a server some compute power. Replying to many user requests for video data can overwhelm a single server. A CDN utilizes dozens or hundreds of servers that can take much of the workload off the origin server and keep it up and running.


Caching: A CDN caches each video segment of a live stream. The CDN can then deliver the segments from the cache instead of getting the data from the origin server.


Serving a live stream from a cache seems like a contradiction: If the stream is live, how can saving it and delivering it a few seconds later be faster? While it's true that a cached live stream will lag behind real-time, this is still faster than going all the way to the origin server. The round trip would take so long that the stream would fall even further behind. With CDN caching, users experience minimal lag time.





















# ![blob-0040](https://user-images.githubusercontent.com/61916324/132724592-e5bef25e-36d9-4da8-bbc6-84a24183c8e2.png)Live Stream 
[``About``](https://) [``Privacy``](https://) [``Help``](https://) [``FAQ``](https://) [``Contact``](https://) [``Blog``](https://) [``Go Live``](https://) [``Watch Live``](https://)

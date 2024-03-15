---

title: "video CND"

date: 2024-01-08

author: Posted by 🙋 @rammurmu
---



What is a video CDN?
A video content delivery network (CDN) helps deliver streaming video quickly and efficiently to viewers around the world.

Video CDN
Copy article link 

What is a video CDN?
A video CDN is a CDN that has been designed to support video stream delivery. The use of a CDN for streaming video helps a stream reach viewers around the world, minimizes latency and buffering time, and ensures that the stream's source or origin server are not overwhelmed with requests.

While most CDNs are able to cache and deliver video content alongside HTML, images, JavaScript, CSS style sheets, and other web content, video CDNs can be constructed exclusively for streaming video. For instance, Netflix built out their own distributed network called Open Connect to more efficiently deliver their video content.

What is a CDN?
A content delivery network (CDN) is a group of connected servers that cache and deliver content over the Internet. CDNs are spread out all over the world, enabling them to deliver content more efficiently to a wider range of people than an origin server or a single data center can. A CDN caches content whenever a user requests the content from a website that uses that CDN; to "cache" means to temporarily store a file.

Suppose Bob hosts a website, bobisgreat.example.com, on a server in New York City, New York. When Alice in Albany, New York (about 250 kilometers away), visits the website, it loads quickly, since the website content has to travel only 250 kilometers. However, when Carlos tries to load bobisgreat.example.com from his house in Los Angeles, California (about 4,800 kilometers away), he has to wait a lot longer for the website to load.

If Bob uses a CDN service, the CDN can cache his website's content at locations close to both Alice and Carlos. Suppose Bob's CDN caches his website at data centers in Albany and Los Angeles, in addition to New York City. Now both Alice and Carlos hardly have to wait any time at all for bobisgreat.example.com to load in their browsers.

Why use a CDN for streaming video?
Minimizing distance to viewers reduces latency
The same principle described above applies for streaming video. The closer the video content is to the viewer, the faster it will load and play. A CDN is likely to have a server closer to any given viewer than the stream's point of origin.

Origin server is not overwhelmed
Using the many servers of a CDN means that the server where the stream originates will not become overwhelmed with requests for the stream. A group of 200 servers can handle streaming video to thousands of viewers far better than a single server can.

Streaming content does not exceed network bandwidth
A network can have only a certain amount of data pass through at once. This maximum amount is called "bandwidth." If the amount of data passing through a network exceeds its bandwidth, data delivery slows down to a huge degree, just as limiting cars to one lane slows down traffic on a highway. If a stream is delivered from the multiple distributed servers of a CDN, it is less likely that any one network will become overwhelmed with traffic in this way.

How can a stream be cached?
Streaming continuously transmits video files from a server to a client. However, streaming video does not go to a user's device as one continuous file. Rather, streaming video is broken up into smaller segments. Each segment is loaded and put in the correct order by the user's video player.

Each individual video segment can be cached by a CDN, just as an image, an HTML page, or a snippet of JavaScript code can be cached by a CDN. When a user requests a stream, the CDN begins caching the video segments as soon as they arrive from the stream's origin. When the next user requests the same stream, the CDN can deliver those segments from the cache instead, which is much faster.

How does a CDN cache a live stream?
For video-on-demand streaming, in which the video is delivered from storage, caching the video is fairly simple: the CDN requests the stored video from the origin server, the origin server delivers it, and the CDN then caches the video.

In live streaming, there is no stored version of the video ready to go. However, the process is similar. The only difference is that the CDN caches the video segments as they are created in real time, instead of caching a previously created video. The stream is then served to viewers from the cache instead of directly from the stream's origin.

Even though most viewers have to wait a few extra seconds for each segment to be cached, if done efficiently this can actually make the stream closer to "live" than fetching the stream directly from the origin server. Because a CDN is closer to viewers than the origin server, serving the stream from the cache can cut down on round-trip time (RTT) to and from the origin server. In addition, using a CDN reduces the possibility that bandwidth issues will slow down the live stream for viewers.

--- 
layout: page 
title: live
permalink: /live/ 
--- 
# ![blob-0040](https://user-images.githubusercontent.com/61916324/132724592-e5bef25e-36d9-4da8-bbc6-84a24183c8e2.png)
What is streaming? | How video streaming works
Streaming is a method of viewing video or listening to audio content without actually downloading the media files. Streaming performance can be improved, and buffering time reduced, if the owner of the files uses a CDN.

What is streaming?
Streaming Media
The first websites were simple pages of text with maybe an image or two. Today, however, anyone with a fast enough Internet connection can watch high-definition movies or make a video call over the Internet. This is possible because of a technology called streaming.

Streaming is the continuous transmission of audio or video files from a server to a client. In simpler terms, streaming is what happens when consumers watch TV or listen to podcasts on Internet-connected devices. With streaming, the media file being played on the client device is stored remotely, and is transmitted a few seconds at a time over the Internet.

What is the difference between streaming and downloading?
Streaming is real-time, and it's more efficient than downloading media files. If a video file is downloaded, a copy of the entire file is saved onto a device's hard drive, and the video cannot play until the entire file finishes downloading. If it's streamed instead, the browser plays the video without actually copying and saving it. The video loads a little bit at a time instead of the entire file loading at once, and the information that the browser loads is not saved locally.

Think of the difference between a lake and a stream: Both contain water, and a stream may contain just as much water as a lake; the difference is that with a stream, the water is not all in the same place at the same time. A downloaded video file is more like a lake, in that it takes up a lot of hard drive space (and it takes a long time to move a lake). Streaming video is more like a stream or a river, in that the video's data is continuously, rapidly flowing to the user's browser.

How does streaming work?
Just like other data that's sent over the Internet, audio and video data is broken down into data packets. Each packet contains a small piece of the file, and an audio or video player in the browser on the client device takes the flow of data packets and interprets them as video or audio.

Does streaming use the User Datagram Protocol (UDP) or the Transmission Control Protocol (TCP)?
Some streaming methods use UDP, and some use TCP. UDP and TCP are transport protocols, meaning they are used for moving packets of data across networks. Both are used with the Internet Protocol (IP). TCP opens a dedicated connection before transmitting data, and it ensures all data packets arrive in order. Unlike TCP, UDP does neither of these things. As a result, TCP is more reliable, but transmitting data via UDP does not take as long as it does via TCP, although some packets are lost along the way.

If TCP is like a package delivery service that requires the recipient to sign for the package, then UDP is like a delivery service that leaves packages on the front porch without knocking on the door to get a signature. The TCP delivery service loses fewer packages, but the UDP delivery service is faster, because packages can get dropped off even if no one is home to sign for them.

For streaming, in some cases speed is far more important than reliability. For instance, if someone is in a video conference, they would prefer to interact with the other conference attendees in real time than to sit and wait for every bit of data to be delivered. Therefore, a few lost data packets is not a huge concern, and UDP should be used.

In other cases, reliability is more important for streaming. For instance, both HTTP live streaming (HLS) and MPEG-DASH are streaming protocols that use TCP for transport. Many video-on-demand services use TCP.

What is buffering?
Streaming and Buffering
Streaming media players load a few seconds of the stream ahead of time so that the video or audio can continue playing if the connection is briefly interrupted. This is known as buffering. Buffering ensures that videos can play smoothly and continuously. However, over slow connections, or if a network has a great deal of latency, a video can take a long time to buffer.

What factors slow down streaming?
On the network side:
Network latency: A variety of factors impact latency, including where the content that users are trying to access is stored.
Network congestion: If too much data is sent through the network, this can degrade streaming performance.
On the user side:
WiFi problems: Restarting the LAN router, or switching to Ethernet instead of WiFi, can help improve streaming performance.
Slowly performing client devices: To play videos takes a good amount of processing power. If the device streaming the video has a lot of other processes running or is just slow in general, streaming performance can be impacted.
Not enough bandwidth: For streaming video, home networks need about 4 Mbps of bandwidth; for high-definition video, they will likely need more.
How can streaming be made faster?
Streaming is subject to the same kinds of delays and performance degradations as other kinds of web content. Because the streamed content is stored elsewhere, hosting location makes a big difference, as is the case with any type of content accessed over the Internet. If a user in New York is trying to stream from a Netflix server in Los Gatos, the video content will have to cross 3,000 miles in order to reach the user, and the video will have to spend a long time buffering or may not even play at all. For this reason, Netflix and other streaming providers make extensive use of distributed content delivery networks (CDN), which store content in locations around the world that are much closer to users.





# ![blob-0040](https://user-images.githubusercontent.com/61916324/132724592-e5bef25e-36d9-4da8-bbc6-84a24183c8e2.png)

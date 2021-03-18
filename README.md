# SocketIO drawing app

Basic example of how to use socketIO to create simple communication between multiple browser instances.     
Based on [the drawing app](https://github.com/TannerGabriel/DrawingApp) by Gabriel Tanner. See also his guide [Building a Realtime Drawing App Using Socket.IO and p5.js ](https://gabrieltanner.org/blog/realtime-drawing-app)

## Getting started

Start using Node

```bash
# Install dependencies for server
npm install

# Run the server
node server
```

Start using Docker    

```bash
# Building the image
docker build --tag socketiodrawing .

# Run the image in a container
docker run -d -p 3000:3000 socketiodrawing
```

Run the image on a new instance
see also [docker docs getting started](https://docs.docker.com/get-started/)

1. Open your browser to [Play with Docker](https://labs.play-with-docker.com/).
2. Click Login and then select docker from the drop-down list.
3. Connect with your Docker Hub account.
4. Once you’re logged in, click on the ADD NEW INSTANCE option on the left side bar. If you don’t see it, make your browser a little wider. After a few seconds, a terminal window opens in your browser.
5. In the terminal, start your freshly pushed app.

```bash
# Run the image
docker run -d -p 3000:3000 YOUR-USER-NAME/getting-started

# In my case this is
docker run -dp 3000:3000 hendrikleper/socketiodrawing
```

## Author

Gabriel Tanner   
adapted by Hendrik Leper


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

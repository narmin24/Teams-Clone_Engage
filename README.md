# Teams-Clone_Engage

## 1. Introduction

I've buit a Peer-2-Peer Video Calling Website using mainly WebRTC and Socket.io. 
This is my submission for Microsoft Engage 2021.
## - Agile Methodology
Agile is a development methodology adopted today in the software industry. <br />Agile scrum methodology is a project management system that relies on incremental development. Each iteration consists of two- to four-week sprints, where each sprint’s goal is to build the most important features first and come out with a potentially deliverable product. <br />More features are built into the product in subsequent sprints and are adjusted based on stakeholder and customer feedback between sprints.

### How was Agile incorporated in this project?
* **Week1**
Researched various frameworks and libraries, Learnt Few Basic Skills and functioning of NodeJS, ReactJS, WebRTC.

* **Week2**
Created the first, very basic website for video rendering. Improved the styling to provide a cleaner interface. Implemented features like enter Name, ID that copies to the clipboard, make call from website.
  
* **Week3**
Included the feature of notifying the call reciever about call. More improvements into the UI along with constant feedback from Mentors.

* **Week4**
Deployed Backend on Heroku and Frontend using Netlify. Debugged errors and Tested the website.

## 2. Technologies and Libraries Used

* NodeJS
* ReactJS
* WebRTC
* Socket.io
* PeerJS
* CSS
* HTML

## 3. Files
* **`frontend/src/`** - Contains ReactJS and CSS and other necessary files for the frontend
   * **`App.css`** : Takes care of the positing and colour styling of components
   * **`App.js`** : Contains the components with their functionalities
* **`server.js`** : Backend of the website

## 4. How does it work?
1. You can visit [this site](https://nazee-clone.netlify.app/) to see how the website looks.
2. When you enter the website or run it on local host, you'll see your video and on the right side you can type in your 'Name'
3. To connect another user click on 'COPY ID' and a unique will get added to your clipboard. Send this ID to your friend and you'll see them calling.
<p>
<img src="https://github.com/narmin24/Teams-Clone_Engage/blob/main/website.png"> 
 </p> 
4. 'Answer' the call and you can easily talk to your friend over video call.
<p>
<img src="https://github.com/narmin24/Teams-Clone_Engage/blob/main/calling.png"> 
 </p> 
 <p>
<img src="https://github.com/narmin24/Teams-Clone_Engage/blob/main/Call_connected.png"> 
 </p> 
<br />

## Usage
To run this project, install it locally using npm:
```
$ npm i express socket.io nodemon
$ npm run start
```

Further see [frontend/README.md](https://github.com/narmin24/Teams-Clone_Engage/blob/main/frontend/README.md)

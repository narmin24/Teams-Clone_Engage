# Teams-Clone_Engage

## 1. Introduction
<p>
<img src="https://github.com/narmin24/Teams-Clone_Engage/blob/main/Call_connected.png"> 
 </p> 
<br />
I've buit a Peer-2-Peer Video Calling Website using mainly WebRTC and Socket.io. 
This is my submission for **Microsoft Engage 2021

## 2. Technologies and Libraries Used

* NodeJS
* ReactJS
* WebRTC
* Socket.io
* PeerJS
* CSS
* HTML

## 3. Project Description
### 2.1 Data Extraction and Preprocessing
We scraped data for each illness using the Tweepy API, based on keywords and phrases for each category.
Additionally, we scraped tweets that didn't contain these keywords. This data acted as the ‘neutral’ data.
The data was cleaned using libraries like regex, NLTK. Links, emojis, emoticons, and symbols were removed. 

### 2.2 DL Model
We explored Transformer models and found that BERT(Bidirectional Encoder Representations from Transformers) was better-suited for sentiment analysis. We used a pretrained BERT model and fine-tuned it on our training data. We trained a model for each class. <br />
The output given by the final layer was not fed to any activation function; it was instead given as input to a custom function to normalize and standardize the data. The function is given below: <br />
<br />
<p align = "center">
<img src="https://github.com/Arsh2k01/UTrack/blob/main/function.jpeg" width="600" height="150"> 
 </p> 
 <br />

### 2.3 Visualisation and Deployment
We used Seaborn to display the caculated level of Loneliness, Stress, and Anxiety for each user across time, thus enabling us to see how the user's mental state varied over time. Moreover, we estimate the weighted average for each category, over previous tweets **`[0:LOW,1:HIGH]`**.
Additonally, you can also view each specific tweet and its scores.
Deployment was done using Streamlit. 

## 3. Files
* **`Cleaning Tweets.py`** - Script to clean scraped tweets
* **`Extracting Targeted Tweets.py`** - Script to scrape a user's Twitter information
* **`Streamlit Deployment.py`** - Script to deploy the project
* **`Streamlit Deployment.ipynb`** - Jupyter Notebook to deploy the project
* **Extracted Tweets** - Training Data
* **Training Models:**
   * **`Anxiety Model.py`**
   * **`Lonely Model.py`**
   * **`Stress Model.py`**

## 4. Usage
To run this project, install it locally using npm:
```
$ npm i express socket.io nodemon
$ npm run start
```
<br /> And to render the frontend, install react library and run:
```
$ cd frontend
$ yarn start
```

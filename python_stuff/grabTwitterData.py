#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import tweepy
import rethinkdb as r
import json
import geonamescache
import geocoder
import datetime

#Variables that contains the user credentials to access Twitter API 
access_token = "799255903732199424-tNPUIP2AUsiN2J10NLpwSFnoO5LM537"
access_token_secret = "X611UHjr8a343f6gdqt9VXfxZrZXscxV36UjGTznhk2xy"
consumer_key = "1Krx1kf3uz5ZiOZziIb2zDfIe"
consumer_secret = "BaAvsJlzcfbL0HAe51YtdjGJOpfJg4xoZ1Z1wSM6Zr1G9fVkuk"
gc = geonamescache.GeonamesCache()
countries = gc.get_countries_by_names()

#This is a basic listener that just prints received tweets to stdout.
class StdOutListener(tweepy.StreamListener):

    def on_status(self, status): #on_data
        #print status.text 
	if not status.retweeted and 'RT @' not in status.text:
	    
	    for c in countries:
		if c in status.text:
		    newStatus = {}
		    g = geocoder.google(c)
  		    #Create new object of useful data
#		    print status.text
		    newStatus["created_at"] = str(status.created_at.utcnow())
		    newStatus["text"] = status.text 
		    newStatus["id"] = status.id 
		    #newStatus["user"] = status.user 
		    newStatus["newLat"] = g.lat 
		    newStatus["newLong"] = g.lng
#		    print g.lat
		    #print("Lat & Long: " + g.latlng)
#		    print("Country: " + c + " Text: " + status.text)
	    	    print status.text
	    #print data.text
#            print json.loads(data).text
		    #status['newLong'] = g.lng
#		    print status
#		    j = json.loads(json.dumps(newStatus)) #._json
#		    print newStatus
		    j = json.loads(json.dumps(newStatus))
#		    print j
#		    with open(j) as f:
#		    	data = json.load(f)
#		    data['newLat'] = g.lat
#		    data['newLong'] = g.lng
#		    with open(j, 'w') as f:
#			j = json.dump(data, f)	
           	    r.db("projec").table("tweets").insert(j).run()    
	return True

    def on_error(self, status):
        print status


if __name__ == '__main__':

    #This handles Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
  #  r.connect("adb04.cs.appstate.edu", 28015).repl() #28015
    r.connect("localhost", 38204).repl()
    stream = Stream(auth, l)

    #This line filter Twitter Streams to capture data by the keywords: 'python', 'javascript', 'ruby'
    stream.filter(languages=["en"], track=['earth quake', 'earth-quake', 'earthquake', 'seismic activity', 'seismic', 'quake'])

   


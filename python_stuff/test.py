#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
#import rethinkdb as r

#Variables that contains the user credentials to access Twitter API 
access_token = "799255903732199424-tNPUIP2AUsiN2J10NLpwSFnoO5LM537"
access_token_secret = "X611UHjr8a343f6gdqt9VXfxZrZXscxV36UjGTznhk2xy"
consumer_key = "1Krx1kf3uz5ZiOZziIb2zDfIe"
consumer_secret = "BaAvsJlzcfbL0HAe51YtdjGJOpfJg4xoZ1Z1wSM6Zr1G9fVkuk"


#This is a basic listener that just prints received tweets to stdout.
class StdOutListener(StreamListener):

    def on_data(self, data):
        print data
    	#r.db("projec").table("tweets").insert([data]).run()    
	return True

    def on_error(self, status):
        print status


if __name__ == '__main__':

    #This handles Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    #r.connect("adb04.cs.appstate.edu", 28015).repl()
    stream = Stream(auth, l)

    #This line filter Twitter Streams to capture data by the keywords: 'python', 'javascript', 'ruby'
    stream.filter(track=['javascript'])

   


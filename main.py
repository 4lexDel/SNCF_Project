import requests
import json



def GetjourneysWithCity(json_object):
    for key in json_object["records"]:# LIST
        print("Origine: ", key["fields"]["origine"] , " Destination: ",    key["fields"]["destination"]   ,  " Date: ", key["fields"]["date"]   ," heure: ", key["fields"]["heure_depart"] , "\n")
    
   
       

url  =  "https://data.sncf.com/api/records/1.0/search/?dataset=tgvmax&q=&rows=1000&sort=-date&facet=origine&facet=destination&facet=od_happy_card&facet=date&refine.origine=PARIS+(intramuros)&refine.destination=RENNES&refine.od_happy_card=OUI"

x = requests.get(url)
#print(type(x.text))

json_object = json.loads(x.text)
#print(json_object)
GetjourneysWithCity(json_object)
#TO-DO function with all the trajtct that concerne RENNES and PARIS 







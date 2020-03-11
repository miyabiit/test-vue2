#
#
#
import pprint
import requests
import json

myToken = 'f/NRVPlG5rFGcIkfN/ZaSB0ftUshCRU9Bi3+NR+juWg='
myUrl = 'http://13.59.42.214/api/stock_products'
head = {'Authorization': 'Token {}'.format(myToken)}
param = {
  "limit": 1000
}
response = requests.get(myUrl, headers=head, data=json.dumps(param))
pprint.pprint(response.json())
#with open('stock_products.json','w') as f:
#  f.write(response.text)

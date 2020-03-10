#
#
#
#
import requests
import pprint
myToken = 'f/NRVPlG5rFGcIkfN/ZaSB0ftUshCRU9Bi3+NR+juWg='
myUrl = 'http://13.59.42.214/api/stock_products'
head = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Token {}'.format(myToken)
  }
param = {
  "limit": 1000,
  "stock_product": {
    '$or': {
      "stock_product":{
        "tite": 'テスト'
      },
      "description": '掘削',
      "spec_comment": '危険'
    }
  }
}
response = requests.get(myUrl, headers=head, params=param)
pprint.pprint(response.json())
#with open('stock_products.json','w') as f:
#  f.write(response.text)

import csv
import requests
#import BeautifulSoup
#from BeautifulSoup import BeautifulSoup
from bs4 import BeautifulSoup
import os
url = "http://www.paywizard.org/main/salary/vip-check/world-leaders-salaries"
response = requests.get(url)
print url
print "Status code: (200 is good): ", response.status_code

if response.status_code is 200:
    print "Is out status code 200?"
    print True
else:
    print "ERROR! aborting"
    sys.exit()

    
html = response.content

soup = BeautifulSoup(html, "html.parser")

vips = soup.findAll("div", { "class" : "vip" })
print (len(vips), "vips in the list")
#print vips

listofrows = []

for vip in vips:
    row = []
    
    vipnames = vip.findAll("div", {"class" : "vip_header"})
    if(len(vipnames)>0):
        vipHeaderValues = vipnames[0].findAll("div", {})
        name = vipHeaderValues[0].text
        cargo = vipHeaderValues[1].text
        birth = vipHeaderValues[2].text
        row.append(name)
        row.append(cargo)
        row.append(birth)        
    
    vipwageslist = vip.findAll("ul", {"class" : "vipwages"})
    if(len(vipwageslist)>0):
        vipwages = vipwageslist[0].findAll("li", {})
        annual = vipwages[0].text
        monthly = vipwages[1].text
        weekly = vipwages[2].text
        daily = vipwages[3].text
        row.append(annual)
        row.append(monthly)
        row.append(weekly)
        row.append(daily)

    vipImages = vip.findAll("img", {})
    if(len(vipImages)>0):
        vipImageValues = vipImages[0].get("src")
        row.append(vipImageValues)
        
    #for vip_header in vip ("div"):
        #vipdata = vip_header.get("div")
    #for vipwages in vip ("li"):
        #vipwages1 = vipwages.findAll("li", {"li" : "vipwages"})
        #vipwages.get("li")
    #print vip.text
    #print vip_header.text, vip.text  
        #print (vipnames, vipwages)
    
    listofrows.append(row)

for row in listofrows:
    rowString = ""
    for value in row:
        rowString = rowString + value + ';'
    print rowString

with open('finalSalariesData.csv', 'w') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(['Name', 'Position', 'Birth', 'Annual', 'Monthly', 'Weekly', 'Daily'])
    writer.writerows(listofrows)

"""
boxes = []

for item in vips:
    boxes.append(item)

print (boxes)
"""

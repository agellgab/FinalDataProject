import csv
import requests
from bs4 import BeautifulSoup
import os
url = "D:\\Documentos\\Erasmus\\Classes\\Semester IV\\Advanced Data and Coding\\Final project\\temp\\index.html"

"""
response = requests.get(url)
print url
print "Status code: (200 is good): ", response.status_code

if response.status_code is 200:
    print "Is out status code 200?"
    print True
else:
    print "ERROR! aborting"
    sys.exit()

"""

html = ""
with file(url) as inputFile:
    html = inputFile.read()

#print html

soup = BeautifulSoup(html, "html.parser")

countries = soup.findAll("div", {})[0].findAll("span", {})


#print (len(countries), "Numero de paises")

monthlywages = soup.findAll("g", {"zindex" : "3"})[0].findAll("g", {})

rowAvWage = []
listofrows = []
countryNames = []

for monthlywage in monthlywages:
    AverageWage = monthlywage.findAll("tspan", {})[0].text
    rowAvWage.append(AverageWage)


for country in countries:
    countryName = country.text
    countryNames.append(countryName)

for row in range(len(countryNames)):
    rowString = countryNames[row] + ';' + rowAvWage[row] + ';'
    print rowString
    


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

"""
with open('finalSalariesData.csv', 'w') as outfile:
    writer = csv.writer(outfile)
    writer.writerow(['Name', 'Position', 'Birth', 'Annual', 'Monthly', 'Weekly', 'Daily'])
    writer.writerows(listofrows)
"""

"""
boxes = []

for item in vips:
    boxes.append(item)

print (boxes)
"""

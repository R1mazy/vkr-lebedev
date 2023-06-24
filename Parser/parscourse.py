import requests
from bs4 import BeautifulSoup
from lxml import etree
import sqlite3

class Database():
    def __init__(self, db_file):
        self.connection = sqlite3.connect(db_file, check_same_thread=False)
        self.cursor = self.connection.cursor()

    def add_card(self, title, info, duration, start):
        with self.connection:
            self.cursor.execute("INSERT OR IGNORE INTO info (title, info, duration, start) VALUES (?,?,?,?)", [title, info, duration, start])

url = "https://gb.ru/courses/all"
  
HEADERS = ({'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 \
            (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',\
            'Accept-Language': 'en-US, en;q=0.5'})
  
webpage = requests.get(url, headers=HEADERS)
soup = BeautifulSoup(webpage.content, "html.parser")
dom = etree.HTML(str(soup))



if __name__ == "__main__":
    db = Database("test.db") 
    for i in range(1,51,1):
        title = dom.xpath(f'/html/body/div[5]/div[1]/div/div[2]/div[1]/div[{i}]/div[2]/div[1]/span')[0].text
        info = dom.xpath(f'/html/body/div[5]/div[1]/div/div[2]/div[1]/div[{i}]/div[2]/div[2]')[0].text
        duration = dom.xpath(f'/html/body/div[5]/div[1]/div/div[2]/div[1]/div[{i}]/div[3]/div[2]/div[1]/div[1]')[0].text + dom.xpath('/html/body/div[5]/div[1]/div/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/span')[0].text
        start = dom.xpath(f'/html/body/div[5]/div[1]/div/div[2]/div[1]/div[{i}]/div[3]/div[2]/div[1]/div[2]')[0].text + dom.xpath('/html/body/div[5]/div[1]/div/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/span')[0].text
        db.add_card(title, info, duration, start)
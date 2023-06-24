# url = "https://gb.ru/geek_university/developer/dfgdfg/dfgdfgfdg"
#
# url = url.split("/")[-4]
# print(url)
import csv
import re

import requests
from bs4 import BeautifulSoup

def get_data31(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)

    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("div", class_="col")



    projects_urls = []


    with open("data31.csv", "w", newline='', encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(
            (
                "tema",
                "zn_vix",
                "types",
                "rasr",
                "title",
                "info",
                "dlit",
                "price",
                "silka",
                "platform"
            )
        )

    for article in articles:


        try:
            project_type = article.find("div", class_="me-2").text
        # projects_urls.append(project_url)
            print(project_type)
        except Exception:
            continue


        try:
            project_name = article.find("a", class_="stretched-link text-decoration-none text-body").text
        # projects_urls.append(project_url)
            print(project_name)
        except Exception:
            continue

        try:
            project_description = article.find("div", class_="small text-body-secondary mb-4").text
        # projects_urls.append(project_url)
            print(project_description)
        except Exception:
            continue

        try:
            project_price = article.find("div", class_="text-nowrap").text
            project_price1 = re.findall(r'[0-9]*', project_price)
            project_price2 = project_price1[6] + project_price1[7] + project_price1[8]

        # projects_urls.append(project_url)

        except Exception:
            project_price = "бесплатно"
        print(project_price2)

        try:
            project_dlit = article.find("div", class_="text - nowrap").text
        # projects_urls.append(project_url)

        except Exception:
            project_dlit = "10 месяцев"
        print(project_dlit)

        try:
            project_silka = "https://ru.hexlet.io" + article.find("a", class_="stretched-link text-decoration-none text-body").get("href")
        # projects_urls.append(project_url)

        except Exception:
            continue
        print(project_silka)


        project_tema = "Программирование"
        project_zn_vix = "Junior"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "Хекслет"

        # if project_type == "профессия":
        with open("data31.csv", "a", newline='', encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(
                (
                    project_tema,
                    project_zn_vix,
                    project_type,
                    project_rasr,
                    project_name,
                    project_description,
                    project_dlit,
                    project_price2,
                    project_silka,
                    project_platform
                )
            )







get_data31("https://ru.hexlet.io/courses")
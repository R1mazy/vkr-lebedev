# url = "https://gb.ru/geek_university/developer/dfgdfg/dfgdfgfdg"
#
# url = url.split("/")[-4]
# print(url)
import csv
import re

import requests
from bs4 import BeautifulSoup


def get_data24(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)

    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("li", class_="course-cards__item")

    projects_urls = []

    for article in articles:


        try:
            project_url = "https://stepik.org" +  article.find("a", class_="course-card__title").get("href")
            projects_urls.append(project_url)
        except Exception:
            continue



    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        project_silka = project_url
        project_name = project_url.split("/")[-1]

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("main", class_="main-content")
    #
    #     try:
    #         project_zn_vix = project_data.find("div", class_="gkb-label-card__label-right").find("span",
    #                                                                                              class_="ui-text--bold").text
    #         print(project_zn_vix)
    #     except Exception:
    #         continue
    #
        try:
            project_name = project_data.find("h1", class_="course-promo__header").text
            print(project_name)
        except Exception:
            continue

        try:
            project_short_description = project_data.find("div", class_="shortened-text ember-view").text
            # project_short_description1 = re.findall(r'\.*', project_short_description)
            # project_short_description2 = project_short_description1[4] + project_short_description1[5] + project_short_description1[6]
            print(project_short_description)
        except Exception:
            continue

        try:
            project_dlit = "навсегда"
            print(project_dlit)
        except Exception:
            continue

        try:
            project_price = project_data.find("span", class_="format-price").text
            project_price1 = re.findall(r'[0-9]*', project_price)
            # for i in project_price1:
            #     if i == int:
            #         project_price2 += i
            project_price2 = project_price1[4] + project_price1[5] + project_price1[6]

        except Exception:
            project_price2 = "бесплатно"
        print(project_price2)

        project_tema = "Программирование"

        project_zn_vix = "Middle"

        project_type = "Курс"

        project_rasr = "нет"

        project_platform = "Stepik"

        with open("data41.csv", "a", newline='', encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(
                (
                    project_tema,
                    project_zn_vix,
                    project_type,
                    project_rasr,
                    project_name,
                    project_short_description,
                    project_dlit,
                    project_price2,
                    project_silka,
                    project_platform
                )
            )



get_data24("https://stepik.org/catalog/61")
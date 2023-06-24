import csv

import requests
from bs4 import BeautifulSoup

def get_data1(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }
    
    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("div", class_="direction-card")

    projects_urls = []

    for article in articles:
        project_url = article.find("a", class_="card_full_link").get("href")
        projects_urls.append(project_url)



    with open("data1.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka=project_url
        if project_url.split("/")[-2] == "geek_university":
            project_name = project_url.split("/")[-1]
        else:
            if project_url.split("/")[-3] == "geek_university":
                project_name = project_url.split("/")[-2]+project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "geek_university":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("div", class_="gkb-promo")


        try:
            project_zn_vix = project_data.find("div", class_="gkb-label-card__label-right").find("span", class_="ui-text--bold").text
            print(project_zn_vix)
        except Exception:
            continue

        try:
            project_name = project_data.find("div", class_="gkb-promo__content-container").find("h1", class_="gkb-promo__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("div", class_="gkb-promo__description").find("p", class_="gkb-promo__text").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        # try:
        project_dlit = project_data.find("div", class_="gkb-promo__description").find("p", class_="gkb-promo__text-secondary").text
        print(project_dlit)
        # except Exception:
        #     project_dlit = "No project dlit"

        # try:
        project_price = project_data.find("div", class_="gkb-promo__price-current").find("span", class_="ui-text-heading--2").text
        print(project_price)
        # except Exception:
        #     project_price = "No project price"

        project_tema="Программирование"

        project_type = "Курс"

        project_rasr = "есть"

        project_platform = "GeekBrains"

        with open("data1.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )



get_data1("https://gb.ru/courses/programming")


def get_data2(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("div", class_="direction-card")

    projects_urls = []

    for article in articles:
        project_url = article.find("a", class_="card_full_link").get("href")
        projects_urls.append(project_url)

    with open("data2.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-2] == "geek_university":
            project_name = project_url.split("/")[-1]
        else:
            if project_url.split("/")[-3] == "geek_university":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "geek_university":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("div", class_="gkb-promo")


        try:
            project_zn_vix = project_data.find("div", class_="gkb-label-card__label-right").find("span", class_="ui-text--bold").text
            print(project_zn_vix)
        except Exception:
            continue

        try:
            project_name = project_data.find("div", class_="gkb-promo__content-container").find("h1",
                                                                                                class_="gkb-promo__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                                   class_="gkb-promo__text").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        # try:
        project_dlit = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                      class_="gkb-promo__text-secondary").text
        print(project_dlit)
        # except Exception:
        #     project_dlit = "No project dlit"

        # try:
        project_price = project_data.find("div", class_="gkb-promo__price-current").find("span",
                                                                                         class_="ui-text-heading--2").text
        print(project_price)
        # except Exception:
        #     project_price = "No project price"

        project_tema = "Машинное обучение"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "GeekBrains"

        with open("data2.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )

get_data2("https://gb.ru/courses/ml")



def get_data3(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("div", class_="direction-card")

    projects_urls = []

    for article in articles:
        project_url = article.find("a", class_="card_full_link").get("href")
        projects_urls.append(project_url)

    with open("data3.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-2] == "geek_university":
            project_name = project_url.split("/")[-1]
        else:
            if project_url.split("/")[-3] == "geek_university":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "geek_university":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("div", class_="gkb-promo")


        try:
            project_zn_vix = project_data.find("div", class_="gkb-label-card__label-right").find("span", class_="ui-text--bold").text
            print(project_zn_vix)
        except Exception:
            continue

        try:
            project_name = project_data.find("div", class_="gkb-promo__content-container").find("h1",
                                                                                                class_="gkb-promo__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                                   class_="gkb-promo__text").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        # try:
        project_dlit = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                      class_="gkb-promo__text-secondary").text
        print(project_dlit)
        # except Exception:
        #     project_dlit = "No project dlit"

        # try:
        project_price = project_data.find("div", class_="gkb-promo__price-current").find("span",
                                                                                         class_="ui-text-heading--2").text
        print(project_price)
        # except Exception:
        #     project_price = "No project price"

        project_tema = "Аналитика"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "GeekBrains"

        with open("data3.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )

get_data3("https://gb.ru/courses/analytics")


def get_data4(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("div", class_="direction-card")

    projects_urls = []

    for article in articles:
        project_url = article.find("a", class_="card_full_link").get("href")
        projects_urls.append(project_url)

    with open("data4.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-2] == "geek_university":
            project_name = project_url.split("/")[-1]
        else:
            if project_url.split("/")[-3] == "geek_university":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "geek_university":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("div", class_="gkb-promo")



        try:
            project_zn_vix = project_data.find("div", class_="gkb-label-card__label-right").find("span", class_="ui-text--bold").text
            print(project_zn_vix)
        except Exception:
            continue

        try:
            project_name = project_data.find("div", class_="gkb-promo__content-container").find("h1",
                                                                                                class_="gkb-promo__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                                   class_="gkb-promo__text").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        # try:
        project_dlit = project_data.find("div", class_="gkb-promo__description").find("p",
                                                                                      class_="gkb-promo__text-secondary").text
        print(project_dlit)
        # except Exception:
        #     project_dlit = "No project dlit"

        # try:
        project_price = project_data.find("div", class_="gkb-promo__price-current").find("span",
                                                                                         class_="ui-text-heading--2").text
        print(project_price)
        # except Exception:
        #     project_price = "No project price"

        project_tema = "Маркетинг"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "GeekBrains"

        with open("data4.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )

get_data4("https://gb.ru/courses/marketing")














#
# В коде выше сделал парсинг по сайту гикбрейнс
#
#
#
#
#
#
#







































def get_data21(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    with open("data21.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Программирование"
        project_zn_vix = "Junior"
        project_type = "Профессия"
        project_rasr = "есть"
        project_platform = "Skillbox"



        with open("data21.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data21("https://skillbox.ru/code/?type=profession")

def get_data211(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Программирование"
        project_zn_vix = "Junior"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "Skillbox"



        with open("data21.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data211("https://skillbox.ru/code/?type=course")







def get_data22(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    with open("data22.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Дизайн"
        project_zn_vix = "Junior"
        project_type = "Профессия"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data22.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data22("https://skillbox.ru/design/?type=profession")

def get_data221(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Дизайн"
        project_zn_vix = "Junior"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data22.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data221("https://skillbox.ru/design/?type=course")








def get_data23(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    with open("data23.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Маркетинг"
        project_zn_vix = "Junior"
        project_type = "Профессия"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data23.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data23("https://skillbox.ru/marketing/?type=profession")

def get_data231(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Маркетинг"
        project_zn_vix = "Junior"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data23.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data231("https://skillbox.ru/marketing/?type=course")








def get_data24(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    with open("data24.csv", "w", newline='', encoding="utf-8") as file:
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

    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Управление"
        project_zn_vix = "Junior"
        project_type = "Профессия"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data24.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data24("https://skillbox.ru/management/?type=profession")

def get_data241(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Mobile Safari/537.36"
    }

    req = requests.get(url, headers)
    print(req.text)
    with open("project.html", "w", encoding="utf-8") as file:
        file.write(req.text)

    with open("project.html", encoding="utf-8") as file:
        src = file.read()

    soup = BeautifulSoup(src, "lxml")
    articles = soup.find_all("article", class_="ui-product-card")
    print(articles)

    projects_urls = []

    for article in articles:
        project_url = article.find("div", class_="ui-product-card-main").find("a", class_="ui-product-card-main__wrap").get("href")
        projects_urls.append(project_url)
        print(project_url)


    for project_url in projects_urls:
        req = requests.get(project_url, headers)
        print(project_url)
        project_silka = project_url
        if project_url.split("/")[-3] == "course":
            project_name = project_url.split("/")[-2]
        else:
            if project_url.split("/")[-4] == "course":
                project_name = project_url.split("/")[-2] + project_url.split("/")[-1]
            else:
                if project_url.split("/")[-4] == "course":
                    project_name = project_url.split("/")[-3] + project_url.split("/")[-2] + project_url.split("/")[-1]
                else:
                    project_name = project_url.split("/")[-4] + project_url.split("/")[-3] + project_url.split("/")[
                        -2] + project_url.split("/")[-1]
        print(project_name)

        with open(f"data/{project_name}.html", "w", encoding="utf-8") as file:
            file.write(req.text)
        with open(f"data/{project_name}.html", encoding="utf-8") as file:
            src = file.read()
        soup = BeautifulSoup(src, "lxml")
        project_data = soup.find("section", class_="start-screen-v1--sale")

        try:
            project_name = project_data.find("h1", class_="start-screen-v1__title").text
            print(project_name)
        except Exception:
            continue

        # try:
        project_short_description = project_data.find("p", class_="start-screen-v1__desc").text
        print(project_short_description)
        # except Exception:
        #     project_short_description = "No project short description"

        project_data1 = soup.find("section", class_="program-v3 block block--default")


        try:
            project_dlit = project_data1.find("div", class_="program-v3__wrapper").find("header", class_="program-v3__header").find("ul", class_="program-v3__counts").find("li", class_="program-v3__count").text
            print(project_dlit)
        except Exception:
            project_dlit = "No project dlit"

        project_data2 = soup.find("section", class_="price-v9 block block--special")
        try:
            project_price = project_data2.find("div", class_="price-info ui-container").find("div", class_="price-info__block").find("div", class_="price-v9__price-wrapper").find("div", class_="price-v9__price-info").find("div", class_="price-v9__primary-price").text
            print(project_price)
        except Exception:
            project_price = " 2 581  ₽/мес  "

        project_tema = "Управление"
        project_zn_vix = "Junior"
        project_type = "Курс"
        project_rasr = "есть"
        project_platform = "Skillbox"

        with open("data24.csv", "a", newline='', encoding="utf-8") as file:
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
                    project_price,
                    project_silka,
                    project_platform
                )
            )


get_data241("https://skillbox.ru/management/?type=course")





















#
# В коде выше сделал парсинг по сайту скиллбокс
#
#
#
#
#
#
#


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
            project_silka = "https://ru.hexlet.io" + article.find("a",
                                                                  class_="stretched-link text-decoration-none text-body").get(
                "href")
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





def get_data41(url):
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

    with open("data41.csv", "w", newline='', encoding="utf-8") as file:
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

        project_zn_vix = "Junior"

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



get_data41("https://stepik.org/catalog/1")





def get_data42(url):
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



get_data42("https://stepik.org/catalog/61")




















# coding: utf-8
from selenium import webdriver
import json
import random
import time
import os


# Loading XPaths from xpaths,json file
with open('xpaths.json') as f:
    steps = json.load(f)


# Selenium 
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--disable-notifications")
chrome_options.add_argument("--headless")
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
# chrome_options.binary_location = "./chromedriver"
# chrome_driver_binary = "./chromedriver"

# browser = webdriver.Chrome('./chromedriver',chrome_options=chrome_options)
# browser.get(BASE_URL)

BASE_URL = 'file:///' + os.getcwd() + '/minimal/index/smart-sizes.html'    


def get_answer(input_params, browser):

    browser.find_element_by_xpath(steps['step_1'][input_params[0]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_1"]/nav/a').click()
    browser.find_element_by_xpath(steps['step_2'][input_params[1]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_3"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_3'][input_params[2]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_4"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_4'][input_params[3]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_5"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_5'][input_params[4]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_7"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_6'][input_params[5]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_8"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_7'][input_params[6]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_14"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_8'][input_params[7]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_9"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_9'][input_params[8]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_10"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_10'][input_params[9]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_11"]/nav/a[2]').click()
    browser.find_element_by_xpath(steps['step_11'][input_params[10]]).click()

    browser.find_element_by_xpath('//*[@id="smart_size_step_12"]/nav/a[2]').click()

    time.sleep(0.5)
    browser.find_element_by_xpath('//*[@id="email"]').send_keys('a@g.com')
    browser.find_element_by_xpath('//*[@id="password"]').send_keys('abc')

    browser.find_element_by_xpath('//*[@id="buttonCreateAccountConfirmSS"]').click()
    
    
    # Results
    # long_sleeve_tucked
    # browser.find_elements_by_class_name('size-tabs')[0].find_elements_by_tag_name('a')[0].click()
    long_sleeve_tucked_div = browser.find_element_by_xpath('//*[@id="dimensions-cs"]/ul').text.split('\n')[:-2]
    keys = long_sleeve_tucked_div[::2]
    values = reversed(long_sleeve_tucked_div[::-2])
    long_sleeve_tucked = dict(zip(keys, values))

    # long_sleeve_untucked
    browser.find_elements_by_class_name('size-tabs')[0].find_elements_by_tag_name('a')[1].click()
    long_sleeve_untucked_div = browser.find_element_by_xpath('//*[@id="dimensions-cs"]/ul').text.split('\n')[:-2]
    keys = long_sleeve_untucked_div[::2]
    values = reversed(long_sleeve_untucked_div[::-2])
    long_sleeve_untucked = dict(zip(keys, values))

    # short_sleeve_untucked
    browser.find_elements_by_class_name('size-tabs')[0].find_elements_by_tag_name('a')[2].click()
    short_sleeve_untucked_div = browser.find_element_by_xpath('//*[@id="dimensions-cs"]/ul').text.split('\n')[:-2]
    keys = short_sleeve_untucked_div[::2]
    values = reversed(short_sleeve_untucked_div[::-2])
    short_sleeve_untucked = dict(zip(keys, values))

    results = {
        'long_sleeve_tucked' : long_sleeve_tucked,
        'long_sleeve_untucked': long_sleeve_untucked,
        'short_sleeve_untucked': short_sleeve_untucked
    }

    # browser.get(BASE_URL)
    browser.quit()
    return results


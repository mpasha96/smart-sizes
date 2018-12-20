from flask import Flask, render_template, request
import selenium_script as ss
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/smart_size', methods=['POST'])
def smart_size():
    # fields = [k for k in request.form]                                      
    # values = [request.form[k] for k in request.form]
    # data = dict(zip(fields, values))
    
    # print(data)

    choice_1 = request.form['options-step-1']
    choice_2 = request.form['options-step-2']
    choice_3 = request.form['options-step-3']
    choice_4 = request.form['options-step-4']
    choice_5 = request.form['options-step-5']
    choice_6 = request.form['options-step-6']
    choice_7 = request.form['options-step-7']
    choice_8 = request.form['options-step-8']
    choice_9 = request.form['options-step-9']
    choice_10 = request.form['options-step-10']
    choice_11 = request.form['options-step-11']

    choices = [choice_1, choice_2, choice_3, choice_4, choice_5, 
    choice_6, choice_7, choice_8, choice_9, choice_10, choice_11]
    
    # print(choice_1)
    # print(choice_2)
    # print(choice_3)
    # print(choice_4)
    # print(choice_5)
    # print(choice_6)
    # print(choice_7)
    # print(choice_8)
    # print(choice_9)
    # print(choice_10)
    # print(choice_11)

    browser = ss.webdriver.Chrome('./chromedriver',chrome_options=ss.chrome_options)
    browser.get(ss.BASE_URL)
    answers = ss.get_answer(choices, browser)
    # answers = {'long_sleeve_tucked': {'Collar Around': '15.5', 'Sleeve Length': '31.75', 'Yoke Width': '17.5', 'Chest Width': '20.25', 'Midsection Width': '17.75', 'Shirt Length': '29.75', 'Sleeve Width': '8.25', 'Cuff Around': '8.75'}, 'long_sleeve_untucked': {'Collar Around': '15.5', 'Sleeve Length': '31.75', 'Yoke Width': '17.5', 'Chest Width': '20.25', 'Midsection Width': '17.75', 'Shirt Length': '28.25', 'Sleeve Width': '8.25', 'Cuff Around': '8.75'}, 'short_sleeve_untucked': {'Collar Around': '15.5', 'Short Sleeve Length': '8.5', 'Yoke Width': '17.5', 'Chest Width': '20.25', 'Midsection Width': '17.75', 'Shirt Length': '28', 'Short Sleeve Width': '8', 'Short Sleeve Opening': '7.25'}}

    return render_template('smart-size.html', answers=answers)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
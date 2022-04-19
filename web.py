
from unicodedata import name
import mariadb
import json
import smtplib


connect = mariadb.connect(host = "localhost", port = 3306, user = "root", password = "ihpuh2kf", database="schule")
cursor = connect.cursor()

from flask import Flask, render_template, url_for, render_template, request, redirect
app = Flask(__name__, template_folder='templates')
@app.route("/")
def index():
    return render_template('seite.html')
@app.route("/Anmeldung.html", methods= ['GET', 'POST'])


def anmelden():
    
    if request.method == 'POST':
        inUser= request.form["Benutzer"]
        inEmail= request.form["email"]
        inPassword= request.form["password"]
       
        sql = "INSERT INTO sub Values(?, ?, ?);"
        cursor.execute(sql, (inUser, inEmail, inPassword))
        connect.commit()

        sender_email = "philippstoon@gmail.com"
        rec_email = "milosevicdalibor09@gmail.com"
        password = "dbaydhoikuktkfbq"
        message ="danke das sie sich angemeldet haben"
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, password)
        print("Danke dass dass sie sich angemeldet haben")
        server.sendmail(sender_email, inEmail, message)
        print("endlich", rec_email)
        
        return redirect(url_for("user",  usr=inUser+inEmail+inPassword))
        

       

        
    else:
        return render_template('Anmeldung.html')

@app.route("/<usr>")
def user(usr):
    return render_template('Danke.html')
    

    
    
@app.route("/seite.html")
def zurück():
    return render_template('seite.html')

@app.route("/chattBottnewer.html")
def zum():
    return render_template('chattBottnewer.html')
@app.route('/überuns.html')
def über():
    return render_template('überuns.html')
@app.route('/über_dalibor.html')
def über_dalibor():
    return render_template('über_dalibor.html')
@app.route('/über_simon.html')
def über_simon():
    return render_template('über_simon.html')
@app.route('/php')
def über_philipp():
    return render_template('über_philipp.php')
@app.route('/über_unseren_project_leiter.html')
def über_unseren_project_leiter():
    return render_template('über_unseren_project_leiter.html')

@app.route('/chatbot')
def tt():
    return render_template('chattBottnewer.html')

@app.route('/anmelden')
def anme():
    return render_template('Anmeldung.html')
    

@app.route('/warum.html')
def hhh():
    return render_template('warum.html')
@app.route('/hpmepage')
def hhe():
    return render_template('seite.html')
@app.route('/seite')
def hhf():
    return render_template('seite.html')


@app.route('/data', methods=['GET'])
def indexx():
  
    return render_template('Anmeldung.html')
    







if __name__ == '__main__':
    app.debug = True
    app.run(host= '0.0.0.0', port=1000)
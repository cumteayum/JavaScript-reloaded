import webbrowser as wb
import datetime
import os
import pyautogui as pg
import speech_recognition as sr
import requests
import bs4
# import selenium
# import pyttsx3


# IF WE DO IT THE PYTTSX WAY , I AM USING CLI WAY   
###################################################
# engine = pyttsx3.init('sapi5')                  
# voices = engine.getProperty('voices')           
# engine.setProperty('voices', voices[1].id)      
                                                  
# def speak(audio):
#     engine.say(audio)
#     engine.runAndWait()
###################################################

def greet_me():
    time = int(datetime.datetime.now().hour)
    if(time > 12):
        speak("Good Evening")

    elif(time < 12):
        speak("Good Morning")


def get_voice():
    rec = sr.Recognizer()

    with sr.Microphone() as source:
        print("Taking command...")
        rec.pause_threshold = 0.5
        audio = rec.listen(source)

    try:
        print("Polishing you voice :)...")
        query = rec.recognize_google(audio, language="en-in")
        print(query)
        return query

    except Exception as e:
        print("I didn't get that :( say that again please")
        return "None"

def do_some_stuff(q):
    if "start services" in q:
        os.system("systemctl enable mongodb && systemctl enable Networkmanager")

    elif "open code" in q:
        os.system("code")
        
    elif "hacker" in q:
        wb.open("https://geekprank.com/hacker/")

    elif "spotify" in q:
        wb.open("spotify.com")

    elif "what's the day today" in q:
        print(f"The day today is {datetime.datetime.now().day}")

    elif "email" in q:
        r = requests.get('https://10minutemail.net/')
        soup = bs4.BeautifulSoup(r.content, 'html5lib')
        email_field = soup.find_all('input', class_='mailtext')[0].value.text
        print(email_field)

if __name__ == "__main__":
    os.system("clear")
    os.system("figlet JARVIS")
    q = get_voice()
    do_some_stuff(q)
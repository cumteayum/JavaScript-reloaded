import speech_recognition as sr
import webbrowser as wb
import code
import wikipedia as wk

def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening")
        r.pausethreshold = 1
        audio = r.listen(source)
    try:
        print("Recognizing")
        query = r.recognize_google(audio, language='en-in')
        print(query)
    except Exception as e:
        print("No response")
        return "None"
    return query

def doStuff(q):
    if "google" in q:
        wb.open("https://www.google.com/")

    elif "music" in q:
        wb.open("music.youtube.com/")

    elif "wikipedia" in q:
        allQuery = q.replace(' ', '-')
        wikipedia.search(allQuery)

    elif "atom" in q:
        atomPath = "/usr/bin/atom"
        os.startfile(atomPath)
        os.system("clear")

    elif "code" in q:
        codePath = "/usr/bin/code"
        os.startfile(codePath)
        os.system("clear")

    elif "new rep" in q:
        wb.open("https://repo.new")

query = takeCommand()
doStuff(query.lower())

import time
import notify2
notify2.init("notifier")
n = notify2.Notification("Summary", "Body", "Message")
n.show()
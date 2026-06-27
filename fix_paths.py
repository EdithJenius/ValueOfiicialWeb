import pathlib

base = pathlib.Path(r"C:\Users\MagicBook\Documents\ValueOfiicialWeb")

for f in ["index.html", "destinations.html", "contact.html"]:
    p = base / f
    text = p.read_text(encoding="utf-8")
    new = text
    new = new.replace("/css/style.css", "css/style.css")
    new = new.replace("/js/main.js", "js/main.js")
    new = new.replace('href="/"', 'href="."')
    new = new.replace('href="/destinations.html"', 'href="destinations.html"')
    new = new.replace('href="/destinations/australia.html"', 'href="destinations/australia.html"')
    new = new.replace('href="/contact.html"', 'href="contact.html"')
    if new != text:
        p.write_text(new, encoding="utf-8")
        print(f"Fixed: {f}")

au = base / "destinations" / "australia.html"
text = au.read_text(encoding="utf-8")
new = text
new = new.replace("/css/style.css", "../css/style.css")
new = new.replace("/js/main.js", "../js/main.js")
new = new.replace('href="/"', 'href=".."')
new = new.replace('href="/destinations.html"', 'href="../destinations.html"')
new = new.replace('href="/destinations/australia.html"', 'href="australia.html"')
new = new.replace('href="/contact.html"', 'href="../contact.html"')
if new != text:
    au.write_text(new, encoding="utf-8")
    print("Fixed: destinations/australia.html")
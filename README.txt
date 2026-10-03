SAMSUNG AU7600 ANIME TV HOMEPAGE
=================================

FILES
-----
index.html   - Homepage
style.css    - TV-friendly design
script.js    - Background randomizer, clock, search and remote-friendly behavior
bg1.jpg      - Your uploaded background
bg2.jpg      - Your uploaded background
bg3.jpg      - Your uploaded background
bg4.jpg      - Your uploaded background

HOW TO USE
----------
1. Put the entire folder on a web host that gives you a normal HTTPS URL.
2. Open index.html through that URL on your Samsung TV browser.
3. Bookmark the page in the TV browser.
4. If your TV browser provides a Home Page setting, set the custom/current page to this URL.

BACKGROUND BEHAVIOR
-------------------
Every time the page is loaded, JavaScript randomly chooses one of the four
uploaded images. It does not save the choice, so a new load can choose again.

ADDING YOUR OWN SITES
---------------------
Open index.html and find:
  <!-- CUSTOM SLOTS -->

For a custom card, change:
  href="#"
to:
  href="https://example.com"

and change the visible website name/subtitle.

REMOTE CONTROL
--------------
The cards are normal focusable links, so Samsung TV browser navigation can
move through them with the remote. Enter/OK opens the selected site.

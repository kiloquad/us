# US Datasets

## presidents

People who have held the position of the President of the United States of America

* General information: https://simple.wikipedia.org/wiki/List_of_Presidents_of_the_United_States
* Executive Orders: http://www.presidency.ucsb.edu/data/orders.php
* Impeachment: https://en.wikipedia.org/wiki/Impeachment_in_the_United_States
* Wars: http://www.american-presidents-history.com/wartime-presidents.html
* Inaugural Addresses:
  * http://avalon.law.yale.edu/subject_menus/inaug.asp
  * http://www.presidency.ucsb.edu/inaugurals.php

## vice_presidents

People who have held the position of the Vice President of the United States of America

* General information: https://en.wikipedia.org/wiki/List_of_Vice_Presidents_of_the_United_States

## states

* General information from wikipedia: https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States.
* Population data from US census:
  * 1900-1909: https://www2.census.gov/programs-surveys/popest/tables/1980-1990/state/asrh/st0009ts.txt
  * 1910-1919: https://www2.census.gov/programs-surveys/popest/tables/1980-1990/state/asrh/st1019ts.txt


## Notes

Resized images with the following:

    magick convert rose.jpg rose.png
    rm *.png
    magick mogrify -resize 800x1024^ *.jpg
    magick mogrify -gravity north -crop 800x1024+0+0 *.jpg

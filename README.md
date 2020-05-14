# Ubooquity enhanced Plex based theme with all currently reading comics list and more


Ubooquity is great to acces all your comics library from your tablet or computer but the missing piece was a "currently reading" list of comics.

This theme intend to add this fonctionnality and some more :
- show all currently reading comics
- show all comics already reads
- show all comics you want to read
- deduplicate PDF / CBR / CBZ
- show progress indicators on comics

To use these features, it is very easy :
- if a comic bookmark is at page 2, it is considered as "want to read",
- if a comic bookmark is at the last page, it is considered as "read"
- if a comic bookmark is between page 3 and last page - 1, it is considered as "currenly reading"

Because Ubooquity program doesn't provide a way to list all currently reading comics by itself, this theme needs to scan the database (through some API) comic by comic which take time (around 10s for 1000 comics). To avoid scanning each time, there is now a cache system included. Then it is fast to get the currently reading comics. And you could clear the cache from time to time when it is too old (update link).

# Installation

To install the theme, just download or git clone it, unzip it in the "themes" folder of your Ubooquity program. Select this theme in the Ubooquity admin page. And push "save ans restart" button on the top right of the admin page.

If your Ubooquity library is quite old (> 1 year ?) and/or quite big (>2000 comics) and you want to speed up the creation of the lists, you could rebuil the database (Ubooquity admin, at your own risks).

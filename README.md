# Obligatorisk-opgave-1-Dropbox-REST-API
//Dropbox API Dokumentation: https://www.dropbox.com/developers/documentation/http/documentation#files-move


Øvelse 2: Opret en mappe
Dokumentation: I din README-fil, angiv det anvendte endpoint (url) og HTTP-verb du har brugt.
Beskriv desuden hvad du evt. har skrevet i body i dit request og det svar du har fået tilbage fra API'en.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface"
i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Jeg anvendte følgende url: https://api.dropboxapi.com/2/files/create_folder_v2
Brugte HTTP verb POST
Jeg skrev "{"path": "/TestMappe"}" og fik følgende svar {
"metadata": {
"name": "TestMappe",
"path_lower": "/testmappe",
"path_display": "/TestMappe",
"id": "id:RVTU6FB2pkAAAAAAAAABEQ"
}
}
Status 202 OK

Dette flow er i overenstemmelse med princippet om uniform interface, da der anvendes en URL og et HTTP-verb "POST" og til sidst en status.


Øvelse 3: Hent mappe detaljer
Dokumentation: I din README, noter endpointet, HTTP-verbet, request body (vis nogen) og det response du har fået tilbage inkl. status kode.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface" i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Jeg anvendte følgende url: https://api.dropboxapi.com/2/files/get_metadata
HTTP-verbet POST
Request body:
{
"include_deleted": false,
"include_has_explicit_shared_members": false,
"include_media_info": false,
"path": "/TestMappe"
}
Response: {
".tag": "folder",
"name": "TestMappe",
"path_lower": "/testmappe",
"path_display": "/TestMappe",
"id": "id:RVTU6FB2pkAAAAAAAAABEQ"
}

Status code: 200 OK

Dette flow er ikke overenstemmelse med princippet om uniform interface, da der anvendes HTTP-verbet "POST" i stedet for "GET". "GET" burde anvendes i stedet.

Øvelse 4: Upload en fil
Dokumentation: I din README, beskriv endpointet, HTTP-verbet, og hvordan du uploadede filen.

Jeg anvender følgende endpoint: https://content.dropboxapi.com/2/files/upload
HTTP-verbet: POST
Jeg anvendte Dropbox-API-Arg her skulle jeg indsætte følgende parameter
{  "autorename": false,  "mode": "add",  "mute": false,  "path": "/Testmappe/MinFil.txt",  "strict_conflict": false}
Content-Type skulle være application/octet-stream
I body skulle det skrives ind som text i stedet for JSON
Jeg fik følgende respons med status koden 200 OK
{
"name": "MinFil.txt",
"path_lower": "/testmappe/minfil.txt",
"path_display": "/TestMappe/MinFil.txt",
"id": "id:RVTU6FB2pkAAAAAAAAABEw",
"client_modified": "2023-09-06T08:16:59Z",
"server_modified": "2023-09-06T08:16:59Z",
"rev": "01604ac5e1200d500000001763d9000",
"size": 138,
"is_downloadable": true,
"content_hash": "3771038063431e2c04110dc960b363607ff2031a64b8211ee1c264f36891b244"
}

Øvelse 5: Slet en fil
Dokumentation: I din README, beskriv endpointet, HTTP-verbet, og stien på den fil, du slettede.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface"
i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Jeg anvendte følgende endpoint: https://api.dropboxapi.com/2/files/delete_v2
HTTP-verbet POST og stien på min fil var følgende {
"path": "/TestMappe/MinFil.txt"
}
Dette flow er ikke i overenstemmelse med princippet om "uniform interface", da "POST" anvendes i stedet "DELETE". "DELETE" burde anvendes i stedet.

Øvelse 7: Søg efter filer
Dokumentation: I din README, noter endpointet, HTTP-verbet, request body, response body og status kode.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface"
i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Endpointet: https://api.dropboxapi.com/2/files/search_v2
HTTP-verbet "POST"
Body: {
"match_field_options": {
"include_highlights": false
},
"options": {
"file_status": "active",
"filename_only": false,
"max_results": 20,
"path": "/TestMappe"
},
"query": "NonExistningFile"
}

Response Body: {
"has_more": false,
"matches": []
}

Status kode: 200 OK

Response giver mening, da jeg søger efter en fil ved navn "NonExistningFile",
jeg får så et tomt arrat i "matches",
da filen eller filer med et lignende navn ikke findes.

Dette flow er ikke i overenstemmelse med princippet om "uniform interface", da "POST" anvendes i stedet "GET". "GET" burde anvendes i stedet.


Øvelse 8: Flyt en fil

Dokumentation: Dokumenter endpointet, HTTP-verbet, request body, response body og status kode.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface"
i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Jeg har anvendt endpointet: https://api.dropboxapi.com/2/files/move_v2
HTTP-verbet "POST"
request body:
{
"allow_ownership_transfer": false,
"allow_shared_folder": false,
"autorename": false,
"from_path": "/TestMappe/MinFil.txt",
"to_path": "/TestMappe/TestMappeV2/MinFil.txt"
}

response body:
{
"metadata": {
".tag": "file",
"name": "MinFil.txt",
"path_lower": "/testmappe/testmappev2/minfil.txt",
"path_display": "/TestMappe/TestMappeV2/MinFil.txt",
"id": "id:RVTU6FB2pkAAAAAAAAABFA",
"client_modified": "2023-09-06T08:52:15Z",
"server_modified": "2023-09-06T08:53:09Z",
"rev": "01604acdf64153e00000001763d9000",
"size": 141,
"is_downloadable": true,
"content_hash": "4a50b89639547256239b686a3b91b518e3972505a60ee589308eea7e1d8e8649"
}
}

Status kode: 200 OK

Dette flow er ikke i overenstemmelse med princippet om "uniform interface", da "POST" anvendes i stedet "PUT". "PUT" burde anvendes i stedet.

Øvelse 9: Kopier en fil
Dokumentation: I din README, beskriv endpointet, HTTP-verbet, request body, response body og status kode.
Beskriv desuden kort om dette flow er i overenstemmelse med princippet om "uniform interface"
i REST principperne, og hvis ikke hvad der så kunne gøres bedre.

Endpoint: https://api.dropboxapi.com/2/files/copy_v2
HTTP-verbet: "POST"
Request body:
{
"allow_ownership_transfer": false,
"allow_shared_folder": false,
"autorename": false,
"from_path": "/TestMappe/TestMappeV2/MinFil.txt",
"to_path": "/TestMappe/MinFil.txt"
}

Response body:
{
"metadata": {
".tag": "file",
"name": "MinFil.txt",
"path_lower": "/testmappe/minfil.txt",
"path_display": "/TestMappe/MinFil.txt",
"id": "id:RVTU6FB2pkAAAAAAAAABFQ",
"client_modified": "2023-09-06T08:52:15Z",
"server_modified": "2023-09-06T09:02:40Z",
"rev": "01604ad016e807600000001763d9000",
"size": 141,
"is_downloadable": true,
"content_hash": "4a50b89639547256239b686a3b91b518e3972505a60ee589308eea7e1d8e8649"
}
}

Status kode: 200 OK

Dette flow er ikke i overenstemmelse med princippet om "uniform interface", da "POST" anvendes i stedet "PUT". "PUT" burde anvendes i stedet.

Øvelse 10: Brug JavaScript's Fetch med Dropbox API
Dokumentation: I dit repository inkluder den JavaScript-kode og html, du har skrevet.
HUSK: du må ikke ligge din “Access Token” på github, så slet den inden du pusher din kode.

Github link:


Øvelse 11: Er https://api.dropboxapi.com/2/ Restfull or not?
Beskriv til sidst kort hvad du tænker om API´et i forhold til REST “constraints”.
Hvordan er det i feks. i forhold til “Uniform Interface” og hvad gør det for din oplevelse af at bruge API´et?

https://api.dropboxapi.com/2/ er ikke RESTfull, da det ikke anvende de korrekte HTTP-verber.
Det er lidt mærkeligt/forvirrende, at man skal bruge "POST" til alle øvelserne.


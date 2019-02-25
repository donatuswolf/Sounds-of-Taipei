# Sounds of Taipei

NTUT · National Taipei University of Technology  
International Program for Interaction Design and Innovation  
Special Topics on Interactive Media Design (II)

Projcet by:  
[Johanna Komesker](https://www.behance.net/johannakomesker)  
[Mona Ruppert](https://www.behance.net/Monarupperf19f)  
[Patrick Schneider](https://www.linkedin.com/in/padschneider)  
[Donatus Wolf](https://donatuswolf.de)

1st week assignment  
February 19th – 26th 2019

[![preview screenshot](/assets/preview.png)](https://donatuswolf.com/sounds-of-taipei)
Go to website [donatuswolf.com/sounds-of-taipei](https://donatuswolf.com/sounds-of-taipei)

Libraries used
-
* [leaflet.js v1.4](https://leafletjs.com)
* [jquery.js v3.2.1](https://jquery.com)



Database structure `places.json`
-

`id`:exact name of the sound file </br>
sound file needs to be at *./assets/sounds*

`vol`:  how lound the song should be played on a scale from 0 (no sound) to 1 (maximum)

`db`:   how loud the song is on a scale from 0 to 1  </br>
        that creates the size of the circle when hovered

`x`:   Latitude coordinate 

`y`:   Longitude coordinate

`type`: there are three types right now: </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `location`: a location specific sound like the bird street </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `city`: a sound, that is specific for taipei, but not for a specific location, like the *peep* at the MRT entrance </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `event`: a sound that is only there at an specific event, like the lantern festival

`time`: was the sound recorded by `day`or by `night`?

`author`: Who recorded the sound  </br>
first letter from the frist name, first and second from the last name  </br>
Ex: **D**oantus **Wo**lf = `DWo`


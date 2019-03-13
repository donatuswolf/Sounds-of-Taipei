# Sounds of Taipei

An interactive map of Taipei that let's you explore the city through its unique sounds.


NTUT · National Taipei University of Technology  
International Program for Interaction Design and Innovation  
Special Topics on Interactive Media Design (II)

Project by:  
<a href="https://www.behance.net/johannakomesker" target="_blank">Johanna Komesker</a>  
<a href="https://www.behance.net/Monarupperf19f" target="_blank">Mona Ruppert</a>  
<a href="https://www.linkedin.com/in/padschneider" target="_blank">Patrick Schneider</a>  
<a href="https://donatuswolf.de" target="_blank">Donatus Wolf</a>  

1st week assignment  
February 19th – 26th 2019

[![preview screenshot](/assets/preview.png)](https://donatuswolf.github.io/Sounds-of-Taipei/)  
 <a href="https://donatuswolf.github.io/Sounds-of-Taipei/" target="_blank">Go to website</a> 

Libraries used
-

* <a href="https://leafletjs.com" target="_blank">leaflet.js v1.4</a>
* <a href="https://jquery.com" target="_blank">jquery.js v3.2.1</a>



Database structure `places.json`
-

`id`: exact name of the sound and photo file – name in camelCase   
sound file needs to be at *./assets/sounds*  
photo file needs to be at *./assets/photos* in *jpg (600 x 400px)

`label`: the description of the audio which will be displayed on the photo

`googlemaps`: the shortlink to the location on google maps, which opens when doubleclicking a dot

`vol`:  how lound the song should be played on a scale from 0 (no sound) to 1 (maximum)

`db`:   how loud the song is on a scale from 0 to 1   
        that creates the size of the circle when hovered

`x`:   Latitude coordinate 

`y`:   Longitude coordinate

`type`: there are three types right now:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `location`: a location specific sound like the bird street  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `city`: a sound, that is specific for taipei, but not for a specific location, like the *peep* at the MRT entrance  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `event`: a sound that is only there at an specific event, like the lantern festival

`time`: was the sound recorded by `day`or by `night`?

`author`: Who recorded the sound   
first letter from the frist name, first and second from the last name   
Ex: **D**onatus **Wo**lf = `DWo`


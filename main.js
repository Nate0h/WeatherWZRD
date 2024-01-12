(()=>{"use strict";const e=new Map([[1e3,113],[1003,116],[1006,119],[1030,143],[1063,176],[1066,179],[1069,182],[1072,185],[1087,200],[1114,227],[1117,230],[1135,248],[1147,260],[1150,263],[1153,266],[1168,281],[1171,284],[1180,293],[1183,296],[1186,299],[1189,302],[1192,305],[1195,308],[1198,311],[1201,314],[1204,317],[1207,320],[1210,323],[1213,326],[1216,329],[1219,332],[1222,335],[1225,338],[1237,350],[1240,353],[1243,356],[1246,359],[1249,362],[1252,365],[1255,368],[1258,371],[1261,374],[1264,377],[1273,386],[1276,389],[1279,392],[1282,395]]),t=document.getElementById("form"),n=document.getElementById("location"),o=document.querySelector(".city"),r=document.querySelector(".country"),c=document.querySelector(".time"),i=document.querySelector(".temperature .temp-data"),a=document.querySelector(".state"),u=document.querySelector(".weather-descr .temp-data"),d=document.querySelector(".weather-icon");t.addEventListener("submit",(t=>{t.preventDefault(),async function(t){try{const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=e3a2a8b3e8d34b518f0225440240901&q=${t}`,{mode:"cors"}),m=await n.json(),l=function(e){const t=e.location.localtime;return{city:e.location.name,country:e.location.country,time:t,weatherCondition:e.current.condition.text,weatherCode:e.current.condition.code,tempF:e.current.temp_f,tempC:e.current.temp_c,feelsLikeF:e.current.feelslike_f,feelsLikeC:e.current.feelslike_c,windMPH:e.current.wind_mph,windKPH:e.current.wind_kph,humidity:e.current.humidity,UV:e.current.uv,isDay:e.current.is_day}}(m);!function(t){o.textContent=t.city,r.textContent=t.country,c.textContent=t.time,i.textContent=t.tempF,u.textContent=t.feelsLikeF,a.textContent=t.weatherCondition,t.isDay?d.src=`./images/day/${e.get(t.weatherCode)}.png`:d.src=`./images/night/${e.get(t.weatherCode)}.png`}(l),console.log(m)}catch(e){alert("Location Not Found.\nPlease make sure search is a valid Zipcode, City, State or Country"),console.log(e)}}(n.value),n.value=""}))})();
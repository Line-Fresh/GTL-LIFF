import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import MapGL, {NavigationControl, ScaleControl, GeolocateControl,LinearInterpolator} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import HashLoader from 'react-spinners/HashLoader';
import {Marker} from 'react-map-gl'; 
import Pins from './Pins'
import locateimg from '../img/locate.jpg'
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
/* eslint import/no-webpack-loader-syntax: off */
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;



const Data = [
  {
    id: 0,
    answer: "hello",
    name:"青埔落羽松秘境",
    locations: "雲林縣虎尾鎮青埔2-29號外",
    time: "全天",
    intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
    short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
    game: "在某一顆落羽松下的石旁，請掃qr code",
    short_game: "QR 酷",
    picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg",
    latitude : 23.701820861893435, 
    longitude : 120.44524413127517
  },
  {
    id: 1,
    answer: "hello",
    name:"雲林布袋戲館",
    locations: "雲林縣虎尾鎮林森路一段498號",
    time: "週三~週日AM10:00 ~ PM18:00",
    intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
    short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
    game: "請數出主場館左邊第一個櫥窗裡面有幾個布袋戲偶",
    short_game: "我愛數數兒",
    picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg",
    latitude : 23.709478041739562, 
    longitude : 120.43371900127292
  },
  {
    id: 2,
    answer: "hello",
    name:"虎尾驛",
    locations: "雲林縣虎尾鎮中山路10號",
    time: "週二~週日9:00~18:00",
    intro: "虎尾驛為中華民國雲林縣虎尾鎮一已廢棄木造火車站，原是虎尾糖廠小火車車站，亦為糖鐵北港線、雲虎線、西螺線、崙背線及莿桐線等的重要車站。虎尾驛建於台灣日治時期，最早稱為五間厝驛，大正九年（西元1920年）後改為現名，中華民國政府接收台灣後曾改名虎尾車站，曾因為貨運量增加而另尋他地興建新站[1]。虎尾驛是虎尾地區早年重要的交通動線，也有客運巴士至虎尾驛接送旅客，因此日治時期虎尾驛一帶是虎尾最繁榮熱鬧的市中心。該建築於2010年1月15日公告為歷史建築[2]，現在用作虎尾遊客中心。",
    short_intro: "虎尾驛為全國唯一與糖業鐵道文化結合，保存文化產業資產的古蹟。",
    game: "與館員合照並和他領取通關碼",
    short_game: "館員調查線",
    picUrl: "https://i2.wp.com/ivychi.com/wp-content/uploads/20201104123257_57.jpg",
    latitude : 23.70449645003316,
    longitude : 120.43654198160961
  }
]



const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 23.70449645003316,
    longitude: 120.43654198160961,
    zoom: 13
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZmhqMDYwNCIsImEiOiJja3dqMW5qbWIxZHJmMm9tanp1Yjd6ZWllIn0.EPqTtBWOdRwQLTnRByTMFA";

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 2000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );
  if ("geolocation" in navigator) { 
    navigator.geolocation.getCurrentPosition(position => { 
        console.log(position.coords.latitude, position.coords.longitude); 
    });
  } 
  return (
    <div>
        <div style={{ height: "75vh" }}>
        <MapGL
                    ref={mapRef}
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    width="100%"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    transitionInterpolator={new LinearInterpolator()}
              > 
              {
                Data.map((info) => (
                  <Pins info={info} />
                ))

              }
              {/* <Pins Data={Data} ></Pins>               */}
              <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="top-left"
                    style={{right:'50px',top:'10px'}}
              />
              {/* <div className="map-sidebar" style={{left:'90px', bottom:'0px'}}>
                        Longitude: {viewport.longitude} | Latitude: {viewport.latitude} | Zoom: {viewport.zoom}
                    </div> */}
              <NavigationControl style={{right:'10px',top:'10px'}}/>
              <ScaleControl maxWidth={100} unit="metric" style={{right:'10px', bottom:'25px'}}/>
              <GeolocateControl style={{right:'10px', top:'120px'}} positionOptions={{enableHighAccuracy: true}} trackUserLocation={false}/>
        </MapGL>
        </div>
    </div>
  );
}

export default Map;
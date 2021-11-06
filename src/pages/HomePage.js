import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import Progress from '../components/Progress';
import Select from '../components/Select';
import Rank from '../components/Rank';
import Games from '../components/Games';
import Map from '../components/Map';
import { Divider, Container } from '@mui/material';
import { StickyContainer, Sticky } from 'react-sticky';
// map fake data
const map_data = {
  total: 3,
  games: [
    {
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "一二三木頭人",
      short_game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "四五六木頭人",
      short_game: "四五六木頭人",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
    {
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "一二三木頭人",
      short_game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "四五六木頭人",
      short_game: "四五六木頭人",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
    {
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "一二三木頭人",
      short_game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "四五六木頭人",
      short_game: "四五六木頭人",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
    {
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "一二三木頭人",
      short_game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "四五六木頭人",
      short_game: "四五六木頭人",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
  ]
}

const HomePage = (props) => {
  const {profile} = props;
  const [mode, setMode] = useState(0);

  // user data
  const user_data = {
    total: 2,
    details: [true, false, true, true, false, true, true, false]
  }

  const progress = 100*user_data.total/map_data.total

  return (
    <Container maxWidth="sm">
      <StickyContainer>
        <Sticky>
        {({
            style,
          }) => (
            <div style={style}>
              <div style={{backgroundColor: "white"}}>
                <Profile profile={profile} />
                <Progress progress={progress}/>
                <Divider style={{paddingTop: '3px'}}/>
                <Select mode={mode} setMode={setMode}/>
              </div>
            </div>
          )}
        </Sticky>
        <div style={{padding: "10px"}}>
          {(mode === 0) && <Games map_data={map_data} user_data={user_data}/>}
          {(mode === 1) && <Rank map_data={map_data} user_data={user_data}/>}
          {(mode === 2) && <Map map_data={map_data} user_data={user_data}/>}
        </div>
      </StickyContainer>
    </Container>
  );
}

export default HomePage;
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
  total: 6,
  games: [
    {
      id: 0,
      answer: "hello",
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "在某一顆落羽松下的石旁，請掃qr code",
      short_game: "QR 酷",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
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
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
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
      picUrl: "https://i2.wp.com/ivychi.com/wp-content/uploads/20201104123257_57.jpg"
    },
    {
      id: 3,
      answer: "hello",
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "與館員合照並和他領取通關碼",
      short_game: "館員調查線",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
    {
      id: 4,
      answer: "hello",
      name:"青埔落羽松",
      locations: "雲林縣虎尾鎮青埔2-29號外",
      time: "全天",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      short_intro: "落羽松澄紅的色彩，一直是秋天最受歡迎的景色。",
      game: "在某一顆落羽松下的石旁，請掃qr code",
      short_game: "QR 酷",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      id: 5,
      answer: "hello",
      name:"雲林布袋戲館",
      locations: "雲林縣虎尾鎮林森路一段498號",
      time: "週三~週日AM10:00 ~ PM18:00",
      intro: "雲林布袋戲館原為虎尾郡役所，落成於昭和六年(西元1931年)，佔地七百餘坪，是一棟三合院、二層樓的半木造的廳舍，為虎尾地區最具氣勢的官方建築。民國34年日本戰敗，國民政府接收台灣後，郡役所改為區公所，民國79年後閒置。民國86年虎尾舉辦「虎溪躍渡大崙腳」全國文藝季，讓世人重新認識虎尾郡役所的價值，透過地方人士林燦弘、林文彬等人的極力爭取保留下，該所在三年後登錄為雲林縣歷史建築終免除被拆的命運，並隨之規劃為虎尾地方重要的傳統藝術─布袋戲主題館，讓有「布袋戲故鄉」之稱的虎尾突顯出地方特色。",
      short_intro: "館內保存舊時建築，推廣傳統布袋戲文化。",
      game: "與館員合照並和他領取通關碼",
      short_game: "館員調查線",
      picUrl: "http://pic.pimg.tw/bluehawaii/1367123495-442909980.jpg"
    },
  ]
}

const rank_data = {
  total: 10,
  users:[
    {
      name: "Java",
      total: 6,
    },
    {
      name: "Javascript",
      total: 7,
    },
    {
      name: "Python",
      total: 8,
    },
    {
      name: "C++",
      total: 10,
    },
    {
      name: "C",
      total: 5,
    },
    {
      name: "R",
      total: 6,
    },
    {
      name: "C#",
      total: 5
    }
  ]
}

const usr_data = {
  total: 3,
  details: [false, false, true, true, false, true]
}

const HomePage = (props) => {
  const {profile} = props;
  const [mode, setMode] = useState(0);
  const[user_data, setUserdata] = useState(usr_data);

  // user data
  const reply= (reply, game_id) => {
    if(reply == map_data.games[game_id].answer){
      let n_details = [...user_data.details]
      n_details[game_id] = true
      let n_total = user_data.total+1
      setUserdata({total: n_total, details: n_details})
      alert('Success!')
    }
    else{
      alert('Wrong Answer QQ')
    }
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
          {(mode === 0) && <Games map_data={map_data} user_data={user_data} reply={reply}/>}
          {(mode === 1) && <Rank rank_data={rank_data} user_data={user_data}/>}
          {(mode === 2) && <Map map_data={map_data} user_data={user_data}/>}
        </div>
      </StickyContainer>
    </Container>
  );
}

export default HomePage;
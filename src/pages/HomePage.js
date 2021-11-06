import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import Progress from '../components/Progress';
import Select from '../components/Select';
import { Divider, Container } from '@mui/material';

// map fake data
const map_data = {
  total: 3,
  checkpoints: [
    {
      locations: "雲林縣虎尾鎮青埔2-29號外",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      locations: "雲林縣虎尾鎮青埔2-29號外",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
    {
      locations: "雲林縣虎尾鎮青埔2-29號外",
      intro: "青埔落羽松秘境為前雲林縣長張榮味的私人庭園，位在虎尾糖廠附近的虎尾鐵橋東側河堤路旁，庭園內有人造小土丘高低起伏的規劃，低漥處有著小水池將落羽松與天空倒映在水中，形成如同北歐國家般的美麗。",
      game: "一二三木頭人",
      picUrl: "https://cdn2.ettoday.net/images/3634/d3634820.jpg"
    },
  ]
}


const HomePage = (props) => {
  const {profile} = props;
  const [mode, setMode] = useState(0);

  // user data
  const usr_data = {
    total: 2,
    details: [true, false, true]
  }

  const progress = 100*usr_data.total/map_data.total

  return (
    <Container maxWidth="sm">
      <div>
        <Profile profile={profile} />
        <Progress progress={progress}/>
        <Divider style={{paddingTop: '3px'}}/>
        <Select mode={mode} setMode={setMode}/>
      </div>
    </Container>
  );
}

export default HomePage;
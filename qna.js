// 질문 //
const qna = [
  {
    question: "당신의 성별은??",
    type: "MW",
    a1: "남자",
    a2: "여자"
  },
  {
    question: "머리를 잘라야 할 때가 됐다면 나는?",
    type: "EI",
    a1: "자르러 나간김에 친구들이랑 만나야지~",
    a2: "나가기 귀찮은데 이번 기회에 길러볼까.."
  },
  {
    question: "새로운 머리 스타일을 하기로 결심했을 때 나는?",
    type: "SN",
    a1: "결심한 머리 외에도 다른 머리 스타일도 찾아본다.",
    a2: "뭘 찾아 그냥 하기로 한 머리를 하러 간다."
  },
  {
    question: "친구가 머리가 망해서 우울해한다면 나는?",
    type: "TF",
    a1: "어디 미용실인데? 니가 어떻게 잘라 달라고 했는데?",
    a2: "진짜 나도 그 마음 알아 진짜 우울하겠다 ㅠㅠ"
  },
  {
    question: "미용사가 어떻게 잘라 드릴까요? 라고 묻는다면 나는?",
    type: "JP",
    a1: "앞머리는 눈썹 기준으로 얼마.. 길이는 얼마.. 잘라주세요.",
    a2: "그냥 다듬어 주세요."
  },
  {
    question: "처음보는 미용사가 자꾸 말을 건다면 나는?",
    type: "EI",
    a1: "같이 맞장구 치면서 얘기한다.",
    a2: "'그만 말걸었으면..' 최소한의 대답만 한다."
  },
  {
    question: "친구가 미용실이 어디냐고 묻는다면 나는?",
    type: "SN",
    a1: "어디 사거리에서 어느 방향으로 오다가 몇번째 골목에서.. 몇번째 건물 몇층이야.",
    a2: "어 여기 어디 앞에 있어"
  },
  {
    question: "미용사가 머리를 자르고 나서 어떠냐고 물어보는데 마음에 들지 않는다면 나는?",
    type: "TF",
    a1: "이 부분이 조금 더 잘라주셨으면 하고, 이 부분은 이렇게 해주세요.",
    a2: "괜찮아요!! 감사합니다. 하고 집에와서 친구한테 연락한다."
  },
  {
    question: "미용실을 4시에 예약을 했다면 나는?",
    type: "JP",
    a1: "어떤 일이 있을지 모르니 일찍 가서 기다린다.",
    a2: "4시에 턱걸이로 도착하거나 늦는다."
  },
  {
    question: "동네 술집에서 술을 먹는데 내 머리를 잘라준 미용사가 있다면 나는?",
    type: "EI",
    a1: "반가워서 먼저 인사하고 얘기한다.",
    a2: "먼저 인사해주면 받아주지만 굳이 먼저 아는 척 하지 않는다."
  },
  {
    question: "파마를 하고 있는데 열처리기가 끝났는데 아무도 오지 않는다 나는?",
    type: "SN",
    a1: "무슨일이 있나보다..",
    a2: "아 늦게 풀어서 더 곱슬거리면 어쩌지? 미용사분이 화장실에 넘어졌으면 어쩌지?"
  },
  {
    question: "친구가 무지개색으로 염색하고 왔다면 나는?",
    type: "TF",
    a1: "색은 이쁜데 너무 튀는거 아니냐?",
    a2: "개성있고 너무 이쁘다 진짜!!"
  },
  {
    question: "염색하려고 하는데 색상을 고른다면?",
    type: "JP",
    a1: "미리미리 검색해서 자신이 원하는 색상을 정해 놓는다.",
    a2: "염색하기 직전까지 색깔을 고민한다."
  }
]

// 결과 값 //
const value = {
  MW: 0,
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0
}

//결과 content//
const results = {
  ESFP : {
    title : "세미울프컷 한<br>자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ESFP : {
    title : "세미울프컷 한 자유로운 꾸러기",
    feature : "",
    good : "",
    bad : "", 
    imgsrc : ["ESFPM", "ESFPW"]
  }
}
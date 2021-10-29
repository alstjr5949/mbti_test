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
    titleM : "세미울프컷 한<br>자유로운 꾸러기",
    titleW : "레아펌 한<br>자유로운 꾸러기",
    feature : "<span>✂︎</span>긍정적인 에너지가 뿜뿜해요! <br><br> <span>✂︎</span>하고 싶은 건 전부 해야하는 성격이에요. <br><br> <span>✂︎</span>귀가 얇고 성격이 급해요. <br><br>  <span>✂︎</span>혼자있는게 너무너무 싫어요.",
    good : "GOOD : ISFJ, ISTJ",
    bad : "BAD : INFP, ENFP, INFJ, ENFJ", 
    imgsrc : ["ESFPM", "ESFPW"]
  },
  ENFJ : {
    titleM : "아이비리그컷 한<br>정많은 리더",
    titleW : "프리다컷 한<br>정많은 리더",
    feature : "<span>✂︎</span>언어의 마술사!! 사람의 마음을 말로 움직여요. <br><br> <span>✂︎</span>긍정적이고 인기가 많아요. <br><br> <span>✂︎</span>정이 많지만 배신 당하면 칼같이 잘라내요 <br><br> <span>✂︎</span>싸움이 일어나면 팩트를 연사로 꽂아요.",
    good : "GOOD : INFP, ISFP",
    bad : "BAD : ESTJ, ESFJ, ISTP, ESTP", 
    imgsrc : ["ENFJM", "ENFJW"]
  },
  ENFP : {
    titleM : "트렌트 리프컷 한<br>핫한건 해보는 인기인",
    titleW : "히메컷 한<br>핫한건 해보는 인기인",
    feature : "<span>✂︎</span>싫음과 좋음이 확실한 똑부러지는 성격이에요. <br><br> <span>✂︎</span>어색한 분위기를 풀어주는 인싸이지만 친한 친구들과 함께 있으면 쭈구리에요. <br><br> <span>✂︎</span>집을 사랑하는 하우스러버입니다. <br><br> <span>✂︎</span>밝고 쾌활한 웃음 뒤에 말하지 않는 고민들이 있어요.",
    good : "GOOD : INFJ, INTJ",
    bad : "BAD : ESTJ, ISFP, ESFJ, ISTP", 
    imgsrc : ["ENFPM", "ENFPW"]
  },
  ENTJ : {
    titleM : "가일컷 한<br>야망있는 지도자",
    titleW : "버드컷 한<br>야망있는 지도자",
    feature : "<span>✂︎</span>책임감이 뛰어나 타고난 리더 자질을 갖고 있어요. <br><br> <span>✂︎</span>하기 싫은건 죽어도 하지 않아요. <br><br> <span>✂︎</span>자신감과 자립감이 넘쳐 흘러요. <br><br> <span>✂︎</span>지고는 못 사는 성격이에요.",
    good : "GOOD : INFJ, INTJ",
    bad : "BAD : 누가와도 괜찮아~", 
    imgsrc : ["ENTJM", "ENTJW"]
  },
  ESFJ : {
    titleM : "스핀스왈로펌 한<br>현실적인 사랑꾼",
    titleW : "포그펌 한<br>현실적인 사랑꾼",
    feature : "<span>✂︎</span>연애를 시작하면 푹 빠져서 사랑을 하는 사랑꾼이에요. <br><br> <span>✂︎</span>사람들을 좋아해서 주변 사람들의 분위기에 따라 감정기복에 심해요 <br><br> <span>✂︎</span>사회생활 만렙이에요. <br><br> <span>✂︎</span>모든 친구들의 고민 상담소!",
    good : "GOOD : ISFP, ISTP",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ESFJM", "ESFJW"]
  },
  ESTJ : {
    titleM : "스왓컷 한<br>디테일한 설명충",
    titleW : "올림머리 한<br>디테일한 설명충",
    feature : "<span>✂︎</span>악법도 법이다. 완전 원리원칙 주의에요. <br><br> <span>✂︎</span>모든 일을 철저하게 계획적으로 구상하고 실행해요. <br><br> <span>✂︎</span>자기 관리 또한 철저해요. <br><br> <span>✂︎</span>융통성이 없고 결과지향적이에요.",
    good : "GOOD : ISTP, ISFP",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ESTJM", "ESTJW"]
  },
  ENTP : {
    titleM : "가르마펌 한<br>객관적인 팔방미인",
    titleW : "샌드펌 한<br>객관적인 팔방미인",
    feature : "<span>✂︎</span>무슨 일을 해도 평균이상인 당신!! 역시 팔방미인이에요. <br><br> <span>✂︎</span>아이디어가 차고 넘치는 아이디어 뱅크에요. <br><br> <span>✂︎</span>꼰대문화 극혐해요. 정해진 틀, 반복적인 일, 지시 으.. 극혐. <br><br> <span>✂︎</span>아이디어도 많고 여러 방면에 관심이 많지만 집중력이 부족해 시작한 일을 끝내지 못해요.",
    good : "GOOD : INFJ, INTJ",
    bad : "BAD : 누가와도 괜찮아~", 
    imgsrc : ["ENTPM", "ENTPW"]
  },
  ESTP : {
    titleM : "장발머리 한<br>다재다능한 욜로",
    titleW : "윈드펌 한<br>다재다능한 욜로",
    feature : "<span>✂︎</span>생각보다 말이 먼저 말보다 행동이 먼저!!<br><br> <span>✂︎</span>스릴을 좋아하는 변태끼가 있어요. <br><br> <span>✂︎</span>내일의 나야 미안해.. 일을 미루고 미루다 마지막에 폭발적으로 해요. <br><br> <span>✂︎</span>통제를 너무 싫어하고 자유로운 상태일 때 훨씬 좋은 능력을 발휘해요.",
    good : "GOOD : ISFJ, ISTJ",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ESTPM", "ESTPW"]
  },
  INFJ : {
    titleM : "리젠트컷 한<br>멀티안되는 패셔니스타",
    titleW : "타미펌 한<br>멀티안되는 패셔니스타",
    feature : "<span>✂︎</span>다소 내성적인 성격이라 겉으로는 속을 알 수 없으나 대부분 겉은 차갑고 속은 따듯한 겉바속촉 스타일이에요.<br><br> <span>✂︎</span>인내심이 많고 배려가 몸에 배어있어요. <br><br> <span>✂︎</span>이상주의적, 완벽주의적 성향을 추구해 일을 시작하기 전에 머릿속으로 100번은 미리 시작해봐요. <br><br> <span>✂︎</span>자기를 비판하는 것에 민감한 편이에요.",
    good : "GOOD : ENFP, ENTP",
    bad : "BAD : ISFP, ESFP, ISTP, ESTP", 
    imgsrc : ["INFJM", "INFJW"]
  },
  INFP : {
    titleM : "소프트 리프컷 한<br>생각이 많은 내성적인 관종",
    titleW : "허쉬컷 한<br>생각이 많은 내성적인 관종",
    feature : "<span>✂︎</span>직접적으로 관심을 받는 것은 싫지만 친한 친구들에게는 관심과 애정을 끊이없이 요구해요. <br><br> <span>✂︎</span>게으른 완벽주의자에요. 일을 시작하는 것도 귀찮아하고, 시작했더라도 본인 계획대로 진행되지 않으면 다시 시작하는 것을 피해요. <br><br> <span>✂︎</span>자기 자신에 대한 평가가 엄격해요. <br><br> <span>✂︎</span>나의 개인사를 공개하는 것을 꺼려요.",
    good : "GOOD : ENFJ, ENTJ",
    bad : "BAD : ISFP, ESTJ, ESFJ, ISTP", 
    imgsrc : ["INFPM", "INFPW"]
  },
  INTJ : {
    titleM : "슬릭백 한<br>마이웨이 무신론자",
    titleW : "뉴트로블리치 한<br>마이웨이 무신론자",
    feature : "<span>✂︎</span>혼자있는 것을 좋아하는 완전한 개인주의자에요. <br><br> <span>✂︎</span>항상 내면에는 관종끼가 숨겨져 있어요. <br><br> <span>✂︎</span>자기 감정을 겉으로 표현하는게 불편해요. <br><br> <span>✂︎</span>연애할때 지나치게 분석하고 따지는 성격이에요.",
    good : "GOOD : ENFP, ENTP",
    bad : "BAD : 누가와도 괜찮아~", 
    imgsrc : ["INTJM", "INTJW"]
  },
  INTP : {
    titleM : "포멀펌 한<br>딴 생각하는 악당",
    titleW : "보니펌 한<br>딴 생각하는 악당",
    feature : "<span>✂︎</span>항상 졸리다면서 적정 수면시간을 지키지 않아요. <br><br> <span>✂︎</span>이런 유형의 테스트를 통한 자신에 대한 분석을 즐겨요. <br><br> <span>✂︎</span>자신만의 세계가 뚜렷해요. <br><br> <span>✂︎</span>매사를 분석하려는 경향이 있어 공감 능력이 떨어져요. 그래서 영혼 없는 리액션이 자주 나와요. <br><br> <span>✂︎</span>남에 대해 관심이 없어요.",
    good : "GOOD : ENTJ, ESTJ",
    bad : "BAD : 누가와도 괜찮아~", 
    imgsrc : ["INTPM", "INTPW"]
  },
  ISFJ : {
    titleM : "포마드 한<br>예민한 완벽주의자",
    titleW : "리프컷 한<br>예민한 완벽주의자",
    feature : "<span>✂︎</span>눈치가 빨라 분위기를 잘 파악하고 행동해요. <br><br> <span>✂︎</span>싸움과 갈등 상황을 불편해하고, 지켜보는 것 자체로도 스트레스를 받아요. <br><br> <span>✂︎</span>게으른 완벽주의자에요. <br><br> <span>✂︎</span>돈, 시간, 감정 등의 쓸모없는 낭비를 싫어해요. <br><br> <span>✂︎</span>외적으로 이상형인 사람이어도 인성이 좋지 않다면 아웃이에요.",
    good : "GOOD : ESFP, ESTP",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ISFJM", "ISFJW"]
  },
  ISFP : {
    titleM : "시스루 뱅 한<br>하고싶은 것만 하는 침대러버",
    titleW : "풀뱅 포니테일 한<br>하고싶은 것만 하는 침대러버",
    feature : "<span>✂︎</span>사람들 만나는 거 좋은데 싫어요. <br><br> <span>✂︎</span>침대와 물아일체 침대 뿐만 아니라 등을 붙일 곳이 있다면 어디든 누워있어요. <br><br> <span>✂︎</span>거절을 잘 하지 못하는 순둥이에요. <br><br> <span>✂︎</span>집착하는 것은 절대!! 극도로 싫어해요. <br><br> <span>✂︎</span>예술적인 감각이 있어요 <br><br> 칭찬 해주면 마음이 녹아내려요.",
    good : "GOOD : ESTJ, ESFJ",
    bad : "BAD : INFP, ENFP, INFJ", 
    imgsrc : ["ISFPM", "ISFPW"]
  },
  ISTJ : {
    titleM : "애즈펌 한<br>정직한 모범생",
    titleW : "클래식펌 한<br>정직한 모범생",
    feature : "<span>✂︎</span>책임감이 넘쳐나는 당신은 K-장남, K-장녀 느낌이에요. <br><br> <span>✂︎</span>낯가림이 심해 친해지기 어렵지만 친해지면 능구렁이에요. <br><br> <span>✂︎</span>참을성이 좋아 참고 참지만 한 번에 확 터뜨리는 편이에요. <br><br> <span>✂︎</span>반대 성향을 지닌 말이 많거나 감성적인 사람과는 원만히 지내다 결국 멀어져요. <br><br> <span>✂︎</span>사과를 잘 하지 못해요.",
    good : "GOOD : ESFP, ESTP",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ISTJM", "ISTJW"]
  },
  ISTP : {
    titleM : "댄디컷 한<br>의심 많은 동물애호가",
    titleW : "미스티펌 한<br>의심 많은 동물애호가",
    feature : "<span>✂︎</span>남에게 관심이 거의 없는 스타일이에요. <br><br> <span>✂︎</span>간단명료하게 말하는 걸 선호해요. <br><br> <span>✂︎</span>관심있는 분야에 대해선 신나게 말하지만 관심없는 분야는 거들떠 보지도 않아요. <br><br> <span>✂︎</span>가식을 떨지 않는 편이라 보이는 그대로가 본모습일 확률이 높아요. <br><br> <span>✂︎</span>무뚝뚝하지만 친해지면 따뜻한 반전매력의 소유자에요.",
    good : "GOOD : ESTJ, ESFJ",
    bad : "BAD : ENFJ, INFJ, INFP, ENFP", 
    imgsrc : ["ISTPM", "ISTPW"]
  }
}
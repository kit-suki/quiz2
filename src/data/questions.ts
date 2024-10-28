import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "より高い山はどちらでしょう？",
    explanation: "左の写真はエベレスト（8,848m）で、右の写真はマッターホルン（4,478m）です。エベレストは地球上で最も高い山です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    question: "より古い建造物はどちらでしょう？",
    explanation: "右の写真はピラミッド（紀元前2560年頃）で、左の写真はコロッセオ（西暦70-80年頃）です。ピラミッドの方が約2630年も古いです。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?w=400&h=300&fit=crop",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=400&h=300&fit=crop",
        isCorrect: true
      }
    ]
  },
  {
    id: 3,
    question: "より深い海はどちらでしょう？",
    explanation: "左の写真はマリアナ海溝（深さ約11,000m）で、右の写真は地中海（平均深さ約1,500m）です。マリアナ海溝は地球上で最も深い場所です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1580019542155-247062e19ce4?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  },
  {
    id: 4,
    question: "より寿命が長い動物はどちらでしょう？",
    explanation: "右の写真はガラパゴスゾウガメ（寿命約100年）で、左の写真はアフリカゾウ（寿命約60-70年）です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400&h=300&fit=crop",
        isCorrect: true
      }
    ]
  },
  {
    id: 5,
    question: "より速く走れる動物はどちらでしょう？",
    explanation: "左の写真はチーター（時速約110km）で、右の写真はライオン（時速約80km）です。チーターは地上最速の動物です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  },
  {
    id: 6,
    question: "より背の高い建物はどちらでしょう？",
    explanation: "左の写真はブルジュ・ハリファ（828m）で、右の写真は東京スカイツリー（634m）です。ブルジュ・ハリファは現在世界一高い建築物です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  },
  {
    id: 7,
    question: "より重い動物はどちらでしょう？",
    explanation: "右の写真はシロナガスクジラ（最大180トン）で、左の写真はアフリカゾウ（最大6トン）です。シロナガスクジラは地球最大の動物です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1568430462989-44163eb1b109?w=400&h=300&fit=crop",
        isCorrect: true
      }
    ]
  },
  {
    id: 8,
    question: "より広い砂漠はどちらでしょう？",
    explanation: "左の写真はサハラ砂漠（約900万km²）で、右の写真はゴビ砂漠（約130万km²）です。サハラ砂漠は世界最大の熱砂漠です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  },
  {
    id: 9,
    question: "より長い川はどちらでしょう？",
    explanation: "右の写真はナイル川（6,650km）で、左の写真はアマゾン川（6,400km）です。ナイル川は世界最長の川です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1629163330223-c183571735a1?w=400&h=300&fit=crop",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=400&h=300&fit=crop",
        isCorrect: true
      }
    ]
  },
  {
    id: 10,
    question: "より寒い場所はどちらでしょう？",
    explanation: "左の写真は南極（最低気温-89.2℃）で、右の写真はシベリア（最低気温-67.8℃）です。南極は地球上で最も寒い場所です。",
    options: [
      {
        imageUrl: "https://images.unsplash.com/photo-1517176118179-65244903d13c?w=400&h=300&fit=crop",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1601791074012-d4e0ee30d9a7?w=400&h=300&fit=crop",
        isCorrect: false
      }
    ]
  }
];
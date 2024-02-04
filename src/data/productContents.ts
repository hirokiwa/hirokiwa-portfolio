const products:{
  title: string,
  description: string,
  ogp: string,
  productionLink: string,
  tags: string[]
}[] = [
  {
    title: "関西弁でお届けする AIおじさん毎日ブログ",
    description: "生成AIと遊び心で構成された完全自動運用型のブログ",
    ogp: "https://github.com/hirokiwa/ai-blog-client/blob/main/public/top-image.png?raw=true",
    productionLink: " https://ai-blog.hirokiwa.com",
    tags: [
      "個人開発",
      "フロントエンド"
    ]
  },
  {
    title: "コピペでQR読み取りくん",
    description: "PCフレンドリーなQRコードリーダーです。",
    ogp: "https://raw.githubusercontent.com/hirokiwa/yomitorikun/develop/app/opengraph-image.jpg",
    productionLink: " https://yomitorikun.hirokiwa.com",
    tags: [
      "個人開発",
      "フロントエンド"
    ]
  },
  {
    title: "Alexture Diary",
    description: "Alexaに話しかけてAIで絵日記を生成します。",
    ogp: "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/708b5bd8188d1197fabe2f727be36bfd6259fcaa/src/image_data/messageImage_1672168230615.jpg",
    productionLink: "https://alexturediary.vercel.app/",
    tags: [
      "チーム開発",
      "アレクサ連携"
    ]
  },
  {
    title: "GPA Calculator",
    description: "立命館大学専用のGPA計算ツールです。",
    ogp: "https://github-production-user-asset-6210df.s3.amazonaws.com/89170014/239520737-31f4621e-1d6a-43ad-a57e-5fcc3ff30e15.png",
    productionLink: "https://rits-gpa.vercel.app/",
    tags: [
      "個人開発",
      "フロントエンド"
    ]
  },
  {
    title: "ぼくまさし",
    description: "「食事を与えて太らせる」人間育成型カロリー計算機です。",
    ogp: "https://raw.githubusercontent.com/watnows/hackathon-2022-team2/main/public/ogp_masashi.jpg",
    productionLink: "https://masashi-calorie.vercel.app/",
    tags: [
      "チーム開発",
      "バックエンド"
    ]
  },
  {
    title: "Water Canvas",
    description: "水彩画のようなお絵描きツールです。",
    ogp: "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/cce3539ba255d008320de520b5a6fa46d8142cd7/src/image_data/canvas_img.png",
    productionLink: "https://water-canvas.netlify.app/",
    tags: [
      "チーム開発",
      "バックエンド"
    ]
  },
  {
    title: "ideal",
    description: "アイデア取引サービスです。",
    ogp: "https://raw.githubusercontent.com/hirokiwa/hiroki_is_me/e485cbed44d059f5c141a15b62f720236b26848a/src/image_data/ideal_img.png",
    productionLink: "https://idealapp.vercel.app/",
    tags: [
      "チーム開発",
      "フロントエンド"
    ]
  }
];

export default products;

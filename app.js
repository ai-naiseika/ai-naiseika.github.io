(() => {
  'use strict';
  // 台帳（works.json）は、組み立ての時にここへ流しこむ（ページの外から文字は入らない）
  const DATA = {"places":[{"id":"roots","name":"根元の工房","sub":"地図と道具","line":"会社の道具を、AIとつくる作業場。連載の中身を、触れる地図と道具にしました。"},{"id":"branch","name":"枝","sub":"カードの花","line":"節目に咲く、仕掛けつきのカード。LINE で送れます。"},{"id":"play","name":"遊び場","sub":"ミニゲーム","line":"触って遊べるミニゲームの部屋。ここから直に入れます。"},{"id":"spring","name":"泉","sub":"音楽","line":"AI音楽工房の MV。工房が企画し、BGM&V Studio が制作しています。"},{"id":"cave","name":"洞窟","sub":"連載と動画","line":"経営者のための連載「AI内製化の羅針盤」と、記事の動画。"},{"id":"cloud","name":"雲の上","sub":"旅","line":"本物の旅のしおりと、想像の世界旅行。"}],"notice":["当工房では職人が気ままに作っているため、突然変更が入ったり、途中でとまっているコンテンツがあったりします。","これは作成途中をリアルタイムにお見せする趣旨のものですので、作りかけの雰囲気も含めて楽しんでもらい、成長を見守っていただけたら幸いです。"],"voices":{"調整中":["ちょっと調整中。見てもいいけど変なところがあっても気にしないでね。","いま、ねじを締め直しているところ。動くけど、ときどきガタッとするかも。","仕上げの真っ最中！ 気づいたことがあったら、そっと教えてね。","ただいま磨き中。ピカピカになるまで、もう少し。"],"作りかけ":["ただいま作りかけ。リアルタイム進行中。","まだ骨組みだけど、のぞいていってね。","作っている途中をそのまま見せちゃうよ。明日には変わってるかも！","工房の机の上で、いま組み立て中。"],"準備中":["今作成中だよ！もうすぐ公開するね！","まだ種の中。芽が出たら、ここでお知らせするね。","いま、絵の具を溶いているところ。もう少しだけ待っててね。","職人がこっそり仕込み中。お楽しみに！"]},"works":[{"place":"roots","group":"3Dの地図","kind":"触れる","name":"4つの島の航海図（利益マップ）","note":"「何から入れると儲かる？」を、3Dの海図に。","url":"https://tatatasan323-cell.github.io/note-app/"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"天空の城への道（内製化ロードマップ）","note":"6つの関門を越えて、天空の城へ。","url":"https://tatatasan323-cell.github.io/note-app/road.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"AIの全体地図（6層＋4横断面）","note":"会社のAIの仕組みを、6つの層で見る。","url":"https://tatatasan323-cell.github.io/note-app/arch.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"そもそもAIって？ 5部作の地図","note":"「そもそもAIって？」5本の地図。","url":"https://tatatasan323-cell.github.io/note-app/aimap/"},{"place":"roots","group":"道具","kind":"触れる","name":"城 ─ 経営ステータス","note":"社長の一枚画面。架空の会社で動くデモ。","url":"https://tatatasan323-cell.github.io/castle/"},{"place":"roots","group":"道具","kind":"触れる","name":"転記ゼロ（tenki-zero 体験版）","note":"転記の手作業をなくす仕組みを、ブラウザで試す。","url":"https://tatatasan323-cell.github.io/tenki-zero/"},{"place":"roots","group":"手引き","kind":"読む","name":"AIエージェント利用ガイド","note":"部下としてハーネスする。社内で配れる手引き。","url":"https://tatatasan323-cell.github.io/note-app/ai-agent-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"乗っ取り対策の手引き","note":"パスキーでも守れない、2つの穴。","url":"https://tatatasan323-cell.github.io/note-app/security-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"会社のセキュリティ段階表","note":"自社の段階を確かめる表。","url":"https://tatatasan323-cell.github.io/note-app/security-levels.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第001号","note":"システムプロンプト、八割削除。","url":"https://tatatasan323-cell.github.io/note-app/jihou-001.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第002号","note":"穴を空けたのはAI、突いたのもAI。","url":"https://tatatasan323-cell.github.io/note-app/jihou-002.html"},{"place":"roots","group":"工房のこれから","kind":"歩く","status":"準備中","name":"世界樹の村（3Dで歩ける町）","note":"この地図の本から入って、村を歩けるようにします。","url":""},{"place":"branch","group":"カード","kind":"触れる","name":"ハロウィン招待状 ─ おばけの庭へようこそ","note":"おばけに触れると、音と豆知識。","url":"https://tatatasan323-cell.github.io/gimmick-cards/halloween/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ おかしな港町","note":"宝石をはじき、ステンドグラスを割り、氷を削る冬の港町（動く3D）。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ X'mas グリーティングカード","note":"港町とつながるカード。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/card.html"},{"place":"branch","group":"カード","kind":"触れる","status":"調整中","name":"正月のカード ─ 作品の一覧","note":"正月のカード 76 作。絵を押すと、さわって動く本物が開きます。","url":"https://ai-naiseika.github.io/cards/shogatsu/"},{"place":"branch","group":"カード","kind":"触れる","status":"作りかけ","name":"送る予定 ─ 節目のカード","note":"カードを、あとで送るための予定。時間になったら、スマホのカレンダーが知らせます。","url":"https://ai-naiseika.github.io/cards/yotei/"},{"place":"play","group":"おかしな港町の部屋","kind":"触れる","name":"ステンドグラスの礼拝堂","note":"窓をタップすると、かけらが落ちて砕け、光の粒になって元の窓へ。","date":"2026-10-16","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/glass.html?from=kobo"},{"place":"play","group":"おかしな港町の部屋","kind":"触れる","name":"宝石の美術館","note":"一人称で歩く大ホール。宝石はそっと触ると歌い、強くたたくと…？","date":"2026-10-16","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/museum.html?from=kobo"},{"place":"play","group":"おかしな港町の部屋","kind":"触れる","name":"氷の彫像の広場","note":"ノミでコンコン、機械でガリガリ。削って宝石を取り出す。","date":"2026-10-16","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/ice.html?from=kobo"},{"place":"play","group":"おかしな港町の部屋","kind":"触れる","name":"ぷるぷる水そう","note":"水の中を泳ぎながら、グミたちをつまんで伸ばす。","date":"2026-10-16","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/swim.html?from=kobo"},{"place":"play","group":"おかしな港町の部屋","kind":"触れる","name":"グミのつみき","note":"空に浮かぶテーブルで、グミの積み木。はじいて、持って、高く積む。","date":"2026-10-16","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/blocks.html?from=kobo"},{"place":"spring","group":"MV","kind":"見る","name":"雨上がりの小径 ― 水たまりを、跳んでいたころ","note":"最初の MV。","date":"2026-10-06","url":"https://youtu.be/yi53ACtNxp8"},{"place":"spring","group":"MV","kind":"見る","name":"パンプキン・ポン！ ― ハロウィンの夜のドキドキ","note":"切り絵の魔女とモンスターの踊り。","date":"2026-10-14","url":"https://youtu.be/uFx4Vcr8o8A"},{"place":"spring","group":"MV","kind":"見る","name":"Friends Around the Table ─ テーブルに集まれ！","note":"クリスマス3部作の1本目。","date":"2026-10-19","url":"https://youtu.be/pEvqS5da3-s"},{"place":"spring","group":"MV","kind":"見る","name":"Christmas Feels Like Being ─ きみといる、それがクリスマス","note":"クリスマス3部作の2本目。","date":"2026-10-20","url":"https://youtu.be/Z6vJkx9_u-s"},{"place":"spring","group":"MV","kind":"見る","name":"Singing Glory ─ グローリー・グローリー！","note":"クリスマス3部作の3本目。","date":"2026-10-23","url":"https://youtu.be/oR3KyE3Zmxo"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、なぜ罠にはまる？ ─ 天空の城へ続く「6つの関門」","note":"","date":"2026-10-13","url":"https://youtu.be/-Dja11xVGzQ"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、まず何から？ ─ 儲けにつながる「4つの島」の航海図","note":"","date":"2026-10-10","url":"https://youtu.be/xKATNxc-q50"},{"place":"cave","group":"記事の動画","kind":"見る","name":"動画生成AIなしで描いた26の画風 ── コードで描くアニメーション見本帳","note":"","date":"2026-10-07","url":"https://youtu.be/dQ2MLnKi8rE"},{"place":"cave","group":"記事の動画","kind":"見る","name":"DeepSeekなど中国AIは業務に使っていい？ ー 決め手は性能でも価格でもなく「調達」","note":"","date":"2026-10-06","url":"https://youtu.be/P4EKVp7NFms"},{"place":"cave","group":"記事の動画","kind":"見る","name":"「AIで、仕事は消えるのか」──ある会社の \"未来の一日\"【朗読ストーリー】","note":"","date":"2026-08-15","url":"https://youtu.be/s-KqdbO6xWk"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【HTMLとは？ Pythonとは？】 AI内製化の全体像が4分で分かる見取り図","note":"","date":"2026-07-27","url":"https://youtu.be/c1A3KVXweG0"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【スクール不要】月3,000円で始めるAI内製化／総集編・全8話","note":"","date":"2026-07-03","url":"https://youtu.be/3dDNd_MuB0Y"},{"place":"cave","group":"物語","kind":"読む","name":"未来の一日 ─ どこにでもある会社の朝","note":"朗読ストーリーの本。","url":"https://tatatasan323-cell.github.io/note-app/mirai/"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-19","name":"AI利用、どこから始めるか。答えは「1人」と「1つの痛み」","url":"https://note.com/ai_naiseika/n/n27912da5b3da"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-13","name":"「スクールもコンサルも要らない」の、本当の意味","url":"https://note.com/ai_naiseika/n/n51217db465e9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"前橋の観光案内を、AIと2日で作る ー 「確かめた度合い」を隠さない作り方","url":"https://note.com/ai_naiseika/n/n5c6551d1beac"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"工房からの警告 再び ー AIに任せていい所、いけない所","url":"https://note.com/ai_naiseika/n/neb45bbba31cf"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-10","name":"AIエージェントがあるのに、仕組みを作る理由 ー 内製化すべき2つの場所","url":"https://note.com/ai_naiseika/n/n667d22b71479"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-07","name":"会話だけで動画を作る ー【脱・動画生成】AIアニメーションの可能性","url":"https://note.com/ai_naiseika/n/na5e82389ac72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-06","name":"工房からの警告 ー 「AIが勝手に動き回る？」報道の真偽と、守るべき場所","url":"https://note.com/ai_naiseika/n/n4c308409efd9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-03","name":"ある日突然の「アカバン」 ー 生成AIサブスクの落とし穴","url":"https://note.com/ai_naiseika/n/n8923fd964394"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-29","name":"AI巨額投資の行く末 ー いつか来る「ババ抜き」ゲームの終わり","url":"https://note.com/ai_naiseika/n/nc9e8207bcf78"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-28","name":"パスキーも乗っ取られる時代に。必ずすべきセキュリティ対策とは。","url":"https://note.com/ai_naiseika/n/n5b747190fa6e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-27","name":"AI暴走論と終末論のさなかで ー あなたがすべき一手とは","url":"https://note.com/ai_naiseika/n/nf04f65023439"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-21","name":"奇跡の37手から10年。中国AIの実力と、日本企業が引くべき一線。","url":"https://note.com/ai_naiseika/n/n31214e08120e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-20","name":"AI依存症に陥らないためのガイド ー 「AIに聞く/指示する」2つの違い","url":"https://note.com/ai_naiseika/n/n4193a3063552"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-14","name":"あなたのAI、期待通り動きますか？ ー AIの力を引き出すための思考法","url":"https://note.com/ai_naiseika/n/n7e4462f1908f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-08","name":"バックオフィスが消える日。社内ステータスがリアルに見える未来への羅針盤。","url":"https://note.com/ai_naiseika/n/n07f8688e64df"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-31","name":"AIが空けた穴を、別のAIが5日で見つけて突く ── 8月までのAI事故と、私の工房の点検結果","url":"https://note.com/ai_naiseika/n/ned77cf0c294e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-26","name":"AIのこれから ─ 「情報の土台」を持つことの意味","url":"https://note.com/ai_naiseika/n/n54fd60e90f04"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-24","name":"AI最前線 ─ 代表5社の現在地と、内製化に使うべき道具","url":"https://note.com/ai_naiseika/n/n06bea781e796"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-17","name":"OpenAIという物語 ─ 「人類のためのAI」は、どこへ向かっているのか","url":"https://note.com/ai_naiseika/n/n12816bc47432"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-11","name":"70年というAIの歩み ─ その挑戦と、“ 奇跡の一手 ” と、一本の論文","url":"https://note.com/ai_naiseika/n/n3471aeed4c26"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-01","name":"AIとは本当は何なのか　優秀な相棒？　頼れる相談役？　得体のしれない何か？","url":"https://note.com/ai_naiseika/n/n33eadda7b1b0"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-31","name":"経営者が知るべき、最後まで残る仕事 ─ AIが連れて行く “異世界” の話","url":"https://note.com/ai_naiseika/n/ne340418a0949"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-28","name":"Anthropicが、自社のAI開発ツールの内部指示を8割以上削除。その真意は？","url":"https://note.com/ai_naiseika/n/nec9184d934b1"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-27","name":"HTMLとは？ Pythonとは？ ─ 目指す内製化を一目で理解する見取り図","url":"https://note.com/ai_naiseika/n/ne47dde16170f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-23","name":"AIは本当に安全なのか？ 世間で騒がれているプロンプトインジェクションを回避する唯一の方法とは？","url":"https://note.com/ai_naiseika/n/nd3d82deb2f4f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-20","name":"その事務仕事いつまでやるのですか？【２】　例えば転記作業が無くなる日","url":"https://note.com/ai_naiseika/n/n5f46bef5c41b"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-12","name":"その事務仕事いつまでやるのですか？【１】　例えば明細を放り込むだけのツール","url":"https://note.com/ai_naiseika/n/n56e563d80e2a"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-06","name":"AI導入、知らないと失敗する ─ 成功に近づくための「内製化ロードマップ」","url":"https://note.com/ai_naiseika/n/nbf98e9add127"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-04","name":"ぶっちゃけ、AIは何から入れると儲かる？ ─ 経営者のための “利益” の地図","url":"https://note.com/ai_naiseika/n/nb7e3a2ca7fca"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-29","name":"繰り返し定型作業をAIで ─ 一度の “仕組み” が大切","url":"https://note.com/ai_naiseika/n/n9462746fd8ba"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-22","name":"メールは良いのに、AIはダメ？ ─ 会社の情報を “どこまで外に出すか”","url":"https://note.com/ai_naiseika/n/n295bc71d253d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-15","name":"プロトタイプは早い、本番はその先 ─ 内製化を「育てる」ということ","url":"https://note.com/ai_naiseika/n/n4f8ea3f4696d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-12","name":"バイブコーディングが通用しなくなる日 ─ AIに渡す『要件定義』の話","url":"https://note.com/ai_naiseika/n/n5f043fb74a72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-09","name":"AIは嘘をつかない。けれど、あなたに「忖度」する","url":"https://note.com/ai_naiseika/n/n34c94b0c2a20"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-04","name":"AIと迷走しないために、最初にやるべきこと","url":"https://note.com/ai_naiseika/n/nb72e3552d43d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-31","name":"AIエージェントを、今日入れる ─ 使い方も、AIに聞けばいい","url":"https://note.com/ai_naiseika/n/n808d67e92440"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-26","name":"「こうしたい」と伝えるだけで、何かが作れる時代","url":"https://note.com/ai_naiseika/n/n912fbc83f1c6"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-25","name":"料理人だった私が、AI内製化でシステムを作れる理由","url":"https://note.com/ai_naiseika/n/nd6a51b98694c"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-18","name":"AIを学ぶのに「スクール」「コンサル」が要らない新時代","url":"https://note.com/ai_naiseika/n/ndfc95eb3f0fa"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"前橋まちあるき（12/20 まで）","note":"芸術祭と「詩のまち」を歩く案内。確かめた度合いを印で示す。","url":"https://tatatasan323-cell.github.io/note-app/tabi/maebashi/"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"松本まちあるき","note":"松本駅から美ヶ原温泉まで、ゆるく歩く参考メモ（11/7〜8 の例）。","url":"https://tatatasan323-cell.github.io/note-app/tabi/matsumoto-burari/"},{"place":"cloud","group":"世界旅行","kind":"見る","name":"想像の世界旅行","note":"雲に乗って、想像だけで世界を旅する部屋を作っています。","status":"準備中","url":""}],"links":[{"name":"note「AI内製化の羅針盤」","url":"https://note.com/ai_naiseika"},{"name":"YouTube「AI内製化工房 MITA」","url":"https://www.youtube.com/@ai_naiseika_mita"},{"name":"X @ai_naiseika","url":"https://x.com/ai_naiseika"},{"name":"音楽 BGM&V Studio（AI音楽工房の制作）","url":"https://www.youtube.com/@BackgroundMusicVideoStudio"}],"trees":{"sizes":[[1347,493],[1455,1102]],"cells":[[-153,268,336,243,554,396,16,493,0,1],[-20,275,301,235,0,677,137,492,0,1],[120,297,252,210,1039,677,250,490,0,1],[215,323,259,188,0,914,357,495,0,1],[361,341,220,176,937,0,479,499,0,0],[461,363,186,154,1159,0,560,497,0,0],[814,369,190,148,0,345,911,499,0,0],[893,331,249,187,686,0,1014,497,0,0],[1006,325,238,187,261,914,1118,497,0,1],[1090,271,283,241,892,396,1234,495,0,1],[1202,295,287,222,531,677,1340,498,0,1],[1314,279,261,237,1177,396,1441,501,0,1],[-169,240,398,394,0,0,30,620,1,1],[-11,325,322,315,1131,0,150,630,1,1],[136,358,268,266,284,396,270,610,1,1],[283,419,217,215,820,677,392,620,1,1],[344,297,351,343,0,0,520,630,1,0],[752,297,331,327,353,0,918,610,1,0],[933,410,226,224,303,677,1046,620,1,1],[1027,355,282,279,0,396,1168,620,1,1],[1121,310,338,330,791,0,1290,630,1,1],[1215,239,389,385,400,0,1410,610,1,1]]},"music":{"settings":{"volume":0.7,"overlap":4,"fade_in":4},"rules":[{"place":"roots","song":"03"},{"months":[12,1,2],"hours":[16,5],"song":"06"},{"hours":[5,11],"song":"01"},{"hours":[11,16],"songs":["04","05"]},{"hours":[16,5],"song":"02"}],"songs":[{"no":"01","title":"朝つゆの森","note":"朝の光が、葉の先の露をひとつずつ照らしていく森。チェレスタとオルゴールがきらきらと目をさまし、ハープとグロッケン、カリンバが続きます。フルートは、遠くで鳴く小鳥のように。","trivia":["チェレスタは、パリの楽器製作者オーギュスト・ミュステルが1886年に特許をとった楽器。","チャイコフスキーの『くるみ割り人形』の「金平糖の踊り」は、チェレスタを使った曲として有名。"],"file":"bgm/01.m4a","bpm":68.0,"ready":true},{"no":"02","title":"ほたるの灯る夜","note":"日が落ちて、森にほたるの小さな灯りがともる夜。チェレスタとオルゴール、ハープが静かに瞬き、言葉のないコーラスと鈴の音が、闇をやさしく包みます。","trivia":["オルゴールの歴史は1796年、ジュネーブの時計職人アントワーヌ・ファーブルの発明から始まったとされる。"],"file":"bgm/02.m4a","bpm":58.75,"ready":true},{"no":"03","title":"世界樹への祈り","note":"工房の根元で、世界樹に手を当てて祈るひととき。ケルトのハープが静かに語り、ティンホイッスルが風のように、チェロが大地のように深く響きます。","trivia":["アイルランドの国章はハープ。大統領や大臣の印章にも、アイルランドのユーロ硬貨にも描かれている。","国章のハープのお手本は、ダブリンのトリニティ・カレッジの博物館に残る14世紀のハープ。"],"file":"bgm/03.m4a","bpm":89.1,"ready":true},{"no":"04","title":"妖精たちのワルツ","note":"昼下がりの木もれ日の中、妖精たちが輪になって踊る3拍子。オルゴールとチェレスタがくるくる回り、ピチカートの弦が足どりを刻み、フルートが軽やかに舞います。","trivia":["ワルツは4分の3拍子の踊りの曲。1814〜15年のウィーン会議をきっかけに、ヨーロッパ中へ広まった。","『美しく青きドナウ』は「ワルツ王」ヨハン・シュトラウス2世の曲。1867年にウィーンで初演された。"],"file":"bgm/04.m4a","bpm":95.7,"ready":true},{"no":"05","title":"雨上がりのしずく","note":"雨がやんで、葉から落ちるしずくが光る森。ピアノとチェレスタが雫のように、カリンバがぽつぽつと、ウィンドチャイムが風にゆれて鳴ります。","trivia":["カリンバはアフリカの「親指ピアノ」の仲間。金属の鍵の親指ピアノは、約1300年前にザンベジ川のほとりで生まれたという。","ピアノの黒鍵だけを弾くと、五つの音でできた音階「ペンタトニック（五音音階）」になる。"],"file":"bgm/05.m4a","bpm":64.6,"ready":true},{"no":"06","title":"雪ふる森の冬ごもり","note":"雪が音を吸いこんで、しんと静かな冬の夜の森。チェレスタとオルゴール、ハープがやわらかく降り、グラスハーモニカの澄んだ響きが、雪明かりのように広がります。","trivia":["グラスハーモニカは、フランクリンが1761年に完成させた楽器。回るガラスの器のふちに、ぬれた指で触れて鳴らす。","モーツァルトも1791年、グラスハーモニカの入った「アダージョとロンド」（K.617）を書いた。"],"file":"bgm/06.m4a","bpm":68.0,"ready":true}]}};
  const $ = (id) => document.getElementById(id);
  const PLACES = new Map(DATA.places.map((p) => [p.id, p]));
  const stage = $('stage'), ui = $('stageUi'), wrap = $('stageWrap'), labelsBox = $('labels'), prompt = $('prompt');
  const skipBtn = $('skip'), closeBtn = $('closeBook'), openBtn = $('openBtn'), soundBtn = $('sound'), np = $('np'), npText = $('npText');
  // 舞台の絵（stage）と札などの層（ui）は、同じ位置・同じ倍率で重ねる
  const setCls = (c, on) => [stage, ui].forEach((e) => e.classList.toggle(c, on));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DONE = '完成', MARK = { 調整中: 'bud', 作りかけ: 'sprout', 準備中: 'seed' };
  const statusOf = (w) => (w.status && MARK[w.status] ? w.status : DONE);

  // ---------- 端末の記録：行った所の印だけ（名前などは残さない）----------
  const KEY = 'kobo-map-v1', IDS = new Set(PLACES.keys()), seen = new Set();
  try { const v = JSON.parse(localStorage.getItem(KEY) || '{}'); if (Array.isArray(v.seen)) v.seen.forEach((x) => IDS.has(x) && seen.add(x)); } catch (e) { /* 記録が使えない端末でも動く */ }
  function mark(id) { seen.add(id); try { localStorage.setItem(KEY, JSON.stringify({ seen: [...seen] })); } catch (e) { /* 同上 */ } }

  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  // ---------- 音：森の楽器（Web Audio の合成だけ・最初にさわるまで作らない）。全部 ニ長調の五音音階（D E F# A B）で濁らない ----------
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  // 楽器：倍音 [比, 強さ, 消える秒]・立ち上がり・残響・こだま
  const INST = {
    celesta: { p: [[1, 1, 1.5], [2, 0.3, 0.6], [3, 0.08, 0.3], [4, 0.04, 0.2]], a: 0.004, rv: 0.35 },
    glock: { p: [[1, 1, 1.4], [2.76, 0.22, 0.45], [5.4, 0.1, 0.22]], a: 0.003, rv: 0.4 },
    musicbox: { p: [[1, 1, 1.3], [3, 0.14, 0.35], [6.2, 0.05, 0.12]], a: 0.003, rv: 0.3 },
    kalimba: { p: [[1, 1, 1.1], [2, 0.1, 0.4], [5.9, 0.16, 0.12]], a: 0.003, rv: 0.4 },
    drop: { p: [[1, 1, 0.34], [2, 0.12, 0.12]], a: 0.006, rv: 0.5, glide: 0.82 },   // 水琴窟の雫：下から音へすっと上がる。高く短く（本人 2026-10-25「水滴の音を高く軽い感じに」）
    marimba: { p: [[1, 1, 0.9], [4, 0.22, 0.25], [9.9, 0.04, 0.08]], a: 0.008, rv: 0.6, echo: 0.5 },
    harp: { p: [[1, 1, 1.9], [2, 0.42, 1.2], [3, 0.2, 0.8], [4, 0.1, 0.5], [5, 0.05, 0.3]], a: 0.004, rv: 0.45 },
  };
  // 鳴らす音：[楽器, 高さ（MIDI）, 秒, 強さ]
  const at = (inst, amp, list) => list.map(([m, t]) => [inst, m, t, amp]);
  const SONG = {
    // 本をひらく：鈴の「シャン、シャン、シャン」（少しずつ大きく）だけ。世界樹が起きる所の澄んだひと鳴りと、後ろの上がっていくチェレスタは外した
    //   （本人 2026-10-25「木が立ち上がる時に別なピロンみたいな音」「まだピロリロリンて音がする」）
    open: [['shake', 0, 0.05, 0.02], ['shake', 0, 0.29, 0.026], ['shake', 0, 0.53, 0.032]],
    roots: at('musicbox', 0.8, [[81, 0], [78, 0.17], [74, 0.34], [76, 0.51], [78, 0.68], [81, 0.85], [86, 1.1]]).concat(at('musicbox', 0.35, [[62, 0]])),   // オルゴール
    branch: at('glock', 0.6, [[90, 0], [86, 0.18], [93, 0.4]]),   // 枝先の花：高い鉄琴を間をあけて「ポン・ポロン」と軽く（本人 2026-10-25「枝の音が大きすぎる。もっと軽やかに」→ ハンドベルをやめ、ほかの場所より一段小さく）
    play: at('celesta', 0.7, [[81, 0], [86, 0.16], [83, 0.32], [88, 0.48], [86, 0.64], [93, 0.86]]),   // 遊び場：ブランコのように行って戻るチェレスタ
    spring: at('kalimba', 0.88, [[71, 0], [74, 0.15], [76, 0.3], [81, 0.52]]).concat(at('drop', 0.42, [[98, 0.24], [102, 0.5], [105, 0.72]])),  // カリンバと、高い雫が3粒
    cave: at('marimba', 0.9, [[57, 0], [62, 0.2], [66, 0.4], [69, 0.62], [62, 0.9]]),   // ほら穴に響くマリンバ
    cloud: at('harp', 0.6, [62, 64, 66, 69, 71, 74, 76, 78, 81, 83, 86].map((m, i) => [m, i * 0.045])).concat(at('harp', 0.45, [[90, 0.6]])),   // ハープのグリッサンド
    sparkle: at('glock', 0.4, [[93, 0], [98, 0.06], [102, 0.12]]),   // 妖精のひとこと
  };
  // ピークがそろう強さ（check.py が測る）
  const LEVEL = { open: 7.1, roots: 1.7, branch: 1.51, play: 1.6, spring: 1.46, cave: 1.35, cloud: 0.9, sparkle: 1.5 };
  function impulse(c, sec) {   // 残響：時間とともに消える雑音から作る（録音は使わない）
    const n = Math.floor(c.sampleRate * sec), b = c.createBuffer(2, n, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); let s = 11 + ch * 7, lp = 0; for (let i = 0; i < n; i++) { s = (s * 16807) % 2147483647; lp += (s / 2147483647 * 2 - 1 - lp) * 0.35; d[i] = lp * Math.pow(1 - i / n, 3.2); } }
    return b;
  }
  function chain(c) {   // 楽器 → （残響・こだま）→ 全体の音量 → 急に大きくしない押さえ → 出口
    const master = c.createGain(), comp = c.createDynamicsCompressor(), rv = c.createConvolver(), wet = c.createGain(), echo = c.createDelay(1), fb = c.createGain(), lp = c.createBiquadFilter();
    master.gain.value = 0.16;   // ふだんは押さえにかからない大きさ。重なって大きくなった時だけ押さえる
    comp.threshold.value = -6; comp.knee.value = 6; comp.ratio.value = 8; comp.attack.value = 0.003; comp.release.value = 0.25;
    rv.buffer = impulse(c, 2.6); wet.gain.value = 0.32;
    echo.delayTime.value = 0.23; fb.gain.value = 0.3; lp.type = 'lowpass'; lp.frequency.value = 1800;
    rv.connect(wet); wet.connect(master); echo.connect(lp); lp.connect(fb); fb.connect(echo); lp.connect(master); lp.connect(rv);
    master.connect(comp); comp.connect(c.destination);
    return { master, rv, echo };
  }
  let act = 0;
  // 音量の形：0 からなめらかに上がり（角を作らない＝プチッとしない）、0 へ消える
  const S = Float32Array.from({ length: 16 }, (_, i) => 0.5 - 0.5 * Math.cos(Math.PI * i / 15));
  const env = (p, t, v, atk, end) => { p.setValueCurveAtTime(S.map((x) => x * v), t, atk); p.exponentialRampToValueAtTime(0.0001, end); };
  function go(c, n, t, end, off = 0) {   // 一度に鳴る部品は 120 まで（港町の鈴で、増えすぎて途中で消えた）
    if (!(c instanceof OfflineAudioContext)) { if (act >= 120) return; act++; n.onended = () => act--; }
    n.start(t, off); n.stop(end);
  }
  function voice(c, G, [inst, m, t, amp]) {
    const I = INST[inst], f = hz(m), g = c.createGain();
    g.gain.value = amp; g.connect(G.master);
    for (const [k, to] of [[I.rv, G.rv], [I.echo, G.echo]]) if (k) { const s = c.createGain(); s.gain.value = k; g.connect(s); s.connect(to); }
    for (const [r, a, d] of I.p) {
      if (f * r > 16000) continue;   // 聞こえる範囲の外の倍音は鳴らさない
      const o = c.createOscillator(), e = c.createGain();
      o.frequency.setValueAtTime(f * r * (I.glide || 1), t);
      if (I.glide) o.frequency.exponentialRampToValueAtTime(f * r, t + 0.05);
      env(e.gain, t, a, I.a * 2, t + I.a + d);
      o.connect(e); e.connect(g); go(c, o, t, t + I.a + d + 0.05);
    }
  }
  // 鈴（港町のステンドグラスの鈴 glass_sound.js の shake・ping を写した）：音量は 0 から始めて 0 で終える
  function tink(c, G, f, vol, t, dur, atk) {   // 高い金属の響き（基音と 1.41 倍が、それぞれ消える）
    for (const [m, v, d] of [[1, 1, 1], [1.41, 0.5, 0.7]]) {
      if (f * m > 16000) continue;
      const o = c.createOscillator(), g = c.createGain(); o.frequency.value = f * m;
      env(g.gain, t, Math.max(0.0002, vol * v), atk * 2, t + dur * d);
      o.connect(g); g.connect(G.master); go(c, o, t, t + dur * d + 0.02);
    }
  }
  function hiss(c, G, vol, t, dur, type, freq, q, R) {   // 鈴のきらきらしたシャー（帯の雑音・立ち上がりはやわらかく）
    if (!c.__noise) { const b = c.createBuffer(1, c.sampleRate, c.sampleRate), d = b.getChannelData(0); let s = 7; for (let i = 0; i < d.length; i++) { s = (s * 16807) % 2147483647; d[i] = s / 1073741823.5 - 1; } c.__noise = b; }
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(); s.buffer = c.__noise; f.type = type; f.frequency.value = freq; f.Q.value = q;
    env(g.gain, t, Math.max(0.0002, vol), 0.016, t + dur);
    s.connect(f); f.connect(g); g.connect(G.master); go(c, s, t, t + dur + 0.02, R() * 0.5);
  }
  function shake(c, G, vol, t, R) {   // 「シャン」：響きを少し長く残す（短く切ると、カラカラと鳴った）
    hiss(c, G, vol * 1.3, t, 0.32, 'bandpass', 7200, 1.2, R); hiss(c, G, vol * 0.7, t + 0.01, 0.22, 'highpass', 9000, 0.8, R);
    for (let i = 0; i < 4; i++) tink(c, G, 4200 + R() * 4000, vol * (0.42 + R() * 0.28), t + R() * 0.03, 0.45 + R() * 0.35, 0.004);
  }
  function render(c, G, name, t0) {
    let s = 11; const R = () => (s = (s * 16807) % 2147483647) / 2147483647, L = LEVEL[name];
    for (const [i, m, t, a] of SONG[name]) {
      if (i === 'shake') shake(c, G, a * L, t0 + t, R);
      else voice(c, G, [i, m, t0 + t, a * L]);
    }
  }
  let muted = false, actx = null, graph = null;
  const played = [], baked = {};
  function ctx() {   // さわった時（押した時）にだけ作る
    //   音の計算の余裕は大きく取る（playback）。既定の余裕の小さい形だと、スマホが忙しい時に曲が割れ・飛ぶ（本人 2026-10-25）。鈴が鳴るのは 0.01〜0.1 秒ほど遅れるだけ
    if (!actx) { try { const AC = window.AudioContext || window.webkitAudioContext; try { actx = new AC({ latencyHint: 'playback' }); } catch (e) { actx = new AC(); } graph = chain(actx); bakeAll(actx); } catch (e) { actx = null; } }
    if (actx && actx.state === 'suspended') actx.resume();
    return actx;
  }
  // 効果音は、はじめて触れた時に1つずつ書き出しておき（OfflineAudioContext）、鳴らす時は書き出した音を1つ流すだけにする。
  //   押すたびに発振器60ほどと残響をその場で組むと、スマホでその瞬間に曲が途切れた（本人 2026-10-25「何か押したり、画面が縦横切り替わったり、他の処理が入る時に切れる」）
  function bakeAll(c) {
    if (typeof OfflineAudioContext === 'undefined') return;
    let p = Promise.resolve();
    for (const n of Object.keys(SONG)) p = p.then(() => { const oc = new OfflineAudioContext(2, Math.round(c.sampleRate * 4), c.sampleRate); render(oc, chain(oc), n, 0.02); return oc.startRendering(); }).then((b) => { baked[n] = b; }).catch(() => {});
  }
  function sound(name) {
    if (muted || !SONG[name]) return;
    const c = ctx(); if (!c) return;
    played.push(name);
    try {
      if (baked[name]) { const s = c.createBufferSource(); s.buffer = baked[name]; s.connect(c.destination); s.start(); }   // 書き出しに、残響と押さえまで入っている
      else render(c, graph, name, c.currentTime + 0.02);   // まだ書き出していない時（最初の「本をひらく」）だけ、その場で組む
    } catch (e) { /* 音が出せない端末でも動く */ }
  }
  async function level(name) {   // 検査用：書き出してピークと強さを返す
    const sr = 44100, c = new OfflineAudioContext(2, sr * 4, sr), G = chain(c);
    render(c, G, name, 0.02);
    const b = await c.startRendering(), w = Math.floor(sr * 0.05);
    let peak = 0, rms = 0;
    for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i + w <= d.length; i += w) { let s = 0; for (let j = i; j < i + w; j++) { const v = Math.abs(d[j]); if (v > peak) peak = v; s += v * v; } rms = Math.max(rms, Math.sqrt(s / w)); } }
    const enc = (x) => { const u = new Uint8Array(x.buffer.slice(0)); let t = ''; for (let i = 0; i < u.length; i += 8192) t += String.fromCharCode(...u.subarray(i, i + 8192)); return btoa(t); };
    return { peak, rms, l: enc(b.getChannelData(0)), r: enc(b.getChannelData(1)) };
  }

  // ---------- BGM（曲の台帳 bgm.json。曲のファイルがある物だけ鳴る）----------
  //   さわった時に読みはじめ、ひらき終わってから流す。2つの再生器で、つなぎ目と曲の変わり目を重ねる
  const MUSIC = DATA.music || { settings: {}, rules: [], songs: [] };
  const TRACKS = new Map(MUSIC.songs.filter((s) => s.ready).map((s) => [s.no, s]));
  const inHours = (h, [a, b]) => (a <= b ? h >= a && h < b : h >= a || h < b);
  const dayNo = (d) => Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  // 南半球はタイムゾーン名で推定し、季節を6か月ずらす（位置は聞かない）。分からない名前・赤道近くは北半球。時間帯は端末の時刻のまま
  const SOUTH = ['Australia/', 'Antarctica/', 'Pacific/Auckland', 'Pacific/Chatham', 'Pacific/Norfolk', 'Pacific/Easter', 'America/Argentina/', 'America/Buenos_Aires',
    'America/Santiago', 'America/Punta_Arenas', 'America/Montevideo', 'America/Asuncion', 'America/Sao_Paulo', 'Atlantic/Stanley', 'Atlantic/South_Georgia',
    'Africa/Johannesburg', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Windhoek', 'Africa/Gaborone', 'Africa/Maputo', 'Africa/Harare', 'Indian/Mauritius', 'Indian/Reunion', 'Indian/Kerguelen'];
  const south = (() => { try { const z = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; return SOUTH.some((p) => z.startsWith(p)); } catch (e) { return false; } })();
  function choose(d, place) {
    const h = d.getHours() + d.getMinutes() / 60, mo = ((d.getMonth() + (south ? 6 : 0)) % 12) + 1;
    for (const r of MUSIC.rules) {
      if ((r.place && r.place !== place) || (r.months && !r.months.includes(mo)) || (r.hours && !inHours(h, r.hours))) continue;
      const list = r.songs || [r.song];
      for (let k = 0; k < list.length; k++) { const no = list[(dayNo(d) + k) % list.length]; if (TRACKS.has(no)) return no; }
    }
    return null;
  }
  let bgm = null, sheetPlace = null, hidPaused = false;
  const setting = (k, d) => (Number.isFinite(Number(MUSIC.settings[k])) && MUSIC.settings[k] !== null ? Number(MUSIC.settings[k]) : d);
  // 曲は、音量を変えられる端末（Android・PC）では Web Audio に通さず、再生器の音量（volume）で重ねる。Web Audio に通すと、効果音や画面の忙しさの
  //   あおりを受けて、スマホで曲が途切れた（本人 2026-10-25「音切れもまだ収まっていない」）。iPhone は volume を変えられないので、Web Audio の音量で
  const NATIVE = (() => { try { const a = new Audio(); a.volume = 0.5; return a.volume === 0.5; } catch (e) { return false; } })();
  const clock = () => (NATIVE ? performance.now() / 1000 : actx.currentTime);
  function ramp(v) {   // AudioParam の代わり：直線で変わる音量（今の値は時刻から求める）
    const r = { t0: 0, v0: v, t1: 0, v1: v,
      get value() { const t = clock(); return t >= r.t1 ? r.v1 : t <= r.t0 ? r.v0 : r.v0 + (r.v1 - r.v0) * (t - r.t0) / (r.t1 - r.t0); },
      set value(x) { r.t0 = r.t1 = 0; r.v0 = r.v1 = x; },
      cancelScheduledValues() {}, setValueAtTime(x, t) { r.t0 = r.t1 = t; r.v0 = r.v1 = x; }, linearRampToValueAtTime(x, t) { r.t1 = t; r.v1 = x; } };
    return r;
  }
  // 泉の一覧で選んだ曲（本人 2026-10-25「各音楽を視聴する、メドレーで聞くなどのモードも」）：{ list, i }。メドレーは順に、1曲はくり返す。
  //   聞いている間は、時刻や場所で曲を替えない。もう一度押すと、いつもの BGM（時刻と場所で選ぶ）へ戻る
  let listening = null;
  const want = () => (listening ? listening.list[listening.i] : choose(new Date(), sheetPlace));
  const upcoming = () => (listening && listening.list.length > 1 ? listening.list[(listening.i + 1) % listening.list.length] : want());
  function vol() { for (const p of bgm.els) { const v = Math.max(0, Math.min(1, bgm.out.value * p.g.value)); if (Math.abs(p.a.volume - v) > 0.002 || !v) p.a.volume = v; } }
  function bgmPrime() {   // さわった時に用意する（スマホは、さわった時でないと鳴らせない）。読むのは流す1曲だけ
    if (bgm || !TRACKS.size || (!ctx() && !NATIVE)) return;
    const first = TRACKS.get(choose(new Date(), sheetPlace) || [...TRACKS.keys()][0]);
    const outNode = NATIVE ? null : actx.createGain();
    if (outNode) { outNode.gain.value = 0; outNode.connect(actx.destination); }
    bgm = { out: outNode ? outNode.gain : ramp(0), els: [], i: 0, on: false, x: false, no: null };
    const mk = (s) => {
      const a = new Audio(), p = { a, no: s ? s.no : null };
      a.preload = s ? 'auto' : 'none'; if (s) a.src = s.file;
      if (outNode) { const n = actx.createGain(); n.gain.value = 0; actx.createMediaElementSource(a).connect(n); n.connect(outNode); p.g = n.gain; }
      else { p.g = ramp(0); a.volume = 0; }
      a.addEventListener('timeupdate', bgmLoop);
      if (s) a.play().then(() => { if (!bgm.on || bgm.els[bgm.i] !== p) { a.pause(); a.currentTime = 0; } }).catch(() => {});
      return p;
    };
    bgm.els.push(mk(first), mk(null));
    if (NATIVE) setInterval(vol, 50);
  }
  function solo(cur, s, fade) {   // 2つめを鳴らせない端末（iPhone など）：1つで、いったん小さくしてから替える
    const t = clock(); bgm.i = bgm.els.indexOf(cur);
    cur.g.cancelScheduledValues(t); cur.g.setValueAtTime(cur.g.value, t); cur.g.linearRampToValueAtTime(0, t + 1);
    setTimeout(() => {
      if (cur.no !== s.no) { cur.a.src = s.file; cur.no = s.no; }
      cur.a.currentTime = 0; cur.a.play().catch(() => {});
      const u = clock(); cur.g.setValueAtTime(0, u); cur.g.linearRampToValueAtTime(1, u + Math.max(1, fade)); bgm.x = false;
    }, 1050);
  }
  function bgmPlay(no, fade) {   // 重ねて移る（同じ曲なら繰り返し）
    const t = clock(), cur = bgm.els[bgm.i], nxt = bgm.els[1 - bgm.i], s = TRACKS.get(no), changed = bgm.no !== no;
    bgm.x = true;
    if (nxt.no !== no) { nxt.a.src = s.file; nxt.no = no; }
    if (nxt.a.currentTime) nxt.a.currentTime = 0;   // 読みこんだ頭から（0 のままなら探し直さない）
    nxt.a.play().catch(() => solo(cur, s, fade));
    nxt.g.cancelScheduledValues(t); nxt.g.setValueAtTime(0, t); nxt.g.linearRampToValueAtTime(1, t + fade);
    cur.g.cancelScheduledValues(t); cur.g.setValueAtTime(cur.g.value, t); cur.g.linearRampToValueAtTime(0, t + fade);
    bgm.i = 1 - bgm.i; bgm.no = no;
    setTimeout(() => { if (bgm.els[bgm.i] !== cur) cur.a.pause(); bgm.x = false; }, fade * 1000 + 150);
    if (changed) { band(s); beat(s); }
    listenMarks();
  }
  function bgmReady(no) {   // 次に流す曲を、裏の再生器に読みこんでおく（鳴らさない）。つなぎ目で読み始めると、スマホでは鳴り出しが遅れて、そこで音が途切れる
    const nxt = bgm.els[1 - bgm.i];
    if (nxt.no === no && nxt.a.currentTime === 0) return;
    if (nxt.no !== no) { nxt.a.preload = 'auto'; nxt.a.src = TRACKS.get(no).file; nxt.no = no; }
    nxt.a.currentTime = 0;
  }
  function bgmLoop() {
    if (!bgm || !bgm.on || bgm.x) return;
    const cur = bgm.els[bgm.i], ov = Math.max(0.5, setting('overlap', 4));
    if (this !== cur.a || !cur.a.duration) return;
    const left = cur.a.duration - cur.a.currentTime;
    if (left <= ov) { if (listening && listening.list.length > 1) listening.i = (listening.i + 1) % listening.list.length; bgmPlay(want() || cur.no, ov); }   // メドレーは次の曲へ
    else if (left <= ov + 15) bgmReady(upcoming() || cur.no);   // つなぎ目の 15 秒前から
  }
  function bgmOn() {
    if (!bgm || muted || bgm.on || document.hidden) return;
    const no = want(); if (!no) return;
    const t = clock();
    bgm.on = true; bgm.no = null;
    bgm.out.cancelScheduledValues(t); bgm.out.setValueAtTime(bgm.out.value, t); bgm.out.linearRampToValueAtTime(Math.min(1, setting('volume', 0.7)), t + setting('fade_in', 4));
    const cur = bgm.els[bgm.i], s = TRACKS.get(no);
    if (cur.no === no) { cur.a.currentTime = 0; cur.a.play().catch(() => {}); cur.g.setValueAtTime(1, t); bgm.no = no; band(s); beat(s); listenMarks(); }   // 用意した1曲から
    else bgmPlay(no, 0.05);
  }
  function bgmOff() {
    if (!bgm || !bgm.on) return;
    const t = clock();
    bgm.on = false; bgm.x = false; bgm.no = null;
    bgm.out.cancelScheduledValues(t); bgm.out.setValueAtTime(bgm.out.value, t); bgm.out.linearRampToValueAtTime(0, t + 0.3);
    setTimeout(() => { if (!bgm.on) bgm.els.forEach((x) => { x.a.pause(); x.g.value = 0; }); }, 400);
    band(null); beat(null); listenMarks();
  }
  function bgmUpdate() { if (bgm && bgm.on) { const no = want(); if (no && no !== bgm.no) bgmPlay(no, 2.5); } }
  function beat(s) {   // 拍に合わせて、絵がごく小さく揺れる
    const b = Number(s && s.bpm), on = b > 30 && b < 240 && !reduce;
    wrap.classList.toggle('beat', on);
    if (on) wrap.style.setProperty('--beat', `${(60 / b).toFixed(3)}s`);
  }
  // 曲の帯：題名 → 解説 → 豆知識が流れ、♪ だけ残る。押すと、もう一度
  let bandSong = null, bandTimer = 0;
  function band(s) {
    bandSong = s; clearTimeout(bandTimer);
    np.classList.remove('run', 'rest', 'still', 'show');
    if (!s) { np.hidden = true; return; }
    np.hidden = false;
    np.setAttribute('aria-label', `いま流れている曲：${s.title}（押すと、解説がもう一度流れます）`);
    if (reduce) {   // 流さずに、ひとつずつ、すっと出して消す
      const parts = [s.title, ...s.note.split('。').filter(Boolean).map((x) => `${x}。`), ...s.trivia.map((x) => `豆知識：${x}`)];
      np.classList.add('show', 'still');
      const next = (k) => { if (k >= parts.length) { np.classList.remove('still'); np.classList.add('rest'); return; } npText.textContent = parts[k]; bandTimer = setTimeout(() => next(k + 1), Math.max(4000, parts[k].length * 160)); };
      next(0); return;
    }
    npText.textContent = [s.title, s.note, ...s.trivia.map((x) => `豆知識：${x}`)].join('　─　');
    const w = npText.scrollWidth, win = 228;
    np.style.setProperty('--from', `${win}px`); np.style.setProperty('--to', `${-w}px`); np.style.setProperty('--dur', `${((win + w) / 32).toFixed(1)}s`);
    void np.offsetWidth;
    np.classList.add('show', 'run');
  }
  npText.addEventListener('animationend', () => { np.classList.remove('run'); np.classList.add('rest'); });
  np.addEventListener('click', () => { if (bandSong) band(bandSong); });
  function touch() {   // さわった時ごとに：音の用意と、ひらいた後なら BGM
    if (muted) return;
    ctx(); bgmPrime();
    if (state === 'open') bgmOn();
  }
  soundBtn.addEventListener('click', () => {
    muted = !muted;
    soundBtn.textContent = muted ? '音：なし' : '音：あり';
    if (muted) bgmOff(); else touch();
  });

  // ---------- 時刻の光：端末の時刻で、6つの見た目をとなり同士で混ぜる ----------
  //   夜の陽は強さ 0 のまま右下に沈み、明ける前に左下へ回る（見えている間に空を横切らない）
  const LOOK = {
    night: { sky: [38, 52, 108, 0.72], land: [72, 92, 150, 0.6], glow: [255, 190, 150, 0], sun: [300, 360], moon: 0.24, rays: 0, ang: 0, night: 1, shadow: 0 },
    predawn: { sky: [70, 74, 130, 0.66], land: [96, 104, 156, 0.56], glow: [255, 190, 150, 0], sun: [-260, 360], moon: 0.12, rays: 0, ang: -60, night: 0.8, shadow: 0 },
    dawn: { sky: [214, 180, 214, 0.5], land: [228, 206, 222, 0.42], glow: [255, 190, 160, 0.42], sun: [-235, 330], moon: 0, rays: 0.18, ang: -55, night: 0.25, shadow: 8 },
    morning: { sky: [250, 222, 200, 0.3], land: [255, 240, 222, 0.3], glow: [255, 214, 150, 0.45], sun: [-170, 190], moon: 0, rays: 0.3, ang: -35, night: 0, shadow: 6 },
    noon: { sky: [255, 255, 255, 0], land: [255, 255, 255, 0], glow: [255, 252, 240, 0.25], sun: [0, 40], moon: 0, rays: 0.16, ang: 0, night: 0, shadow: 0 },
    afternoon: { sky: [255, 244, 225, 0.15], land: [255, 244, 225, 0.22], glow: [255, 232, 196, 0.32], sun: [170, 150], moon: 0, rays: 0.22, ang: 30, night: 0, shadow: -5 },
    evening: { sky: [244, 160, 118, 0.52], land: [246, 190, 142, 0.45], glow: [255, 168, 100, 0.5], sun: [235, 320], moon: 0, rays: 0.28, ang: 55, night: 0.15, shadow: -8 },
  };
  // [その日の何分目, 見た目]
  const KEYS = [[0, 'night'], [240, 'night'], [285, 'predawn'], [330, 'dawn'], [450, 'morning'], [660, 'noon'], [780, 'noon'], [900, 'afternoon'], [1050, 'evening'], [1170, 'night'], [1440, 'night']];
  function light(min) {
    const m = ((min % 1440) + 1440) % 1440;
    let i = 0; while (i < KEYS.length - 2 && KEYS[i + 1][0] <= m) i++;
    const [m0, k0] = KEYS[i], [m1, k1] = KEYS[i + 1], A = LOOK[k0], B = LOOK[k1];
    let t = (m - m0) / (m1 - m0); t = t * t * (3 - 2 * t);
    const o = { name: t < 0.5 ? k0 : k1 };
    for (const k of Object.keys(A)) o[k] = Array.isArray(A[k]) ? A[k].map((v, j) => v + (B[k][j] - v) * t) : A[k] + (B[k] - A[k]) * t;
    return o;
  }
  function applyLight(d = new Date()) {
    const L = light(d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60), rgb = (c) => c.slice(0, 3).map(Math.round).join(',');
    const v = { '--sky': rgb(L.sky), '--sky-a': L.sky[3], '--land': rgb(L.land), '--land-a': L.land[3], '--glow': rgb(L.glow), '--glow-a': L.glow[3],
      '--sun-x': L.sun[0], '--sun-y': L.sun[1], '--moon': L.moon, '--rays-a': L.rays, '--rays-ang': 180 + L.ang - 35, '--night': L.night, '--shadow': L.shadow };
    for (const [k, x] of Object.entries(v)) wrap.style.setProperty(k, typeof x === 'number' ? x.toFixed(3) : x);
    wrap.classList.toggle('no-night', L.night < 0.02);
    wrap.dataset.look = L.name;
    applySky(d);
  }
  // 画面が見えていない時は、動きと BGM を止める（電池のため）
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('paused', document.hidden);
    if (document.hidden) { if (bgm && bgm.on) { hidPaused = true; bgmOff(); } }
    else { applyLight(); if (hidPaused) { hidPaused = false; if (!muted) bgmOn(); } }
  });
  setInterval(() => { if (!document.hidden) { applyLight(); bgmUpdate(); } }, 60000);

  // ---------- 舞台を画面に合わせる（設計は 390×640。PC の左右の森も同じ倍率）----------
  let scale = 1;
  function fit() {
    scale = Math.max(0.62, Math.min(innerWidth / 390, (innerHeight - 96) / 640, 1.45));
    stage.style.transform = ui.style.transform = `scale(${scale})`;
    wrap.style.height = `${Math.round(640 * scale)}px`;
    document.documentElement.style.setProperty('--s', String(scale));   // 舞台の倍率（PC では舞台の外の字にも掛ける）
    wrap.classList.toggle('wide', innerWidth > Math.round(390 * scale) + 1);   // 左右に空きがある時だけ広い森
   // 壁が画面の外へ出きる大きさ
    stage.style.setProperty('--wall-end', Math.max(5, innerWidth / 2 / scale / 90 + 1.5).toFixed(2));
  }

  // ---------- 場所の札：立ち上がった紙の上の位置（板の幅・高さに対する割合）----------
  const ANCHOR = [
    ['roots', '.w-roots', 0.5, 1.2],   // 扉を隠さないよう、紙のすぐ下に
    ['spring', '.f-spring', 0.36, 0.55],
    ['cave', '.f-cave', 0.6, 0.39],
    ['branch', '.w-tree', 0.86, 0.24],   // 枝先の花の上（花を隠さない）
    ['play', '.w-tree', 0.14, 0.24],     // 左の枝の上（下に下がるブランコを隠さない）
    ['cloud', '.f-cloud', 0.3, 0.11],
  ];
  const labels = new Map();
  ANCHOR.forEach(([id], i) => {
    const p = PLACES.get(id), b = el('button', 'label');
    b.type = 'button'; b.dataset.place = id; b.style.transitionDelay = `${(reduce ? 0 : 3.0 + i * 0.16).toFixed(2)}s`;
    const t = el('span', 't'); t.append(el('span', 'n', p.name), el('span', 's', p.sub));
    b.append(el('span', 'dot'), t);
    b.setAttribute('aria-label', `${p.name}（${p.sub}）の作品を見る`);
    b.addEventListener('click', () => openSheet(id, b));
    labelsBox.append(b); labels.set(id, b);
  });
  function refreshMarks() { for (const [id, b] of labels) b.classList.toggle('visited', seen.has(id)); }

  // ひらいた形にしてから位置を測る（transform のかかった紙の、画面での箱）
  function measure() {
    const opened = stage.classList.contains('open');
    setCls('instant', true);
    if (!opened) setCls('open', true);
    void stage.offsetWidth;
    const sr = stage.getBoundingClientRect();
    const at = (sel, fx, fy) => { const r = stage.querySelector(sel).getBoundingClientRect(); return [((r.left - sr.left + r.width * fx) / scale).toFixed(1), ((r.top - sr.top + r.height * fy) / scale).toFixed(1)]; };
    for (const [id, sel, fx, fy] of ANCHOR) { const [x, y] = at(sel, fx, fy), b = labels.get(id); b.style.left = `${x}px`; b.style.top = `${y}px`; }
   // 妖精の光（世界樹の上）・夜の窓の灯り（根元の工房の扉・洞窟の口）
    for (const [name, sel, fx, fy] of [['f', '.w-tree', 0.5, 0.05], ['door', '.w-roots', 0.63, 0.84], ['cave', '.f-cave', 0.567, 0.81]]) {
      const [x, y] = at(sel, fx, fy);
      if (name === 'f') { ui.style.setProperty('--fx', `${(x - 6).toFixed(1)}px`); ui.style.setProperty('--fy', `${y}px`); }
      else { ui.style.setProperty(`--${name}-x`, `${x}px`); ui.style.setProperty(`--${name}-y`, `${y}px`); }
    }
    if (!opened) setCls('open', false);
    void stage.offsetWidth;
    setCls('instant', false);
  }

  // ---------- 本をひらく・とばす・閉じる ----------
  let state = 'closed', timer = 0;
  function settle() {
    state = 'open'; clearTimeout(timer);
    skipBtn.hidden = true; closeBtn.hidden = false;
    prompt.textContent = '行き先の札を押してください';
    if (actx) bgmOn();
    lifeStart(); refreshBack();
  }
  function instantly(fn) { setCls('instant', true); fn(); void stage.offsetWidth; requestAnimationFrame(() => setCls('instant', false)); }
  // 開いた後の絵は、最初の絵の後に読む（先に押されたら、その時に）
  function later() {
    if (!wrap.classList.contains('wait')) return;
    const season = (location.search.match(/season=(spring|summer|autumn|winter)/) || [])[1] || skyOf(new Date()).season;   // 森は今の季節の絵だけ（?season= で見比べ）
    wrap.dataset.season = season;
    for (const im of document.querySelectorAll('img[data-src]')) { im.src = im.dataset.src.replace('_autumn.', `_${season}.`); im.removeAttribute('data-src'); }
    wrap.classList.remove('wait');
  }
  if (document.readyState === 'complete') setTimeout(later, 0); else addEventListener('load', () => setTimeout(later, 0), { once: true });
  function open(now) {
    if (state !== 'closed') return;
    later();
    if (!now) { touch(); sound('open'); push('mura'); }   // さわってひらいた時だけ鳴る・履歴に積む
    if (now || reduce) { instantly(() => setCls('open', true)); settle(); return; }
    state = 'opening'; refreshBack();
    setCls('open', true);
    skipBtn.hidden = false;
    prompt.textContent = '';
    timer = setTimeout(settle, 4300);
  }
  function closeBook() {
    clearTimeout(timer);
    instantly(() => setCls('open', false));
    bgmOff(); lifeStop();
    state = 'closed'; closeBtn.hidden = true; skipBtn.hidden = true; refreshBack();
    prompt.textContent = '本をひらいて、行き先を選んでください';
  }
  openBtn.addEventListener('click', () => open(false));
  skipBtn.addEventListener('click', () => { instantly(() => {}); settle(); });
  closeBtn.addEventListener('click', () => { if (back('mura')) { closeBook(); setStage(''); } openBtn.focus(); });

  // ---------- 戻るボタン：工房の中の段（村・場所の一覧）を履歴に積み、戻るで1段ずつ戻る ----------
  //   住所の # は決まった名前だけ（ほかは無視）。来てすぐ戻ると、来る前のページへ（段で閉じこめない）
  const HASH = { roots: 'basho-nemoto', branch: 'basho-eda', play: 'basho-asobiba', spring: 'basho-izumi', cave: 'basho-doukutsu', cloud: 'basho-kumo' };
  const BYHASH = Object.fromEntries(Object.entries(HASH).map(([k, v]) => [v, k]));
  const stageOf = () => { const k = location.hash.slice(1); return k === 'mura' || Object.prototype.hasOwnProperty.call(BYHASH, k) ? k : ''; };
  let depth = 0;   // この開き方で積んだ段の数（0 なら、戻るで工房の外へ）
  function push(k) { if (stageOf() !== k) { depth++; history.pushState({ kobo: k, depth }, '', `#${k}`); } }
  function setStage(k) { history.replaceState({ kobo: k, depth }, '', k ? `#${k}` : location.pathname + location.search); }
  function back(k) { if (depth > 0 && stageOf() === k) { history.back(); return false; } return true; }   // 積んだ段なら履歴を戻す。でなければ、ここで閉じる
  function show(k) {   // その段を、動きも音もなしに出す（戻る・進む・戻ってきた時）
    if (k && state !== 'open') { if (state === 'closed') open(true); else { instantly(() => {}); settle(); } }
    if (!k && state !== 'closed') closeBook();
    if (BYHASH[k]) { if (sheet.hidden || sheetPlace !== BYHASH[k]) openSheet(BYHASH[k], null, true); } else if (!sheet.hidden) closeSheet();
  }
  addEventListener('popstate', () => { depth = (history.state && history.state.depth) || 0; show(stageOf()); });
  addEventListener('pagehide', () => bgmOff());   // ほかのページへ行く時は、曲を止める

  // ---------- 注意書きの立て札（本人の文。字は textContent で、見る人の端末のフォント）----------
  function noticeSign() {
    const s = el('div', 'sign'); s.setAttribute('role', 'note');
    for (const line of DATA.notice) s.append(el('p', null, line));
    return s;
  }
  $('aboutNotice').append(noticeSign());

  // ---------- 場所の作品の一覧（台帳の文字は textContent でだけ出す）----------
  const sheet = $('sheet'), sheetBg = $('sheetBg'), body = $('sheetBody');
  let opener = null, bubble = null;
  const last = {};
  const safeUrl = (u) => { try { const x = new URL(u); return x.protocol === 'https:' ? x.href : ''; } catch (e) { return ''; } };
  function pick(st) {
    const list = DATA.voices[st] || [];
    if (list.length < 2) return list[0] || '';
    let i; do { i = Math.floor(Math.random() * list.length); } while (i === last[st]);
    last[st] = i; return list[i];
  }
  function closeBubble() { if (bubble) { bubble.remove(); bubble = null; } }
  // 完成でない作品：押すと妖精のひとこと。調整中・作りかけは「見てみる ›」、準備中はひとことだけ
  function say(li, w, st) {
    const same = bubble && bubble.parentNode === li;
    closeBubble();
    if (same) return;
    touch(); sound('sparkle');
    bubble = el('div', 'bubble'); bubble.dataset.status = st; bubble.setAttribute('role', 'status');
    const who = el('img', 'who'); who.src = 'img/r_fairy.webp'; who.alt = ''; who.width = 33; who.height = 30;
    const box = el('div', 'say'); box.append(el('p', 'words', pick(st)));
    const url = st === '準備中' ? '' : safeUrl(w.url);
    if (url) { const a = el('a', 'peek', '見てみる ›'); a.href = url; box.append(a); }
    bubble.append(who, box); li.append(bubble);
    bubble.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  }
  // 泉の一覧の頭：工房の BGM を聞く（1曲ずつ・メドレーで）。押すと音を入れて、その曲へ重ねて移る。もう一度押すと、いつもの BGM へ
  function listen(list) {
    listening = list ? { list, i: 0 } : null;
    if (list && muted) { muted = false; soundBtn.textContent = '音：あり'; }
    if (!muted) { ctx(); bgmPrime(); if (bgm) { if (!bgm.on) bgmOn(); else if (list) bgmPlay(want(), 1.5); else bgmUpdate(); } }   // 選んだ曲は頭から
    listenMarks();
  }
  function musicBox() {
    const box = el('div', 'listen'), all = el('button', 'l-all'), ul = el('ul', 'items');
    box.append(el('h3', 'grp', '工房の BGM（この森で流れている曲）'));
    all.type = 'button'; all.dataset.no = '*';
    all.addEventListener('click', () => listen(listening && listening.list.length > 1 ? null : [...TRACKS.keys()]));
    for (const s of TRACKS.values()) {
      const li = el('li', 'item track'), b = el('button', 'box');
      b.type = 'button'; b.dataset.no = s.no;
      b.append(el('span', 'it-name', s.title), el('span', 'it-note', `いつ流れる：${s.when}`));
      b.addEventListener('click', () => listen(listening && listening.list.length === 1 && listening.list[0] === s.no ? null : [s.no]));
      li.append(b); ul.append(li);
    }
    box.append(all, ul);
    return box;
  }
  function listenMarks() {   // 聞いている曲・メドレーの印と、いま流れている曲の印
    const on = !!(bgm && bgm.on);
    for (const b of body.querySelectorAll('.listen [data-no]')) {
      const all = b.dataset.no === '*', pressed = on && !!listening && (all ? listening.list.length > 1 : listening.list.length === 1 && listening.list[0] === b.dataset.no);
      b.classList.toggle('on', pressed); b.setAttribute('aria-pressed', String(pressed));
      if (all) b.textContent = pressed ? `メドレーをとめる（いつもの BGM へ）` : `メドレーで聞く（${TRACKS.size}曲を順に）`;
      else b.closest('li').classList.toggle('now', on && bgm.no === b.dataset.no);
    }
  }
  function item(w) {
    const st = statusOf(w), li = el('li', 'item'), url = safeUrl(w.url);
    li.dataset.status = st;
    const box = st === DONE && url ? el('a') : el('button', 'box');
    if (box.tagName === 'A') box.href = url; else box.type = 'button';   // 外へは同じタブで（戻るで、この一覧へ帰れる）
    box.append(el('span', 'it-name', w.name));
    if (w.note) box.append(el('span', 'it-note', w.note));
    const meta = el('span', 'it-meta'), k = el('span', 'kind', w.kind); k.classList.add('k-' + w.kind); meta.append(k);
    if (st !== DONE) { const m = el('span', 'stat', st); m.prepend(el('i', 'mk ' + MARK[st])); meta.append(m); }
    if (w.date) meta.append(el('span', 'date', w.date.replace(/-/g, '.')));
    box.append(meta); li.append(box);
    if (st !== DONE) box.addEventListener('click', () => say(li, w, st));
    return li;
  }
  function openSheet(id, from, quiet) {
    const p = PLACES.get(id); if (!p) return;
    sheetPlace = id; refreshBack();
    if (!quiet) { touch(); sound(id); push(HASH[id]); }   // 場所ごとの楽器・履歴に積む
    bgmUpdate();
    opener = from || null; closeBubble();
    $('sheetSub').textContent = p.sub; $('sheetTitle').textContent = p.name; $('sheetLine').textContent = p.line;
    body.replaceChildren();
    if (id === 'roots') body.append(noticeSign());   // 工房の中で、いちばん目に入る所に立て札
    if (id === 'spring' && TRACKS.size) { body.append(musicBox()); listenMarks(); }   // 音楽の泉：工房の BGM を聞く
    const works = DATA.works.filter((w) => w.place === id), groups = [];
    for (const w of works) { let g = groups.find((x) => x.name === w.group); if (!g) groups.push((g = { name: w.group, list: [] })); g.list.push(w); }
    for (const g of groups) {
      const n = g.list.length;
      body.append(el('h3', 'grp', n > 6 ? `${g.name}（${n}）` : g.name));
      const ul = el('ul', 'items'); g.list.forEach((w) => ul.append(item(w))); body.append(ul);
    }
    sheet.hidden = false; sheetBg.hidden = false;
    requestAnimationFrame(() => { sheet.classList.add('show'); sheetBg.classList.add('show'); });
    body.scrollTop = 0;
    $('sheetClose').focus({ preventScroll: true });
    mark(id); refreshMarks();
  }
  function closeSheet() {
    closeBubble();
    sheetPlace = null; bgmUpdate(); refreshBack();
    sheet.classList.remove('show'); sheetBg.classList.remove('show');
    setTimeout(() => { sheet.hidden = true; sheetBg.hidden = true; }, 320);
    if (opener) opener.focus({ preventScroll: true });
  }
  const shut = () => { if (back(HASH[sheetPlace])) { closeSheet(); setStage(state === 'closed' ? '' : 'mura'); } };   // 積んだ段なら、履歴を戻して閉じる
  $('sheetClose').addEventListener('click', shut);
  sheetBg.addEventListener('click', shut);
  // 一つ前にもどる（本人 2026-10-25「単純に一つ前にもどる的な機能がきちんとほしい」）：一覧 → 村 → 閉じた本の順に1段ずつ。
  //   履歴に積んだ段なら、端末の「戻る」と同じ動き（一覧の「閉じる」・「本を閉じる」と同じ道を通る）。閉じた本では隠す
  const backBtn = $('backBtn');
  function refreshBack() { backBtn.hidden = state === 'closed' && sheetPlace == null; }
  backBtn.addEventListener('click', () => { if (sheetPlace != null) shut(); else if (state !== 'closed') closeBtn.click(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) { if (bubble) closeBubble(); else shut(); } });

  // ---------- 下の並び：場所から選ぶ・つながる ----------
  for (const p of DATA.places) {
    const n = DATA.works.filter((w) => w.place === p.id).length;
    const b = el('button', 'place-btn'); b.type = 'button';
    b.append(el('span', 'n', p.name), el('span', 's', p.sub), el('span', 'c', `${n}`));
    b.addEventListener('click', () => openSheet(p.id, b));
    const li = el('li'); li.append(b); $('placeList').append(li);
  }
  for (const l of DATA.links) {
    const url = safeUrl(l.url); if (!url) continue;
    const a = el('a', null, l.name); a.href = url;
    const li = el('li'); li.append(a); $('links').append(li);
  }

  // ---------- 森の時間：風・鳥・雲の影 ----------
  // 本人 2026-10-24「落ち葉だけよりも、森を抜ける風に背景の木々がわずかにざわめいたり、鳥が飛んだり止まったり、太陽（光）の位置が変わったり、自然にできるだけ近い感じで」
  //   木：1本（1組）ずつのばね。いつものそよ風と、ときどき端から端へ渡る突風に押されて、根元を軸にしなって戻る（行き過ぎて少し揺り返す）
  //   鳥（ヤマガラ）：昼だけ。飛んできて枝や洞窟の屋根に止まり、向きをかえ・ついばみ、しばらくして飛び去る。突風で飛び立つことも。遠くの空を群れが渡ることも
  //   雲の影：昼だけ。地面を横切り、その間は陽の光が薄れる。陽の位置そのものは見る人の時刻のまま（早回しにしない）
  const TR = DATA.trees, rnd = (a, b) => a + Math.random() * (b - a), now = () => performance.now() / 1000;
  const trees = [], gusts = [], birds = [];
  const treesW = wrap.querySelector('.trees-w'), birdsBox = stage.querySelector('.birds'), amb = ui.querySelector('.ambient');
  const cloud = wrap.querySelector('.t-cloud'), glowEl = wrap.querySelector('.t-glow'), raysEl = wrap.querySelector('.t-rays'), wt = stage.querySelector('.w-tree');
  if (TR) {   // 森の木の部品（紙の木を森の地に重ねる）。スマホは舞台の中（見える6組だけ）、PC は舞台の外の森の層の上（全部）
    const fr = document.createDocumentFragment();
    for (const c of TR.cells) for (const wide of [false, true]) {
      if (!wide && c[9] !== 0) continue;
      const [bx, by, bw, bh, ax, ay, px, py, front, sh] = c, [sw, shh] = TR.sizes[sh], e = el('i', 'tr s' + sh);
      Object.assign(e.style, { width: `${bw}px`, height: `${bh}px`, backgroundSize: `${sw}px ${shh}px`, backgroundPosition: `${-ax}px ${-ay}px`, transformOrigin: `${px - bx}px ${py - by}px` });
      if (wide) treesW.append(e); else { e.style.left = `${bx - 525}px`; e.style.top = `${by}px`; fr.append(e); }
      trees.push({ e, c, wide, x: px, a: 0, v: 0, s: '', f: front ? rnd(0.42, 0.55) : rnd(0.55, 0.8), g: front ? 1.1 : 1 });
    }
    stage.querySelector('.forest-c').after(fr);
  }
  function placeTrees() {   // PC の木：森の層と同じ倍率・同じまん中（軸の点が森の絵の同じ所に来るよう、軸のまわりに縮める）
    const cx = wrap.clientWidth / 2;
    for (const t of trees) if (t.wide) { const [bx, by, , , , , px, py] = t.c; Object.assign(t.e.style, { left: `${cx + (px - 720) * scale - (px - bx)}px`, top: `${py * scale - (py - by)}px`, scale: String(scale) }); }
  }
  function wind(x, t) {   // x＝森の絵の横の位置。そよ風（右へ・強さがゆらぐ）＋渡っていく突風
    let w = 0.16 + 0.1 * Math.sin(t * 0.29 + x * 0.004) + 0.06 * Math.sin(t * 0.87 + x * 0.013 + 1.7);
    for (const g of gusts) { const u = (t - g.t0 - (g.d > 0 ? x - g.x0 : g.x0 - x) / g.c) / g.len; if (u > 0 && u < 1) w += g.d * g.a * Math.sin(Math.PI * u) ** 2; }
    return w;
  }
  const day = () => { const d = new Date(); return light(d.getHours() * 60 + d.getMinutes()).night < 0.3 && !(SKY && (SKY.rain || SKY.snow)); };   // 鳥と雲の影は、晴れた昼だけ
  // ---------- 空の様子：いま流れる曲（bgm.json の決まり）と同じ時間帯・季節で決める＝聞こえる曲と、見える空がそろう ----------
  //   朝つゆの森（01）＝光の粒。雨上がりの曲の日は 10〜11時に雨／妖精たちのワルツ（04）＝昼も森の精が淡く舞う／雨上がりのしずく（05）＝虹と、葉からのしずく
  //   ほたるの灯る夜（02）＝ほたる・森の精・星と流れ星／雪ふる森の冬ごもり（06）＝雪と森の精（星は雲の向こう）。冬の昼は風花
  //   空の様子は見る人の土地の天気ではなく、この森の天気（場所は聞かない・外へ問い合わせない）
  let SKY = null;
  function skyOf(d) {
    const h = d.getHours() + d.getMinutes() / 60, mo = ((d.getMonth() + (south ? 6 : 0)) % 12) + 1, noon = new Date(d);
    noon.setHours(12, 0, 0, 0);
    const song = choose(d, null), winter = mo === 12 || mo <= 2, night = light(h * 60).night > 0.4;
    const rain = !winter && h >= 10 && h < 11 && choose(noon, null) === '05';
    return { song, season: winter ? 'winter' : mo <= 5 ? 'spring' : mo <= 8 ? 'summer' : 'autumn', rain, snow: song === '06', flakes: winter && !night && song !== '06',
      flies: song === '02', sprites: ['02', '04', '06'].includes(song), bow: song === '05', stars: night && song !== '06' && !rain };
  }
  function applySky(d) {
    SKY = skyOf(d);
    for (const k of ['rain', 'snow', 'flakes', 'flies', 'sprites', 'bow', 'stars']) wrap.classList.toggle('sky-' + k, SKY[k]);
    wrap.dataset.season = SKY.season;
  }
  for (const [box, n, f] of [['snow', 28, (e) => [rnd(3, 6.5), rnd(9, 16)]], ['rain', 44, () => [0, rnd(0.6, 1.0)]], ['sprites', 7, () => [0, rnd(40, 70)]]]) {   // 空の粒を並べる（位置と速さは1つずつ違う）
    const c = wrap.querySelector('.sky .' + box);
    for (let i = 0; i < n; i++) {
      const e = el('i'), [z, dur] = f(e);
      e.style.setProperty('--x', `${rnd(-4, 104).toFixed(1)}%`); e.style.setProperty('--d', `${dur.toFixed(2)}s`); e.style.setProperty('--dl', `${(-rnd(0, dur)).toFixed(2)}s`);
      if (z) e.style.setProperty('--z', `${z.toFixed(1)}px`);
      if (box === 'sprites') { e.style.setProperty('--y', `${rnd(12, 66).toFixed(1)}%`); e.style.setProperty('--k', rnd(0.6, 1.3).toFixed(2)); e.style.setProperty('--b', `${rnd(4, 8).toFixed(1)}s`); }   // 大小と、息の間
      c.append(e);
    }
  }
  // 世界樹から舞う物（本人 2026-10-25「世界樹の木より上からは舞わないよう、できれば世界樹から」）：茂み（f_tree の 260×340 の中の楕円）の下半分と脇から離れる。
  //   春は枝先の花から花びら・夏は若葉・秋は色づいた葉・冬はまれ。雨上がりは葉からしずく
  const CROWN = [130, 80, 108, 66], BLOSSOM = [[22, 128], [247, 119], [234, 131], [221, 144]];
  const LEAF = { spring: ['#a7c98a', '#94bd7a'], summer: ['#a7c98a', '#8fbb76', '#7fae68'], autumn: ['#e8b04a', '#d9822f', '#c95b3a', '#e6c35a'], winter: ['#b39a73'] };
  const RATE = { spring: [2.5, 5], summer: [6, 11], autumn: [2, 4], winter: [25, 45] };
  function treeAt(x, y) { const sr = stage.getBoundingClientRect(), r = wt.getBoundingClientRect(); return [(r.left - sr.left + r.width * x / 260) / scale, (r.top - sr.top + r.height * y / 340) / scale]; }
  function dropLeaf(push = 0, delay = 0, fast = false, kind = '') {
    const season = SKY ? SKY.season : 'summer', drip = kind === 'drip', petal = !drip && season === 'spring' && Math.random() < 0.7;
    const a = rnd(-0.3, 1.3) * Math.PI, k = rnd(0.55, 1);
    const [x0, y0] = petal ? (([bx, by]) => treeAt(bx + rnd(-5, 5), by + rnd(-4, 4)))(BLOSSOM[Math.floor(Math.random() * BLOSSOM.length)]) : treeAt(CROWN[0] + Math.cos(a) * CROWN[2] * k, CROWN[1] + Math.sin(a) * CROWN[3] * k);
    const e = el('i', drip ? 'drip' : 'gleaf'), L = light(new Date().getHours() * 60 + new Date().getMinutes()), top = 0.85 * (1 - 0.6 * L.night);
    if (!drip) { const cs = petal ? ['#f6c9c4', '#f2b5b8', '#f8d6d0'] : LEAF[season]; e.style.background = cs[Math.floor(Math.random() * cs.length)]; if (petal) e.style.borderRadius = '50% 50% 50% 0'; }
    amb.append(e);
    const fall = drip ? rnd(180, 260) : fast ? rnd(60, 160) : rnd(170, 290), dx = push + (drip ? 0 : rnd(-20, 20) + 24 * wind(720, now())), sw = drip ? 0 : petal ? 18 : 12, r = drip ? 0 : (dx >= 0 ? 1 : -1) * rnd(200, 520);
    const P = (u, o) => ({ offset: u, transform: `translate(${(x0 + dx * u + sw * Math.sin(u * 9)).toFixed(1)}px,${(y0 + fall * u).toFixed(1)}px) rotate(${(r * u).toFixed(0)}deg)`, ...(o == null ? {} : { opacity: o }) });
    e.animate([P(0, 0), P(0.08, top), P(0.35), P(0.65), P(0.85, top), P(1, 0)], { duration: drip ? rnd(1100, 1600) : fast ? rnd(2600, 3800) : rnd(6000, 9000), delay, easing: drip ? 'ease-in' : 'linear' }).onfinish = () => e.remove();
    return [x0, y0];
  }
  function shootStar() {   // 晴れた夜の流れ星（空の上の方を、斜めに一瞬）
    const W = wrap.clientWidth, x = rnd(0.15, 0.85) * W, y = rnd(20, 120) * scale, s = wrap.querySelector('.shoot');
    s.animate([{ transform: `translate(${x}px,${y}px)`, opacity: 0 }, { offset: 0.15, opacity: 1 }, { transform: `translate(${x + 160 * scale}px,${y + 52 * scale}px)`, opacity: 0 }], { duration: 900, easing: 'ease-out' });
  }
  function gust(d = Math.random() < 0.75 ? 1 : -1) {
    const g = { t0: now(), d, x0: d > 0 ? -80 : 1520, c: rnd(330, 470), a: rnd(0.6, 1.05), len: rnd(1.4, 2.2) };
    gusts.push(g);
    if (!SKY || SKY.season !== 'winter') for (let i = 0, n = Math.round(rnd(3, 6)); i < n; i++) dropLeaf(d * rnd(150, 260), Math.max(0, (d > 0 ? 720 - g.x0 : g.x0 - 720) / g.c * 1000) + rnd(0, 400), true);   // 突風が世界樹に届いた時、茂みから葉がさらわれる
    if (g.a > 0.9) for (const b of birds) if (b.st === 'sit' && Math.random() < 0.6) b.leaveAt = g.t0 + Math.max(0, (d > 0 ? b.x + 525 - g.x0 : g.x0 - b.x - 525) / g.c);   // 強い風が来たら飛び立つ
  }
  // 鳥：1コマ 30×22（scenes.js の BIRD）。止まりに来る鳥は 0.45 倍・遠くの群れは 0.22 倍。コマ＝0 羽を上・1 羽を下・2 滑空・3 止まる・4 ついばむ。足の先(14, 20.6)を止まる点に合わせる
  const PERCH = [['.w-tree', 58 / 260, 126.5 / 340], ['.w-tree', 210 / 260, 163.5 / 340], ['.f-cave', 65 / 150, 21 / 160]], FOOT = [14, 20.6];   // 世界樹の2つは枝の上の面
  function perchAt(i) {
    const [sel, fx, fy] = PERCH[i], sr = stage.getBoundingClientRect(), r = stage.querySelector(sel).getBoundingClientRect();
    return [(r.left - sr.left + r.width * fx) / scale, (r.top - sr.top + r.height * fy) / scale];
  }
  const curve = (p0, p1, p2) => (u) => [(1 - u) * (1 - u) * p0[0] + 2 * (1 - u) * u * p1[0] + u * u * p2[0], (1 - u) * (1 - u) * p0[1] + 2 * (1 - u) * u * p1[1] + u * u * p2[1]];
  function fly(b, to, lift, speed) {   // 今の所から to へ、羽ばたき（0.5秒）と滑空（0.3秒）をくり返して飛ぶ
    const from = [b.x, b.y], d = Math.hypot(to[0] - from[0], to[1] - from[1]);
    b.path = curve(from, [(from[0] + to[0]) / 2, Math.min(from[1], to[1]) - lift], to); b.t0 = now(); b.dur = d / speed; b.face = to[0] >= from[0] ? 1 : -1;
  }
  function bird(kind = Math.random() < 0.3 ? 'flock' : 'visit', pi) {
    const hw = wrap.clientWidth / 2 / scale + 40, side = Math.random() < 0.5 ? -1 : 1;
    if (kind === 'flock') {   // 遠くの空を渡る小さな群れ（止まらない）
      const y = rnd(50, 140), n = Math.round(rnd(3, 5));
      for (let i = 0; i < n; i++) { const b = newBird(0.22); b.x = 195 + side * (hw + i * 9); b.y = y + rnd(-10, 10) + i * 4; fly(b, [195 - side * (hw + 20), b.y + rnd(-25, 25)], rnd(5, 20), rnd(55, 75)); b.st = 'pass'; b.ph = rnd(0, 1); }
      return;
    }
    const free = PERCH.map((_, i) => i).filter((i) => !birds.some((x) => x.perch === i));
    if (!free.length) return;
    const b = newBird(0.45); b.perch = pi != null && free.includes(pi) ? pi : free[Math.floor(Math.random() * free.length)];
    b.x = 195 + side * hw; b.y = rnd(70, 170);
    fly(b, perchAt(b.perch), rnd(30, 80), rnd(120, 160)); b.st = 'in';
  }
  function newBird(sc) { const e = el('i', 'bird'); birdsBox.append(e); const b = { e, sc, x: 0, y: 0, face: 1, f: -1, st: '', ph: 0 }; birds.push(b); return b; }
  function birdTick(b, t) {
    let fr = 3, bob = 0;
    if (b.st === 'in' || b.st === 'out' || b.st === 'pass') {
      const u = Math.min(1, (t - b.t0) / b.dur), [x, y] = b.path(u), k = ((t - b.t0) / 0.8 + b.ph) % 1, flap = k < 0.62;
      b.x = x; b.y = y;
      fr = b.st === 'in' && u > 0.9 ? ((t * 20) | 0) % 2 : flap ? ((t * 14) | 0) % 2 : 2;   // 止まる直前は小刻みに羽ばたいて速さを殺す
      bob = (1 - u * (b.st === 'in')) * (flap ? -2.5 * Math.sin(Math.PI * k / 0.62) : 2 * Math.sin(Math.PI * (k - 0.62) / 0.38));
      if (u >= 1) {
        if (b.st === 'in') { b.st = 'sit'; b.leaveAt = t + rnd(6, 14); b.next = t + rnd(0.8, 2); bob = 0; fr = 3; }
        else { b.e.remove(); birds.splice(birds.indexOf(b), 1); return; }
      }
    } else if (b.st === 'sit') {   // 止まった所のまま（世界樹のしなりは横に1px ほどで、枝の上の縁から浮かない）
      if (t > b.next) { const r = Math.random(); if (r < 0.5) b.face = -b.face; else if (r < 0.85) b.peck = t + 0.35; b.next = t + rnd(1, 2.6); }
      fr = b.peck > t ? 4 : 3;
      if (t > b.leaveAt) { const hw = wrap.clientWidth / 2 / scale + 40, s = Math.random() < 0.5 ? -1 : 1; b.perch = -1; fly(b, [195 + s * hw, rnd(40, 140)], rnd(10, 40), rnd(150, 190)); b.st = 'out'; }
    }
    if (fr !== b.f) { b.f = fr; b.e.style.backgroundPosition = `${-fr * 30}px 0`; }
    b.e.style.transform = `translate(${(b.x - FOOT[0]).toFixed(1)}px,${(b.y - FOOT[1] + bob).toFixed(1)}px) scale(${b.face * b.sc},${b.sc})`;
  }
  let raf = 0, pace = 0, lastT = 0, running = false, wtBase = '', wtA = 0, wtV = 0, nextGust = 0, nextBird = 0, nextCloud = 0, nextLeaf = 0, nextDrip = 0, nextStar = 0;
  // 木と鳥を動かすのは、スマホは1秒30コマまで（PC は60）。動かすたびにページ全体の描き直しが走り、画面の速いスマホ（90〜120回）では
  //   描き直しだけで手いっぱいになって曲が途切れた（本人 2026-10-25「スマホで音割れ・音飛び」。CPU を4倍遅くして、主スレッドの忙しさ 92% → 32%）
  const GAP = 1000 / (matchMedia('(pointer: coarse)').matches ? 30 : 60) - 8;
  function tick(ms) {
    pace = setTimeout(() => { raf = requestAnimationFrame(tick); }, GAP);
    const t = ms / 1000, dt = Math.min(0.05, lastT ? t - lastT : 0.016), wide = wrap.classList.contains('wide');
    lastT = t;
    for (const tr of trees) {
      if (tr.wide !== wide) continue;
      const k = (2 * Math.PI * tr.f) ** 2;
      tr.v += (k * (tr.g * wind(tr.x, t) - tr.a) - 0.44 * Math.sqrt(k) * tr.v) * dt; tr.a += tr.v * dt;
      const s = (-tr.a).toFixed(2); if (s !== tr.s) { tr.s = s; tr.e.style.transform = `skewX(${s}deg)`; }
    }
    if (wt) { const k = (2 * Math.PI * 0.32) ** 2; wtV += (k * (0.22 * wind(720, t) - wtA) - 0.5 * Math.sqrt(k) * wtV) * dt; wtA += wtV * dt; wt.style.transform = `${wtBase} skewX(${(-wtA).toFixed(2)}deg)`; }
    for (const b of birds.slice()) birdTick(b, t);
    for (let i = gusts.length - 1; i >= 0; i--) if (t > gusts[i].t0 + 1700 / gusts[i].c + gusts[i].len) gusts.splice(i, 1);
    if (t > nextGust) { gust(); nextGust = t + rnd(12, 30); }
    if (t > nextBird) { if (day()) bird(); nextBird = t + rnd(18, 45); }
    if (t > nextCloud) { if (day()) cloudPass(); nextCloud = t + rnd(40, 90); }
    if (t > nextLeaf) { dropLeaf(); const [a, b] = RATE[SKY ? SKY.season : 'summer']; nextLeaf = t + rnd(a, b); }
    if (SKY && SKY.bow && t > nextDrip) { dropLeaf(0, 0, false, 'drip'); nextDrip = t + rnd(1.2, 3); }
    if (SKY && SKY.stars && t > nextStar) { shootStar(); nextStar = t + rnd(40, 110); }
  }
  function cloudPass() {   // 雲の影が地面を横切り、その間は陽の光が薄れる
    const W = wrap.clientWidth, cw = cloud.offsetWidth, d = Math.random() < 0.8 ? 1 : -1, dur = rnd(16000, 24000);
    cloud.animate([{ transform: `translateX(${d > 0 ? -cw : W}px)`, opacity: 0 }, { offset: 0.12, opacity: 1 }, { offset: 0.88, opacity: 1 }, { transform: `translateX(${d > 0 ? W : -cw}px)`, opacity: 0 }], { duration: dur, easing: 'linear' });
    for (const [e, k] of [[glowEl, 0.5], [raysEl, 0.35]]) { const o = +getComputedStyle(e).opacity; e.animate([{ opacity: o }, { offset: 0.3, opacity: o }, { offset: 0.45, opacity: o * k }, { offset: 0.62, opacity: o * k }, { offset: 0.78, opacity: o }, { opacity: o }], { duration: dur, easing: 'ease-in-out' }); }
  }
  function lifeStart() {
    if (reduce || running || !TR) return;
    running = true; lastT = 0;
    if (wt) { wt.style.transform = ''; wtBase = getComputedStyle(wt).transform; if (wtBase === 'none') wtBase = ''; }
    const t = now(); nextGust = t + rnd(3, 8); nextBird = t + rnd(5, 12); nextCloud = t + rnd(15, 40); nextLeaf = t + rnd(1, 3); nextDrip = t + 1; nextStar = t + rnd(8, 30);
    raf = requestAnimationFrame(tick);
  }
  function lifeStop() {
    running = false; clearTimeout(pace); cancelAnimationFrame(raf); gusts.length = 0;
    for (const b of birds) b.e.remove(); birds.length = 0;
    for (const tr of trees) { tr.a = tr.v = 0; tr.s = ''; tr.e.style.transform = ''; }
    if (wt) wt.style.transform = '';
  }

  // ---------- 妖精の光の粉：飛んだ道筋に残り、その場で消える ----------
  const fairyEl = ui.querySelector('.fairy');
  let dustTimer = 0, flying = false;
  function dustAt(x, y) {
    const d = el('i', Math.random() < 0.4 ? 'dust x' : 'dust'), s = rnd(0.7, 1.35);
    d.style.left = `${(x + rnd(-2.5, 2.5)).toFixed(1)}px`; d.style.top = `${(y + rnd(-2.5, 2.5)).toFixed(1)}px`;
    fairyEl.before(d);
    d.animate([{ opacity: 0, transform: 'scale(.3)' }, { offset: 0.15, opacity: 1, transform: `scale(${s})` }, { offset: 0.38, opacity: 0.3 }, { offset: 0.6, opacity: 0.9 },
      { opacity: 0, transform: `translate(${rnd(-2, 2).toFixed(1)}px, ${rnd(-2, 1.5).toFixed(1)}px) scale(.2)` }], { duration: rnd(900, 1600), easing: 'ease-out' }).onfinish = () => d.remove();
  }
  function dustTick() {
    dustTimer = 0;
    if (reduce || document.hidden) return;
    const cs = getComputedStyle(fairyEl), m = cs.transform === 'none' ? null : new DOMMatrixReadOnly(cs.transform);
    dustAt(parseFloat(cs.left) + 6, parseFloat(cs.top) + 6 + (m ? m.m42 : 0));
    dustTimer = setTimeout(dustTick, flying ? 30 : rnd(320, 560));
  }
  fairyEl.addEventListener('transitionstart', (e) => { if (e.propertyName === 'left') { flying = true; clearTimeout(dustTimer); dustTick(); } });
  for (const t of ['transitionend', 'transitioncancel']) fairyEl.addEventListener(t, (e) => { if (e.propertyName === 'left') flying = false; });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !dustTimer) dustTick(); });
  dustTick();

  // ---------- はじめ ----------
  fit(); placeTrees(); applyLight(); measure(); refreshMarks();
  // 開き直した時は、いつも図書館（閉じた本）から。自動で先へ進めない（本人 2026-10-25「本棚が一瞬だけ表示して、すぐ世界樹の森まで進んでしまう」）。
  //   このタブでたどった段へ「戻る」・読み直しで来た時だけ、その段から。場所の一覧を指した住所（港町の部屋の「工房へもどる」など）は、その一覧から
  const k0 = stageOf(), here = !!(history.state && history.state.kobo === k0);
  depth = (history.state && history.state.depth) || 0;
  if (location.hash && (!k0 || (k0 === 'mura' && !here))) setStage('');   // 知らない # と、開き直した時の村の # は消す
  else if (k0) show(k0);   // その段から、動きも音もなしに
  let rz = 0;
  addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { fit(); placeTrees(); if (state !== 'opening') measure(); }); });
  // 検査が見るための窓（ページの動きは変えない）
  window.__kobo = Object.freeze({
    state: () => state, played: () => played.slice(), level, notes: () => Object.entries(SONG).flatMap(([n, l]) => l.flatMap(([i, m]) => (i === 'shake' ? [] : [].concat(m).map((x) => [n, x])))),   // 鈴のシャンは高さの無い金属音なので除く
    bgm: () => (bgm ? { no: bgm.no, on: bgm.on, i: bgm.i, els: bgm.els.map((x) => ({ paused: x.a.paused, t: x.a.currentTime, g: x.g.value, no: x.no, rs: x.a.readyState, vol: x.a.volume })), native: NATIVE } : null),    choose: (iso, place) => choose(new Date(iso), place || null), light, south: () => south, sky: (iso) => skyOf(new Date(iso)),
    life: Object.freeze({   // 森の時間：突風・鳥を今すぐ起こす／木と鳥の今の様子／止まる点
      gust: (d) => gust(d), bird: (kind, i) => bird(kind, i), day, running: () => running, perch: (i) => perchAt(i),
      hush: () => { nextGust = nextBird = nextCloud = nextLeaf = nextDrip = nextStar = Infinity; },   // ひとりでに起きる風・鳥・雲・葉を止める（検査の間だけ）
      leaf: () => dropLeaf(), crown: () => [treeAt(0, 0), treeAt(260, 0), treeAt(130, 5)],   // 葉を1枚落とす（出た所を返す）／世界樹の箱の左上・右上・茂みのてっぺん
      trees: () => trees.map((t) => ({ x: t.x, a: t.a, wide: t.wide, front: t.c[8], tf: t.e.style.transform })),
      birds: () => birds.map((b) => ({ st: b.st, x: b.x, y: b.y, f: b.f, perch: b.perch, rect: b.e.getBoundingClientRect().toJSON() })),
    }),
  });
})();

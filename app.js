(() => {
  'use strict';
  // 台帳（works.json）は、組み立ての時にここへ流しこむ（ページの外から文字は入らない）
  const DATA = {"places":[{"id":"roots","name":"根元の工房","sub":"地図と道具","line":"会社の道具を、AIとつくる作業場。連載の中身を、触れる地図と道具にしました。"},{"id":"branch","name":"枝","sub":"カードの花","line":"節目に咲く、仕掛けつきのカード。LINE で送れます。"},{"id":"spring","name":"泉","sub":"音楽","line":"AI音楽工房の MV。工房が企画し、BGM&V Studio が制作しています。"},{"id":"cave","name":"洞窟","sub":"連載と動画","line":"経営者のための連載「AI内製化の羅針盤」と、記事の動画。"},{"id":"cloud","name":"雲の上","sub":"旅","line":"本物の旅のしおりと、想像の世界旅行。"}],"notice":["当工房では職人が気ままに作っているため、突然変更が入ったり、途中でとまっているコンテンツがあったりします。","これは作成途中をリアルタイムにお見せする趣旨のものですので、作りかけの雰囲気も含めて楽しんでもらい、成長を見守っていただけたら幸いです。"],"voices":{"調整中":["ちょっと調整中。見てもいいけど変なところがあっても気にしないでね。","いま、ねじを締め直しているところ。動くけど、ときどきガタッとするかも。","仕上げの真っ最中！ 気づいたことがあったら、そっと教えてね。","ただいま磨き中。ピカピカになるまで、もう少し。"],"作りかけ":["ただいま作りかけ。リアルタイム進行中。","まだ骨組みだけど、のぞいていってね。","作っている途中をそのまま見せちゃうよ。明日には変わってるかも！","工房の机の上で、いま組み立て中。"],"準備中":["今作成中だよ！もうすぐ公開するね！","まだ種の中。芽が出たら、ここでお知らせするね。","いま、絵の具を溶いているところ。もう少しだけ待っててね。","職人がこっそり仕込み中。お楽しみに！"]},"works":[{"place":"roots","group":"3Dの地図","kind":"触れる","name":"4つの島の航海図（利益マップ）","note":"「何から入れると儲かる？」を、3Dの海図に。","url":"https://tatatasan323-cell.github.io/note-app/"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"天空の城への道（内製化ロードマップ）","note":"6つの関門を越えて、天空の城へ。","url":"https://tatatasan323-cell.github.io/note-app/road.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"AIの全体地図（6層＋4横断面）","note":"会社のAIの仕組みを、6つの層で見る。","url":"https://tatatasan323-cell.github.io/note-app/arch.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"そもそもAIって？ 5部作の地図","note":"「そもそもAIって？」5本の地図。","url":"https://tatatasan323-cell.github.io/note-app/aimap/"},{"place":"roots","group":"道具","kind":"触れる","name":"城 ─ 経営ステータス","note":"社長の一枚画面。架空の会社で動くデモ。","url":"https://tatatasan323-cell.github.io/castle/"},{"place":"roots","group":"道具","kind":"触れる","name":"転記ゼロ（tenki-zero 体験版）","note":"転記の手作業をなくす仕組みを、ブラウザで試す。","url":"https://tatatasan323-cell.github.io/tenki-zero/"},{"place":"roots","group":"手引き","kind":"読む","name":"AIエージェント利用ガイド","note":"部下としてハーネスする。社内で配れる手引き。","url":"https://tatatasan323-cell.github.io/note-app/ai-agent-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"乗っ取り対策の手引き","note":"パスキーでも守れない、2つの穴。","url":"https://tatatasan323-cell.github.io/note-app/security-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"会社のセキュリティ段階表","note":"自社の段階を確かめる表。","url":"https://tatatasan323-cell.github.io/note-app/security-levels.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第001号","note":"システムプロンプト、八割削除。","url":"https://tatatasan323-cell.github.io/note-app/jihou-001.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第002号","note":"穴を空けたのはAI、突いたのもAI。","url":"https://tatatasan323-cell.github.io/note-app/jihou-002.html"},{"place":"roots","group":"工房のこれから","kind":"歩く","status":"準備中","name":"世界樹の村（3Dで歩ける町）","note":"この地図の本から入って、村を歩けるようにします。","url":""},{"place":"branch","group":"カード","kind":"触れる","name":"ハロウィン招待状 ─ おばけの庭へようこそ","note":"おばけに触れると、音と豆知識。","url":"https://tatatasan323-cell.github.io/gimmick-cards/halloween/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ おかしな港町","note":"宝石をはじき、ステンドグラスを割り、氷を削る冬の港町（動く3D）。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ X'mas グリーティングカード","note":"港町とつながるカード。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/card.html"},{"place":"branch","group":"カード","kind":"触れる","status":"調整中","name":"正月のカード ─ 作品の一覧","note":"正月のカード 76 作。絵を押すと、さわって動く本物が開きます。","url":"https://ai-naiseika.github.io/cards/shogatsu/"},{"place":"branch","group":"カード","kind":"触れる","status":"作りかけ","name":"送る予定 ─ 節目のカード","note":"カードを、あとで送るための予定。時間になったら、スマホのカレンダーが知らせます。","url":"https://ai-naiseika.github.io/cards/yotei/"},{"place":"spring","group":"MV","kind":"見る","name":"雨上がりの小径 ― 水たまりを、跳んでいたころ","note":"最初の MV。","date":"2026-10-06","url":"https://youtu.be/yi53ACtNxp8"},{"place":"spring","group":"MV","kind":"見る","name":"パンプキン・ポン！ ― ハロウィンの夜のドキドキ","note":"切り絵の魔女とモンスターの踊り。","date":"2026-10-14","url":"https://youtu.be/uFx4Vcr8o8A"},{"place":"spring","group":"MV","kind":"見る","name":"Friends Around the Table ─ テーブルに集まれ！","note":"クリスマス3部作の1本目。","date":"2026-10-19","url":"https://youtu.be/pEvqS5da3-s"},{"place":"spring","group":"MV","kind":"見る","status":"調整中","name":"Christmas Feels Like Being ─ きみといる、それがクリスマス","note":"クリスマス3部作の2本目。","date":"2026-10-20","url":"https://youtu.be/RKxuMam_c9c"},{"place":"spring","group":"MV","kind":"見る","name":"Singing Glory ─ グローリー・グローリー！","note":"クリスマス3部作の3本目。","date":"2026-10-23","url":"https://youtu.be/oR3KyE3Zmxo"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、なぜ罠にはまる？ ─ 天空の城へ続く「6つの関門」","note":"","date":"2026-10-13","url":"https://youtu.be/-Dja11xVGzQ"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、まず何から？ ─ 儲けにつながる「4つの島」の航海図","note":"","date":"2026-10-10","url":"https://youtu.be/xKATNxc-q50"},{"place":"cave","group":"記事の動画","kind":"見る","name":"動画生成AIなしで描いた26の画風 ── コードで描くアニメーション見本帳","note":"","date":"2026-10-07","url":"https://youtu.be/dQ2MLnKi8rE"},{"place":"cave","group":"記事の動画","kind":"見る","name":"DeepSeekなど中国AIは業務に使っていい？ ー 決め手は性能でも価格でもなく「調達」","note":"","date":"2026-10-06","url":"https://youtu.be/P4EKVp7NFms"},{"place":"cave","group":"記事の動画","kind":"見る","name":"「AIで、仕事は消えるのか」──ある会社の \"未来の一日\"【朗読ストーリー】","note":"","date":"2026-08-15","url":"https://youtu.be/s-KqdbO6xWk"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【HTMLとは？ Pythonとは？】 AI内製化の全体像が4分で分かる見取り図","note":"","date":"2026-07-27","url":"https://youtu.be/c1A3KVXweG0"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【スクール不要】月3,000円で始めるAI内製化／総集編・全8話","note":"","date":"2026-07-03","url":"https://youtu.be/3dDNd_MuB0Y"},{"place":"cave","group":"物語","kind":"読む","name":"未来の一日 ─ どこにでもある会社の朝","note":"朗読ストーリーの本。","url":"https://tatatasan323-cell.github.io/note-app/mirai/"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-19","name":"AI利用、どこから始めるか。答えは「1人」と「1つの痛み」","url":"https://note.com/ai_naiseika/n/n27912da5b3da"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-13","name":"「スクールもコンサルも要らない」の、本当の意味","url":"https://note.com/ai_naiseika/n/n51217db465e9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"前橋の観光案内を、AIと2日で作る ー 「確かめた度合い」を隠さない作り方","url":"https://note.com/ai_naiseika/n/n5c6551d1beac"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"工房からの警告 再び ー AIに任せていい所、いけない所","url":"https://note.com/ai_naiseika/n/neb45bbba31cf"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-10","name":"AIエージェントがあるのに、仕組みを作る理由 ー 内製化すべき2つの場所","url":"https://note.com/ai_naiseika/n/n667d22b71479"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-07","name":"会話だけで動画を作る ー【脱・動画生成】AIアニメーションの可能性","url":"https://note.com/ai_naiseika/n/na5e82389ac72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-06","name":"工房からの警告 ー 「AIが勝手に動き回る？」報道の真偽と、守るべき場所","url":"https://note.com/ai_naiseika/n/n4c308409efd9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-03","name":"ある日突然の「アカバン」 ー 生成AIサブスクの落とし穴","url":"https://note.com/ai_naiseika/n/n8923fd964394"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-29","name":"AI巨額投資の行く末 ー いつか来る「ババ抜き」ゲームの終わり","url":"https://note.com/ai_naiseika/n/nc9e8207bcf78"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-28","name":"パスキーも乗っ取られる時代に。必ずすべきセキュリティ対策とは。","url":"https://note.com/ai_naiseika/n/n5b747190fa6e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-27","name":"AI暴走論と終末論のさなかで ー あなたがすべき一手とは","url":"https://note.com/ai_naiseika/n/nf04f65023439"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-21","name":"奇跡の37手から10年。中国AIの実力と、日本企業が引くべき一線。","url":"https://note.com/ai_naiseika/n/n31214e08120e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-20","name":"AI依存症に陥らないためのガイド ー 「AIに聞く/指示する」2つの違い","url":"https://note.com/ai_naiseika/n/n4193a3063552"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-14","name":"あなたのAI、期待通り動きますか？ ー AIの力を引き出すための思考法","url":"https://note.com/ai_naiseika/n/n7e4462f1908f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-08","name":"バックオフィスが消える日。社内ステータスがリアルに見える未来への羅針盤。","url":"https://note.com/ai_naiseika/n/n07f8688e64df"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-31","name":"AIが空けた穴を、別のAIが5日で見つけて突く ── 8月までのAI事故と、私の工房の点検結果","url":"https://note.com/ai_naiseika/n/ned77cf0c294e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-26","name":"AIのこれから ─ 「情報の土台」を持つことの意味","url":"https://note.com/ai_naiseika/n/n54fd60e90f04"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-24","name":"AI最前線 ─ 代表5社の現在地と、内製化に使うべき道具","url":"https://note.com/ai_naiseika/n/n06bea781e796"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-17","name":"OpenAIという物語 ─ 「人類のためのAI」は、どこへ向かっているのか","url":"https://note.com/ai_naiseika/n/n12816bc47432"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-11","name":"70年というAIの歩み ─ その挑戦と、“ 奇跡の一手 ” と、一本の論文","url":"https://note.com/ai_naiseika/n/n3471aeed4c26"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-01","name":"AIとは本当は何なのか　優秀な相棒？　頼れる相談役？　得体のしれない何か？","url":"https://note.com/ai_naiseika/n/n33eadda7b1b0"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-31","name":"経営者が知るべき、最後まで残る仕事 ─ AIが連れて行く “異世界” の話","url":"https://note.com/ai_naiseika/n/ne340418a0949"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-28","name":"Anthropicが、自社のAI開発ツールの内部指示を8割以上削除。その真意は？","url":"https://note.com/ai_naiseika/n/nec9184d934b1"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-27","name":"HTMLとは？ Pythonとは？ ─ 目指す内製化を一目で理解する見取り図","url":"https://note.com/ai_naiseika/n/ne47dde16170f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-23","name":"AIは本当に安全なのか？ 世間で騒がれているプロンプトインジェクションを回避する唯一の方法とは？","url":"https://note.com/ai_naiseika/n/nd3d82deb2f4f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-20","name":"その事務仕事いつまでやるのですか？【２】　例えば転記作業が無くなる日","url":"https://note.com/ai_naiseika/n/n5f46bef5c41b"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-12","name":"その事務仕事いつまでやるのですか？【１】　例えば明細を放り込むだけのツール","url":"https://note.com/ai_naiseika/n/n56e563d80e2a"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-06","name":"AI導入、知らないと失敗する ─ 成功に近づくための「内製化ロードマップ」","url":"https://note.com/ai_naiseika/n/nbf98e9add127"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-04","name":"ぶっちゃけ、AIは何から入れると儲かる？ ─ 経営者のための “利益” の地図","url":"https://note.com/ai_naiseika/n/nb7e3a2ca7fca"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-29","name":"繰り返し定型作業をAIで ─ 一度の “仕組み” が大切","url":"https://note.com/ai_naiseika/n/n9462746fd8ba"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-22","name":"メールは良いのに、AIはダメ？ ─ 会社の情報を “どこまで外に出すか”","url":"https://note.com/ai_naiseika/n/n295bc71d253d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-15","name":"プロトタイプは早い、本番はその先 ─ 内製化を「育てる」ということ","url":"https://note.com/ai_naiseika/n/n4f8ea3f4696d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-12","name":"バイブコーディングが通用しなくなる日 ─ AIに渡す『要件定義』の話","url":"https://note.com/ai_naiseika/n/n5f043fb74a72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-09","name":"AIは嘘をつかない。けれど、あなたに「忖度」する","url":"https://note.com/ai_naiseika/n/n34c94b0c2a20"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-04","name":"AIと迷走しないために、最初にやるべきこと","url":"https://note.com/ai_naiseika/n/nb72e3552d43d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-31","name":"AIエージェントを、今日入れる ─ 使い方も、AIに聞けばいい","url":"https://note.com/ai_naiseika/n/n808d67e92440"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-26","name":"「こうしたい」と伝えるだけで、何かが作れる時代","url":"https://note.com/ai_naiseika/n/n912fbc83f1c6"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-25","name":"料理人だった私が、AI内製化でシステムを作れる理由","url":"https://note.com/ai_naiseika/n/nd6a51b98694c"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-18","name":"AIを学ぶのに「スクール」「コンサル」が要らない新時代","url":"https://note.com/ai_naiseika/n/ndfc95eb3f0fa"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"前橋まちあるき（12/20 まで）","note":"芸術祭と「詩のまち」を歩く案内。確かめた度合いを印で示す。","url":"https://tatatasan323-cell.github.io/note-app/tabi/maebashi/"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"松本まちあるき","note":"松本駅から美ヶ原温泉まで、ゆるく歩く参考メモ（11/7〜8 の例）。","url":"https://tatatasan323-cell.github.io/note-app/tabi/matsumoto-burari/"},{"place":"cloud","group":"世界旅行","kind":"見る","name":"想像の世界旅行","note":"雲に乗って、想像だけで世界を旅する部屋を作っています。","status":"準備中","url":""}],"links":[{"name":"note「AI内製化の羅針盤」","url":"https://note.com/ai_naiseika"},{"name":"YouTube「AI内製化工房 MITA」","url":"https://www.youtube.com/@ai_naiseika_mita"},{"name":"X @ai_naiseika","url":"https://x.com/ai_naiseika"},{"name":"音楽 BGM&V Studio（AI音楽工房の制作）","url":"https://www.youtube.com/@BackgroundMusicVideoStudio"}],"music":{"settings":{"volume":0.7,"overlap":4,"fade_in":4},"rules":[{"place":"roots","song":"03"},{"months":[12,1,2],"hours":[16,5],"song":"06"},{"hours":[5,11],"song":"01"},{"hours":[11,16],"songs":["04","05"]},{"hours":[16,5],"song":"02"}],"songs":[{"no":"01","title":"朝つゆの森","note":"朝の光が、葉の先の露をひとつずつ照らしていく森。チェレスタとオルゴールがきらきらと目をさまし、ハープとグロッケン、カリンバが続きます。フルートは、遠くで鳴く小鳥のように。","trivia":["チェレスタは、パリの楽器製作者オーギュスト・ミュステルが1886年に特許をとった楽器。","チャイコフスキーの『くるみ割り人形』の「金平糖の踊り」は、チェレスタを使った曲として有名。"],"file":"bgm/01.m4a","bpm":68.0,"ready":true},{"no":"02","title":"ほたるの灯る夜","note":"日が落ちて、森にほたるの小さな灯りがともる夜。チェレスタとオルゴール、ハープが静かに瞬き、言葉のないコーラスと鈴の音が、闇をやさしく包みます。","trivia":["オルゴールの歴史は1796年、ジュネーブの時計職人アントワーヌ・ファーブルの発明から始まったとされる。"],"file":"bgm/02.m4a","bpm":58.75,"ready":true},{"no":"03","title":"世界樹への祈り","note":"工房の根元で、世界樹に手を当てて祈るひととき。ケルトのハープが静かに語り、ティンホイッスルが風のように、チェロが大地のように深く響きます。","trivia":["アイルランドの国章はハープ。大統領や大臣の印章にも、アイルランドのユーロ硬貨にも描かれている。","国章のハープのお手本は、ダブリンのトリニティ・カレッジの博物館に残る14世紀のハープ。"],"file":"bgm/03.m4a","bpm":89.1,"ready":true},{"no":"04","title":"妖精たちのワルツ","note":"昼下がりの木もれ日の中、妖精たちが輪になって踊る3拍子。オルゴールとチェレスタがくるくる回り、ピチカートの弦が足どりを刻み、フルートが軽やかに舞います。","trivia":["ワルツは4分の3拍子の踊りの曲。1814〜15年のウィーン会議をきっかけに、ヨーロッパ中へ広まった。","『美しく青きドナウ』は「ワルツ王」ヨハン・シュトラウス2世の曲。1867年にウィーンで初演された。"],"file":"bgm/04.m4a","bpm":95.7,"ready":true},{"no":"05","title":"雨上がりのしずく","note":"雨がやんで、葉から落ちるしずくが光る森。ピアノとチェレスタが雫のように、カリンバがぽつぽつと、ウィンドチャイムが風にゆれて鳴ります。","trivia":["カリンバはアフリカの「親指ピアノ」の仲間。金属の鍵の親指ピアノは、約1300年前にザンベジ川のほとりで生まれたという。","ピアノの黒鍵だけを弾くと、五つの音でできた音階「ペンタトニック（五音音階）」になる。"],"file":"bgm/05.m4a","bpm":64.6,"ready":true},{"no":"06","title":"雪ふる森の冬ごもり","note":"雪が音を吸いこんで、しんと静かな冬の夜の森。チェレスタとオルゴール、ハープがやわらかく降り、グラスハーモニカの澄んだ響きが、雪明かりのように広がります。","trivia":["グラスハーモニカは、フランクリンが1761年に完成させた楽器。回るガラスの器のふちに、ぬれた指で触れて鳴らす。","モーツァルトも1791年、グラスハーモニカの入った「アダージョとロンド」（K.617）を書いた。"],"file":"bgm/06.m4a","bpm":68.0,"ready":true}]}};
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
  const KEY = 'kobo-map-v1', IDS = new Set(['map', ...PLACES.keys()]), seen = new Set();
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
    handbell: { p: [[1, 1, 2.4], [2, 0.32, 1.3], [3, 0.16, 0.8], [4.2, 0.06, 0.4], [0.5, 0.14, 2.2]], a: 0.005, rv: 0.45 },
    kalimba: { p: [[1, 1, 1.1], [2, 0.1, 0.4], [5.9, 0.16, 0.12]], a: 0.003, rv: 0.4 },
    drop: { p: [[1, 1, 0.55], [2, 0.18, 0.2]], a: 0.003, rv: 0.75, glide: 0.72 },   // 水琴窟の雫：下から音へすっと上がる
    marimba: { p: [[1, 1, 0.9], [4, 0.22, 0.25], [9.9, 0.04, 0.08]], a: 0.008, rv: 0.6, echo: 0.5 },
    harp: { p: [[1, 1, 1.9], [2, 0.42, 1.2], [3, 0.2, 0.8], [4, 0.1, 0.5], [5, 0.05, 0.3]], a: 0.004, rv: 0.45 },
  };
  // 鳴らす音：[楽器, 高さ（MIDI）, 秒, 強さ]
  const at = (inst, amp, list) => list.map(([m, t]) => [inst, m, t, amp]);
  const SONG = {
    // 本をひらく：鈴の「シャン、シャン、シャン」（少しずつ大きく）→ 世界樹が起きる所で澄んだひと鳴り。後ろに、ごく小さなチェレスタ
    open: [['shake', 0, 0.05, 0.02], ['shake', 0, 0.29, 0.026], ['shake', 0, 0.53, 0.032], ['ping', [114, 117], 1.05, 0.03]]
      .concat(at('celesta', 0.12, [[86, 0.7], [90, 0.82], [93, 0.94], [98, 1.06]])),
    roots: at('musicbox', 0.8, [[81, 0], [78, 0.17], [74, 0.34], [76, 0.51], [78, 0.68], [81, 0.85], [86, 1.1]]).concat(at('musicbox', 0.35, [[62, 0]])),   // オルゴール
    branch: at('handbell', 0.7, [[74, 0], [78, 0.24], [81, 0.48], [86, 0.78]]),   // ハンドベル
    spring: at('kalimba', 0.88, [[71, 0], [74, 0.15], [76, 0.3], [81, 0.52]]).concat(at('drop', 0.5, [[90, 0.24], [95, 0.7]])),  // カリンバと雫
    cave: at('marimba', 0.9, [[57, 0], [62, 0.2], [66, 0.4], [69, 0.62], [62, 0.9]]),   // ほら穴に響くマリンバ
    cloud: at('harp', 0.6, [62, 64, 66, 69, 71, 74, 76, 78, 81, 83, 86].map((m, i) => [m, i * 0.045])).concat(at('harp', 0.45, [[90, 0.6]])),   // ハープのグリッサンド
    sparkle: at('glock', 0.4, [[93, 0], [98, 0.06], [102, 0.12]]),   // 妖精のひとこと
  };
  // ピークがそろう強さ（check.py が測る）
  const LEVEL = { open: 7.1, roots: 1.7, branch: 1.51, spring: 1.46, cave: 1.35, cloud: 0.9, sparkle: 1.5 };
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
      else if (i === 'ping') m.forEach((x, k) => tink(c, G, hz(x), a * L * (k ? 0.6 : 1), t0 + t + k * 0.03, 0.7, 0.006));   // 澄んだひと鳴り（高さは五音音階）
      else voice(c, G, [i, m, t0 + t, a * L]);
    }
  }
  let muted = false, actx = null, graph = null;
  const played = [];
  function ctx() {   // さわった時（押した時）にだけ作る
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); graph = chain(actx); } catch (e) { actx = null; } }
    if (actx && actx.state === 'suspended') actx.resume();
    return actx;
  }
  function sound(name) {
    if (muted || !SONG[name]) return;
    const c = ctx(); if (!c) return;
    played.push(name);
    try { render(c, graph, name, c.currentTime + 0.02); } catch (e) { /* 音が出せない端末でも動く */ }
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
  function bgmPrime() {   // さわった時に用意する（スマホは、さわった時でないと鳴らせない）。読むのは流す1曲だけ
    if (bgm || !TRACKS.size || !ctx()) return;
    const first = TRACKS.get(choose(new Date(), sheetPlace) || [...TRACKS.keys()][0]);
    const out = actx.createGain(); out.gain.value = 0; out.connect(actx.destination);
    bgm = { out, els: [], i: 0, on: false, x: false, no: null };
    const mk = (s) => {
      const a = new Audio(), g = actx.createGain(), p = { a, g, no: s ? s.no : null };
      a.preload = s ? 'auto' : 'none'; if (s) a.src = s.file; g.gain.value = 0;
      actx.createMediaElementSource(a).connect(g); g.connect(out); a.addEventListener('timeupdate', bgmLoop);
      if (s) a.play().then(() => { if (!bgm.on || bgm.els[bgm.i] !== p) { a.pause(); a.currentTime = 0; } }).catch(() => {});
      return p;
    };
    bgm.els.push(mk(first), mk(null));
  }
  function solo(cur, s, fade) {   // 2つめを鳴らせない端末（iPhone など）：1つで、いったん小さくしてから替える
    const t = actx.currentTime; bgm.i = bgm.els.indexOf(cur);
    cur.g.gain.cancelScheduledValues(t); cur.g.gain.setValueAtTime(cur.g.gain.value, t); cur.g.gain.linearRampToValueAtTime(0, t + 1);
    setTimeout(() => {
      if (cur.no !== s.no) { cur.a.src = s.file; cur.no = s.no; }
      cur.a.currentTime = 0; cur.a.play().catch(() => {});
      const u = actx.currentTime; cur.g.gain.setValueAtTime(0, u); cur.g.gain.linearRampToValueAtTime(1, u + Math.max(1, fade)); bgm.x = false;
    }, 1050);
  }
  function bgmPlay(no, fade) {   // 重ねて移る（同じ曲なら繰り返し）
    const t = actx.currentTime, cur = bgm.els[bgm.i], nxt = bgm.els[1 - bgm.i], s = TRACKS.get(no), changed = bgm.no !== no;
    bgm.x = true;
    if (nxt.no !== no) { nxt.a.src = s.file; nxt.no = no; }
    nxt.a.currentTime = 0; nxt.a.play().catch(() => solo(cur, s, fade));
    nxt.g.gain.cancelScheduledValues(t); nxt.g.gain.setValueAtTime(0, t); nxt.g.gain.linearRampToValueAtTime(1, t + fade);
    cur.g.gain.cancelScheduledValues(t); cur.g.gain.setValueAtTime(cur.g.gain.value, t); cur.g.gain.linearRampToValueAtTime(0, t + fade);
    bgm.i = 1 - bgm.i; bgm.no = no;
    setTimeout(() => { if (bgm.els[bgm.i] !== cur) cur.a.pause(); bgm.x = false; }, fade * 1000 + 150);
    if (changed) { band(s); beat(s); }
  }
  function bgmLoop() {
    if (!bgm || !bgm.on || bgm.x) return;
    const cur = bgm.els[bgm.i], ov = Math.max(0.5, setting('overlap', 4));
    if (this !== cur.a || !cur.a.duration || cur.a.duration - cur.a.currentTime > ov) return;
    bgmPlay(choose(new Date(), sheetPlace) || cur.no, ov);
  }
  function bgmOn() {
    if (!bgm || muted || bgm.on || document.hidden) return;
    const no = choose(new Date(), sheetPlace); if (!no) return;
    const t = actx.currentTime;
    bgm.on = true; bgm.no = null;
    bgm.out.gain.cancelScheduledValues(t); bgm.out.gain.setValueAtTime(bgm.out.gain.value, t); bgm.out.gain.linearRampToValueAtTime(Math.min(1, setting('volume', 0.7)), t + setting('fade_in', 4));
    const cur = bgm.els[bgm.i], s = TRACKS.get(no);
    if (cur.no === no) { cur.a.currentTime = 0; cur.a.play().catch(() => {}); cur.g.gain.setValueAtTime(1, t); bgm.no = no; band(s); beat(s); }   // 用意した1曲から
    else bgmPlay(no, 0.05);
  }
  function bgmOff() {
    if (!bgm || !bgm.on) return;
    const t = actx.currentTime;
    bgm.on = false; bgm.x = false; bgm.no = null;
    bgm.out.gain.cancelScheduledValues(t); bgm.out.gain.setValueAtTime(bgm.out.gain.value, t); bgm.out.gain.linearRampToValueAtTime(0, t + 0.3);
    setTimeout(() => { if (!bgm.on) bgm.els.forEach((x) => { x.a.pause(); x.g.gain.value = 0; }); }, 400);
    band(null); beat(null);
  }
  function bgmUpdate() { if (bgm && bgm.on) { const no = choose(new Date(), sheetPlace); if (no && no !== bgm.no) bgmPlay(no, 2.5); } }
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
    wrap.style.setProperty('--s', String(scale));
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
  }
  function instantly(fn) { setCls('instant', true); fn(); void stage.offsetWidth; requestAnimationFrame(() => setCls('instant', false)); }
  function open(now) {
    if (state !== 'closed') return;
    mark('map');
    if (!now) { touch(); sound('open'); push('mura'); }   // さわってひらいた時だけ鳴る・履歴に積む
    if (now || reduce) { instantly(() => setCls('open', true)); settle(); return; }
    state = 'opening';
    setCls('open', true);
    skipBtn.hidden = false;
    prompt.textContent = '';
    timer = setTimeout(settle, 4300);
  }
  function closeBook() {
    clearTimeout(timer);
    instantly(() => setCls('open', false));
    bgmOff();
    state = 'closed'; closeBtn.hidden = true; skipBtn.hidden = true;
    prompt.textContent = '本をひらいて、行き先を選んでください';
  }
  openBtn.addEventListener('click', () => open(false));
  skipBtn.addEventListener('click', () => { instantly(() => {}); settle(); });
  closeBtn.addEventListener('click', () => { if (back('mura')) { closeBook(); setStage(''); } openBtn.focus(); });

  // ---------- 戻るボタン：工房の中の段（村・場所の一覧）を履歴に積み、戻るで1段ずつ戻る ----------
  //   住所の # は決まった名前だけ（ほかは無視）。来てすぐ戻ると、来る前のページへ（段で閉じこめない）
  const HASH = { roots: 'basho-nemoto', branch: 'basho-eda', spring: 'basho-izumi', cave: 'basho-doukutsu', cloud: 'basho-kumo' };
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
    sheetPlace = id;
    if (!quiet) { touch(); sound(id); push(HASH[id]); }   // 場所ごとの楽器・履歴に積む
    bgmUpdate();
    opener = from || null; closeBubble();
    $('sheetSub').textContent = p.sub; $('sheetTitle').textContent = p.name; $('sheetLine').textContent = p.line;
    body.replaceChildren();
    if (id === 'roots') body.append(noticeSign());   // 工房の中で、いちばん目に入る所に立て札
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
    sheetPlace = null; bgmUpdate();
    sheet.classList.remove('show'); sheetBg.classList.remove('show');
    setTimeout(() => { sheet.hidden = true; sheetBg.hidden = true; }, 320);
    if (opener) opener.focus({ preventScroll: true });
  }
  const shut = () => { if (back(HASH[sheetPlace])) { closeSheet(); setStage(state === 'closed' ? '' : 'mura'); } };   // 積んだ段なら、履歴を戻して閉じる
  $('sheetClose').addEventListener('click', shut);
  sheetBg.addEventListener('click', shut);
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

  // ---------- はじめ ----------
  fit(); applyLight(); measure(); refreshMarks();
  const k0 = stageOf();
  depth = (history.state && history.state.depth) || 0;
  if (location.hash && !k0) setStage('');   // 知らない # は消して、ふつうの最初の画面
  if (k0) show(k0);   // 戻ってきた時：その段から、動きも音もなしに
  else if (seen.has('map')) { open(true); setStage('mura'); }   // 2度目からは、ひらいた見開きから（積まない）
  let rz = 0;
  addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { fit(); if (state !== 'opening') measure(); }); });
  // 検査が見るための窓（ページの動きは変えない）
  window.__kobo = Object.freeze({
    state: () => state, played: () => played.slice(), level, notes: () => Object.entries(SONG).flatMap(([n, l]) => l.flatMap(([i, m]) => (i === 'shake' ? [] : [].concat(m).map((x) => [n, x])))),   // 鈴のシャンは高さの無い金属音なので除く
    bgm: () => (bgm ? { no: bgm.no, on: bgm.on, els: bgm.els.map((x) => ({ paused: x.a.paused, t: x.a.currentTime, g: x.g.gain.value, no: x.no })) } : null),
    choose: (iso, place) => choose(new Date(iso), place || null), light, south: () => south,
  });
})();

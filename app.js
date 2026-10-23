(() => {
  'use strict';
  // 台帳（works.json）は、組み立ての時にここへ流しこむ（ページの外から文字は入らない）
  const DATA = {"places":[{"id":"roots","name":"根元の工房","sub":"地図と道具","line":"会社の道具を、AIとつくる作業場。連載の中身を、触れる地図と道具にしました。"},{"id":"branch","name":"枝","sub":"カードの花","line":"節目に咲く、仕掛けつきのカード。LINE で送れます。"},{"id":"spring","name":"泉","sub":"音楽","line":"AI音楽工房の MV。工房が企画し、BGM&V Studio が制作しています。"},{"id":"cave","name":"洞窟","sub":"連載と動画","line":"経営者のための連載「AI内製化の羅針盤」と、記事の動画。"},{"id":"cloud","name":"雲の上","sub":"旅","line":"本物の旅のしおりと、想像の世界旅行。"}],"notice":["当工房では職人が気ままに作っているため、突然変更が入ったり、途中でとまっているコンテンツがあったりします。","これは作成途中をリアルタイムにお見せする趣旨のものですので、作りかけの雰囲気も含めて楽しんでもらい、成長を見守っていただけたら幸いです。"],"voices":{"調整中":["ちょっと調整中。見てもいいけど変なところがあっても気にしないでね。","いま、ねじを締め直しているところ。動くけど、ときどきガタッとするかも。","仕上げの真っ最中！ 気づいたことがあったら、そっと教えてね。","ただいま磨き中。ピカピカになるまで、もう少し。"],"作りかけ":["ただいま作りかけ。リアルタイム進行中。","まだ骨組みだけど、のぞいていってね。","作っている途中をそのまま見せちゃうよ。明日には変わってるかも！","工房の机の上で、いま組み立て中。"],"準備中":["今作成中だよ！もうすぐ公開するね！","まだ種の中。芽が出たら、ここでお知らせするね。","いま、絵の具を溶いているところ。もう少しだけ待っててね。","職人がこっそり仕込み中。お楽しみに！"]},"works":[{"place":"roots","group":"3Dの地図","kind":"触れる","name":"4つの島の航海図（利益マップ）","note":"「何から入れると儲かる？」を、3Dの海図に。","url":"https://tatatasan323-cell.github.io/note-app/"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"天空の城への道（内製化ロードマップ）","note":"6つの関門を越えて、天空の城へ。","url":"https://tatatasan323-cell.github.io/note-app/road.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"AIの全体地図（6層＋4横断面）","note":"会社のAIの仕組みを、6つの層で見る。","url":"https://tatatasan323-cell.github.io/note-app/arch.html"},{"place":"roots","group":"3Dの地図","kind":"触れる","name":"そもそもAIって？ 5部作の地図","note":"「そもそもAIって？」5本の地図。","url":"https://tatatasan323-cell.github.io/note-app/aimap/"},{"place":"roots","group":"道具","kind":"触れる","name":"城 ─ 経営ステータス","note":"社長の一枚画面。架空の会社で動くデモ。","url":"https://tatatasan323-cell.github.io/castle/"},{"place":"roots","group":"道具","kind":"触れる","name":"転記ゼロ（tenki-zero 体験版）","note":"転記の手作業をなくす仕組みを、ブラウザで試す。","url":"https://tatatasan323-cell.github.io/tenki-zero/"},{"place":"roots","group":"手引き","kind":"読む","name":"AIエージェント利用ガイド","note":"部下としてハーネスする。社内で配れる手引き。","url":"https://tatatasan323-cell.github.io/note-app/ai-agent-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"乗っ取り対策の手引き","note":"パスキーでも守れない、2つの穴。","url":"https://tatatasan323-cell.github.io/note-app/security-guide.html"},{"place":"roots","group":"手引き","kind":"読む","name":"会社のセキュリティ段階表","note":"自社の段階を確かめる表。","url":"https://tatatasan323-cell.github.io/note-app/security-levels.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第001号","note":"システムプロンプト、八割削除。","url":"https://tatatasan323-cell.github.io/note-app/jihou-001.html"},{"place":"roots","group":"時報","kind":"読む","name":"ＡＩ内製化時報 第002号","note":"穴を空けたのはAI、突いたのもAI。","url":"https://tatatasan323-cell.github.io/note-app/jihou-002.html"},{"place":"roots","group":"工房のこれから","kind":"歩く","status":"準備中","name":"世界樹の村（3Dで歩ける町）","note":"この地図の本から入って、村を歩けるようにします。","url":""},{"place":"branch","group":"カード","kind":"触れる","name":"ハロウィン招待状 ─ おばけの庭へようこそ","note":"おばけに触れると、音と豆知識。","url":"https://tatatasan323-cell.github.io/gimmick-cards/halloween/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ おかしな港町","note":"宝石をはじき、ステンドグラスを割り、氷を削る冬の港町（動く3D）。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/"},{"place":"branch","group":"カード","kind":"触れる","name":"とろけて聖夜 ─ X'mas グリーティングカード","note":"港町とつながるカード。","url":"https://tatatasan323-cell.github.io/gimmick-cards/christmas-town/card.html"},{"place":"branch","group":"カード","kind":"触れる","status":"調整中","name":"正月のカード ─ 作品の一覧","note":"正月のカード 76 作。絵を押すと、さわって動く本物が開きます。","url":"https://ai-naiseika.github.io/cards/shogatsu/"},{"place":"branch","group":"カード","kind":"触れる","status":"作りかけ","name":"送る予定 ─ 節目のカード","note":"カードを、あとで送るための予定。時間になったら、スマホのカレンダーが知らせます。","url":"https://ai-naiseika.github.io/cards/yotei/"},{"place":"spring","group":"MV","kind":"見る","name":"雨上がりの小径 ― 水たまりを、跳んでいたころ","note":"最初の MV。","date":"2026-10-06","url":"https://youtu.be/yi53ACtNxp8"},{"place":"spring","group":"MV","kind":"見る","name":"パンプキン・ポン！ ― ハロウィンの夜のドキドキ","note":"切り絵の魔女とモンスターの踊り。","date":"2026-10-14","url":"https://youtu.be/uFx4Vcr8o8A"},{"place":"spring","group":"MV","kind":"見る","name":"Friends Around the Table ─ テーブルに集まれ！","note":"クリスマス3部作の1本目。","date":"2026-10-19","url":"https://youtu.be/pEvqS5da3-s"},{"place":"spring","group":"MV","kind":"見る","status":"調整中","name":"Christmas Feels Like Being ─ きみといる、それがクリスマス","note":"クリスマス3部作の2本目。","date":"2026-10-20","url":"https://youtu.be/RKxuMam_c9c"},{"place":"spring","group":"MV","kind":"見る","name":"Singing Glory ─ グローリー・グローリー！","note":"クリスマス3部作の3本目。","date":"2026-10-23","url":"https://youtu.be/oR3KyE3Zmxo"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、なぜ罠にはまる？ ─ 天空の城へ続く「6つの関門」","note":"","date":"2026-10-13","url":"https://youtu.be/-Dja11xVGzQ"},{"place":"cave","group":"記事の動画","kind":"見る","name":"AI導入、まず何から？ ─ 儲けにつながる「4つの島」の航海図","note":"","date":"2026-10-10","url":"https://youtu.be/xKATNxc-q50"},{"place":"cave","group":"記事の動画","kind":"見る","name":"動画生成AIなしで描いた26の画風 ── コードで描くアニメーション見本帳","note":"","date":"2026-10-07","url":"https://youtu.be/dQ2MLnKi8rE"},{"place":"cave","group":"記事の動画","kind":"見る","name":"DeepSeekなど中国AIは業務に使っていい？ ー 決め手は性能でも価格でもなく「調達」","note":"","date":"2026-10-06","url":"https://youtu.be/P4EKVp7NFms"},{"place":"cave","group":"記事の動画","kind":"見る","name":"「AIで、仕事は消えるのか」──ある会社の \"未来の一日\"【朗読ストーリー】","note":"","date":"2026-08-15","url":"https://youtu.be/s-KqdbO6xWk"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【HTMLとは？ Pythonとは？】 AI内製化の全体像が4分で分かる見取り図","note":"","date":"2026-07-27","url":"https://youtu.be/c1A3KVXweG0"},{"place":"cave","group":"記事の動画","kind":"見る","name":"【スクール不要】月3,000円で始めるAI内製化／総集編・全8話","note":"","date":"2026-07-03","url":"https://youtu.be/3dDNd_MuB0Y"},{"place":"cave","group":"物語","kind":"読む","name":"未来の一日 ─ どこにでもある会社の朝","note":"朗読ストーリーの本。","url":"https://tatatasan323-cell.github.io/note-app/mirai/"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-19","name":"AI利用、どこから始めるか。答えは「1人」と「1つの痛み」","url":"https://note.com/ai_naiseika/n/n27912da5b3da"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-13","name":"「スクールもコンサルも要らない」の、本当の意味","url":"https://note.com/ai_naiseika/n/n51217db465e9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"前橋の観光案内を、AIと2日で作る ー 「確かめた度合い」を隠さない作り方","url":"https://note.com/ai_naiseika/n/n5c6551d1beac"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-12","name":"工房からの警告 再び ー AIに任せていい所、いけない所","url":"https://note.com/ai_naiseika/n/neb45bbba31cf"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-10","name":"AIエージェントがあるのに、仕組みを作る理由 ー 内製化すべき2つの場所","url":"https://note.com/ai_naiseika/n/n667d22b71479"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-07","name":"会話だけで動画を作る ー【脱・動画生成】AIアニメーションの可能性","url":"https://note.com/ai_naiseika/n/na5e82389ac72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-06","name":"工房からの警告 ー 「AIが勝手に動き回る？」報道の真偽と、守るべき場所","url":"https://note.com/ai_naiseika/n/n4c308409efd9"},{"place":"cave","group":"連載","kind":"読む","date":"2026-10-03","name":"ある日突然の「アカバン」 ー 生成AIサブスクの落とし穴","url":"https://note.com/ai_naiseika/n/n8923fd964394"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-29","name":"AI巨額投資の行く末 ー いつか来る「ババ抜き」ゲームの終わり","url":"https://note.com/ai_naiseika/n/nc9e8207bcf78"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-28","name":"パスキーも乗っ取られる時代に。必ずすべきセキュリティ対策とは。","url":"https://note.com/ai_naiseika/n/n5b747190fa6e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-27","name":"AI暴走論と終末論のさなかで ー あなたがすべき一手とは","url":"https://note.com/ai_naiseika/n/nf04f65023439"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-21","name":"奇跡の37手から10年。中国AIの実力と、日本企業が引くべき一線。","url":"https://note.com/ai_naiseika/n/n31214e08120e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-20","name":"AI依存症に陥らないためのガイド ー 「AIに聞く/指示する」2つの違い","url":"https://note.com/ai_naiseika/n/n4193a3063552"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-14","name":"あなたのAI、期待通り動きますか？ ー AIの力を引き出すための思考法","url":"https://note.com/ai_naiseika/n/n7e4462f1908f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-09-08","name":"バックオフィスが消える日。社内ステータスがリアルに見える未来への羅針盤。","url":"https://note.com/ai_naiseika/n/n07f8688e64df"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-31","name":"AIが空けた穴を、別のAIが5日で見つけて突く ── 8月までのAI事故と、私の工房の点検結果","url":"https://note.com/ai_naiseika/n/ned77cf0c294e"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-26","name":"AIのこれから ─ 「情報の土台」を持つことの意味","url":"https://note.com/ai_naiseika/n/n54fd60e90f04"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-24","name":"AI最前線 ─ 代表5社の現在地と、内製化に使うべき道具","url":"https://note.com/ai_naiseika/n/n06bea781e796"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-17","name":"OpenAIという物語 ─ 「人類のためのAI」は、どこへ向かっているのか","url":"https://note.com/ai_naiseika/n/n12816bc47432"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-11","name":"70年というAIの歩み ─ その挑戦と、“ 奇跡の一手 ” と、一本の論文","url":"https://note.com/ai_naiseika/n/n3471aeed4c26"},{"place":"cave","group":"連載","kind":"読む","date":"2026-08-01","name":"AIとは本当は何なのか　優秀な相棒？　頼れる相談役？　得体のしれない何か？","url":"https://note.com/ai_naiseika/n/n33eadda7b1b0"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-31","name":"経営者が知るべき、最後まで残る仕事 ─ AIが連れて行く “異世界” の話","url":"https://note.com/ai_naiseika/n/ne340418a0949"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-28","name":"Anthropicが、自社のAI開発ツールの内部指示を8割以上削除。その真意は？","url":"https://note.com/ai_naiseika/n/nec9184d934b1"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-27","name":"HTMLとは？ Pythonとは？ ─ 目指す内製化を一目で理解する見取り図","url":"https://note.com/ai_naiseika/n/ne47dde16170f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-23","name":"AIは本当に安全なのか？ 世間で騒がれているプロンプトインジェクションを回避する唯一の方法とは？","url":"https://note.com/ai_naiseika/n/nd3d82deb2f4f"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-20","name":"その事務仕事いつまでやるのですか？【２】　例えば転記作業が無くなる日","url":"https://note.com/ai_naiseika/n/n5f46bef5c41b"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-12","name":"その事務仕事いつまでやるのですか？【１】　例えば明細を放り込むだけのツール","url":"https://note.com/ai_naiseika/n/n56e563d80e2a"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-06","name":"AI導入、知らないと失敗する ─ 成功に近づくための「内製化ロードマップ」","url":"https://note.com/ai_naiseika/n/nbf98e9add127"},{"place":"cave","group":"連載","kind":"読む","date":"2026-07-04","name":"ぶっちゃけ、AIは何から入れると儲かる？ ─ 経営者のための “利益” の地図","url":"https://note.com/ai_naiseika/n/nb7e3a2ca7fca"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-29","name":"繰り返し定型作業をAIで ─ 一度の “仕組み” が大切","url":"https://note.com/ai_naiseika/n/n9462746fd8ba"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-22","name":"メールは良いのに、AIはダメ？ ─ 会社の情報を “どこまで外に出すか”","url":"https://note.com/ai_naiseika/n/n295bc71d253d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-15","name":"プロトタイプは早い、本番はその先 ─ 内製化を「育てる」ということ","url":"https://note.com/ai_naiseika/n/n4f8ea3f4696d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-12","name":"バイブコーディングが通用しなくなる日 ─ AIに渡す『要件定義』の話","url":"https://note.com/ai_naiseika/n/n5f043fb74a72"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-09","name":"AIは嘘をつかない。けれど、あなたに「忖度」する","url":"https://note.com/ai_naiseika/n/n34c94b0c2a20"},{"place":"cave","group":"連載","kind":"読む","date":"2026-06-04","name":"AIと迷走しないために、最初にやるべきこと","url":"https://note.com/ai_naiseika/n/nb72e3552d43d"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-31","name":"AIエージェントを、今日入れる ─ 使い方も、AIに聞けばいい","url":"https://note.com/ai_naiseika/n/n808d67e92440"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-26","name":"「こうしたい」と伝えるだけで、何かが作れる時代","url":"https://note.com/ai_naiseika/n/n912fbc83f1c6"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-25","name":"料理人だった私が、AI内製化でシステムを作れる理由","url":"https://note.com/ai_naiseika/n/nd6a51b98694c"},{"place":"cave","group":"連載","kind":"読む","date":"2026-05-18","name":"AIを学ぶのに「スクール」「コンサル」が要らない新時代","url":"https://note.com/ai_naiseika/n/ndfc95eb3f0fa"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"前橋まちあるき（12/20 まで）","note":"芸術祭と「詩のまち」を歩く案内。確かめた度合いを印で示す。","url":"https://tatatasan323-cell.github.io/note-app/tabi/maebashi/"},{"place":"cloud","group":"旅のしおり","kind":"使う","name":"松本まちあるき","note":"松本駅から美ヶ原温泉まで、ゆるく歩く参考メモ（11/7〜8 の例）。","url":"https://tatatasan323-cell.github.io/note-app/tabi/matsumoto-burari/"},{"place":"cloud","group":"世界旅行","kind":"見る","name":"想像の世界旅行","note":"雲に乗って、想像だけで世界を旅する部屋を作っています。","status":"準備中","url":""}],"links":[{"name":"note「AI内製化の羅針盤」","url":"https://note.com/ai_naiseika"},{"name":"YouTube「AI内製化工房 MITA」","url":"https://www.youtube.com/@ai_naiseika_mita"},{"name":"X @ai_naiseika","url":"https://x.com/ai_naiseika"},{"name":"音楽 BGM&V Studio（AI音楽工房の制作）","url":"https://www.youtube.com/@BackgroundMusicVideoStudio"}]};
  const $ = (id) => document.getElementById(id);
  const PLACES = new Map(DATA.places.map((p) => [p.id, p]));
  const stage = $('stage'), wrap = $('stageWrap'), labelsBox = $('labels'), prompt = $('prompt');
  const skipBtn = $('skip'), closeBtn = $('closeBook'), openBtn = $('openBtn'), soundBtn = $('sound');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DONE = '完成', MARK = { 調整中: 'bud', 作りかけ: 'sprout', 準備中: 'seed' };
  const statusOf = (w) => (w.status && MARK[w.status] ? w.status : DONE);

  // ---------- 端末の記録：行った所の印だけ（名前などは残さない）----------
  const KEY = 'kobo-map-v1', IDS = new Set(['map', ...PLACES.keys()]), seen = new Set();
  try { const v = JSON.parse(localStorage.getItem(KEY) || '{}'); if (Array.isArray(v.seen)) v.seen.forEach((x) => IDS.has(x) && seen.add(x)); } catch (e) { /* 記録が使えない端末でも動く */ }
  function mark(id) { seen.add(id); try { localStorage.setItem(KEY, JSON.stringify({ seen: [...seen] })); } catch (e) { /* 同上 */ } }

  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  // ---------- 紙の音（さわった時だけ・合成。音を切るボタンつき）----------
  let muted = false, actx = null;
  function rustle() {
    if (muted) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime, len = 0.62, n = Math.floor(actx.sampleRate * len), buf = actx.createBuffer(1, n, actx.sampleRate), d = buf.getChannelData(0);
      let s = 7; for (let i = 0; i < n; i++) { s = (s * 16807) % 2147483647; const u = i / n; d[i] = (s / 2147483647 * 2 - 1) * (u < 0.12 ? u / 0.12 : Math.pow(1 - (u - 0.12) / 0.88, 2)) * (0.7 + 0.3 * Math.sin(u * 40)); }
      const src = actx.createBufferSource(), bp = actx.createBiquadFilter(), g = actx.createGain();
      src.buffer = buf; bp.type = 'bandpass'; bp.Q.value = 0.7;
      bp.frequency.setValueAtTime(2600, t); bp.frequency.linearRampToValueAtTime(900, t + len);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.32, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      src.connect(bp); bp.connect(g); g.connect(actx.destination); src.start(t);
    } catch (e) { /* 音が出せない端末でも動く */ }
  }
  soundBtn.addEventListener('click', () => {
    muted = !muted;
    soundBtn.textContent = muted ? '紙の音：なし' : '紙の音：あり';
  });

  // ---------- 舞台を画面に合わせる（設計は 390×640。PC の左右の森も同じ倍率）----------
  let scale = 1;
  function fit() {
    scale = Math.max(0.62, Math.min(innerWidth / 390, (innerHeight - 96) / 640, 1.45));
    stage.style.transform = `scale(${scale})`;
    wrap.style.height = `${Math.round(640 * scale)}px`;
    wrap.style.setProperty('--s', String(scale));
    wrap.classList.toggle('wide', innerWidth > Math.round(390 * scale) + 1);   // 舞台の左右に空きがある時だけ、広い森を敷く（スマホは読みこまない）
  }

  // ---------- 場所の札：立ち上がった紙の上の位置（板の幅・高さに対する割合）----------
  const ANCHOR = [
    ['roots', '.f-roots', 0.5, 1.2],     // 扉を隠さないよう、紙のすぐ下に
    ['spring', '.f-spring', 0.36, 0.55],
    ['cave', '.f-cave', 0.6, 0.39],
    ['branch', '.f-tree', 0.86, 0.24],   // 枝先の花の上（花を隠さない）
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
    stage.classList.add('instant');
    if (!opened) stage.classList.add('open');
    void stage.offsetWidth;
    const sr = stage.getBoundingClientRect();
    for (const [id, sel, fx, fy] of ANCHOR) {
      const r = stage.querySelector(sel).getBoundingClientRect(), b = labels.get(id);
      b.style.left = `${((r.left - sr.left + r.width * fx) / scale).toFixed(1)}px`;
      b.style.top = `${((r.top - sr.top + r.height * fy) / scale).toFixed(1)}px`;
    }
    const tr = stage.querySelector('.f-tree').getBoundingClientRect();
    stage.style.setProperty('--fx', `${((tr.left - sr.left + tr.width * 0.5) / scale - 6).toFixed(1)}px`);
    stage.style.setProperty('--fy', `${((tr.top - sr.top + tr.height * 0.05) / scale).toFixed(1)}px`);
    if (!opened) stage.classList.remove('open');
    void stage.offsetWidth;
    stage.classList.remove('instant');
  }

  // ---------- 本をひらく・とばす・閉じる ----------
  let state = 'closed', timer = 0;
  function settle() {
    state = 'open'; clearTimeout(timer);
    skipBtn.hidden = true; closeBtn.hidden = false;
    prompt.textContent = '行き先の札を押してください';
  }
  function instantly(fn) { stage.classList.add('instant'); fn(); void stage.offsetWidth; requestAnimationFrame(() => stage.classList.remove('instant')); }
  function open(now) {
    if (state !== 'closed') return;
    mark('map');
    if (now || reduce) { instantly(() => stage.classList.add('open')); settle(); return; }
    state = 'opening';
    rustle();
    stage.classList.add('open');
    skipBtn.hidden = false;
    prompt.textContent = '';
    timer = setTimeout(settle, 4300);
  }
  openBtn.addEventListener('click', () => open(false));
  skipBtn.addEventListener('click', () => { instantly(() => {}); settle(); });
  closeBtn.addEventListener('click', () => {
    instantly(() => stage.classList.remove('open'));
    state = 'closed'; closeBtn.hidden = true;
    prompt.textContent = '本をひらいて、行き先を選んでください';
    openBtn.focus();
  });

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
  // 完成でない作品：押すと、住人（妖精）から吹き出しでひとこと。調整中・作りかけは「見てみる ›」、準備中はひとことだけ
  function say(li, w, st) {
    const same = bubble && bubble.parentNode === li;
    closeBubble();
    if (same) return;
    bubble = el('div', 'bubble'); bubble.dataset.status = st; bubble.setAttribute('role', 'status');
    const who = el('img', 'who'); who.src = 'img/r_fairy.webp'; who.alt = ''; who.width = 33; who.height = 30;
    const box = el('div', 'say'); box.append(el('p', 'words', pick(st)));
    const url = st === '準備中' ? '' : safeUrl(w.url);
    if (url) { const a = el('a', 'peek', '見てみる ›'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; box.append(a); }
    bubble.append(who, box); li.append(bubble);
    bubble.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  }
  function item(w) {
    const st = statusOf(w), li = el('li', 'item'), url = safeUrl(w.url);
    li.dataset.status = st;
    const box = st === DONE && url ? el('a') : el('button', 'box');
    if (box.tagName === 'A') { box.href = url; box.target = '_blank'; box.rel = 'noopener noreferrer'; } else { box.type = 'button'; }
    box.append(el('span', 'it-name', w.name));
    if (w.note) box.append(el('span', 'it-note', w.note));
    const meta = el('span', 'it-meta'), k = el('span', 'kind', w.kind); k.classList.add('k-' + w.kind); meta.append(k);
    if (st !== DONE) { const m = el('span', 'stat', st); m.prepend(el('i', 'mk ' + MARK[st])); meta.append(m); }
    if (w.date) meta.append(el('span', 'date', w.date.replace(/-/g, '.')));
    box.append(meta); li.append(box);
    if (st !== DONE) box.addEventListener('click', () => say(li, w, st));
    return li;
  }
  function openSheet(id, from) {
    const p = PLACES.get(id); if (!p) return;
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
    sheet.classList.remove('show'); sheetBg.classList.remove('show');
    setTimeout(() => { sheet.hidden = true; sheetBg.hidden = true; }, 320);
    if (opener) opener.focus({ preventScroll: true });
  }
  $('sheetClose').addEventListener('click', closeSheet);
  sheetBg.addEventListener('click', closeSheet);
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) { if (bubble) closeBubble(); else closeSheet(); } });

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
    const a = el('a', null, l.name); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    const li = el('li'); li.append(a); $('links').append(li);
  }

  // ---------- はじめ ----------
  fit(); measure(); refreshMarks();
  if (seen.has('map')) open(true);   // 2度目からは、ひらいた見開きから
  let rz = 0;
  addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { fit(); if (state !== 'opening') measure(); }); });
  window.__kobo = Object.freeze({ state: () => state });
})();

### 前言

<p style="font-size:18px;">
今年台灣陷入了缺水危機，發生了數十年以來的旱災，然而隨著日子即將邁入高用電量的夏季，台灣卻遇到了一些不預期的發電機組事故，台電及經濟部能源局已於稍早表示今年5月底恐有限電危機[1]。由於用數據看台灣團隊在之前為大家製作了<a href="http://real.taiwanstat.com/power">台灣用電即時資訊</a>，在我們團隊討論過後，認為欲了解電力的情況，單看數據與圖表或許仍有些不足，可能會造成誤解，待需先了解電力相關的知識，因此用數據看台灣團隊整理了一些用電的相關名詞讓大家能更了解現況，以及以探討了為什麼今年會在這個時候特別缺電的原因。
</p>

### 如何評估電力指標？

<p style="font-size:18px;">一般來說評估一個用電系統的可靠度，可以分成兩大項目，（1）系統安全度（System Security）：指能忍受系統設備事故發生不至於讓其他設備產生連鎖事故的能力（2）系統裕度（System Adequacy）：指電力系統無論何時都有充足的發電及輸電能力。</p>

<p style="font-size:18px;">而為了評估系統裕度，電業是透過可靠度指數來測量，像是台電的<a href="http://stpc00601.taipower.com.tw/loadGraph/loadGraph/load_reserve.html">即時用電網頁</a>每日提供了一項預評估電狀態的指標-「備轉容量率」，該方法為最廣泛採用的一中方式。那麼何為備轉容量率呢？在介紹這個名詞之前，我們先來介紹「備轉容量（Operating Reserve）」，根據定義：</p>
<p style="font-size:18px;"><strong>備轉容量(Operating Reserve)</strong> ＝系統運轉淨尖峰能力－系統瞬時尖峰負載(瞬間值)。</p>
<p style="font-size:18px;">係指當天實際可調度之發電容量，亦即系統每天的供電能力。而備轉容量率則是可由備轉容量推得：</p>
<p style="font-size:18px;"><strong>備轉容量率(Percent Operating Reserve)</strong> ＝（系統運轉淨尖峰能力－系統瞬時尖峰負載(瞬間值)）÷系統瞬時尖峰負載(瞬間值)×100%。</p>
<p style="font-size:14px;">*系統運轉淨尖峰能力：扣除歲修、小修及故障機組容量、火力機組環保限制、輔機故障、氣溫變化、水力考慮水位、水文、灌溉及溢流等。</p>

<p style="font-size:18px;">是用來衡量每日供電可靠度之指標，可參閱台電提供的下圖，以了解更多資訊。</p>

<img src="http://stpc00601.taipower.com.tw/loadGraph/loadGraph/images/page/Spinning-reserve-capacity.png" width="100%" height="500px"/><span style="font-size:12px; text-align: right;">圖片來源：台灣電力公司</span>

### 台灣電網系統是如何配置的？

<p style="font-size:18px;">介紹完了評估用電可靠度的指標，讓我們介紹台灣的電網規劃，由於用數據看台灣團隊做的<a href="http://real.taiwanstat.com/power/">台灣即時用電資訊</a>參照了台電提供的資訊，在台電提供的數據中，同時提供了北、中、南、東的即時區域發電與用電資料。然而雖然有各區域的資料，其實台灣的電網系統僅規劃成北、中、南三個地區，而為了維持各區域內的發電與用電，若區域內發電不足以供應用電需求時，是可以透過跨區輸電幹線輸送融通電力支援。如以103年為例：北部因為用電需求，在機組運轉與經濟調度的考慮下，導致需中南部部分電力南電北送因應。</p>

<img src="http://www.taipower.com.tw/content/new_info/images/page2/index-012.jpg"/><span style="font-size:12px;">103年尖峰日台電各區供電能力及負載占比 / 圖片來源：台灣電力公司</span>

### 那麼為什麼台灣今年會比往年還缺電？

<p style="font-size:18px;">目前缺電的危機其實可以追朔到去年的核一廠歲修，由於從去年開始十二月中旬核一停機歲修，當時作業時遇到燃料把手鬆脫導致時程延誤，至今仍需待立法院報告後才可加入發電行列[2]。同時，今年又不幸遇到缺水危機，使得水力發電也無法正常運作，而四、五月同時也有許多發電廠進入歲修[3]，又不幸地日前核三廠發生火警，使得二號機緊急停止運轉[4]，因此現在的電力相較往年供應量減少，導致現在台灣進入了缺電的情況。</p>

<hr/>
<p style="font-size:16px;">
[1] <a href="https://web3.moeaboe.gov.tw/ECW/populace/news/News.aspx?kind=1&menu_id=41&news_id=4016">今年5月供電吃緊 經濟部與台電盡最大努力確保供電</a>

[2] <a href="http://udn.com/news/story/7314/750930-%E5%85%A8%E7%90%83%E9%A6%96%E4%BE%8B-%E6%A0%B8%E4%B8%80%E5%BB%A0%E7%87%83%E6%96%99%E6%8A%8A%E6%89%8B%E9%AC%86%E8%84%AB">全球首例 核一廠燃料把手鬆脫</a>

[3] <a href="http://stpc00601.taipower.com.tw/loadGraph/loadGraph/genshx.html">台電系統各機組發電量</a>

[4] <a href="http://www.taipower.com.tw/content/news/news01-1.aspx?sid=416">核三二號機火警</a>
</p>

<p style="font-size:16px;">
相關資料來源：<br/>
台灣電力公司資訊揭露：<a href="http://www.taipower.com.tw/content/new_info/new_info01.aspx">http://www.taipower.com.tw/content/new_info/new_info01.aspx</a>
Gordoncheng's Blog：<a href="https://gordoncheng.wordpress.com/2011/06/09/%E6%BC%AB%E8%AB%87%E5%82%99%E7%94%A8%E5%AE%B9%E9%87%8F%E8%88%87%E5%82%99%E8%BD%89%E5%AE%B9%E9%87%8F/">漫談備用容量與備轉容量</a></p>

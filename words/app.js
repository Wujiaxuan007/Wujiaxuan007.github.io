const works = [
  {"id": "nanfang", "title": "南方姑娘", "date": "2015.05.20", "layout": "left narrow", "body": "她绑辫子的橡皮筋，\n有时她会环在手上，\n我会想象她扎头发的模样，\n一遍一遍一遍，\n直到下课铃响。\n她的手表真的漂亮，\n而我的手表，\n只记得时间飞跑。\n哈哈哈哈哈哈哈哈。\n\n我不曾想过远走他乡，\n却为她前去南方，\n她说那边山很漂亮，\n我却满眼她的面庞。\n\n我不曾想过背井离乡，\n却为她追过太阳，\n她说她喜欢鱼香，\n我就收起我的翅膀。\n\n我以为日子会一直这样漫长，\n她也会在一直在我身旁。\n那天她穿上了漂亮衣裳，\n却和他拜了高堂。\n我留下了来时的行囊，\n回到了我的北方。"},
  {"id": "xing", "title": "醒", "date": "2015.06.01", "layout": "left narrow", "body": "一身灰色舞衣，\n在木屋里骄纵身影。\n酒酒酒酒酒，\n这玩意儿，\n醉不醉全听心情。\n疯狂电视雪花声音，\n为在黑白电影里安静睡去。\n摇晃身体在梦里拉扯自己。\n酒杯碎了碎了碎了，\n而你飞了飞了飞了。\n你用你的燕尾划破我的掌心，\n我握着你的羽毛愈梦愈醒。\n蒙黑的天有你有你，\n我被下咒拼命想你。\n你有沙哑性感的嗓音，\n我在屋里却听的怪异。\n你有黑色模糊的背影，\n我在梦里却看的仔细。\n你真的走了走了走了，\n我还是不想醒。"},
  {"id": "cunzhuang", "title": "村长女儿", "date": "2015.06.08", "layout": "center airy", "body": "你就把花穿身上，\n你就把油抹鞋上。\n我就看看你，\n就看看而已。\n我二手了辆拉风的摩托车，\n它哼哼哈嘿，\n我载你去山穷水尽。\n你父亲哼哼唧唧，\n我怕了他的大巴掌，\n更怕没了你的小手帕。\n乡亲们歪歪唧唧，\n我偏要给你戴上一朵山楂花。\n三月的天还没六月，\n阿黑却吐着舌头像条狗，\n让我和它飞扬尘土架村口，\n让我拐你走。\n你貌美如花，\n又不鸣鸣哇哇，\n阿黑想带你去嘻嘻哈哈，\n就让我拐你走吧。"},
  {"id": "gou-guantou", "title": "狗罐头", "date": "2015.06.20", "layout": "left narrow", "body": "罐头里面没有沙丁鱼\n我也没有养猫咪\n却有只爱吃鱼的你\n\n罐头里面有牛肉粒\n我却没有养条狗\n只有个爱吃肉的我\n\n第一天\n左手提支玫瑰的就是你\n我用狗罐头作为见面礼\n你收下了却说你只吃鱼\n\n第二天\n白衬衫上带点咖啡痕迹的你\n用沙丁鱼罐头作为回礼\n我收下了没说我不吃鱼\n\n第三天\n我们没见面了\n\n第四天\n我们都饿死了"},
  {"id": "hongqunzi", "title": "红裙子", "date": "2015.07.07", "layout": "left narrow", "body": "左手捏着一把碎冰块，\n右边的裤兜藏着一包烟，\n衬衫唯一的口袋放着一颗糖。\n\n我握紧了左手，\n右手插在裤兜里，\n低头看着那粒糖，\n街上人不多，\n我们偏偏撞上。\n我手上滴水了，\n糖给了不看路的你。\n我没有打火机，\n烟还给了爸爸。"},
  {"id": "sanfendangzhen", "title": "三分当真", "date": "2015.09.27", "layout": "left narrow"},
  {"id": "xiangfei", "title": "想飞", "date": "2015.10.11", "layout": "left narrow", "body": "北斗二胡班的黑娃，\n他长大弹起了吉他。\n我看着他挨了妈妈骂，\n也看着他抱着吉他乐开了花。\n\n他经常彻夜不归家，\n驻唱酒吧人混杂，\n让他嗓音更无暇。\n\n夜里四点冷了面颊，\n吵了妈妈挨了骂。\n早上八点暖了屁股，\n妈妈泪吵不敢骂。\n\n妈妈啊，\n你看到树上那只鸽子了吗，\n抱着它的是它妈妈吧，\n妈妈啊，\n让他自己飞会吧。"},
  {"id": "ni", "title": "你", "date": "2016.02.19", "layout": "center airy", "body": "爱是挑食的怪兽。\n它吞掉我的眼睛，\n让我看不见你的表情。\n它咬掉我的耳朵，\n让我听不到你的心情。\n它啃掉我的嘴巴，\n让我吻不到你的身体。\n它撕掉我的双手，\n让我擦不了你的眼泪。\n它毁掉我的双脚，\n让我走不出你的圈套。\n最后剩下一个脑袋瓜，\n那有所有我想要的你。"},
  {"id": "xiangxin", "title": "相心", "date": "2016.08.24", "layout": "left narrow airy", "body": "拉开窗帘让想你出去，\n又试着打开老式收音机，\n雪花音容易让人委屈，\n它不管我有什么情绪。\n\n打开抽屉想看日记，\n才想起故事的钥匙还在你那里。\n昨天打不开自己，\n今天又放不掉你。\n\n妈妈带我出门透气，\n却给我买了你最爱的冰淇淋。\n路过街角那家古董店，\n还摆着我答应你的花瓶。\n\n洗澡的时候会把头埋在水里，\n缺氧感的时候只来得及呼吸。\n重复敲下你的拼音选择另一个你，\n这样的输入法里也就不会有爱你。\n\n夜里三两点，\n一杯温开水，\n你看我眼里有星星。\n但愿你不要打喷嚏。"},
  {"id": "duomei", "title": "你知道你有多美吗", "date": "2016.08.26", "layout": "left narrow"},
  {"id": "danxiangshi", "title": "单想诗", "date": "2017.02.03", "layout": "center airy", "body": "六个月还差九天，\n你被折成了一首小诗，\n枕头枕着你的名字。\n那些特别想念的夜里，\n你被盖上了被子。\n后来，\n我们生了一首小小诗：\n“　你的睫毛下，\n　养着一窝小星星。\n　偶尔流星划过，\n　我会祝你快乐。\n　流星雨天，\n　分一半难过给我　”"},
  {"id": "linxi", "title": "林夕", "date": "2017.03.05", "layout": "center airy", "body": "苹果树上摘梨，\n鞋子踩着脏泥，\n脏泥繁华着大地。\n二十七点六八米，\n用镜子偷了一个你，\n小小的美丽，\n轻轻装进口袋里。\n\n苹果树上摘梨，\n离这儿差不多一里地，\n住着叔叔和阿姨。\n西边不到一个筋斗云，\n那儿有人想念你。\n他打开了镜子，\n他看见一双猥琐至极的眼睛，\n他砸了镜子，\n他碎了，\n他说这一切都是个阴谋。"},
  {"id": "tao", "title": "🍑", "date": "2017.03.15", "layout": "center airy", "body": "麦芒撕碎热光，\n汗水浸的痒痒。\n着急地挥着镰刀，\n死去的熊熊欲望。\n她像一颗饱满的蜜桃，\n鲜嫩、多汁、又多毛。\n浅色衬衣湿透了乳房，\n紧身裤子勒住的模样。\n俯下身的心慌，\n背对面的幻想。\n口干舌燥的半山腰，\n解渴的水蜜桃，\n谁都想咬。\n起伏有致的山峦，\n少年喘着粗气背对太阳。"},
  {"id": "yu", "title": "鱼", "date": "2017.03.23", "layout": "fish", "body": "谁能？\n救我于水火，\n救我于不谙世事。\n救我于会咬人梦魇，\n救我于笑面虎的獠牙。\n救我于理所应当的崩坏。\n救我于会发光的坟墓，\n救我于头颅的桎梏，\n救我于螟蛉之窠。\n救我于生死。\n那些，\n温柔的人，\n别再陷入我的泽。"},
  {"id": "zaijian", "title": "再见你时", "date": "2017.11", "layout": "center airy", "body": "这是，\n清晨的学校里。\n扛着国旗的少年，\n爱慕过出板报的姑娘。\n她裙底下的秘密，\n全藏在出汗的手心里。\n老师掉落的粉笔，\n捡起来已经西装革履。\n走进，\n黄昏的胡同里。\n戴着铜铃铛，\n爱上垃圾桶的猫咪。\n系着红领巾，\n闭眼晒太阳的老头。\n用着旧手帕，\n低声讲电话的阿婆。\n然后，\n你们统统掉进清晨里，\n那么你是谁？"},
  {"id": "yuguang", "title": "余光", "date": "2017.11", "layout": "center airy", "body": "住在余光里的姑娘\n\n她喜欢穿带花的衣裳\n\n坐她前方的少年郎\n\n他没去过东南西北方\n\n白天是她\n\n目光闪烁着日光\n\n太阳是他\n\n余光对焦着对方\n\n黑夜是我\n\n一切未知起源于我\n\n月亮是我\n\n一切施舍来自于我\n\n是时间杀死了她\n\n是时间杀死了他\n\n是他们杀死了我"},
  {"id": "deqinghu", "title": "我在德清湖晒太阳", "date": "2017.12.22", "layout": "left narrow airy", "body": "我在德清湖晒太阳\n安静地像一棵雕像\n黑天鹅朝着我奔跑\n它没有白来这一趟\n\n我在岸边算个大明星\n水底数不尽的摄像机\n我就拜托鱼儿\n鱼儿把话忘在了路上\n我再拜托风儿\n风儿把话吹给了太阳\n\n阳光阿你可真多情\n你牵着我的手又吻别人的额头\n你还没经过我背后\n就躺在别人的胸口\n\n阳光阿我恨你无声息的长眠\n我恨你长眠后的稀薄\n我恨你稀薄后的火热\n我恨你火热后的坠落\n我恨你坠落后的黑色\n\n太阳听了很生气\n黑着脸就西去\n我在德清湖追太阳\n看不见天鹅\n看不见鱼\n看不见湖面的摄像机"},
  {"id": "pinganye", "title": "平安夜", "date": "2017.12.24", "layout": "center airy", "body": "无家可归的托尼\n和被追杀的杰瑞\n缩在没人要的仓库里\n托尼告诉杰瑞\n他最爱祖母做的班尼迪克蛋\n杰瑞告诉托尼\n他最爱长头发的枪炮与玫瑰\n\n蜕皮沙发底\n同样没人要的火柴盒里\n第一根火柴\n老花镜奶奶抱着烤火鸡\n托尼记得这围裙\n后背永远无解的谜\n第二根火柴\n杰瑞看见\n一个名为露丝的女人\n牵着一条叫托尼的狗\n第三根火柴\n救了一个小女孩\n所以今晚平安夜"},
  {"id": "0333", "title": "凌晨三三十三", "date": "2018.03.14", "layout": "center airy", "body": "比基尼池的比丘，\n说日落打伞比较重。\n长眼毛的老斑鸠，\n啄破了一个黄皮球，\n一声巨响弄黑了所有，\n唯独六年前的红豆豆。\n黑色的屋放出了，\n凌晨三三十三的面容。\n黑色的鸟搅拌着，\n凌晨三三十三的稀稠。\n黑色的河静止着，\n凌晨三三十三的温柔。\n黑色的树杀死了，\n凌晨三三十三的小丑。\n比丘和老斑鸠，\n还有跪在地上的人，\n都在等凌晨三三十三的落日回头。"},
  {"id": "kandao", "title": "看到看不到它", "date": "2018.09.23", "layout": "center airy", "body": "推开木门，\n是一面镜子。\n它印着我的样子，\n和我的过去如此。\n绕过镜子，\n是一杯蜡烛。\n它看起来黏黏糊糊，\n又百般的孤独。\n吹灭蜡烛，\n是一扇窗户。\n它是我的眼睛，\n是我看外面的窗户。\n关上窗户，\n他告诉我会是一个美梦。\n他是谁？\n那个把上窗户走掉的人。"},
  {"id": "jiahua", "title": "假话", "date": "2018.11.17", "layout": "center airy", "body": "从来\n到怀揣心事\n他安静地望着窗外\n他说\n夜里的云是黑的\n可白天不同\n水里的鱼是活的\n可热水不同\n这里的人是真的\n可那里不同\n这里\n云变黑了掉进水里溅起了鱼儿\n鱼儿把飞去咬云的耳朵\n那里\n没有云\n没有鱼\n夜让他成人\n水叫他成人\n他说过哪句假话\n他说过哪句假话"},
  {"id": "jingguo", "title": "你经过我经过你", "date": "2018.11.26", "layout": "center airy", "body": "在下雨\n你来的每一回都在下雨\n我们赤裸着身体\n空调吹来一世界的凉意\n\n在打雷\n你来的每一回都在打雷\n我们占据着身体\n闪电从滨江钻进萧山西\n\n在灯里\n你来的每一回都在灯里\n我们疲软着身体\n窗帘盖住了月亮和星星\n\n在天光\n你来的每一回都在天光\n我们拥抱着身体\n没有多余的手舔冰淇淋"},
  {"id": "shijie", "title": "我的世界", "date": "2018.11.28", "layout": "center airy", "body": "天偷了海的蓝\n太阳偷了落叶的黄\n水偷了寂寞赤的内在\n但我不认为它们是小偷\n但人就可以\n\n鸟在空中\n慢慢的脱离了我的视野\n鸟消失了\n但我不认为鸟死了\n但人就可以"},
  {"id": "qcgdu", "title": "牵肠挂肚", "date": "2018.12.01", "layout": "center airy", "body": "春节\n火锅\n拉屎\n恋爱\n车祸"},
  {"id": "caolima", "title": "草里吗", "date": "2019.02", "layout": "center airy", "body": "草里蚂蚁在撞树\n草里吗\n在草里吗\n草里蚂蚁在跳舞\n草里吗\n在草里吗\n草里马儿在拉屎\n你说\n草里吗\n在草里吗"},
  {"id": "linxi-murakami", "title": "林夕村上春树", "date": "2019.03.17", "layout": "center airy"},
  {"id": "jinsefeizei", "title": "金色飞贼", "date": "2019.07.01", "layout": "center airy", "body": "在迷宫里绕，\n蝙蝠追着赶着躲着光，\n被纪念在画框。\n是谁在找出口？\n偷到天空的地方是悬崖，\n闪着泪光的地方是大海。\n一望无际的，\n鲨鱼的牙齿。\n锋利刺骨的，\n诗人的废纸。\n我往回追着，\n山羊打结的毛。\n我往回赶着，\n犀牛迟钝的角。\n我往回躲着，\n一望无际的蝙蝠。"},
  {"id": "ele", "title": "饿了吃什么", "date": "2019.08.01", "layout": "center airy"},
  {"id": "shouzhudaitu", "title": "守株待兔", "date": "2019.08.07", "layout": "center airy", "body": "你七岁那年，\n我种下一株树。\n你喜欢绿色，\n你买了绿色的床单。\n你喜欢绿色，\n我买了绿色的打火机。\n你说你是一只兔子，\n那你一定是喜欢绿色的兔子。\n你喜欢绿色，\n我就花一生的时间，\n去守一株树。"},
  {"id": "jietou", "title": "你的街头", "date": "2020.06.06", "layout": "center airy", "body": "我来时\n抬头天上泛着微紫\n我光着脚\n在地上写满你的名字\n雨水泡着\n脚趾\n和\n我快乐得意的样子\n\n\n我走时\n低头一片赤褐色叶子\n我提着旧鞋子\n找窗户旁边的空位置\n人们喊着\n万岁\n和\n你的旧名字\n\n\n回头看着\n一切好似老样子\n再回头看着\n你的名字\n和\n我一起消失"}
];

const years = [...new Set(works.map(w => w.date.slice(0, 4)))];
const timeline = document.querySelector('#timeline');
const reader = document.querySelector('#reader');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const drawerList = document.querySelector('#drawerList');

function escapeHtml(value = '') {
  return value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function renderTimeline() {
  timeline.innerHTML = years.map(year => {
    const rows = works
      .filter(w => w.date.startsWith(year))
      .map(w => `
        <a class="work-link" href="#${w.id}" data-id="${w.id}">
          <span class="work-title">${escapeHtml(w.title)}</span>
          <span class="work-date">${escapeHtml(w.date)}</span>
        </a>`)
      .join('');
    return `<section class="year-block"><div class="year">${year}</div><div class="works">${rows}</div></section>`;
  }).join('');

  drawerList.innerHTML = works
    .map(w => `<a href="#${w.id}" data-id="${w.id}">${escapeHtml(w.date)} · ${escapeHtml(w.title)}</a>`)
    .join('');
}

function fishMarkup(text) {
  const widths = [34, 44, 56, 68, 78, 88, 96, 100, 94, 84, 72, 58, 44];
  return text.split('\n')
    .map((line, i) => `<span class="fish-line" style="width:${widths[i] || 70}%">${escapeHtml(line) || '&nbsp;'}</span>`)
    .join('');
}

function bodyMarkup(work) {
  if (!work.body) {
    return `<div class="pending-note">这篇原稿已经归档。\n\n正在按当年的换行、空行、缩进与位置关系重新数字化。</div>`;
  }
  if (work.layout.split(/\s+/).includes('fish')) return fishMarkup(work.body);
  return escapeHtml(work.body);
}

function showWork(id, push = true) {
  const work = works.find(item => item.id === id);
  if (!work) return;
  const layoutClasses = work.layout.split(/\s+/).filter(Boolean).map(name => `layout-${name}`).join(' ');
  reader.className = `reader active ${layoutClasses}`;
  reader.innerHTML = `<article class="poem-wrap">
    <header class="poem-head"><h2 class="poem-title">${escapeHtml(work.title)}</h2><div class="poem-meta">${escapeHtml(work.date)}<br>@卖话的人</div></header>
    <div class="poem-body">${bodyMarkup(work)}</div>
    <div class="poem-actions"><button type="button" data-action="back">← 回到时间线</button><button type="button" data-action="top">回到顶部 ↑</button></div>
  </article>`;
  if (push) history.pushState({id}, '', `#${id}`);
  reader.scrollIntoView({behavior:'smooth', block:'start'});
  closeDrawer();
}

function openDrawer() {drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');scrim.hidden=false;document.body.classList.add('lock');document.querySelector('#indexToggle').setAttribute('aria-expanded','true');}
function closeDrawer() {drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');scrim.hidden=true;document.body.classList.remove('lock');document.querySelector('#indexToggle').setAttribute('aria-expanded','false');}

document.addEventListener('click', event => {
  const link = event.target.closest('[data-id]');
  if (link) {event.preventDefault();showWork(link.dataset.id);return;}
  if (event.target.matches('[data-action="back"]')) timeline.scrollIntoView({behavior:'smooth',block:'start'});
  if (event.target.matches('[data-action="top"]')) document.querySelector('#top').scrollIntoView({behavior:'smooth',block:'start'});
});

document.querySelector('#indexToggle').addEventListener('click', openDrawer);
document.querySelector('#drawerClose').addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
window.addEventListener('popstate', () => {const id=location.hash.slice(1);if(id)showWork(id,false);});
renderTimeline();
const initial=location.hash.slice(1);if(initial)showWork(initial,false);

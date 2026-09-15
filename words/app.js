const works = [
  {id:'xing',title:'醒',date:'2015.06.01',layout:'left'},
  {id:'cunzhuang',title:'村长女儿',date:'2015.06.08',layout:'left'},
  {id:'gou-guantou',title:'狗罐头',date:'2015.06.20',layout:'left'},
  {id:'nanfang',title:'南方姑娘',date:'2015.06.20',layout:'left'},
  {id:'hongqunzi',title:'红裙子',date:'2015.07.07',layout:'left'},
  {id:'xiangfei',title:'想飞',date:'2015.10.11',layout:'left'},
  {id:'ni',title:'你',date:'2016.02.19',layout:'center'},
  {id:'cunzhang-nver',title:'村长女儿',date:'2016.06.08',layout:'left'},
  {id:'xiangxin',title:'相心',date:'2016.08.24',layout:'left'},
  {id:'duomei',title:'你知道你有多美吗',date:'2016.08.26',layout:'left'},
  {id:'danxiangshi',title:'单想诗',date:'2017.02.03',layout:'center'},
  {id:'tao',title:'🍑',date:'2017.03.15',layout:'left'},
  {id:'yu',title:'鱼',date:'2017.03.23',layout:'fish',body:`谁能？\n救我于水火，\n救我于不谙世事。\n救我于会咬人梦魇，\n救我于笑面虎的獠牙。\n救我于理所应当的崩坏。\n救我于会发光的坟墓，\n救我于头颅的桎梏，\n救我于螟蛉之窠。\n救我于生死。\n那些，\n温柔的人，\n别再陷入我的泽。`},
  {id:'linxi',title:'林夕',date:'2017.05',layout:'left'},
  {id:'zaijian',title:'再见你时',date:'2017.11',layout:'center'},
  {id:'yuguang',title:'余光',date:'2017.11',layout:'center',body:`住在余光里的姑娘\n\n她喜欢穿带花的衣裳\n\n坐她前方的少年郎\n\n他没去过东南西北方\n\n白天是她\n\n目光闪烁着日光\n\n太阳是他\n\n余光对焦着对方\n\n黑夜是我\n\n一切未知起源于我\n\n月亮是我\n\n一切施舍来自于我\n\n是时间杀死了她\n\n是时间杀死了他\n\n是他们杀死了我`},
  {id:'deqinghu',title:'我在德清湖晒太阳',date:'2017.12.22',layout:'left',body:`我在德清湖晒太阳\n安静地像一棵雕像\n黑天鹅朝着我奔跑\n它没有白来这一趟\n\n我在岸边算个大明星\n水底数不尽的摄像机\n我就拜托鱼儿\n鱼儿把话忘在了路上\n我再拜托风儿\n风儿把话吹给了太阳\n\n阳光阿你可真多情\n你牵着我的手又吻别人的额头\n你还没经过我背后\n就躺在别人的胸口\n\n阳光阿我恨你无声息的长眠\n我恨你长眠后的稀薄\n我恨你稀薄后的火热\n我恨你火热后的坠落\n我恨你坠落后的黑色\n\n太阳听了很生气\n黑着脸就西去\n我在德清湖追太阳\n看不见天鹅\n看不见鱼\n看不见湖面的摄像机`},
  {id:'pinganye',title:'平安夜',date:'2017.12.24',layout:'center',body:`无家可归的托尼\n和被追杀的杰瑞\n缩在没人要的仓库里\n托尼告诉杰瑞\n他最爱祖母做的班尼迪克蛋\n杰瑞告诉托尼\n他最爱长头发的枪炮与玫瑰\n\n蜕皮沙发底\n同样没人要的火柴盒里\n第一根火柴\n老花镜奶奶抱着烤火鸡\n托尼记得这围裙\n后背永远无解的谜\n第二根火柴\n杰瑞看见\n一个名为露丝的女人\n牵着一条叫托尼的狗\n第三根火柴\n救了一个小女孩\n所以今晚平安夜`},
  {id:'0333',title:'凌晨三三十三',date:'2018.03.14',layout:'center'},
  {id:'kandao',title:'看到看不到它',date:'2018.09.23',layout:'center',body:`推开木门，\n是一面镜子。\n它印着我的样子，\n和我的过去如此。\n绕过镜子，\n是一杯蜡烛。\n它看起来黏黏糊糊，\n又百般的孤独。\n吹灭蜡烛，\n是一扇窗户。\n它是我的眼睛，\n是我看外面的窗户。\n关上窗户，\n他告诉我会是一个美梦。\n他是谁？\n那个把上窗户走掉的人。`},
  {id:'jiahua',title:'假话',date:'2018.11.17',layout:'center',body:`从来\n到怀揣心事\n他安静地望着窗外\n他说\n夜里的云是黑的\n可白天不同\n水里的鱼是活的\n可热水不同\n这里的人是真的\n可那里不同\n这里\n云变黑了掉进水里溅起了鱼儿\n鱼儿把飞去咬云的耳朵\n那里\n没有云\n没有鱼\n夜让他成人\n水叫他成人\n他说过哪句假话\n他说过哪句假话`},
  {id:'jingguo',title:'你经过我经过你',date:'2018.11.26',layout:'center',body:`在下雨\n你来的每一回都在下雨\n我们赤裸着身体\n空调吹来一世界的凉意\n\n在打雷\n你来的每一回都在打雷\n我们占据着身体\n闪电从滨江钻进萧山西\n\n在灯里\n你来的每一回都在灯里\n我们疲软着身体\n窗帘盖住了月亮和星星\n\n在天光\n你来的每一回都在天光\n我们拥抱着身体\n没有多余的手舔冰淇淋`},
  {id:'shijie',title:'我的世界',date:'2018.11.28',layout:'center',body:`天偷了海的蓝\n太阳偷了落叶的黄\n水偷了寂寞赤的内在\n但我不认为它们是小偷\n但人就可以\n\n鸟在空中\n慢慢的脱离了我的视野\n鸟消失了\n但我不认为鸟死了\n但人就可以`},
  {id:'qcgdu',title:'牵肠挂肚',date:'2018.12.01',layout:'center',body:`春节\n火锅\n拉屎\n恋爱\n车祸`},
  {id:'caolima',title:'草里吗',date:'2019.02',layout:'center',body:`草里蚂蚁在撞树\n草里吗\n在草里吗\n草里蚂蚁在跳舞\n草里吗\n在草里吗\n草里马儿在拉屎\n你说\n草里吗\n在草里吗`},
  {id:'linxi-murakami',title:'林夕村上春树',date:'2019.03.17',layout:'center'},
  {id:'jinsefeizei',title:'金色飞贼',date:'2019.07.01',layout:'center',body:`在迷宫里绕，\n蝙蝠追着赶着躲着光，\n被纪念在画框。\n是谁在找出口？\n偷到天空的地方是悬崖，\n闪着泪光的地方是大海。\n一望无际的，\n鲨鱼的牙齿。\n锋利刺骨的，\n诗人的废纸。\n我往回追着，\n山羊打结的毛。\n我往回赶着，\n犀牛迟钝的角。\n我往回躲着，\n一望无际的蝙蝠。`},
  {id:'ele',title:'饿了吃什么',date:'2019.08.01',layout:'center'},
  {id:'shouzhudaitu',title:'守株待兔',date:'2019.08.07',layout:'center',body:`你七岁那年，\n我种下一株树。\n你喜欢绿色，\n你买了绿色的床单。\n你喜欢绿色，\n我买了绿色的打火机。\n你说你是一只兔子，\n那你一定是喜欢绿色的兔子。\n你喜欢绿色，\n我就花一生的时间，\n去守一株树。`},
  {id:'jietou',title:'你的街头',date:'2020.06.06',layout:'center airy',body:`我来时\n抬头天上泛着微紫\n我光着脚\n在地上写满你的名字\n雨水泡着\n脚趾\n和\n我快乐得意的样子\n\n\n我走时\n低头一片赤褐色叶子\n我提着旧鞋子\n找窗户旁边的空位置\n人们喊着\n万岁\n和\n你的旧名字\n\n\n回头看着\n一切好似老样子\n再回头看着\n你的名字\n和\n我一起消失`}
];

const years = [...new Set(works.map(w => w.date.slice(0,4)))];
const timeline = document.querySelector('#timeline');
const reader = document.querySelector('#reader');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const drawerList = document.querySelector('#drawerList');

function renderTimeline(){
  timeline.innerHTML = years.map(year => {
    const rows = works.filter(w => w.date.startsWith(year)).map(w => `
      <a class="work-link" href="#${w.id}" data-id="${w.id}">
        <span class="work-title">${w.title}</span><span class="work-date">${w.date}</span>
      </a>`).join('');
    return `<section class="year-block"><div class="year">${year}</div><div class="works">${rows}</div></section>`;
  }).join('');
  drawerList.innerHTML = works.map(w => `<a href="#${w.id}" data-id="${w.id}">${w.date} · ${w.title}</a>`).join('');
}

function fishMarkup(text){
  const widths=[34,42,52,62,72,82,90,96,100,92,80,66,54];
  return text.split('\n').map((line,i)=>`<span class="fish-line" style="width:${widths[i]||70}%">${line || '&nbsp;'}</span>`).join('');
}

function showWork(id, push=true){
  const w=works.find(x=>x.id===id); if(!w) return;
  const hasBody=Boolean(w.body);
  const body=hasBody ? (w.layout.includes('fish') ? fishMarkup(w.body) : w.body) : `这篇原稿已经归档。\n\n正在按当年的换行、空行、缩进与位置关系重新数字化。`;
  reader.className=`reader active layout-${w.layout.split(' ')[0]} ${w.layout.includes('airy')?'layout-airy':''}`;
  reader.innerHTML=`<article class="poem-wrap">
    <header class="poem-head"><h2 class="poem-title">${w.title}</h2><div class="poem-meta">${w.date}<br>@卖话的人</div></header>
    <div class="poem-body">${body}</div>
    <div class="poem-actions"><button type="button" data-action="back">← 回到时间线</button><button type="button" data-action="top">回到顶部 ↑</button></div>
  </article>`;
  if(push) history.pushState({id},'',`#${id}`);
  reader.scrollIntoView({behavior:'smooth',block:'start'});
  closeDrawer();
}

function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');scrim.hidden=false;document.body.classList.add('lock');document.querySelector('#indexToggle').setAttribute('aria-expanded','true')}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');scrim.hidden=true;document.body.classList.remove('lock');document.querySelector('#indexToggle').setAttribute('aria-expanded','false')}

renderTimeline();
document.addEventListener('click',e=>{const link=e.target.closest('[data-id]');if(link){e.preventDefault();showWork(link.dataset.id);return}const action=e.target.closest('[data-action]')?.dataset.action;if(action==='back'){document.querySelector('#timeline').scrollIntoView({behavior:'smooth'});}if(action==='top'){document.querySelector('#top').scrollIntoView({behavior:'smooth'})}});
document.querySelector('#indexToggle').addEventListener('click',openDrawer);
document.querySelector('#drawerClose').addEventListener('click',closeDrawer);
scrim.addEventListener('click',closeDrawer);
window.addEventListener('popstate',()=>{const id=location.hash.slice(1);if(id) showWork(id,false)});
const initial=location.hash.slice(1);if(initial) setTimeout(()=>showWork(initial,false),60);

// Source-image reconciliation pass, 2026-09-15.
// The archived screenshots are the source of truth. Only confirmed mismatches are changed here;
// unusual wording is deliberately preserved when it matches the original.

const sourceCorrections = {
  xing: [
    ['蒙黑的天有你有你，', '紫黑的天有你有你，'],
  ],
  sanfendangzhen: [
    ['在灰色的麻将睡去。', '在灰色的靠椅睡去。'],
    ['喝了偷了黑熊的橘红色水，', '渴了偷了黑熊的橘红色水，'],
  ],
  linxi: [
    ['用镜子偷了一个你，', '用镜子偷了一整个你，'],
  ],
  yu: [
    ['救我于螟蛉之窠。', '救我于蝼蚁之窟。'],
  ],
  '0333': [
    ['比基尼池的比丘，', '比基泥地的比丘，'],
    ['长眼毛的老斑鸠，', '长腿毛的老斑鸠，'],
  ],
  kandao: [
    ['那个把上窗户走掉的人。', '那个锁上窗户走掉的人。'],
  ],
  jiahua: [
    ['鱼儿把飞去咬云的耳朵', '鱼儿起飞去咬云的耳朵'],
  ],
  shijie: [
    ['水偷了寂寞赤的内在', '水偷了葱姜蒜的内在'],
  ],
};

for (const [id, replacements] of Object.entries(sourceCorrections)) {
  const work = works.find(item => item.id === id);
  if (!work) continue;
  for (const [before, after] of replacements) {
    work.body = work.body.replace(before, after);
  }
}

// 《余光》原稿逐行连续，没有人为插入的空白行。
const yuguang = works.find(item => item.id === 'yuguang');
if (yuguang) {
  yuguang.body = `住在余光里的姑娘
她喜欢穿带花的衣裳
坐她前方的少年郎
他没去过东南西北方
白天是她
目光闪烁着日光
太阳是他
余光对焦着对方
黑夜是我
一切未知起源于我
月亮是我
一切施舍来自于我
是时间杀死了她
是时间杀死了他
是他们杀死了我`;
}

// The first transcription pass accidentally omitted this surviving work from the ZIP.
if (!works.some(item => item.id === 'pixiang')) {
  const pixiang = {
    id: 'pixiang',
    title: '皮箱',
    date: '2015.06.08',
    layout: 'left narrow airy',
    body: `我有一只皮箱，
一半你的模样，
一半我的理想。
一个晴朗的晚上，
我把它交到你手上。
从那以后，
再没遇见你，
从那以后，
我开始流浪。
点一支陌生的兰州在天桥。
北风吹红又吹走了，
烟和眼泪。
从那以后，
我开始远方。
扫一首耳熟的民谣在街头，
灯光打乱又打亮了，
弦和目光。

我有一只皮箱，
一半你的模样，
一半我的理想。
我说我想去远方，
我说我想去流浪。
我曾遇到过一个姑娘，
她和你很像，
和你不一样。
我曾遇到过一个姑娘，
可我背着你送的背包，
背（bèi）着你的模样。`,
  };
  const villageIndex = works.findIndex(item => item.id === 'cunzhuang');
  works.splice(villageIndex >= 0 ? villageIndex + 1 : works.length, 0, pixiang);
}

// Rebuild catalog/drawer after data reconciliation. If a deep-link is active, repaint it without
// changing the page scroll position; the reading-state script will then take over as usual.
renderTimeline();
const auditedInitialId = location.hash.slice(1);
if (auditedInitialId && works.some(item => item.id === auditedInitialId)) {
  const originalScrollIntoView = reader.scrollIntoView;
  reader.scrollIntoView = function () {};
  showWork(auditedInitialId, false);
  reader.scrollIntoView = originalScrollIntoView;
}

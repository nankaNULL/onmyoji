#1:进入库中
USE onmyoji;
#2:创建表
CREATE TABLE onmyoji_user(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 uname VARCHAR(32),
 upwd VARCHAR(32),
 phone VARCHAR(11),
 img_url VARCHAR(255)
);
INSERT INTO onmyoji_user VALUES(null,'nanka','123456',
"13511234511","");
INSERT INTO onmyoji_user VALUES(null,'emm','123456',
"13511234512","");
INSERT INTO onmyoji_user VALUES(null,'鱼丸','123456',
"13511234513","");
INSERT INTO onmyoji_user VALUES(null,'dingding','123456',
"13511234514","");
INSERT INTO onmyoji_user VALUES(null,'白藤','123456',
"13511234515","");
INSERT INTO onmyoji_user VALUES(null,'安倍灵欣','123456',
"13511234516","");
INSERT INTO onmyoji_user VALUES(null,'夜畔凄风之老鬼','123456',
"13511234517","");
INSERT INTO onmyoji_user VALUES(null,'前晓清','123456',
"13511234518","");
INSERT INTO onmyoji_user VALUES(null,'ECAlice','123456',
"13511234519","");
INSERT INTO onmyoji_user VALUES(null,'瑾小瑭','123456',
"13511234521","");

CREATE TABLE onmyoji_goods(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(32),
 price_now decimal(10,2),
 price_old decimal(10,2),
 img_url VARCHAR(255),
 count int(255) 
);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师主题连帽卫衣-破势',149,null,
"http://127.0.0.1:3000/images/goods1.jpg",0);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师主题连帽卫衣',149,null,
"http://127.0.0.1:3000/images/goods2.jpg",0);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师主题连帽卫衣-胜利达摩（白）',149,null,
"http://127.0.0.1:3000/images/goods3.jpg",0);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师主题连帽卫衣-胜利达摩（红）',149,null,
"http://127.0.0.1:3000/images/goods4.jpg",0);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师短袖T恤-式神趴趴',70,99,
"http://127.0.0.1:3000/images/goods5.jpg",10000);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师短袖T恤-小鹿男',70,99,
"http://127.0.0.1:3000/images/goods6.jpg",10000);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师短袖T恤-胜利达摩（黑）',70,99,
"http://127.0.0.1:3000/images/goods7.jpg",10000);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师短袖T恤-占位小鬼（黑）',70,99,
"http://127.0.0.1:3000/images/goods8.jpg",10000);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师短袖T恤-招福达摩（黑）',70,99,
"http://127.0.0.1:3000/images/goods9.jpg",10000);
INSERT INTO onmyoji_goods VALUES(null,'阴阳师主题文字T恤-地藏',56,79,
"http://127.0.0.1:3000/images/goods10.jpg",10000);

CREATE TABLE onmyoji_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(255),
 content VARCHAR(255),
 time DATETIME,
 type INT(2)
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO onmyoji_news VALUES(null,'入殓亡魂葬荼蘼《阴阳师》全新式神入殓师登场！《阴阳师》全新式神入殓师登场！','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),1);
INSERT INTO onmyoji_news VALUES(null,'集结召唤开启！《阴阳师》SP炼狱茨木童子降临','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),1);
INSERT INTO onmyoji_news VALUES(null,'《阴阳师》手游11月7日维护更新公告','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),1);
INSERT INTO onmyoji_news VALUES(null,'急急如律令！《阴阳师》晴明黏土手办登场！','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),1);
INSERT INTO onmyoji_news VALUES(null,'11-02 来自前辈的守护 《阴阳师》羁绊预约开启！','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),1);
INSERT INTO onmyoji_news VALUES(null,'防御机制与人面树测试报告','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),2);
INSERT INTO onmyoji_news VALUES(null,'新人的地狱鬼王攻略','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),2);
INSERT INTO onmyoji_news VALUES(null,'【翻牌攻略】斗技先手流（上篇）','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),2);
INSERT INTO onmyoji_news VALUES(null,'阴阳天机谱 | 幼羽缠风，崇天无畏山高远','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),2);
INSERT INTO onmyoji_news VALUES(null,'周年庆视觉更新！活动先览！（20180912体服速报）','网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒',now(),2);

#1:创建评论
CREATE TABLE onmyoji_comment(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(140),
  time   DATETIME,
  uname VARCHAR(50),
  nid  INT
);
INSERT INTO onmyoji_comment VALUES(null,'有天我睡醒看到我的身边没有你~',now(),'阴森的斩妖风铃',1);
INSERT INTO onmyoji_comment VALUES(null,'不应该是六星境姬暴击吗？',now(),'病死鬼',1);
INSERT INTO onmyoji_comment VALUES(null,'真符合大舅的人设 笑',now(),'明依夜',1);
INSERT INTO onmyoji_comment VALUES(null,'大舅皮一下很开心',now(),'森屿暮歌.',1);
INSERT INTO onmyoji_comment VALUES(null,'好可爱的呱',now(),'枫乐林',1);
INSERT INTO onmyoji_comment VALUES(null,'自动缩小数倍',now(),'真田玄一郎 ',2);
INSERT INTO onmyoji_comment VALUES(null,'哈哈哈哈，真相了',now(),'我的风神大人 ',2);
INSERT INTO onmyoji_comment VALUES(null,'最后一张，那个崽崽好可爱ớ ₃ờ',now(),'时光吟游',2);
INSERT INTO onmyoji_comment VALUES(null,'心疼大舅',now(),'倚马斜桥红袖招 ',3);





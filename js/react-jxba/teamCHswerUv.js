var m=Object.defineProperty;var i=(s,n,a)=>n in s?m(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a;var t=(s,n,a)=>i(s,typeof n!="symbol"?n+"":n,a);class r{constructor({name:n,team:a}){t(this,"name");t(this,"team");this.name=n,this.team=a}}class e{constructor({name:n,players:a}){t(this,"name");t(this,"players");if(this.name=n,a.length>0){typeof a[0]=="string"?this.players=a.map(o=>new r({name:o,team:n})):this.players=a;return}this.players=[]}}const c=new e({name:"富康",players:["贺永发","杨轶斐","陈晓红","谢威","刘乾","关均铭","詹顺达","孔令磊","衣冠英","陈健荣","杨流学"]}),y=new e({name:"飞天",players:["游行至","符津榆","吴迪","颜肇健","杨文笑","袁培栋","张茂懋","姚灿祺","王欣","高进"]}),l=new e({name:"超越者",players:["梁峰","唐延龙","徐国斌","陈超文","施宏","张开明","刘根","蔡雪峰","甘凯","郑强"]}),p=new e({name:"梦之队",players:["袁锦坤","潘云霄","陈伟松","曹天佑","张杰","刘宇杰","李武松","孙凌斌","小罗","张文韬"]}),w=new e({name:"银河",players:["冯新杰","李庆东","王光","张鹏","柯星星","刘中杰","许泽雄","梁洪亮","钱贝贝","刘寅午","蔡增昌","印鹏"]}),u=new e({name:"博爱",players:["屈云飞","林旭和","叶宇","储怀英","张鹏飞","郑灿标","张军胜","赵永党","屈宇博","乔伟男"]}),h=new e({name:"鹏远",players:["梁浩然","陈柏润","黄俊曦","李嘉睿","陈伟","许俊荣","谭福信","钟凌飞","李金宸"]}),g=new e({name:"搏击",players:["刘沛","赵考","沈槺蔚","张湘梁","侯龙辉","孙凌斌","贺永生","廖青海","游超"]}),f=new e({name:"星海",players:["刘昊","陈博士","李亚","杨钊","唐征球","王瀚","戚舒扬","李帅","纪驰彬","梁绍祥"]}),J=new e({name:"中爱",players:["陈丁","陈春华","刘振","徐伟","肖攀","白海涛","朱永川","张钧宥","卢银林","杨子宇","蒋伟","石学锦","卢义江","大海"]}),b=new e({name:"独角兽",players:["王海涛","巩鑫","江庆红","刘晓旭","李添金","王航","牛鑫","杨仕基","阮偲慧","叶佳健"]}),x=new e({name:"赢就队",players:["周伟涛","李思宏","马伟光","陈健荣","刘兴德","李贯宇","司梦轩","吴桐","陈咏炜","曹高翔"]}),A=new e({name:"球胜",players:["胡胜超","刘东生","侍展","韩继东","覃启富","邓煜平","张景","何瑞哲","贺永发"]}),D=new e({name:"annoymous",players:["吴天睿","小徐","小刘","小罗","刘立","匿名1","梁文韬"]}),S={中爱:J,星海:f,搏击:g,鹏远:h,博爱:u,银河:w,梦之队:p,超越者:l,飞天:y,富康:c,独角兽:b,赢就队:x,球胜:A,匿名1:D};export{D as annoymous,u as boAi,g as boJi,l as chaoYueZhe,b as duJiaoShou,y as feiTian,c as fuKang,p as mengZhiDui,h as pengYuan,A as qiuSheng,S as teams,f as xingHai,w as yinHe,x as yingJiuDui,J as zhongAi};
var x=Object.defineProperty;var A=(s,a,n)=>a in s?x(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n;var m=(s,a,n)=>A(s,typeof a!="symbol"?a+"":a,n);class D{constructor({name:a,team:n}){m(this,"name");m(this,"team");this.name=a,this.team=n}}class e{constructor({name:a,players:n}){m(this,"name");m(this,"players");if(this.name=a,n.length>0){typeof n[0]=="string"?this.players=n.map(b=>new D({name:b,team:a})):this.players=n;return}this.players=[]}}const r=new e({name:"\u5BCC\u5EB7",players:["\u8D3A\u6C38\u53D1","\u6768\u8F76\u6590","\u9648\u6653\u7EA2","\u8C22\u5A01","\u5218\u4E7E","\u5173\u5747\u94ED","\u8A79\u987A\u8FBE","\u5B54\u4EE4\u78CA","\u8863\u51A0\u82F1","\u9648\u5065\u8363","\u6768\u6D41\u5B66"]}),y=new e({name:"\u98DE\u5929",players:["\u6E38\u884C\u81F3","\u7B26\u6D25\u6986","\u5434\u8FEA","\u989C\u8087\u5065","\u6768\u6587\u7B11","\u8881\u57F9\u680B","\u5F20\u8302\u61CB","\u59DA\u707F\u797A","\u738B\u6B23","\u9AD8\u8FDB"]}),i=new e({name:"\u8D85\u8D8A\u8005",players:["\u6881\u5CF0","\u5510\u5EF6\u9F99","\u5F90\u56FD\u658C","\u9648\u8D85\u6587","\u65BD\u5B8F","\u5F20\u5F00\u660E","\u5218\u6839","\u8521\u96EA\u5CF0","\u7518\u51EF","\u90D1\u5F3A"]}),p=new e({name:"\u68A6\u4E4B\u961F",players:["\u8881\u9526\u5764","\u6F58\u4E91\u9704","\u9648\u4F1F\u677E","\u66F9\u5929\u4F51","\u5F20\u6770","\u5218\u5B87\u6770","\u674E\u6B66\u677E","\u5B59\u51CC\u658C","\u5C0F\u7F57","\u5F20\u6587\u97EC"]}),l=new e({name:"\u94F6\u6CB3",players:["\u51AF\u65B0\u6770","\u674E\u5E86\u4E1C","\u738B\u5149","\u5F20\u9E4F","\u67EF\u661F\u661F","\u5218\u4E2D\u6770","\u8BB8\u6CFD\u96C4","\u6881\u6D2A\u4EAE","\u94B1\u8D1D\u8D1D","\u5218\u5BC5\u5348","\u8521\u589E\u660C","\u5370\u9E4F"]}),t=new e({name:"\u535A\u7231",players:["\u5C48\u4E91\u98DE","\u6797\u65ED\u548C","\u53F6\u5B87","\u50A8\u6000\u82F1","\u5F20\u9E4F\u98DE","\u90D1\u707F\u6807","\u5F20\u519B\u80DC","\u8D75\u6C38\u515A","\u5C48\u5B87\u535A","\u4E54\u4F1F\u7537"]}),o=new e({name:"\u9E4F\u8FDC",players:["\u6881\u6D69\u7136","\u9648\u67CF\u6DA6","\u9EC4\u4FCA\u66E6","\u674E\u5609\u777F","\u9648\u4F1F","\u8BB8\u4FCA\u8363","\u8C2D\u798F\u4FE1","\u949F\u51CC\u98DE","\u674E\u91D1\u5BB8"]}),w=new e({name:"\u640F\u51FB",players:["\u5218\u6C9B","\u8D75\u8003","\u6C88\u69FA\u851A","\u5F20\u6E58\u6881","\u4FAF\u9F99\u8F89","\u5B59\u51CC\u658C","\u8D3A\u6C38\u751F","\u5ED6\u9752\u6D77","\u6E38\u8D85"]}),u=new e({name:"\u661F\u6D77",players:["\u5218\u660A","\u9648\u535A\u58EB","\u674E\u4E9A","\u6768\u948A","\u5510\u5F81\u7403","\u738B\u701A","\u621A\u8212\u626C","\u674E\u5E05","\u7EAA\u9A70\u5F6C","\u6881\u7ECD\u7965"]}),h=new e({name:"\u4E2D\u7231",players:["\u9648\u4E01","\u9648\u6625\u534E","\u5218\u632F","\u5F90\u4F1F","\u8096\u6500","\u767D\u6D77\u6D9B","\u6731\u6C38\u5DDD","\u5F20\u94A7\u5BA5","\u5362\u94F6\u6797","\u6768\u5B50\u5B87","\u848B\u4F1F","\u77F3\u5B66\u9526","\u5362\u4E49\u6C5F","\u5927\u6D77"]}),g=new e({name:"\u72EC\u89D2\u517D",players:["\u738B\u6D77\u6D9B","\u5DE9\u946B","\u6C5F\u5E86\u7EA2","\u5218\u6653\u65ED","\u674E\u6DFB\u91D1","\u738B\u822A","\u725B\u946B","\u6768\u4ED5\u57FA","\u962E\u5072\u6167","\u53F6\u4F73\u5065"]}),c=new e({name:"\u8D62\u5C31\u961F",players:["\u5468\u4F1F\u6D9B","\u674E\u601D\u5B8F","\u9A6C\u4F1F\u5149","\u9648\u5065\u8363","\u5218\u5174\u5FB7","\u674E\u8D2F\u5B87","\u53F8\u68A6\u8F69","\u5434\u6850","\u9648\u548F\u709C","\u66F9\u9AD8\u7FD4"]}),f=new e({name:"\u7403\u80DC",players:["\u80E1\u80DC\u8D85","\u5218\u4E1C\u751F","\u4F8D\u5C55","\u97E9\u7EE7\u4E1C","\u8983\u542F\u5BCC","\u9093\u715C\u5E73","\u5F20\u666F","\u4F55\u745E\u54F2","\u8D3A\u6C38\u53D1"]}),J=new e({name:"annoymous",players:["\u5434\u5929\u777F","\u5C0F\u5F90","\u5C0F\u5218","\u5C0F\u7F57","\u5218\u7ACB","\u533F\u540D1","\u6881\u6587\u97EC"]}),H={\u4E2D\u7231:h,\u661F\u6D77:u,\u640F\u51FB:w,\u9E4F\u8FDC:o,\u535A\u7231:t,\u94F6\u6CB3:l,\u68A6\u4E4B\u961F:p,\u8D85\u8D8A\u8005:i,\u98DE\u5929:y,\u5BCC\u5EB7:r,\u72EC\u89D2\u517D:g,\u8D62\u5C31\u961F:c,\u7403\u80DC:f,\u533F\u540D1:J};export{J as annoymous,t as boAi,w as boJi,i as chaoYueZhe,g as duJiaoShou,y as feiTian,r as fuKang,p as mengZhiDui,o as pengYuan,f as qiuSheng,H as teams,u as xingHai,l as yinHe,c as yingJiuDui,h as zhongAi};
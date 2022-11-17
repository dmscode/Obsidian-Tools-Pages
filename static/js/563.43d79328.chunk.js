"use strict";(self.webpackChunkob_pages=self.webpackChunkob_pages||[]).push([[563],{563:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var c=t(885),o=t(791),a=t(806),i=t(632),s=t(184),d=(0,s.jsx)(a.G,{icon:i.gr5}),l=(0,s.jsx)(a.G,{icon:i.Ykk}),r=(0,s.jsx)(a.G,{icon:i.XCy}),u=(0,s.jsx)(a.G,{icon:i.TTX}),h=function(e){return String(e).padStart(2,"0")},x=function(){var e=(0,o.useRef)(null),n=(0,o.useState)((function(){return!window.localStorage.getItem("QuickNotePath")||!window.localStorage.getItem("QuickNoteTemplate")})),t=(0,c.Z)(n,2),a=t[0],i=t[1],x=(0,o.useState)((function(){return window.localStorage.getItem("QuickNotePath")||"obsidian://advanced-uri?filepath=Logs%252F{{date}}.md"})),j=(0,c.Z)(x,2),f=j[0],m=j[1],g=(0,o.useState)((function(){return window.localStorage.getItem("QuickNoteTemplate")||"---\ncreated: {{date}} {{time}}\nupdated: {{date}} {{time}}\n---\n\n{{content}}"})),p=(0,c.Z)(g,2),k=p[0],v=p[1],w=(0,o.useState)((function(){return window.localStorage.getItem("QuickNoteContent")||""})),N=(0,c.Z)(w,2),C=N[0],b=N[1];(0,o.useEffect)((function(){window.localStorage.setItem("QuickNotePath",f)}),[f]),(0,o.useEffect)((function(){window.localStorage.setItem("QuickNoteTemplate",k)}),[k]),(0,o.useEffect)((function(){window.localStorage.setItem("QuickNoteContent",C)}),[C]),(0,o.useEffect)((function(){a||e.current.focus()}),[a]);var S=(0,o.useCallback)((function(){var e=new Date,n={content:C,YYYY:e.getFullYear(),MM:h(e.getMonth()+1),dd:h(e.getDate()),HH:h(e.getHours()),mm:h(e.getMinutes()),ss:h(e.getSeconds())};n.date="".concat(n.YYYY,"-").concat(n.MM,"-").concat(n.dd),n.time="".concat(n.HH,":").concat(n.mm,":").concat(n.ss);var t=f.replace(/\{\{(\w+)\}\}/g,(function(e,t){return n[t]||e})),c=k.replace(/\{\{(\w+)\}\}/g,(function(e,t){return n[t]||e}));window.open("".concat(t,"&data=").concat(encodeURIComponent(c),"&mode=append"))}),[C,f,k]),I=(0,o.useCallback)((function(e){var n=decodeURIComponent(decodeURIComponent(e.target.value.replace(/\n/,"")));n!==f&&m(n)}),[f,m]);return(0,s.jsxs)("div",{className:"quick-note",children:[a?(0,s.jsxs)("div",{className:"quick-note-config",children:[(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("label",{htmlFor:"quick-note-path",children:"\u7b14\u8bb0\u5730\u5740\uff08Advanced URI \u683c\u5f0f\uff09\uff1a"}),(0,s.jsx)("textarea",{id:"quick-note-path",placeholder:"\u7b14\u8bb0\u5730\u5740\uff08Advanced URI \u683c\u5f0f\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u65b9\u53d8\u91cf\u3002",value:f.replace(/(\?|&)/g,"\n$1")||"",onChange:I})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("label",{htmlFor:"quick-note-template",children:"\u7b14\u8bb0\u6a21\u677f\uff1a"}),(0,s.jsx)("textarea",{id:"quick-note-template",placeholder:"\u7b14\u8bb0\u6a21\u677f\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u65b9\u53d8\u91cf\u3002\u8003\u8651\u5230\u53ef\u80fd\u8ffd\u52a0\u5728\u539f\u6709\u7b14\u8bb0\u4e2d\uff0c\u6240\u4ee5\u4e0d\u5efa\u8bae\u6bd4\u8f83\u590d\u6742\u3002",value:k||"",onChange:function(e){return v(e.target.value)}})]})]}):(0,s.jsx)("div",{className:"card",children:(0,s.jsx)("textarea",{id:"quick-note-content",ref:e,placeholder:"\u5199\u4e0b\u7b14\u8bb0\uff0c\u7136\u540e\u53d1\u9001\u2026\u2026",value:C||"",onChange:function(e){return b(e.target.value)}})}),(0,s.jsxs)("div",{className:"card button-group",children:[(0,s.jsxs)("button",{className:"toggle",onClick:function(){i((function(e){return!e}))},children:[" ",a?l:d," "]}),(0,s.jsxs)("button",{className:"coffee",onClick:function(){window.open("https://afdian.net/a/daomishu","_blank")},children:[u," Coffee"]}),!a&&(0,s.jsxs)("button",{className:"send",onClick:S,children:["Send Note ",r]})]}),a&&(0,s.jsxs)("div",{className:"card quick-note-desc",children:[(0,s.jsx)("h3",{children:"\u4f7f\u7528\u8bf4\u660e\uff1a"}),(0,s.jsxs)("p",{children:["\u672c\u5de5\u5177\u57fa\u4e8e ",(0,s.jsx)("a",{href:"https://github.com/Vinzent03/obsidian-advanced-uri",children:"Advanced URI"})," \u7684 Api\uff0c\u6545\u9700\u8981\u5148\u5b89\u88c5\u6b64\u63d2\u4ef6\u3002"]}),(0,s.jsx)("p",{children:"\u7136\u540e\u5728\u4f60\u9884\u5b9a\u7684\u4f4d\u7f6e\u521b\u5efa\u4e00\u7bc7\u7b14\u8bb0\uff0c\u590d\u5236\u8fd9\u7bc7\u7b14\u8bb0\u7684 Advanced URI \uff0c\u7c98\u8d34\u5230\u672c\u5de5\u5177\u7684\u7b14\u8bb0\u5730\u5740\u680f\u3002\u8fd9\u6837\u6240\u6709\u65b0\u6dfb\u52a0\u5185\u5bb9\u90fd\u4f1a\u8ffd\u52a0\u5230\u8fd9\u7bc7\u7b14\u8bb0\u4e2d\u3002"}),(0,s.jsxs)("p",{children:["\u4f60\u4e5f\u53ef\u4ee5\u5728\u5730\u5740\u4e2d\u4f7f\u7528\u53d8\u91cf\uff0c\u53d8\u91cf\u7684\u683c\u5f0f\uff1a",(0,s.jsx)("code",{children:"{{\u5173\u952e\u5b57}}"}),"\u3002\u4ece\u800c\u5b9e\u73b0\u6309\u4e00\u5b9a\u89c4\u5219\u81ea\u52a8\u521b\u5efa\u7b14\u8bb0\u3002"]}),(0,s.jsxs)("p",{children:["\u6a21\u677f\u4e2d\u540c\u6837\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u5b9e\u73b0 Front matter \u7684\u6dfb\u52a0\u3002\u9700\u8981\u6ce8\u610f\uff1a",(0,s.jsxs)("strong",{children:["\u6a21\u677f\u4e2d\u5fc5\u987b\u7528 ",(0,s.jsx)("code",{children:"{{content}}"})," \u53d8\u91cf\u6765\u63d2\u5165\u7b14\u8bb0\u7684\u5185\u5bb9"]}),"\uff0c\u5426\u5219\u5c31\u4e0d\u5305\u542b\u4f60\u4e66\u5199\u7684\u7b14\u8bb0\u4e86\u54e6~"]}),(0,s.jsx)("p",{children:"\u5de5\u5177\u6709\u6570\u636e\u81ea\u52a8\u4fdd\u5b58\u548c\u81ea\u52a8\u6062\u590d\uff0c\u53ea\u662f\u4ee5\u9632\u610f\u5916\uff0c\u5fc5\u8981\u8fc7\u5ea6\u4f9d\u8d56\uff0c\u4e0d\u8981\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u9000\u51fa\u81ea\u52a8\u6e05\u9664\u6d4f\u89c8\u6570\u636e\u6216\u8005\u9690\u79c1\u6d4f\u89c8\u6a21\u5f0f\u3002"}),(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"\u53ef\u7528\u53d8\u91cf\u5173\u952e\u5b57\uff1a"})}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"content"}),"\uff1a\u4f60\u8f93\u5165\u7684\u7b14\u8bb0\u5185\u5bb9"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"date"}),"\uff1a2022-11-16 \u683c\u5f0f\u7684\u65e5\u671f"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"time"}),"\uff1a16:05:31 \u683c\u5f0f\u7684\u65f6\u95f4"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"YYYY"}),"\uff1a\u5e74\u4efd"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"MM"}),"\uff1a\u6708\u4efd"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"dd"}),"\uff1a\u65e5\u671f"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"HH"}),"\uff1a\u5c0f\u65f6"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"mm"}),"\uff1a\u5206\u949f"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"ss"}),"\uff1a\u79d2"]})]})]})]})}}}]);
//# sourceMappingURL=563.43d79328.chunk.js.map
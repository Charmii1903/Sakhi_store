(()=>{var e={};e.id=526,e.ids=[526],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2429:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>y,originalPathname:()=>u,pages:()=>h,routeModule:()=>g,tree:()=>x});var a=s(50),i=s(2067);s(2075);var l=s(2504),o=s(5932),c=s(6550),n=s.n(c),d=s(6979),m={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(m[e]=()=>d[e]);s.d(t,m);var p=e([a,i]);[a,i]=p.then?(await p)():p;let x=["",{children:["(root)",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,50)),"C:\\sakhi\\sakhi_store\\app\\(root)\\cart\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2067)),"C:\\sakhi\\sakhi_store\\app\\(root)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],h=["C:\\sakhi\\sakhi_store\\app\\(root)\\cart\\page.tsx"],u="/(root)/cart/page",y={require:s,loadChunk:()=>Promise.resolve()},g=new l.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(root)/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}});r()}catch(e){r(e)}})},416:(e,t,s)=>{Promise.resolve().then(s.bind(s,975))},975:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(326),a=s(9311),i=s(6775),l=s(2033),o=s(3961);let c=(0,s(2881).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);var n=s(6226),d=s(5047);let m=()=>{let e=(0,d.useRouter)(),{user:t}=(0,i.aF)(),s=(0,a.Z)(),m=parseFloat(s.cartItems.reduce((e,t)=>e+t.item.price*t.quantity,0).toFixed(2)),p={clerkId:t?.id,email:t?.emailAddresses[0].emailAddress,name:t?.fullName},x=async()=>{try{if(t){let e=await fetch("http://localhost:3000/api/checkout",{method:"POST",body:JSON.stringify({cartItems:s.cartItems,customer:p})}),t=await e.json();window.location.href=t.url,console.log(t)}else e.push("sign-in")}catch(e){console.log("[checkout_POST]",e)}};return(0,r.jsxs)("div",{className:"flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3",children:[(0,r.jsxs)("div",{className:"w-2/3 max-lg:w-full",children:[r.jsx("p",{className:"text-heading3-bold",children:"Shopping Cart"}),r.jsx("hr",{className:"my-6"}),0===s.cartItems.length?r.jsx("p",{className:"text-body-bold",children:"No item in cart"}):r.jsx("div",{children:s.cartItems.map(e=>(0,r.jsxs)("div",{className:"w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(n.default,{src:e.item.media[0],width:100,height:100,className:"rounded-lg w-32 h-32 object-cover",alt:"product"}),(0,r.jsxs)("div",{className:"flex flex-col gap-3 ml-4",children:[r.jsx("p",{className:"text-body-bold",children:e.item.title}),e.color&&r.jsx("p",{className:"text-small-medium",children:e.color}),e.size&&r.jsx("p",{className:"text-small-medium",children:e.size}),(0,r.jsxs)("p",{className:"text-small-medium",children:["$",e.item.price]})]})]}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[r.jsx(l.Z,{className:"hover:text-red-1 cursor-pointer",onClick:()=>s.decreaseQuantity(e.item._id)}),r.jsx("p",{className:"text-body-bold",children:e.quantity}),r.jsx(o.Z,{className:"hover:text-red-1 cursor-pointer",onClick:()=>s.increaseQuantity(e.item._id)})]}),r.jsx(c,{className:"hover:text-red-1 cursor-pointer",onClick:()=>s.removeItem(e.item._id)})]}))})]}),(0,r.jsxs)("div",{className:"w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5",children:[(0,r.jsxs)("p",{className:"text-heading4-bold pb-4",children:["Summary"," ",r.jsx("span",{children:`(${s.cartItems.length} ${s.cartItems.length>1?"items":"item"})`})]}),(0,r.jsxs)("div",{className:"flex justify-between text-body-semibold",children:[r.jsx("span",{children:"Total Amount"}),(0,r.jsxs)("span",{children:["Rs. ",m]})]}),r.jsx("button",{className:"border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white",onClick:x,children:"Proceed to Checkout"})]})]})}},2033:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(2881).Z)("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]])},3961:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(2881).Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},50:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>e});var a=s(1851);let e=(await (0,a.createProxy)(String.raw`C:\sakhi\sakhi_store\app\(root)\cart\page.tsx`)).default;r()}catch(e){r(e)}},1)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[424,691,131,292,330,789],()=>s(2429));module.exports=r})();
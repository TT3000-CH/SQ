/* SwizQuiz Tablet Edition 2.0.0. No profile data leaves localStorage. */
const BUILD='tablet-2.0.0-20261003';
const ROOT=new URL('./',self.location.href);
const PREFIX='swizquiz-tablet:'+encodeURIComponent(ROOT.pathname)+':';
const CACHE=PREFIX+BUILD;
const CORE=['index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'].map(p=>new URL(p,ROOT).href);
const INDEX=CORE[0];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await Promise.all(CORE.map(async url=>{
   const response=await fetch(new Request(url,{cache:'reload'}));
   if(!response.ok)throw Error('Missing app file: '+url);
   await cache.put(url,response);
  }));
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const u=new URL(request.url),canonical=u.origin+u.pathname;
 const own=u.origin===ROOT.origin&&u.pathname.startsWith(ROOT.pathname);
 const nav=own&&request.mode==='navigate'&&(u.pathname===ROOT.pathname||canonical===INDEX);
 const local=own&&CORE.includes(canonical);
 const external=(u.hostname==='unpkg.com'&&u.pathname.includes('/swiss-maps'))||
  (u.hostname==='cdn.jsdelivr.net'&&/^\/npm\/(swiss-maps|world-geojson)/.test(u.pathname))||
  (u.hostname==='upload.wikimedia.org'&&u.pathname.startsWith('/wikipedia/commons/'))||
  (u.hostname==='commons.wikimedia.org'&&u.pathname==='/w/api.php');
 if(!nav&&!local&&!external)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),key=nav?INDEX:(external?request:canonical);
  if(external){const cached=await cache.match(key);if(cached)return cached;}
  try{
   const response=await fetch(nav?new Request(request,{cache:'no-cache'}):request);
   if(response.ok||response.type==='opaque')await cache.put(key,response.clone());
   return response;
  }catch(error){
   const cached=await cache.match(key);
   if(cached)return cached;
   return new Response('Offline: Diese Datei wurde noch nicht geladen.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }
 })());
});

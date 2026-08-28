(function () {
  'use strict';
  var META_ID='1748486363089721', ADS_IDS=['AW-16659529348','AW-11349094469'], GTM_IDS=['GTM-MSG2F6MM','GTM-PP3C5XRX'];
  var KEY='draMarianaCookieConsent', loaded=false;
  var policy=(location.pathname.indexOf('/entenda-o-hemograma/')!==-1?'../':'')+'politica-de-privacidade.html';

  function getChoice(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function setChoice(value){try{localStorage.setItem(KEY,value);}catch(e){}}
  function addScript(src){var s=document.createElement('script');s.async=true;s.src=src;document.head.appendChild(s);}

  function loadMeta(){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',META_ID);fbq('track','PageView');
  }
  function loadGoogle(){
    window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};
    GTM_IDS.forEach(function(id){dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});addScript('https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(id));});
    addScript('https://www.googletagmanager.com/gtag/js?id='+ADS_IDS[0]);gtag('js',new Date());ADS_IDS.forEach(function(id){gtag('config',id);});
    var path=location.pathname.replace(/\/+$/,'');if(path===''||path==='/index.html')gtag('event','conversion',{'send_to':'AW-11349094469/MKvICOq2s-UYEMXg1aMq'});
  }
  function loadTrackers(){if(loaded||getChoice()!=='accepted')return;loaded=true;loadMeta();loadGoogle();}

  window.gtag_report_conversion=function(url){
    if(getChoice()!=='accepted'){if(url)location.href=url;return !url;}
    loadTrackers();var done=false,go=function(){if(url&&!done){done=true;location.href=url;}};
    if(typeof gtag==='function'){gtag('event','conversion',{'send_to':'AW-11349094469/K2yRCLjNxOYYEMXg1aMq','event_callback':go});if(url)setTimeout(go,700);}else go();return !url;
  };

  function addStyles(){var s=document.createElement('style');s.textContent=
    '.dm-cookie-banner{position:fixed;left:20px;right:20px;bottom:20px;z-index:2147483646;max-width:1060px;margin:auto;background:#fff;color:#274c58;border:1px solid #eadfd5;border-radius:14px;box-shadow:0 16px 46px rgba(27,59,70,.2);padding:20px 22px;font:400 14px/1.5 Arial,sans-serif}.dm-cookie-inner{display:flex;align-items:center;gap:24px}.dm-cookie-copy{flex:1}.dm-cookie-title{display:block;color:#183f4c;font-size:16px;margin-bottom:4px}.dm-cookie-copy p{margin:0;color:#587078}.dm-cookie-copy a{color:#a65f60;text-decoration:underline}.dm-cookie-actions{display:flex;gap:8px;flex-wrap:wrap}.dm-cookie-button{border:1px solid transparent;border-radius:8px;padding:10px 14px;font:700 13px Arial,sans-serif;cursor:pointer;white-space:nowrap}.dm-cookie-accept,.dm-cookie-save{background:#C57D7B;color:#fff}.dm-cookie-reject{background:#f5f1ec;color:#355761}.dm-cookie-configure{background:#fff;border-color:#d8cec5;color:#355761}.dm-cookie-options{display:none;margin-top:16px;padding-top:15px;border-top:1px solid #eee5dc}.dm-cookie-options.is-open{display:block}.dm-cookie-row{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:7px 0}.dm-cookie-row strong{display:block;color:#274c58}.dm-cookie-row small{display:block;color:#71858b;margin-top:2px}.dm-cookie-toggle{width:42px;height:23px;accent-color:#C57D7B;margin-top:5px}.dm-cookie-save{margin-top:10px}.dm-cookie-settings{position:fixed;left:12px;bottom:12px;z-index:2147483645;border:1px solid #ddd4cb;border-radius:999px;background:#fff;color:#48646c;padding:7px 11px;font:600 11px Arial,sans-serif;box-shadow:0 4px 15px rgba(27,59,70,.11);cursor:pointer}@media(max-width:760px){.dm-cookie-banner{left:10px;right:10px;bottom:10px;padding:17px}.dm-cookie-inner{display:block}.dm-cookie-actions{margin-top:14px}.dm-cookie-button{flex:1}.dm-cookie-settings{left:8px;bottom:8px}}';document.head.appendChild(s);}
  function close(){var b=document.getElementById('dm-cookie-banner');if(b)b.remove();}
  function choose(value){setChoice(value);close();if(value==='accepted')loadTrackers();}
  function show(){
    close();var b=document.createElement('aside');b.id='dm-cookie-banner';b.className='dm-cookie-banner';b.setAttribute('role','dialog');b.setAttribute('aria-label','Preferências de cookies');
    b.innerHTML='<div class="dm-cookie-inner"><div class="dm-cookie-copy"><strong class="dm-cookie-title">Cookies e privacidade</strong><p>Ao utilizar este site, você pode autorizar o uso de cookies para medir acessos e melhorar nossos conteúdos. <a href="'+policy+'">Acessar nossa Política de Cookies e Privacidade</a>.</p></div><div class="dm-cookie-actions"><a href="#" class="dm-cookie-decline" style="align-self:center;color:#6f7e83;text-decoration:underline;font-size:12px;white-space:nowrap">Continuar sem cookies</a><button type="button" class="dm-cookie-button dm-cookie-accept">Concordo</button></div></div>';
    b.querySelector('.dm-cookie-decline').onclick=function(event){event.preventDefault();choose('rejected');};b.querySelector('.dm-cookie-accept').onclick=function(){choose('accepted');};document.body.appendChild(b);
  }
  function checkout(e){var a=e.target.closest&&e.target.closest('a[href*="pay.hotmart.com"]');if(a&&getChoice()==='accepted'){loadTrackers();if(typeof fbq==='function')fbq('track','InitiateCheckout');}}
  function init(){addStyles();document.addEventListener('click',checkout);var c=getChoice();if(c==='accepted')loadTrackers();if(!c)show();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
}());

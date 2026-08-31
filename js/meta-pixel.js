(function () {
  'use strict';
  var META_ID='1748486363089721', ADS_IDS=['AW-16659529348','AW-11349094469'], GTM_IDS=['GTM-MSG2F6MM','GTM-PP3C5XRX'];
  var NOTICE_KEY='draMarianaCookieNoticeDismissed';
  var policy=(location.pathname.indexOf('/entenda-o-hemograma/')!==-1?'../':'')+'politica-de-privacidade.html';
  var loaded=false;

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
  function loadTrackers(){if(loaded)return;loaded=true;loadMeta();loadGoogle();}

  window.gtag_report_conversion=function(url){
    loadTrackers();var done=false,go=function(){if(url&&!done){done=true;location.href=url;}};
    if(typeof gtag==='function'){gtag('event','conversion',{'send_to':'AW-11349094469/K2yRCLjNxOYYEMXg1aMq','event_callback':go});if(url)setTimeout(go,700);}else go();return !url;
  };

  function addStyles(){var s=document.createElement('style');s.textContent=
    '.dm-cookie-notice{position:fixed;left:16px;bottom:16px;z-index:2147483646;max-width:340px;background:#fff;color:#355761;border:1px solid #eadfd5;border-radius:12px;box-shadow:0 10px 30px rgba(27,59,70,.16);padding:12px 14px;font:400 12.5px/1.5 Arial,sans-serif;display:flex;align-items:flex-start;gap:10px}.dm-cookie-notice a{color:#a65f60;text-decoration:underline}.dm-cookie-notice button{border:none;background:transparent;color:#8a9aa0;font-size:16px;line-height:1;cursor:pointer;padding:0 2px}@media(max-width:520px){.dm-cookie-notice{left:10px;right:10px;bottom:10px;max-width:none}}';
    document.head.appendChild(s);
  }
  function showNotice(){
    if(document.getElementById('dm-cookie-notice'))return;
    var b=document.createElement('aside');b.id='dm-cookie-notice';b.className='dm-cookie-notice';b.setAttribute('role','note');b.setAttribute('aria-label','Aviso de cookies');
    b.innerHTML='<span>Este site usa cookies para melhorar sua experiência e medir acessos. <a href="'+policy+'">Política de Privacidade</a>.</span><button type="button" aria-label="Fechar aviso">&times;</button>';
    b.querySelector('button').onclick=function(){try{localStorage.setItem(NOTICE_KEY,'1');}catch(e){}b.remove();};
    document.body.appendChild(b);
  }
  function checkout(e){var a=e.target.closest&&e.target.closest('a[href*="pay.hotmart.com"]');if(a){loadTrackers();if(typeof fbq==='function')fbq('track','InitiateCheckout');}}
  function init(){
    loadTrackers();
    addStyles();
    document.addEventListener('click',checkout);
    var dismissed; try{dismissed=localStorage.getItem(NOTICE_KEY);}catch(e){dismissed=null;}
    if(!dismissed)showNotice();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
}());

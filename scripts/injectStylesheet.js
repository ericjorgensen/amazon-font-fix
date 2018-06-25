var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('styles/amazon_fix.css');
(document.head||document.documentElement).appendChild(style);
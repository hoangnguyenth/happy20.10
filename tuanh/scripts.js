const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,symbols=["🌸","✿","💗","✧","🌷","♡"];
function particle(){if(reduced)return;const e=document.createElement("span");e.className="particle";e.textContent=symbols[Math.random()*symbols.length|0];e.style.left=Math.random()*100+"vw";e.style.fontSize=12+Math.random()*15+"px";e.style.animationDuration=7+Math.random()*8+"s";e.style.setProperty("--drift",Math.random()*100-50+"px");document.body.appendChild(e);setTimeout(()=>e.remove(),16000)}
function sparkle(){if(reduced)return;const e=document.createElement("span");e.className="spark";e.textContent="✦";e.style.left=Math.random()*100+"vw";e.style.top=Math.random()*100+"vh";e.style.fontSize=8+Math.random()*12+"px";e.style.animationDuration=1.3+Math.random()*2+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),3800)}
for(let i=0;i<12;i++)setTimeout(particle,i*180);setInterval(particle,750);for(let i=0;i<16;i++)setTimeout(sparkle,i*120);setInterval(sparkle,900);

/* Tự động kích hoạt toàn màn hình (Fullscreen) trên mọi thiết bị khi người dùng click/chạm */
function enableFullscreen() {
	const elem = document.documentElement;
	if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen().catch(() => {});
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
	}
}
window.addEventListener("click", enableFullscreen, { once: true });
window.addEventListener("touchstart", enableFullscreen, { once: true });
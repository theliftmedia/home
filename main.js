

// ─── Hamburger ───
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('active');
});
function closeMobile() {
  ham.classList.remove('open');
  mob.classList.remove('active');
}

// ─── Simple QR Code Generator ───
// WhatsApp deep link for +917050721366
const waUrl = "https://wa.me/917050721366";

(function generateQR() {
  // We'll use a data URL approach by drawing a simplified QR-like visual
  // that encodes the WhatsApp URL via a real QR library loaded from CDN
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
  script.onload = function() {
    const canvas = document.getElementById('qrCanvas');
    canvas.style.display = 'none';
    const div = document.createElement('div');
    div.id = 'qrDiv';
    canvas.parentNode.insertBefore(div, canvas);
    new QRCode(div, {
      text: waUrl,
      width: 160,
      height: 160,
      colorDark: '#0a0a0a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    div.style.borderRadius = '4px';
    div.style.overflow = 'hidden';
  };
  script.onerror = function() {
    // Fallback: show text
    const canvas = document.getElementById('qrCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,160,160);
    ctx.fillStyle = '#0a0a0a';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('wa.me/917050721366', 80, 80);
  };
  document.head.appendChild(script);
})();

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobile();
    }
  });
});

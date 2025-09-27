/**
 * Unified Style JavaScript - تطبيق التعديلات على جميع الصفحات
 */

document.addEventListener('DOMContentLoaded', function() {
  // تطبيق التعديلات على الأزرار
  const allButtons = document.querySelectorAll('.btn, button, .tp-btn, .tp-btn-yellow, .tp-btn-white, .tp-btn-white-sm, .tp-btn-white-brand, .tp-btn-white-lg');
  
  allButtons.forEach(button => {
    if (button.style) {
      button.style.borderRadius = '8px';
      button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      button.style.transition = 'all 0.3s ease';
    }
  });

  // تقليل تأثير التوهج
  const glowElements = document.querySelectorAll('.glow-effect, [class*="glow"], .tp-hero-shape-animation, .tp-hero-shape img');
  
  glowElements.forEach(element => {
    if (element.style) {
      element.style.opacity = '0.6';
      element.style.filter = 'blur(8px)';
    }
  });

  // تعديل العناصر الأخرى لتكون مستديرة
  const roundedElements = document.querySelectorAll('.modal, .modal-content, .card, .form-control, .input-group, .tp-contact-form-field input, .tp-contact-form-field textarea, .tp-service-item, .tp-portfolio-item, .tp-team-item, .tp-testimonial-item');
  
  roundedElements.forEach(element => {
    if (element.style) {
      element.style.borderRadius = '8px';
    }
  });

  // إضافة تأثير التحويم على الأزرار
  allButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
  });
  
  // توحيد التدرجات اللونية في جميع الصفحات
  const gradientElements = document.querySelectorAll('.helal-gradient, [class*="gradient"], .bg-gradient');
  gradientElements.forEach(element => {
    if (element.style) {
      // تطبيق نفس التدرج اللوني المستخدم في صفحة AI Bot
      element.style.opacity = '0.9';
      
      // إذا كان العنصر يستخدم التدرج الذهبي الخاص بهلال
      if (element.classList.contains('helal-gradient') || 
          window.getComputedStyle(element).backgroundImage.includes('gold')) {
          element.style.background = 'linear-gradient(135deg, #FFD700, #E6A800)';
      }
    }
  });
  
  // إضافة متغيرات CSS موحدة للألوان
  const cssVars = `
      :root {
          --helal-gold: #FFD700;
          --helal-gold-dark: #E6A800;
          --helal-border: rgba(255, 215, 0, 0.15);
      }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.textContent = cssVars;
  document.head.appendChild(styleElement);
});
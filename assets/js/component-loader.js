/**
 * Component Loader - Loads reusable HTML components
 * This script loads navbar and footer components into HTML pages
 */

// Simple fallback components that will work immediately
const FALLBACK_NAVBAR = `
<!-- tp-offcanvus-area-end -->
<div class="tp-offcanvas-area">
   <div class="tp-offcanvas-wrapper">
      <div class="tp-offcanvas-top d-flex align-items-center justify-content-between">
         <div class="tp-offcanvas-logo">
            <a href="index.html">
               <img class="logo-1" src="assets/img/logo/logo.png" alt="">
               <img class="logo-2" src="assets/img/logo/logo-white.png" alt="">
            </a>
         </div>
         <div class="tp-offcanvas-close">
            <button class="tp-offcanvas-close-btn">
               <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </button>
         </div>
      </div>
      <div class="tp-offcanvas-main">
         
         <div class="tp-main-menu-mobile d-xl-none">
            <nav>
               <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="index.html#about">About</a></li>
                  <li><a href="portfolio-grid-col-4.html">Portfolio</a></li>
                  <li><a href="index.html#services">Services</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="contact.html">Contact</a></li>
               </ul>
            </nav>
         </div>
      </div>
   </div>
</div>
<div class="body-overlay"></div>

<header class="tp-header-height z-index-5">
   <div id="header-sticky" class="tp-inner-header-area tp-inner-header-mob-space">
      <div class="container container-1800">
         <div class="row align-items-center">
            <div class="col-xl-2 col-lg-4 col-md-6 col-6">
               <div class="tp-inner-header-logo tp-header-logo">
                  <a class="ab-logo-1" href="index.html"><img src="assets/img/logo/logo-white.png" alt="" style="height:70px; width:40px;"></a>
                  <a class="ab-logo-2" href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
               </div>
            </div>
            <div class="col-xl-8 col-lg-6 d-none d-lg-block">
               <div class="tp-inner-header-right-wrap text-center">
                  <div class="tp-inner-header-menu header-main-menu">
                     <nav class="tp-main-menu-content">
                        <ul style="display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; gap: 12px;">
                           <li class="has-dropdown" style="white-space: nowrap;"><a href="index.html" style="padding: 8px 10px; font-size: 14px;">Home</a></li>
                           <li class="has-dropdown" style="white-space: nowrap;"><a href="index.html#about" style="padding: 8px 10px; font-size: 14px;">About</a></li>
                           <li class="has-dropdown" style="white-space: nowrap;"><a href="portfolio-grid-col-4.html" style="padding: 8px 10px; font-size: 14px;">Portfolio</a></li>
                           <li class="has-dropdown" style="white-space: nowrap;"><a href="index.html#services" style="padding: 8px 10px; font-size: 14px;">Services</a></li>
                           <li class="has-dropdown" style="white-space: nowrap;"><a href="team.html" style="padding: 8px 10px; font-size: 14px;">Team</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-xl-2 col-lg-2 d-none d-lg-block">
               <div class="tp-inner-header-right-action text-end">
                  <ul>
                     <li>
                        <a href="contact.html" class="btn px-3 py-2" style="background-color: #FFD700; color: #000; border: none; font-weight: 500; border-radius: 0; font-size: 13px; white-space: nowrap;">Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="col-6 d-lg-none">
               <div class="tp-inner-header-right-action text-end">
                  <ul>
                     <li>
                        <div class="tp-inner-bar">
                           <button class="tp-offcanvas-open-btn">
                              <span>
                                 <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.00012207" width="34" height="2" fill="currentcolor"/>
                                    <rect y="8.00012" width="34" height="2" fill="currentcolor"/>
                                 </svg>                                          
                              </span>
                           </button>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>

<style>
/* Tablet Navigation Fixes */
@media (min-width: 992px) and (max-width: 1199px) {
   .tp-inner-header-area .container {
      max-width: 100% !important;
      padding: 0 15px !important;
   }
   
   .tp-inner-header-menu ul {
      gap: 8px !important;
   }
   
   .tp-inner-header-menu ul li a {
      padding: 6px 8px !important;
      font-size: 13px !important;
   }
   
   .tp-inner-header-right-action .btn {
      padding: 6px 12px !important;
      font-size: 12px !important;
   }
   
   .tp-inner-header-logo img {
      height: 60px !important;
      width: 35px !important;
   }
}

/* Small Tablet Fixes */
@media (min-width: 768px) and (max-width: 991px) {
   .tp-inner-header-area .d-lg-block {
      display: none !important;
   }
   
   .tp-inner-header-area .d-lg-none {
      display: block !important;
   }
}
</style>`;

const FALLBACK_FOOTER = `
<footer>
   <!-- Custom Footer Styling -->
   <style>
   .modern-footer {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      position: relative;
   }

   .modern-footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('assets/v3.svg') center/cover;
      opacity: 0.05;
      pointer-events: none;
   }

   .footer-main-container {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 215, 0, 0.03));
      border: 2px solid rgba(255, 215, 0, 0.15);
      border-radius: 25px;
      padding: 50px 30px;
      backdrop-filter: blur(20px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      margin-bottom: 30px;
      position: relative;
   }

   .footer-widget-title {
      color: #FFD700;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
   }

   .footer-brand-section {
      padding-right: 15px;
   }

   .footer-logo {
      margin-bottom: 20px;
   }

   .footer-logo img {
      max-width: 130px;
      height: auto;
   }

   .footer-description {
      color: #aaa;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
   }

   .footer-contact-info {
      margin-bottom: 15px;
   }

   .footer-contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      color: #ccc;
      font-size: 14px;
   }

   .footer-contact-item .icon {
      width: 30px;
      height: 30px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
   }

   .footer-contact-item .icon svg {
      width: 14px;
      height: 14px;
      color: #000;
   }

   .footer-contact-item a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s ease;
   }

   .footer-contact-item a:hover {
      color: #FFD700;
   }

   .footer-nav-menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   .footer-nav-menu ul li {
      margin-bottom: 10px;
   }

   .footer-nav-menu ul li a {
      color: #ccc;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.3s ease;
      display: inline-block;
      position: relative;
   }

   .footer-nav-menu ul li a::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      transition: width 0.3s ease;
   }

   .footer-nav-menu ul li a:hover {
      color: #FFD700;
      transform: translateX(3px);
   }

   .footer-nav-menu ul li a:hover::before {
      width: 100%;
   }

   .newsletter-form {
      position: relative;
   }

   .newsletter-input {
      width: 100%;
      padding: 12px 15px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 215, 0, 0.3);
      border-radius: 50px;
      color: #fff;
      font-size: 14px;
      outline: none;
      transition: all 0.3s ease;
      padding-right: 50px;
   }

   .newsletter-input::placeholder {
      color: #999;
   }

   .newsletter-input:focus {
      border-color: #FFD700;
      background: rgba(255, 215, 0, 0.1);
   }

   .newsletter-button {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
   }

   .newsletter-button:hover {
      transform: translateY(-50%) scale(1.05);
      box-shadow: 0 6px 15px rgba(255, 215, 0, 0.4);
   }

   .newsletter-button svg {
      width: 14px;
      height: 14px;
      color: #000;
   }

   .footer-copyright {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 215, 0, 0.2);
      padding: 20px 0;
   }

   .copyright-text {
      color: #aaa;
      font-size: 13px;
      margin: 0;
   }

   .footer-social-links {
      display: flex;
      gap: 15px;
      justify-content: center;
      align-items: center;
   }

   .footer-social-links a {
      color: #ccc;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 0, 0.2);
      transition: all 0.3s ease;
   }

   .footer-social-links a:hover {
      color: #000;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      border-color: #FFD700;
      transform: translateY(-2px);
   }

   @media (max-width: 768px) {
      .footer-main-container {
         padding: 40px 20px 25px;
         border-radius: 20px;
      }

      .footer-brand-section {
         padding-right: 0;
         margin-bottom: 30px;
      }

      .footer-social-links {
         justify-content: center;
         flex-wrap: wrap;
         gap: 12px;
      }

      .copyright-text {
         text-align: center;
         font-size: 12px;
      }
   }

   @media (max-width: 480px) {
      .footer-main-container {
         padding: 25px 15px 20px;
         border-radius: 18px;
      }

      .footer-widget-title {
         font-size: 16px;
      }

      .footer-logo img {
         max-width: 110px;
      }

      .footer-description {
         font-size: 13px;
      }

      .newsletter-input {
         padding: 10px 12px;
         padding-right: 45px;
         font-size: 13px;
      }

      .newsletter-button {
         width: 30px;
         height: 30px;
      }

      .newsletter-button svg {
         width: 12px;
         height: 12px;
      }

      .footer-contact-item {
         font-size: 13px;
      }

      .footer-contact-item .icon {
         width: 26px;
         height: 26px;
      }

      .footer-contact-item .icon svg {
         width: 12px;
         height: 12px;
      }
   }
   </style>

   <!-- footer area start -->
   <div class="tp-footer-2-area modern-footer pt-80 pb-0">
      <div class="container container-1480">
         <div class="footer-main-container">
            <div class="row">
               <!-- Brand Section -->
               <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                  <div class="footer-brand-section">
                     <div class="footer-logo">
                        <a href="index.html">
                           <img src="assets/img/logo/logo-white.png" alt="Helal Content Marketing">
                        </a>
                     </div>
                     <div class="footer-description">
                        <p>Where brands come alive through innovative digital marketing, creative content production, and strategic branding solutions.</p>
                     </div>
                  </div>
               </div>

               <!-- Navigation Links -->
               <div class="col-xl-2 col-lg-3 col-md-6 mb-40">
                  <div class="footer-nav-menu">
                     <h4 class="footer-widget-title">Quick Links</h4>
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="portfolio-grid-col-4.html">Portfolio</a></li>
                        <li><a href="links.html">Links</a></li>
                        <li><a href="contact.html">Contact</a></li>
                         <li>   <a href="ai-bot/index.html">AI Assistant</a></li>
                     </ul>
                  </div>
               </div>

               <!-- Services -->
               <div class="col-xl-3 col-lg-5 col-md-6 mb-40">
                  <div class="footer-nav-menu">
                     <h4 class="footer-widget-title">Our Services</h4>
                     <ul>
                        <li><a href="#services">Media Production</a></li>
                        <li><a href="#services">Digital Marketing</a></li>
                        <li><a href="#services">Personal Branding</a></li>
                        <li><a href="#services">Content Creation</a></li>
                        <li><a href="#services">Social Media Management</a></li>
                     </ul>
                  </div>
               </div>

               <!-- Newsletter and Social Media -->
               <div class="col-xl-3 col-lg-5 col-md-6 mb-40">
                  <div class="footer-newsletter">
                     <h4 class="footer-widget-title">Stay Updated</h4>
                     <p style="color: #aaa; font-size: 13px; margin-bottom: 20px; line-height: 1.6;">Subscribe to our newsletter for the latest marketing insights and updates.</p>
                     <form id="newsletter-form" class="newsletter-form" action="#" method="post">
                        <input type="email" id="newsletter-email" class="newsletter-input" placeholder="Enter your email..." required>
                        <button type="submit" class="newsletter-button">
                           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <line x1="22" y1="2" x2="11" y2="13"/>
                              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                           </svg>
                        </button>
                     </form>
                     <div id="newsletter-message" style="margin-top: 8px; color: #FFD700; font-size: 12px;"></div>
                     <div class="footer-social-links" style="margin-top: 25px;">
                        <a href="https://linkedin.com/company/helal-marketing" target="_blank">LinkedIn</a>
                        <a href="https://instagram.com/helal.marketing" target="_blank">Instagram</a>
                        <a href="https://facebook.com/helal.marketing" target="_blank">Facebook</a>
                        <a href="https://youtube.com/@helalmarketing" target="_blank">YouTube</a>
                    
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="footer-copyright">
      <div class="container container-1480">
         <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
               <div class="text-center">
                  <p class="copyright-text">© 2025 Helal Content Marketing. All rights reserved.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- footer area end -->

</footer>`;

class ComponentLoader {
    constructor() {
        this.componentsPath = 'components/';
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadComponents());
        } else {
            this.loadComponents();
        }
    }

    async loadComponents() {
        // Load components immediately with fallback
        this.loadComponentWithFallback('navbar', 'navbar-placeholder', FALLBACK_NAVBAR);
        this.loadComponentWithFallback('footer', 'footer-placeholder', FALLBACK_FOOTER);
        
        // Trigger post-load events
        setTimeout(() => this.triggerPostLoadEvents(), 100);
    }

    loadComponentWithFallback(componentName, placeholderId, fallbackHtml) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            console.warn(`Placeholder element with ID "${placeholderId}" not found`);
            return;
        }

        // Use fallback immediately for faster loading
        placeholder.innerHTML = fallbackHtml;
        console.log(`Loaded ${componentName} component (fallback)`);
    }

    triggerPostLoadEvents() {
        const event = new CustomEvent('componentsLoaded', {
            detail: { timestamp: Date.now() }
        });
        document.dispatchEvent(event);

        if (window.jQuery) {
            $(document).trigger('componentsLoaded');
        }
        
        // Ensure mobile menu functionality
        this.initMobileMenu();
    }

    initMobileMenu() {
        // Wait for jQuery to be available
        const checkJQuery = () => {
            if (window.jQuery) {
                // Mobile menu open/close functionality
                $(document).on('click', '.tp-offcanvas-open-btn', function() {
                    $('.tp-offcanvas-area').addClass('opened');
                    $('.body-overlay').addClass('opened');
                });

                $(document).on('click', '.tp-offcanvas-close-btn', function() {
                    $('.tp-offcanvas-area').removeClass('opened');
                    $('.body-overlay').removeClass('opened');
                });

                // Close menu when clicking on overlay
                $(document).on('click', '.body-overlay.opened', function() {
                    $('.tp-offcanvas-area').removeClass('opened');
                    $('.body-overlay').removeClass('opened');
                });

                // Close menu when clicking on menu links (for smooth navigation)
                $(document).on('click', '.tp-main-menu-mobile a', function() {
                    $('.tp-offcanvas-area').removeClass('opened');
                    $('.body-overlay').removeClass('opened');
                });

                // Handle cross-page section links
                this.handleCrossPageLinks();
            } else {
                setTimeout(checkJQuery, 100);
            }
        };
        checkJQuery();
    }

    handleCrossPageLinks() {
        // Handle hash navigation from URL when page loads
        if (window.location.hash) {
            setTimeout(() => {
                const target = $(window.location.hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                }
            }, 500);
        }

        // Newsletter Form Handler
        $(document).on('submit', '#newsletter-form', async function(e) {
            e.preventDefault();
            
            const email = $('#newsletter-email').val().trim();
            const messageDiv = $('#newsletter-message');
            const submitBtn = $('#newsletter-btn');
            
            if (!email) {
               messageDiv.text('Please enter your email address.').css('color', '#ff6b6b');
               return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
               messageDiv.text('Please enter a valid email address.').css('color', '#ff6b6b');
               return;
            }
            
            // Disable button and show loading
            submitBtn.prop('disabled', true);
            messageDiv.text('Subscribing...').css('color', '#FFD700');
            
            try {
               const response = await fetch('https://helal-back.vercel.app/api/newsletter', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email: email })
               });
               
               const result = await response.json();
               
               if (response.ok) {
                  messageDiv.text('Successfully subscribed to newsletter!').css('color', '#4CAF50');
                  $('#newsletter-email').val('');
               } else {
                  messageDiv.text(result.error || 'An error occurred. Please try again.').css('color', '#ff6b6b');
               }
            } catch (error) {
               messageDiv.text('Network error. Please check your connection and try again.').css('color', '#ff6b6b');
               console.error('Newsletter subscription error:', error);
            } finally {
               submitBtn.prop('disabled', false);
               
               // Clear message after 5 seconds
               setTimeout(() => {
                  messageDiv.text('');
               }, 5000);
            }
        });

        // Handle navigation links with hash
        $(document).on('click', 'a[href*="#"]', function(e) {
            const href = $(this).attr('href');
            
            // If link contains index.html# and we're not on index page
            if (href.includes('index.html#') && !window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
                // Let the browser handle the navigation to index.html with hash
                return true;
            }
            
            // If it's a same-page hash link
            if (href.startsWith('#')) {
                const target = $(href);
                if (target.length) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                }
            }
        });
    }
}

// Initialize the component loader
new ComponentLoader();


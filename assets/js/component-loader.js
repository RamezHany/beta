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
   <div class="tp-footer-2-area pt-100 pb-20 tp-footer-white">
      <div class="container container-1480">
         <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 mb-50">
               <div class="tp-footer-2-widget footer-col-2-1">
                  <div class="tp-footer-2-widget-logo tp-footer-dark">
                     <a class="logo-1" href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                     <a class="logo-2" href="index.html"><img src="assets/img/logo/logo-white.png" alt=""></a>
                  </div>
                  <div class="tp-footer-2-widget-text">
                     <p>Helal - Where Brands Come Alive <br> Digital Marketing & Branding Agency <br> Alexandria, Egypt</p>                         
                  </div>
               </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 mb-50">
               <div class="tp-footer-2-widget footer-col-2-4">
                  <div class="tp-footer-2-widget-newslatter">
                     <h4 class="tp-footer-2-widget-title">Subscribe to our newsletter</h4>
                     <form action="#">
                        <div class="tp-footer-2-input p-relative">
                           <input type="text" placeholder="Enter your email...">
                           <button>
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.7767 8.06743C15.9198 8.21703 16 8.41908 16 8.62965C16 8.84022 15.9198 9.04228 15.7767 9.19189L8.92138 16.2938C8.77516 16.4386 8.58094 16.5198 8.37867 16.5206C8.27759 16.5201 8.17746 16.5002 8.08351 16.4614C7.94489 16.4012 7.8266 16.2996 7.74358 16.1697C7.66056 16.0398 7.61651 15.8873 7.61698 15.7316V9.41876H0.761697C0.559684 9.41876 0.365942 9.33563 0.223096 9.18764C0.0802502 9.03964 0 8.83894 0 8.62965C0 8.42038 0.0802502 8.21966 0.223096 8.07168C0.365942 7.92369 0.559684 7.84056 0.761697 7.84056H7.61698V1.52777C7.61651 1.37198 7.66056 1.21953 7.74358 1.08964C7.8266 0.959746 7.94489 0.858218 8.08351 0.797851C8.2242 0.741 8.37756 0.726577 8.52585 0.756252C8.67412 0.785926 8.81125 0.858486 8.92138 0.965535L15.7767 8.06743Z" fill="currentcolor"/>
                              </svg>                                       
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="tp-copyright-2-area tp-copyright-2-bdr-top tp-copyright-white">
      <div class="container container-1480">
         <div class="row justify-content-center">
            <div class="col-xl-12">
               <div class="text-center">
                  <div class="tp-copyright-2-left mb-20">
                     <p>All rights reserved —2025© Helal Digital Marketing Agency</p>
                  </div>
                  <div class="tp-copyright-2-social">
                     <a class="me-3" href="https://linkedin.com/company/helal-content-markering" target="_blank" style="text-decoration: none;">
                        <svg style="width: 18px; height: 18px; fill: #0077b5;" viewBox="0 0 24 24">
                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                     </a>
                     <a class="me-3" href="https://tiktok.com/@helal.content1?_t=ZS-8yjQkzpNW0v&_r=1" target="_blank" style="text-decoration: none;">
                        <svg style="width: 18px; height: 18px; fill: #000000;" viewBox="0 0 24 24">
                           <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                     </a>
                     <a class="me-3" href="https://instagram.com/helal_content1?igsh=ZThpMDZlcjlqb24z&utm_source=qr" target="_blank" style="text-decoration: none;">
                        <svg style="width: 18px; height: 18px; fill: #e4405f;" viewBox="0 0 24 24">
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                     </a>
                     <a class="me-3" href="https://facebook.com/share/16ifRDRTyu/?mibextid=wwXIfr" target="_blank" style="text-decoration: none;">
                        <svg style="width: 18px; height: 18px; fill: #4267b2;" viewBox="0 0 24 24">
                           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
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

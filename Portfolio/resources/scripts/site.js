// Shared interactions for navigation, contact details and responsive offers.
document.addEventListener('DOMContentLoaded', function(){
    const menuButton = document.querySelector('[aria-controls="site-nav"]');
    const siteHeader = document.querySelector('body > header');
    const siteNav = document.querySelector('body > header nav');
    const contactDialog = document.getElementById('contact-dialog');
    const contactTrigger = document.querySelector('[data-dialog-target]');
    const narrowLanding = window.matchMedia('(max-width: 1100px)');
    const offers = document.querySelectorAll('.offer-list details');

    // ---------------- Current Year ---------------- //
    document.querySelectorAll('[data-current-year]').forEach(function(year){
        year.textContent = new Date().getFullYear();
    });

    // ---------------- Mobile Navigation ---------------- //
    if (menuButton && siteNav){
        const closeMenu = function(returnFocus){
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation');
            siteNav.classList.remove('is-open');
            document.body.classList.remove('menu-open');

            if (returnFocus){
                menuButton.focus();
            }
        };

        menuButton.addEventListener('click', function(){
            const willOpen = menuButton.getAttribute('aria-expanded') === 'false';

            menuButton.setAttribute('aria-expanded', String(willOpen));
            menuButton.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
            siteNav.classList.toggle('is-open', willOpen);
            document.body.classList.toggle('menu-open', willOpen);
        });

        siteNav.addEventListener('click', function(event){
            if (event.target.closest('a')){
                closeMenu(false);
            }
        });

        document.addEventListener('click', function(event){
            if (siteNav.classList.contains('is-open') && !siteHeader.contains(event.target)){
                closeMenu(false);
            }
        });

        document.addEventListener('keydown', function(event){
            if (event.key === 'Escape' && siteNav.classList.contains('is-open')){
                closeMenu(true);
            }
        });

        window.matchMedia('(min-width: 901px)').addEventListener('change', function(event){
            if (event.matches){
                closeMenu(false);
            }
        });
    }

    // ---------------- Landing Offers ---------------- //
    const setOfferState = function(event){
        offers.forEach(function(offer){
            offer.open = !event.matches;
        });
    };

    if (offers.length){
        setOfferState(narrowLanding);
        narrowLanding.addEventListener('change', setOfferState);

        offers.forEach(function(offer){
            offer.addEventListener('toggle', function(){
                if (!narrowLanding.matches || !offer.open){
                    return;
                }

                offers.forEach(function(otherOffer){
                    if (otherOffer !== offer){
                        otherOffer.open = false;
                    }
                });
            });
        });
    }

    // ---------------- Contact Dialog ---------------- //
    if (contactDialog && contactTrigger && typeof contactDialog.showModal === 'function'){
        const closeButton = contactDialog.querySelector('[data-dialog-close]');

        contactTrigger.addEventListener('click', function(event){
            event.preventDefault();
            contactDialog.showModal();
        });

        closeButton.addEventListener('click', function(){
            contactDialog.close();
        });

        contactDialog.addEventListener('click', function(event){
            if (event.target === contactDialog){
                contactDialog.close();
            }
        });

        contactDialog.addEventListener('close', function(){
            contactTrigger.focus();
        });
    }
});

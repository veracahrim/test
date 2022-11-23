/**--------Quelle ----------
 * https://github.com/onlysunshines/landingPage*/

/**
 * /**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Globale Variablen definieren liesst alle Sections aus
*/

const sectionElements = document.getElementsByTagName("section");

/*
 * Beginn der Hauptfunktion
*/

// Nav erstellen

function buildNav() {
    for (let sectionElement of sectionElements) {
        let navbarElement = document.createElement("li");
        navbarElement.className = "menu-link";
        navbarElement.innerHTML = `<a href="#${sectionElement.id}">${sectionElement.dataset.nav}</a>`;
        navbarElement.id = `${sectionElement.id}`;
        
// click Funktion auf den Erstellten Links mit smooth Scroll
        
        navbarElement.addEventListener("click", function(event) {
            event.preventDefault();
            sectionElement.scrollIntoView({behavior: "smooth"});
        });
        
        document.getElementById("sidemenu").append(navbarElement);
    }
};

// Fügt Klasse 'active' der section hinzu wenn man mit scrollen die Section wechselt

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function isActive() {
    for (let sectionElement of sectionElements) {
        if (isInViewport(sectionElement)) {
            sectionElement.className = "active-section";

            // Hebt die aktuell sichtbare Section hervor

            let elementLis = document.getElementsByTagName("li")
            for (let elementLi of elementLis) {
                if(sectionElement.id === elementLi.id) {
                    elementLi.className = "menu-link-active";
                } else {
                    elementLi.className = "menu-link";
                }
            }
            
        } else {
            sectionElement.className = "";
        }
    }
};

/** Scrollt zur Anker ID mit dem event scrollTO, welches innerhalb von 
 * isActive vorkommt und mit sectionElement.id zu elementLi.id übereinstimmt.

/**
 * Ende der Hauptfunktion
 * Anfang Events
*/

// Erstellt Menu

window.onload = buildNav;

// Scrollt zur Section mit Link click

// dies geschiht in der buidNav Funktion
/*

navbarElement.addEventListener("click", function(e) {
            e.preventDefault();
            sectionElement.scrollIntoView({behavior: "smooth"})
        })

*/

// Setzt Section als aktiv.

window.onscroll = isActive;

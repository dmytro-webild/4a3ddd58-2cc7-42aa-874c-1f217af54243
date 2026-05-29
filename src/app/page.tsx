"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { Layers } from "lucide-react";
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function WebAgencyThemePage() {
    const navItems = [
        { name: "Start", id: "hero" },
        { name: "Leistungen", id: "services" },
        { name: "Über mich", id: "about" },
        { name: "Kontakt", id: "contact" }
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="pill"
            contentWidth="medium"
            sizing="medium"
            background="aurora"
            cardStyle="solid"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="glass"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Growthlab.origin"
                    button={{ text: "Termin buchen", href: "#contact" }}
                />
                <div id="hero" data-section="hero">
                    <HeroSplitKpi
                        background={{ variant: "radial-gradient" }}
                        title="Smarte Termine. Starke Webseiten."
                        description="Wir automatisieren deine Buchungen mit KI und bauen Webseiten, die wirklich verkaufen."
                        enableKpiAnimation={false}
                        kpis={[
                            { value: "90%", label: "Effizienzsteigerung" },
                            { value: "24/7", label: "Verfügbarkeit" },
                            { value: "30%", label: "Kostenersparnis" }
                        ]}
                        buttons={[
                            {
                                text: "Kostenloses Erstgespräch",                                href: "#contact"
                            }
                        ]}
                        avatars={[]}
                        avatarText=""
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero1.webp"
                        imageAlt="KI-gestützte Effizienz im Unternehmen"
                        mediaAnimation="slide-up"
                        showMarqueeCard={false}
                        marqueeItems={[]}
                        marqueeClassName="md:mb-5"
                        containerClassName="gap-x-12"
                    />
                </div>
                <div id="services" data-section="services">
                    <FeatureCardTwentyFour
                        title="Unsere Leistungen"
                        description="Innovative Lösungen für Ihr Wachstum."
                        tag="Leistungen"
                        tagIcon={Layers}
                        features={[
                            {
                                id: "ki-booking-assistant",                                title: "KI-Telefonassistent",                                author: "",                                description: "Erreichbar rund um die Uhr – kein verpasster Anruf, kein entgangener Auftrag.\nBucht Termine automatisch direkt in den Kalender.\nBeantwortet wiederkehrende Kundenfragen sofort.\nReduziert No-Shows durch automatische Erinnerungen.\nKlingt natürlich und entlastet dein Team spürbar.",                                tags: ["KI", "Automatisierung"],
                                imageSrc: "https://img.b2bpic.net/premium-photo/happy-woman-phone-call-laptop-agency-business-it-support-problem-solving-computer-accountant-contact-mobile-office-update-negotiation-financial-planning-growth_590464-510125.jpg?id=419558795",                                imageAlt: "KI-Buchungsassistent"
                            },
                            {
                                id: "website-creation",                                title: "Webseiten-Erstellung",                                author: "",                                description: "Moderne, schnelle Webseiten, die auf jedem Gerät überzeugen.\nKlar auf Anfragen und Buchungen ausgerichtet (mehr Kunden).\nSuchmaschinenfreundlich für bessere Sichtbarkeit.\nSchlüsselfertig – ohne Technik-Stress für dich.\nIndividuelles Design statt Baukasten-Optik.",                                tags: ["Webdesign", "Performance"],
                                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process3.webp",                                imageAlt: "Webseiten-Erstellung"
                            }
                        ]}
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>
                <div id="about" data-section="about">
                    <MediaAbout
                        title="Über mich"
                        description="Hi, ich bin Corbin – 24 Jahre alt, aus Magdeburg, und Gründer von Growthlab.origin. Neben meinem berufsbegleitenden Studium der Wirtschaftspsychologie beschäftige ich mich jeden Tag mit einer Frage: Wie können Unternehmen mithilfe von KI effizienter arbeiten und profitabler wachsen?
Genau dafür gibt es Growthlab.origin. Ich helfe regionalen Unternehmen, sich zu digitalisieren – mit smarten KI-Lösungen, die Routineaufgaben übernehmen, und mit Webseiten, die neue Kunden gewinnen. Mein Anspruch: Technologie soll nicht kompliziert sein, sondern dir Zeit und Geld sparen, damit du dich auf das Wesentliche konzentrieren kannst."
                        tag="Gründer von Growthlab.origin"
                        imageSrc="https://img.b2bpic.net/free-photo/portrait-beautiful-sweet-cute-smiling-brunette-woman-girl-casual-gray-sweater-model-posing-studio-sitting-chair_158538-13016.jpg?id=7201422"
                        imageAlt="Max Mustermann, Gründer von Growthlab.origin"
                        useInvertedBackground={false}
                    />
                </div>
                <div id="contact" data-section="contact">
                    <ContactCTA
                        tag="Kontakt"
                        title="Bereit für mehr Effizienz?"
                        description="Buchen Sie jetzt Ihr kostenloses Erstgespräch und entdecken Sie, wie KI und professionelle Webseiten Ihr Geschäft transformieren können."
                        buttons={[
                            { text: "Termin anfragen", href: "#contact" }
                        ]}
                        background={{ variant: "radial-gradient" }}
                        useInvertedBackground={false}
                    />
                </div>
                <FooterBaseReveal
                    logoText="Growthlab.origin"
                    copyrightText="© 2024 Growthlab.origin. Alle Rechte vorbehalten."
                    columns={[
                        { title: "Navigation", items: [{ label: "Start", href: "#hero" }, { label: "Leistungen", href: "#services" }, { label: "Über mich", href: "#about" }, { label: "Kontakt", href: "#contact" }] }
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
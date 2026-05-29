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
                    button={{ text: "Kostenloses Erstgespräch", href: "#contact" }}
                />
                <div id="hero" data-section="hero">
                    <HeroSplitKpi
                        background={{ variant: "radial-gradient" }}
                        title="Mehr Zeit fürs Wesentliche — angetrieben von KI & smarten Webseiten"
                        description="Wir automatisieren deine Terminbuchung und bauen Webseiten, die Kunden gewinnen."
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
                                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process1.webp",                                imageAlt: "KI-Buchungsassistent"
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
                        description="Als Gründer von Growthlab.origin liegt meine Leidenschaft darin, Unternehmen durch den cleveren Einsatz von KI und maßgeschneiderten Webseiten zu nachhaltigem Wachstum zu verhelfen. Ich glaube fest daran, dass Technologie uns mehr Freiheit für das Wesentliche schenken sollte, indem sie repetitive Aufgaben automatisiert und neue Möglichkeiten schafft."
                        tag="Gründer von Growthlab.origin"
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/avatar.png"
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
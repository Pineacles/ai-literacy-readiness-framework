/**
 * Questions Database and Result Texts
 * Contains all assessment questions and result descriptions
 */

export const QUESTIONS_DB = {
    dimension1: {
        id: "dimension1",
        title: "Dimension 1 Technisches Verständnis & Datenkompetenz",
        desc: "Grundlagen, Funktionsweise, Halluzinationen und Datenfluss.",
        items: [
            {
                id: "d1_q1",
                type: "likert",
                text: "Ich verstehe, dass generative KI Antworten auf Basis von Wahrscheinlichkeiten berechnet und kein faktisches Wissen besitzt."
            },
            {
                id: "d1_q2",
                type: "likert",
                text: "Ich rechne grundsätzlich damit, dass KI-Antworten plausibel wirken, aber inhaltlich erfunden sein können."
            },
            {
                id: "d1_q3",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Modelle nur innerhalb ihres Trainingswissens funktionieren und keine echte Logik besitzen."
            },
            {
                id: "d1_q4",
                type: "likert",
                text: "Ich weiss, dass KI-Modelle (ohne Live-Web-Zugriff) keine aktuellen Ereignisse nach ihrem Trainings-Stichtag kennen."
            },
            {
                id: "d1_q5",
                type: "likert",
                text: "Ich kann unterscheiden, welche Daten öffentlich, intern oder streng vertraulich sind."
            },
            {
                id: "d1_q6",
                type: "likert",
                text: "Ich verstehe, dass Eingaben in öffentliche KI-Tools externe Datenverarbeitung auslösen (Daten verlassen das Unternehmen)."
            },
            {
                id: "d1_q7",
                type: "likert",
                text: "Mir ist bewusst, dass meine Eingaben vom Anbieter gespeichert und zum Training des Modells genutzt werden könnten."
            },
            {
                id: "d1_gk1",
                type: "scenario",
                text: "Szenario: Sie laden ein internes PDF mit der noch unveröffentlichten Jahresbilanz in ein öffentliches KI-Tool, um eine Zusammenfassung zu erhalten.",
                options: [
                    {
                        id: "a",
                        text: "Risiko gering, da die KI Zahlen nur verarbeitet.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Vertrauliche Informationen werden an externe Systeme übertragen (Datenschutzrisiko).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Die KI könnte sich verrechnen.",
                        value: 0
                    }
                ]
            },
            {
                id: "d1_gk2",
                type: "scenario",
                text: "Szenario: Sie bitten die KI um '5 wissenschaftliche Quellen zum Thema KI-Ethik'. Die KI liefert eine Liste mit perfekten Titeln und Autoren.",
                options: [
                    {
                        id: "a",
                        text: "Ich übernehme die Quellen direkt in meine Literaturliste, da die KI Zugriff auf Datenbanken hat.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich prüfe jede Quelle (DOI/Link), da KI oft existierende Autoren mit erfundenen Titeln kombiniert.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich nutze nur die Zusammenfassungen, nicht die Titel.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension2: {
        id: "dimension2",
        title: "Dimension 2 Praktische Anwendung & Toolnutzung",
        desc: "Prompting-Strategien, Iteration und Human-in-the-Loop.",
        items: [
            {
                id: "d2_q1",
                type: "likert",
                text: "Ich formuliere Anweisungen meist ausführlich mit Kontext, Ziel und Format (statt nur Stichworte)."
            },
            {
                id: "d2_q2",
                type: "likert",
                text: "Wenn ein Ergebnis nicht passt, verbessere ich meine Anweisung (Refinement), statt neu zu generieren."
            },
            {
                id: "d2_q3",
                type: "likert",
                text: "Ich nutze KI für Entwürfe/Ideen, vermeide sie aber bei Aufgaben, die Faktenpräzision erfordern."
            },
            {
                id: "d2_q4",
                type: "likert",
                text: "Ich nutze KI effizient, um Inhalte umzuwandeln (z. B. 'Mach aus Notizen eine Tabelle')."
            },
            {
                id: "d2_q5",
                type: "likert",
                text: "Ich betrachte KI-Outputs als Rohmaterial und überprüfe sie inhaltlich fast immer."
            },
            {
                id: "d2_q6",
                type: "likert",
                text: "Ich habe KI gezielt in meine Abläufe integriert, sodass sie reproduzierbar Mehrwert liefert."
            },
            {
                id: "d2_gk1",
                type: "scenario",
                text: "Szenario: Sie benötigen Ideen für einen Marketing-Slogan. Das erste Ergebnis der KI ist zu generisch.",
                options: [
                    {
                        id: "a",
                        text: "Ich generiere die Antwort erneut (Regenerate) und hoffe auf Zufall.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich präzisiere meine Anweisung (z. B. Tonfall, Beispiele), um das Ergebnis gezielt zu steuern.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich schreibe es selbst, KI kann das nicht.",
                        value: 0
                    }
                ]
            },
            {
                id: "d2_gk2",
                type: "scenario",
                text: "Szenario: Eine KI entwirft eine sehr höfliche E-Mail an einen verärgerten Kunden.",
                options: [
                    {
                        id: "a",
                        text: "Ich prüfe kurz Rechtschreibung und sende ab.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich prüfe inhaltliche Zusagen und Tonfall gegen interne Regeln, bevor ich sende.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich nutze den Text nicht, da KI keine Empathie hat.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension3: {
        id: "dimension3",
        title: "Dimension 3: Kritische Bewertung von KI-Outputs",
        desc: "Validierung, Bias-Erkennung und Verantwortungsbewusstsein.",
        items: [
            {
                id: "d3_q1",
                type: "likert",
                text: "Ich hinterfrage KI-Ergebnisse grundsätzlich, auch wenn sie eloquent wirken."
            },
            {
                id: "d3_q2",
                type: "likert",
                text: "Bei Fakten verifiziere ich immer über eine externe Primärquelle (kein Blindflug)."
            },
            {
                id: "d3_q3",
                type: "likert",
                text: "Ich überprüfe Outputs aktiv auf versteckte Vorurteile (Bias) und Stereotypen."
            },
            {
                id: "d3_q4",
                type: "likert",
                text: "Ich erkenne, wenn KI logische Fehler macht, auch wenn der Text gut klingt."
            },
            {
                id: "d3_q5",
                type: "likert",
                text: "Ich prüfe Inhalte gezielt auf veraltete Informationen (Knowledge Cutoff)."
            },
            {
                id: "d3_q6",
                type: "likert",
                text: "Mir ist bewusst, dass ich fachlich verantwortlich bleibe, wenn ich KI-Outputs ungeprüft übernehme."
            },
            {
                id: "d3_gk1",
                type: "scenario",
                text: "Szenario: Sie sind bei einem Detail einer KI-Antwort unsicher. Wie validieren Sie?",
                options: [
                    {
                        id: "a",
                        text: "Ich frage die KI selbst nach Bestätigung ('Bist du sicher?').",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich überprüfe den Fakt über eine externe Quelle (Triangulation).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Wenn es professionell klingt, vertraue ich darauf.",
                        value: 0
                    }
                ]
            },
            {
                id: "d3_gk2",
                type: "scenario",
                text: "Szenario: KI schlägt 'Dominanz & keine familiären Einschränkungen' als Führungskriterien vor.",
                options: [
                    {
                        id: "a",
                        text: "Übernehmen, da KI objektive Erfolgsdaten nutzt.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Kritisch prüfen: Das spiegelt historischen Bias wider.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "KI im HR grundsätzlich nicht nutzen.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension4: {
        id: "dimension4",
        title: "Dimension 4: Ethik, Rechte & Datenschutz",
        desc: "Datenschutz, Urheberrecht und Fairness.",
        items: [
            {
                id: "d4_q1",
                type: "likert",
                text: "Ich weiss, dass ich Namen oder Kundendaten niemals ungeschützt in öffentliche KI-Tools eingeben darf."
            },
            {
                id: "d4_q2",
                type: "likert",
                text: "Ich kennzeichne KI-Inhalte transparent, wenn sie extern veröffentlicht werden."
            },
            {
                id: "d4_q3",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Inhalte rechtliche Risiken (Copyright) bergen können."
            },
            {
                id: "d4_q4",
                type: "likert",
                text: "Ich nutze beruflich nur von IT/Compliance freigegebene KI-Tools."
            },
            {
                id: "d4_q5",
                type: "likert",
                text: "Ich reagiere aktiv, wenn KI-Outputs diskriminierend oder unfair erscheinen."
            },
            {
                id: "d4_q6",
                type: "likert",
                text: "Ich automatisiere keine Entscheidungen über Menschen ohne menschliche Prüfung."
            },
            {
                id: "d4_gk1",
                type: "scenario",
                text: "Szenario: Meeting-Protokoll mit Kundennamen in öffentliche KI eingeben?",
                options: [
                    {
                        id: "a",
                        text: "Ich weise die KI an, die Daten vertraulich zu behandeln.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich anonymisiere die Daten vorher oder nutze Enterprise-Tools.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich lösche den Chat danach sofort wieder.",
                        value: 0
                    }
                ]
            },
            {
                id: "d4_gk2",
                type: "scenario",
                text: "Szenario: Marketing-Bild im Stil eines lebenden Künstlers generieren?",
                options: [
                    {
                        id: "a",
                        text: "Nutzen, da KI-Bilder rechtefrei sind.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Rechtlich prüfen oder Stil ändern (Risiko vermeiden).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Namen weglassen, aber Stil kopieren.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension5: {
        id: "dimension5",
        title: "Dimension 5: Gesellschaftliche Wirkung & Nachhaltigkeit",
        desc: "Nachhaltigkeit, Desinformation und Arbeitswelt.",
        items: [
            {
                id: "d5_q1",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Anfragen deutlich höheren Ressourcenaufwand verursachen als klassische Tools."
            },
            {
                id: "d5_q2",
                type: "likert",
                text: "Ich wäge ab, ob einfachere Werkzeuge effizienter sind als KI (Verhältnismässigkeit)."
            },
            {
                id: "d5_q3",
                type: "likert",
                text: "Ich bin mir der Gefahr von Deepfakes bewusst und teile Inhalte nicht ungeprüft."
            },
            {
                id: "d5_q4",
                type: "likert",
                text: "Ich reflektiere aktiv, wie KI meine berufliche Rolle verändert."
            },
            {
                id: "d5_q5",
                type: "likert",
                text: "Ich weiss, dass KI-Modelle westlich geprägt sind und andere Kulturen verzerren können."
            },
            {
                id: "d5_q6",
                type: "likert",
                text: "Ich betrachte KI als Werkzeug und schreibe ihr keine menschlichen Gefühle zu."
            },
            {
                id: "d5_gk1",
                type: "scenario",
                text: "Szenario: Sie wollen 15% von 4500 Franken berechnen. Tool-Wahl?",
                options: [
                    {
                        id: "a",
                        text: "KI-Chatbot (weil bequem).",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Taschenrechner oder Excel.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Google-Suche.",
                        value: 0
                    }
                ]
            },
            {
                id: "d5_gk2",
                type: "scenario",
                text: "Szenario: Virales, skandalöses Foto eines Konkurrenten im Netz.",
                options: [
                    {
                        id: "a",
                        text: "Sofort teilen/warnen.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Quellen und Bild auf KI-Spuren prüfen.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ignorieren (generelles Misstrauen).",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension6: {
        id: "dimension6",
        title: "Dimension 6: Risiko, menschliche Aufsicht & Governance",
        desc: "Risikoklassifizierung, Human Oversight und Compliance.",
        items: [
            {
                id: "d6_q1",
                type: "likert",
                text: "Ich akzeptiere, dass ich bei KI-Entscheidungen immer das letzte Wort habe (Human Oversight)."
            },
            {
                id: "d6_q2",
                type: "likert",
                text: "Ich kann unterscheiden, welche KI-Anwendungen unkritisch und welche hochriskant sind."
            },
            {
                id: "d6_q3",
                type: "likert",
                text: "Ich weiss, an wen ich systematische KI-Fehler melden muss."
            },
            {
                id: "d6_q4",
                type: "likert",
                text: "Ich halte mich an interne Richtlinien oder Best Practices, auch wenn es aufwendiger ist."
            },
            {
                id: "d6_q5",
                type: "likert",
                text: "Ich dokumentiere kritische KI-Entscheidungen nachvollziehbar."
            },
            {
                id: "d6_q6",
                type: "likert",
                text: "Ich entschuldige Fehler niemals mit 'Die KI war schuld'."
            },
            {
                id: "d6_gk1",
                type: "scenario",
                text: "Szenario: KI im Recruiting (Vorauswahl & Absagen). Vorgehen?",
                options: [
                    {
                        id: "a",
                        text: "KI entscheidet autonom (Effizienz).",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "KI bereitet vor, ich entscheide und prüfe selbst.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "KI grundsätzlich nicht nutzen (nur manuell).",
                        value: 0
                    }
                ]
            },
            {
                id: "d6_gk2",
                type: "scenario",
                text: "Szenario: Chatbot verspricht systematisch falsche Rabatte.",
                options: [
                    {
                        id: "a",
                        text: "Fehler vertuschen/löschen.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Sofort melden und Nutzung stoppen.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ignorieren (nicht zuständig).",
                        value: 0
                    }
                ]
            }
        ]
    }
};

export const RESULT_TEXTS = {
    "0": {
        title: "Der Entdecker (Novice) Level 0",
        description: "Sie stehen am Anfang. Fokus liegt auf Wissensaufbau.",
        action: "Empfehlung: Starten Sie mit dem Basiskurs 'Introduction to AI'."
    },
    "1": {
        title: "Der Beobachter (Awareness) Level 1",
        description: "Sie kennen die Theorie, wenden sie aber noch unsicher an.",
        action: "Empfehlung: Nutzen Sie KI für unkritische Aufgaben, um Praxis zu sammeln."
    },
    "1_downgrade": {
        title: "Risiko-Warnung (Awareness) Level 1",
        description: "Ihre Selbsteinschätzung war hoch, aber Sie haben in kritischen Sicherheits-Szenarien falsch entschieden. Der Score wurde korrigiert.",
        action: "Dringend: Bitte wiederholen Sie die Einheit zu Datenschutz & Compliance."
    },
    "2": {
        title: "Der Anwender (Practitioner) Level 2",
        description: "Sie nutzen KI sicher und effizient im Alltag.",
        action: "Empfehlung: Vertiefen Sie Ihr Wissen im 'Advanced Prompting'."
    },
    "3": {
        title: "Der Gestalter (Expert) Level 3",
        description: "Sie beherrschen Technik, Ethik und Governance auf Top-Niveau.",
        action: "Empfehlung: Werden Sie AI-Mentor für Ihr Team."
    }
};

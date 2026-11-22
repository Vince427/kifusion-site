const I18N = {
  fr: {
    navHome: "Accueil",
    navModes: "4 Modes",
    navPrivacy: "Confidentialité",
    navPlayStore: "Google Play",
    heroKicker: "⚡ 100 % Local sur ton téléphone · Zéro serveur",
    heroTitle: "Ki-Fusion",
    heroCopy: "Prends deux photos, réussis le rituel « FUUU... SION... HA ! » et libère un guerrier complètement absurde avec sa carte collector et ses attaques spéciales.",
    ctaDownload: "Bientôt sur Google Play",
    ctaPrivacy: "Politique de confidentialité",
    modesTitle: "4 modes de fusion hilarants",
    modesSub: "Pas de simple fondu flou : alignement facial local, greffe de traits, déformations comiques et filtre Style Manga par IA embarquée.",
    fighterA: "Combattant A",
    fighterB: "Combattant B",
    mode1Badge: "Danse réussie",
    mode1Title: "Chimère Sacrée",
    mode1Desc: "Conserve la tête d'un ami et greffe les yeux et le sourire de l'autre avec ajustement de teinte + cheveux dorés.",
    mode2Badge: "Boucles Mystiques",
    mode2Title: "Split Énergétique",
    mode2Desc: "Fusion moitié-moitié gauche/droite séparée par un éclair de Ki lumineux.",
    mode3Badge: "Danse ratée",
    mode3Title: "Ratée : Bouboule",
    mode3Desc: "Joues gonflées, double menton, regard louche et goutte de sueur quand le timing dérape.",
    mode4Badge: "Danse ratée",
    mode4Title: "Ratée : Squelette",
    mode4Desc: "Joues creusées et yeux écarquillés façon caricature manga catastrophique.",
    featuresTitle: "Conçu pour rigoler en soirée",
    feat1Title: "🔒 Photos 100 % privées",
    feat1Desc: "Aucun envoi vers un serveur externe. La détection du visage (ML Kit), le détourage d'aura et le filtre Manga TFLite tournent directement sur ton téléphone.",
    feat2Title: "🎴 Carte Collector 9:16",
    feat2Desc: "Prénom fusionné automatiquement, puissance Scouter (« PLUS DE 9 000 ! »), attaque spéciale absurde et faiblesse critique prêts à partager en story.",
    feat3Title: "🏆 Panthéon & Arène de Clash",
    feat3Desc: "Sauvegarde tes meilleures créations localement et fais-les s'affronter dans un combat narratif absurde en 3 manches.",
    footerCopy: "Ki-Fusion (com.kifusion.fusion_app) — Traitement photo 100 % local."
  },
  en: {
    navHome: "Home",
    navModes: "4 Modes",
    navPrivacy: "Privacy",
    navPlayStore: "Google Play",
    heroKicker: "⚡ 100% On-Device · Zero Cloud Servers",
    heroTitle: "Ki-Fusion",
    heroCopy: "Pick two photos, nail the \"FUUU... SION... HA!\" timing ritual, and unleash an absurd shonen warrior with custom Scouter stats and a 9:16 collector card.",
    ctaDownload: "Coming to Google Play",
    ctaPrivacy: "Privacy Policy",
    modesTitle: "4 hilarious fusion modes",
    modesSub: "No blurry ghost overlays: on-device facial alignment, feature grafting, comical warps, and embedded AI Manga styling.",
    fighterA: "Fighter A",
    fighterB: "Fighter B",
    mode1Badge: "Dance Success",
    mode1Title: "Sacred Chimera",
    mode1Desc: "Keeps one friend's head and grafts the other's eyes and grin with skin-tone matching and golden spiky hair.",
    mode2Badge: "Mystic Earrings",
    mode2Title: "Energy Split",
    mode2Desc: "Left/right face split separated by a crackling golden Ki lightning bolt.",
    mode3Badge: "Failed Dance",
    mode3Title: "Failed: Chubby",
    mode3Desc: "Puffed-out cheeks, double chin, goofy eyes, and anime sweat drop when your finger slips.",
    mode4Badge: "Failed Dance",
    mode4Title: "Failed: Noodle",
    mode4Desc: "Pinched hollow cheeks and wide shocked cartoon eyes.",
    featuresTitle: "Built for party laughs",
    feat1Title: "🔒 100% Private Photos",
    feat1Desc: "Zero server uploads. Face Mesh detection (ML Kit), aura segmentation, and the TFLite Manga filter all run locally on your device.",
    feat2Title: "🎴 9:16 Collector Card",
    feat2Desc: "Automatic syllable name blending, Scouter power counter (\"OVER 9,000!\"), ridiculous special moves, and fatal weaknesses ready to share.",
    feat3Title: "🏆 Hall of Fusions & Clash",
    feat3Desc: "Save your funniest creations locally and pit any two fusions against each other in a 3-round comedic clash.",
    footerCopy: "Ki-Fusion (com.kifusion.fusion_app) — 100% Local Photo Processing."
  }
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  document.querySelectorAll("[data-lang-block]").forEach((block) => {
    block.hidden = block.getAttribute("data-lang-block") !== lang;
  });
  try {
    localStorage.setItem("kifusion_lang", lang);
  } catch (_) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let initial = "fr";
  try {
    const saved = localStorage.getItem("kifusion_lang");
    if (saved === "fr" || saved === "en") {
      initial = saved;
    } else if (navigator.language && !navigator.language.toLowerCase().startsWith("fr")) {
      initial = "en";
    }
  } catch (_) {}
  applyLanguage(initial);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });
});

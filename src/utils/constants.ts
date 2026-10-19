export const PAGES = [
	"home",
];
export const HOME_SECTIONS = [
	"about",
	// "projects",
	"updates",
	"press",
	"team",
	"contact",
	"support"
];
export const HOME_SECTIONS_NAV = [
	"about",
	// "projects",
	"updates",
	"press",
	"team",
	"contact",
];
export const SOCIALS = [
	"linkedin",
	"instagram",
	"github",
	"email"
];
export const GITHUB = "https://github.com/showyourworklab";
export const EMAIL = "info@showyourworklab.org";

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}
export const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
	timeStyle: 'short',
}

export const LOCALES = ["en", "no"];
export const DEFAULT_LOCALE = "en";

export const DICTIONARY_EN = {
	// Site
	site_title: "Show Your Work Lab",
	site_tagline: "We prove what's real rather than identify what's fake",
	site_description: "Show Your Work Lab provides news organizations with the tools and strategies to make visual journalism verifiable, transparent, and trustworthy.",
	// Socials
	social_linkedin_title: "LinkedIn",
	social_linkedin_url: "https://www.linkedin.com/company/show-your-work-lab",
	social_instagram_title: "Instagram",
	social_instagram_url: "https://www.instagram.com/showyourworklab",
	social_github_title: "GitHub",
	social_github_url: "https://github.com/showyourworklab",
	social_email_title: "info@showyourworklab.org",
	social_email_url: "mailto:info@showyourworklab.org",
	// Home
	home_about_title: "About",
	home_project_title: "Projects",
	home_updates_title: "Updates",
	home_press_title: "Press",
	home_team_title: "Team",
	home_contact_title: "Contact",
	home_support_title: "Support",
	// Updates
	home_updates_prompt: "Read more",
	// Verify
	// Verify > Upload
	verify_upload_allow_png: "PNG",
	verify_upload_allow_jpeg: "JPEG",
	verify_upload_label: "Upload your image",
	verify_upload_trigger: "Select file",
	verify_upload_dropzone_title: "Drop your image here",
	verify_upload_dropzone_description: "Only PNG and JPEG files",
	verify_upload_examples_title: "Use an example image",
	// Verify > Info
	verify_info_manifests: "View C2PA manifest summaries",
	verify_info_tree: "View C2PA provenance as JSON",
	// Verify > Info > Status
	verify_info_status_trusted: 'Trusted',
	verify_info_status_valid: 'Valid',
	verify_info_status_invalid: 'Invalid',
	verify_info_status_unknown: 'Unknown',
	verify_info_status_validating: 'Validating...',
	verify_info_status_trusted_definition: 'All C2PA data below is valid and trusted',
	verify_info_status_valid_definition: 'All C2PA data below is valid',
	verify_info_status_invalid_definition: 'We found some invalid C2PA data',
	verify_info_status_unknown_definition: 'We cannot find any C2PA provenance data to validate',
	// Verify > Info > Type
	verify_info_type_camera: 'Captured by Camera',
	verify_info_type_ai: 'AI Generated',
	verify_info_type_edit: 'Edits Made',
	verify_info_type_camera_definition: 'This image was captured by a camera',
	verify_info_type_ai_definition: 'This image was generated using AI',
	verify_info_type_edit_definition: 'This image was edited after it was created',
	// Verify > Info > Field
	verify_info_field_producer: 'Produced by',
	verify_info_field_timestamp: 'Timestamp',
	verify_info_field_signator: 'Signed by',
	verify_info_field_generator: 'Produced with',
	verify_info_field_location: 'Location',
	verify_info_field_actions: 'Actions',
	verify_info_field_ingredients: 'Ingredients',
	// Locale
	locale_en: "English",
	locale_no: "Norsk",
	locale_switch: "Switch language",
};

export const DICTIONARY_NO = {
	// Site
	site_title: "Show Your Work Lab",
	site_tagline: "Vi beviser hva som er ekte i stedet for å identifisere hva som er falskt",
	site_description: "Show Your Work Lab gir nyhetsorganisasjoner verktøyene og strategiene for å gjøre visuell journalistikk etterprøvbar, transparent og troverdig.",
	// Socials
	social_linkedin_title: "LinkedIn",
	social_linkedin_url: "https://www.linkedin.com/company/show-your-work-lab",
	social_instagram_title: "Instagram",
	social_instagram_url: "https://www.instagram.com/showyourworklab",
	social_github_title: "GitHub",
	social_github_url: "https://github.com/showyourworklab",
	social_email_title: "info@showyourworklab.org",
	social_email_url: "mailto:info@showyourworklab.org",
	// Home
	home_about_title: "Om oss",
	home_updates_title: "Oppdateringer",
	home_press_title: "Presse",
	home_team_title: "Team",
	home_contact_title: "Kontakt",
	home_support_title: "Støttet av",
	// Updates
	home_updates_prompt: "Les mer",
	// Verify
	// Verify > Upload
	verify_upload_allow_png: "PNG",
	verify_upload_allow_jpeg: "JPEG",
	verify_upload_label: "Upload your image",
	verify_upload_trigger: "Select file",
	verify_upload_dropzone_title: "Drop your image here",
	verify_upload_dropzone_description: "Only PNG and JPEG files",
	verify_upload_examples_title: "Use an example image",
	// Verify > Info
	verify_info_manifests: "View C2PA manifest summaries",
	verify_info_tree: "View C2PA provenance as JSON",
	// Verify > Info > Status
	verify_info_status_trusted: 'Pålitelig',
	verify_info_status_valid: 'Gyldig',
	verify_info_status_invalid: 'Ugyldig',
	verify_info_status_unknown: 'Ukjent',
	verify_info_status_validating: 'Validerer...',
	verify_info_status_trusted_definition: 'Alle C2PA-dataene nedenfor er gyldige og pålitelige',
	verify_info_status_valid_definition: 'Alle C2PA-dataene nedenfor er gyldige',
	verify_info_status_invalid_definition: 'Vi fant noen ugyldige C2PA-data',
	verify_info_status_unknown_definition: 'Vi finner ingen C2PA-opprinnelsesdata for å validere',
	// Verify > Info > Type
	verify_info_type_camera: 'Tatt med kamera',
	verify_info_type_ai: 'AI-generert',
	verify_info_type_edit: 'Redigeringer gjort',
	verify_info_type_camera_definition: 'Dette bildet ble tatt av et kamera',
	verify_info_type_ai_definition: 'Dette bildet ble generert ved hjelp av AI',
	verify_info_type_edit_definition: 'Dette mediet ble redigert etter at det ble opprettet',
	// Verify > Info > Field
	verify_info_field_producer: 'Produsert av',
	verify_info_field_timestamp: 'Tidsstempel',
	verify_info_field_signator: 'Signert av',
	verify_info_field_generator: 'Produsert med',
	verify_info_field_location: 'Sted',
	verify_info_field_actions: 'Handlinger',
	verify_info_field_ingredients: 'Ingredienser',
	// Locale
	locale_en: "English",
	locale_no: "Norsk",
	locale_switch: "Bytt språk",
};

export const DICTIONARIES = {
	en: DICTIONARY_EN,
	no: DICTIONARY_NO
};
// How wide each kind of image displays, so the browser downloads the right file size.
// Pick one with <Figure size="..." />; add a preset here when a new layout needs one.
export const IMAGE_SIZES = {
	// Spans the whole viewport
	full: "100vw",
	// Hero background: cover-cropped and wider than the viewport on tablets; phones get a lighter file
	hero: "(max-width: 640px) 520px, (max-width: 840px) 840px, 100vw",
	// Half of a two-column layout on large screens, full width below (About)
	half: "(min-width: 1024px) 50vw, 100vw",
	// Two-column grid from tablet up (Team)
	grid: "(min-width: 768px) 50vw, 100vw",
	// Fixed-width card in a carousel (Updates, Press)
	card: "(min-width: 640px) 384px, 100vw",
} as const;

export type ImageSize = keyof typeof IMAGE_SIZES;

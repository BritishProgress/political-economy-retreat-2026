// ============================================================
// EVENT CONFIGURATION
// Edit this file to update the event — do not edit index.html
// ============================================================

var EVENT_CONFIG = {

  // Event title — used in the page tab, meta description, and hero heading
  EVENT_TITLE: 'Political Economy Retreat 2026',
  EVENT_LOCATION: 'Ditchley Park, Oxfordshire',

  // Form to display: 'tally' or 'airtable'
  // Note: the custom success message only works with Tally.
  // Airtable does not send a submission event on the free plan.
  ACTIVE_FORM: 'airtable',

  FORM_URLS: {
    tally:    'https://tally.so/r/9qdrRE',
    airtable: 'https://airtable.com/embed/appINLR4clVxEpwol/pagcrp0wVgfqEVnG6/form'
  },

  // Event scenes — each has its own image and colour scheme
  // The hero cycles through all three automatically
  EVENT_SCENES: [
    {
      image:    './images/networking-outside.png',
      imageAlt: 'Networking outside',
      bgColor:  '#0A4938',
      accent:   '#3a8d5d'
    },
    {
      image:    './images/presentation.png',
      imageAlt: 'Conference presentation',
      bgColor:  '#083D77',
      accent:   '#298EF9'
    },
    {
      image:    './images/ditchley-park.png',
      imageAlt: 'Ditchley Park',
      bgColor:  '#a62241',
      accent:   '#D4354B'
    }
  ],

  // Hero heading font size — adjust each independently
  HEADING_FONT_SIZE_DESKTOP: '42px',  // screens wider than 1024px
  HEADING_FONT_SIZE_TABLET:  '25px',  // screens 769px – 1024px
  HEADING_FONT_SIZE_MOBILE:  '22px'   // screens 768px and below

};

import Plausible from 'plausible-tracker';

export function registerPlausible() {
  const plausible = Plausible({
    domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
    apiHost: import.meta.env.VITE_PLAUSIBLE_HOST,
    trackLocalhost: false,
    hashMode: false,
  });

  plausible.enableAutoPageviews();
}

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Dynamic import keeps the ~100 kB SDK out of every page's first load.
if (key && process.env.NODE_ENV === "production") {
  import("posthog-js").then(({ default: posthog }) =>
    posthog.init(key, {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      defaults: "2026-08-30",
      cookieless_mode: "always",
      person_profiles: "never",
      internal_or_test_user_hostname: null,
      before_send: (event) =>
        location.pathname.startsWith("/growth-studio/funding/admin") ? null : event,
    }),
  ).catch(() => {});
}

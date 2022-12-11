interface ImportMetaEnv {
  readonly VITE_OPTIONS_API_KEY: string;
  readonly VITE_OPTIONS_URL: string;
  readonly VITE_WEATHER_API_KEY: string;
  readonly VITE_WEATHER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "dev" | "production";

    NEXT_PUBLIC_BACKEND_URL: string;
    NEXT_PUBLIC_FRONTEND_URL: string;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: number;
      // Define types for your environment variables here
    }
  }
}

// keep it to make it work as expected
export {};

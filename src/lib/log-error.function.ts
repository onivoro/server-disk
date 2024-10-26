export const logError = (e: any) => {
  if (e) {
    process.stdout.write(e);
  }
};

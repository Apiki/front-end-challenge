export {}
declare global {
  namespace jest {
    interface Matchers<R> {
      mockToBeDone(): R
    }
  }
}

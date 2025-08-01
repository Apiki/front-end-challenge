export interface AsyncFallbackProps {
  isLoading: boolean;
  isError: boolean;
  errorContent?: React.ReactNode;
  loadingContent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

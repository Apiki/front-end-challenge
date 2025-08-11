"use client";

import Button from "../ui/button";

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  loading?: boolean;
}

export default function LoadMoreButton({ onLoadMore, loading = false }: LoadMoreButtonProps) {
  return (
    <Button
      content={loading ? "Carregando..." : "Carregar mais"}
      onPress={onLoadMore}
      disabled={loading}
    />
  );
}

import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { usePost } from "~hooks";
import { formatDate } from "~utils";

export const useController = () => {
    const { slug } = useParams<{ slug: string }>();
    const { isLoading, isError, data } = usePost(slug ?? "");

    const date = useMemo(() => {
        const published = formatDate(data?.[0].date ?? "");
        const updated = formatDate(data?.[0].modified ?? "");
        const isSameDate = published === updated;

        return `Publicado em: ${published}${!isSameDate ? `- Atualizado em: ${updated}` : ""}`;
    }, [data]);

    useEffect(() => {
        if (isError || data?.length === 0) throw new Response("Post not found", { status: 404 });
    }, [data?.length, isError]);

    return { isLoading, data, date };
};

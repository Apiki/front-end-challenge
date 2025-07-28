"use client";

import { getTextExcerpt } from "@/lib/utils/getTextExcerpt";
import { formatDate } from "@/lib/utils/formatDate";
import { calculateReadingTime } from "@/lib/utils/calculateReadingTime";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function PostCard({ post }) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  console.log(featuredImage);
  const imageUrl = featuredImage?.source_url || "/api/placeholder/400/200";
  const imageAlt = featuredImage?.alt_text || post.title.rendered;

  const excerpt = post.excerpt?.rendered
    ? getTextExcerpt(post.excerpt.rendered)
    : getTextExcerpt(post.content.rendered);

  return (
    <Card className="py-0 border-2 overflow-hidden max-w-full sm:max-w-md md:max-w-lg mx-auto transition-all duration-300 shadow-sm md:hover:scale-[1.01]">
      <Link href={`/post/${post.slug}`}>
        <CardHeader className="flex p-0 w-full gap-0 sm:h-52 md:h-64">
          <Image
            title={imageAlt}
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={200}
            className="object-cover w-full h-full"
            priority
            loading="eager"
            onError={(e) => {
              e.target.src =
                "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop";
            }}
          />
        </CardHeader>
        <CardContent className="p-3 sm:p-4">
          <CardTitle className="text-base text-primary sm:text-lg mb-2">
            {post.title.rendered}
          </CardTitle>
          <CardDescription className="text-foreground text-xs sm:text-sm mb-4">
            {excerpt}
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {calculateReadingTime(post.content.rendered)} min de leitura
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

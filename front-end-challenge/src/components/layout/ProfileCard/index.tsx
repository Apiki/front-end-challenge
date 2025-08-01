import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import { hrefLinks } from "../../../utils/const/socialLinks";
import Image from "../../ui/Img";

export interface ProfileCardProps {
  imageUrl: string;
  name: string;
  description: string;
  secundaryDescription?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  description,
  secundaryDescription,
}) => {
  const socialLinks = [
    { href: hrefLinks.hrefLinkedin, icon: <FaLinkedin size={20} /> },
    { href: hrefLinks.hrefGitHub, icon: <FaGithub size={20} /> },
    { href: hrefLinks.hrefWhatsApp, icon: <FaWhatsapp size={20} /> },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center">
      <div className="max-w-sm w-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden ring-2 ring-white">
            <Image
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-center">{name}</h2>
          <div className="w-full border-t border-white/50 my-4" />
          <div
            className="post-detail__content prose prose-lg"
            dangerouslySetInnerHTML={{
              __html: description || "Nenhum contéudo encontrado",
            }}
          />
        </div>

        <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 px-6 py-4 flex flex-col items-center justify-center space-y-4">
          <span className="text-sm font-medium text-center">
            Conecte-se comigo nas redes sociais
          </span>
          <div className="flex items-center space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <aside className="w-full lg:w-1/2 p-6 lg:pl-12">
        {secundaryDescription && (
          <p className="mt-4 text-sm text-gray-500 text-justify">
            {secundaryDescription}
          </p>
        )}
      </aside>
    </section>
  );
};

export default ProfileCard;

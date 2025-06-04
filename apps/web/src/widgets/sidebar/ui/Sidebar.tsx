'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Home,
  Search,
  Notice,
  Idea,
  Subscribe,
  Muse4uline_ver,
} from '@/shared/ui/icons';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { Skeleton } from '@/shared/ui/Skeleton';

type SVGComponentProps = React.SVGProps<SVGSVGElement>;
type SVGComponent = React.ComponentType<SVGComponentProps>;

export const Sidebar = () => {
  return (
    <Container>
      <Title />
      <Avatar />
      <Menus />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="border-r border-border-secondary flex flex-col w-[200px] h-full">
      {children}
    </aside>
  );
};

const Avatar = () => {
  const { isLoading, isAuthenticated, user } = useAuth();

  if (isLoading) {
    return (
      <div className="flex p-3 gap-3 items-center">
        <Skeleton className="w-10 h-10" variant="circular" />
        <Skeleton className="w-20 h-4" variant="text" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Link
        href="/"
        className="flex p-3 gap-3 items-center hover:bg-white/5 transition-colors"
      >
        <div className="w-10 h-10 rounded-2xl bg-gray-700 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="text-sm text-gray-400">로그인</div>
      </Link>
    );
  }

  return (
    <div className="flex p-3 gap-3 text-sm items-center">
      <div className="rounded-2xl overflow-hidden w-10 h-10">
        <Image
          alt="profile"
          width={40}
          height={40}
          src="https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp"
        />
      </div>
      <div className="truncate">{user?.name || user?.email}</div>
    </div>
  );
};

const Title = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl">
        {/*Muse4u*/}
        {/*<Muse4u />*/}
        <Muse4uline_ver />
      </h1>
    </div>
  );
};

const Menu = ({
  href,
  title,
  Icon,
}: {
  href: string;
  title: string;
  Icon: SVGComponent;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-5 py-2 hover:bg-white/10 relative ${isActive ? 'bg-white/10' : ''}`}
    >
      {isActive && (
        <div className="absolute left-0 top-0 w-1 h-full bg-white-primary"></div>
      )}
      <span
        className={`mr-3 ${isActive ? '' : 'text-[#726E6C]'} flex items-center gap-x-2.5`}
      >
        <Icon width={16} height={16} fill={isActive ? '#ffffff' : '#726E6C'} />
        {title}
      </span>
    </Link>
  );
};

const Menus = () => {
  const menuItems = [
    {
      href: '/',
      title: '메인',
      Icon: Home,
    },
    {
      href: '/create',
      title: '음악 만들기',
      Icon: Idea,
    },
    {
      href: '/search',
      title: '검색',
      Icon: Search,
    },
    {
      href: '/notice',
      title: '알림',
      Icon: Notice,
    },
    {
      href: '/subscribe',
      title: '구독',
      Icon: Subscribe,
    },
  ];
  return (
    <nav className="flex-1 py-4">
      {menuItems.map((item) => (
        <Menu
          key={item.href}
          href={item.href}
          title={item.title}
          Icon={item.Icon}
        />
      ))}
    </nav>
  );
};

type P = { className?: string };

const S = ({ className = "", children }: P & { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IconHome = ({ className }: P) => (
  <S className={className}>
    <path d="M3 10.5L12 3.5l9 7" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
    <path d="M9.5 12.5h1.5M13 12.5h1.5" />
  </S>
);

export const IconBuilding = ({ className }: P) => (
  <S className={className}>
    <path d="M4 21V5.5L12 3v18M12 8l8 2.5V21M4 21h16" />
    <path d="M7 8h2M7 11.5h2M7 15h2M15 13h2M15 16.5h2" />
    <path d="M2 21h20" />
  </S>
);

export const IconSparkle = ({ className }: P) => (
  <S className={className}>
    <path d="M3 18h18M3 21h18" />
    <path d="M12 3l1.6 3.9L17.5 8.5l-3.9 1.6L12 14l-1.6-3.9L6.5 8.5l3.9-1.6L12 3z" />
    <path d="M18.5 13.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7.7-1.6z" />
  </S>
);

export const IconSqueegee = ({ className }: P) => (
  <S className={className}>
    <path d="M13.5 10.5L20 4" />
    <path d="M9 4.5h9v3.5h-9z" />
    <path d="M13.5 8v3.5" />
    <path d="M11 11.5h5l-1 6.5h-3l-1-6.5z" />
    <path d="M5 21c0-1.5 1-2.5 2.5-2.5S10 19.5 10 21" />
    <path d="M16.5 15.5c0 1.4.9 2.2 2.2 2.2" />
  </S>
);

export const IconSpray = ({ className }: P) => (
  <S className={className}>
    <path d="M9 8h6l1 4v9H8v-9l1-4z" />
    <path d="M10 8V5.5h4V8M12 5.5V3.5" />
    <path d="M17.5 4.5h.01M19.5 6.5h.01M19.5 2.5h.01M21 4.5h.01" strokeWidth="2.4" />
    <path d="M9.5 13h5" />
  </S>
);

export const IconHardHat = ({ className }: P) => (
  <S className={className}>
    <path d="M4 16a8 8 0 0116 0" />
    <path d="M2.5 16h19v2.5h-19z" />
    <path d="M10 8.5V5.8A1.3 1.3 0 0111.3 4.5h1.4A1.3 1.3 0 0114 5.8v2.7" />
    <path d="M7 9.5V16M17 9.5V16" />
  </S>
);

export const IconWarehouse = ({ className }: P) => (
  <S className={className}>
    <path d="M2.5 20V9L12 4l9.5 5v11" />
    <path d="M2.5 20h19" />
    <path d="M6.5 20v-7h11v7" />
    <path d="M6.5 16.5h11M12 13v7" />
  </S>
);

export const IconShield = ({ className }: P) => (
  <S className={className}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6L12 3z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </S>
);

export const IconSofa = ({ className }: P) => (
  <S className={className}>
    <path d="M5 10V8a3 3 0 013-3h8a3 3 0 013 3v2" />
    <path d="M3.5 13.5A2.5 2.5 0 016 11c1.2 0 2.2.9 2.4 2H15.6a2.4 2.4 0 110 .5H6a2.5 2.5 0 01-2.5-2.5z" />
    <path d="M6 15.5V18M18 15.5V18M4.5 18h15" />
  </S>
);

export const IconBadge = ({ className }: P) => (
  <S className={className}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M9.8 8.9l1.6 1.6 3-3.1" />
    <path d="M8.5 13.8L7 21l5-2.5L17 21l-1.5-7.2" />
  </S>
);

export const IconMachine = ({ className }: P) => (
  <S className={className}>
    <rect x="3" y="11" width="13" height="6" rx="2" />
    <path d="M16 14h3.5a1.5 1.5 0 001.5-1.5V5" />
    <path d="M19.5 5H21" />
    <circle cx="6.5" cy="19.5" r="1.6" />
    <circle cx="12.5" cy="19.5" r="1.6" />
    <path d="M6 14h5" />
  </S>
);

export const IconLeaf = ({ className }: P) => (
  <S className={className}>
    <path d="M5 19C4 9 10 4 20 4c0 10-5 16-15 15z" />
    <path d="M5 19c3-5 7-9 11-11" />
  </S>
);

export const IconBolt = ({ className }: P) => (
  <S className={className}>
    <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
  </S>
);

export const IconClipboard = ({ className }: P) => (
  <S className={className}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4.5V3h6v1.5" />
    <path d="M8.5 10.5h7M8.5 14h7M8.5 17.5h4" />
  </S>
);

export const IconCheck = ({ className }: P) => (
  <S className={className}>
    <path d="M4.5 12.5l5 5L19.5 6.5" strokeWidth="2.2" />
  </S>
);

export const IconArrow = ({ className }: P) => (
  <S className={className}>
    <path d="M4 12h15M13.5 5.5L20 12l-6.5 6.5" strokeWidth="1.8" />
  </S>
);

export const IconStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8L12 2.5z" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <S className={className}>
    <path d="M12 21.5s-7-6.1-7-11.3A7 7 0 0119 10.2c0 5.2-7 11.3-7 11.3z" />
    <circle cx="12" cy="10" r="2.6" />
  </S>
);

export const IconMail = ({ className }: P) => (
  <S className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </S>
);

export const IconClock = ({ className }: P) => (
  <S className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.5l3.5 2" />
  </S>
);

export const IconPhone = ({ className }: P) => (
  <S className={className}>
    <path d="M5 4h4l1.5 4.5-2.2 1.7a13 13 0 005.5 5.5l1.7-2.2L20 15v4a1.8 1.8 0 01-2 1.8A16.5 16.5 0 013.2 6 1.8 1.8 0 015 4z" />
  </S>
);

export const IconWhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const ICONS: Record<string, (p: P) => React.ReactElement> = {
  home: IconHome,
  building: IconBuilding,
  sparkle: IconSparkle,
  squeegee: IconSqueegee,
  spray: IconSpray,
  hardhat: IconHardHat,
  warehouse: IconWarehouse,
  shield: IconShield,
  sofa: IconSofa,
  badge: IconBadge,
  machine: IconMachine,
  leaf: IconLeaf,
  bolt: IconBolt,
  clipboard: IconClipboard,
};

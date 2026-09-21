import {
  Activity,
  AppWindow,
  BarChart3,
  Boxes,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Layers,
  PackageCheck,
  Search,
  Server,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconKey } from '../../types/portfolio';

/**
 * Peta satu arah dari kunci konten ke ikon Lucide. Menaruh pemetaan di satu
 * tempat menjaga data layer bebas dari import komponen dan memastikan setiap
 * kunci punya glyph yang valid (dijamin oleh tipe Record).
 */
const registry: Record<IconKey, LucideIcon> = {
  bi: BarChart3,
  web: Code2,
  data: Database,
  sap: Server,
  chart: BarChart3,
  clock: Clock,
  app: AppWindow,
  grid: Boxes,
  pipeline: Layers,
  transport: Truck,
  shield: ShieldCheck,
  search: Search,
  build: Activity,
  deliver: PackageCheck,
};

/** Ikon untuk daftar keunggulan (selalu tanda centang). */
export const CheckIcon = CheckCircle2;

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Glyph = registry[name];
  return <Glyph aria-hidden="true" className={className} />;
}

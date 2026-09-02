import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { Locale } from "@/core/domain/entities/locale";

export interface PortfolioContentRepository {
  getByLocale(locale: Locale): Promise<PortfolioContent>;
}

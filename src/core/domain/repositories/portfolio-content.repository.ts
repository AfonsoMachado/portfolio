import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { Locale } from "@/shared/i18n/config";

export interface PortfolioContentRepository {
  getByLocale(locale: Locale): Promise<PortfolioContent>;
}

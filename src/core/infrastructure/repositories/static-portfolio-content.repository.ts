import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { PortfolioContentRepository } from "@/core/domain/repositories/portfolio-content.repository";
import { portfolioContent } from "@/core/infrastructure/content/portfolio-content";
import type { Locale } from "@/shared/i18n/config";

export class StaticPortfolioContentRepository implements PortfolioContentRepository {
  async getByLocale(locale: Locale): Promise<PortfolioContent> {
    return portfolioContent[locale];
  }
}

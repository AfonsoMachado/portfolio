import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import { StaticPortfolioContentRepository } from "@/core/infrastructure/repositories/static-portfolio-content.repository";
import type { Locale } from "@/shared/i18n/config";

const repository = new StaticPortfolioContentRepository();

export async function getPortfolioContent(
  locale: Locale,
): Promise<PortfolioContent> {
  return repository.getByLocale(locale);
}

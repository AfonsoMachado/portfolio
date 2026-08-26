import type { PortfolioContent } from "@/core/domain/entities/portfolio";
import type { Locale } from "@/core/domain/entities/locale";
import type { PortfolioContentRepository } from "@/core/domain/repositories/portfolio-content.repository";

export async function getPortfolioContent(
  repository: PortfolioContentRepository,
  locale: Locale,
): Promise<PortfolioContent> {
  return repository.getByLocale(locale);
}

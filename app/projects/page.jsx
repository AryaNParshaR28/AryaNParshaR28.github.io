import SiteCta from "@/components/SiteCta";
import ProjectList from "@/components/ProjectList";

export const metadata = {
  title: "Projects",
  description:
    "Laravel and Drupal projects by Aryan — e-commerce, APIs, government CMS platforms, and multilingual websites.",
};

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <p className="eyebrow reveal">Portfolio</p>
            <h1 className="section-title reveal">Projects</h1>
            <p className="section-copy reveal">
              A selection of live platforms across Laravel and Drupal, including commerce systems,
              APIs, government data tools, and multilingual publishing sites.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <ProjectList />
        </div>
      </section>

      <SiteCta />
    </main>
  );
}

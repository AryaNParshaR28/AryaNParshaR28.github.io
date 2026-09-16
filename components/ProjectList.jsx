"use client";

import { useEffect, useMemo, useState } from "react";
import { PORTFOLIO_PROJECTS } from "@/data/projects";

const PER_PAGE = 10;

function ProjectLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div>
      {links.map((link, i) => {
        if (!link.url) {
          return (
            <span key={link.label} className="project-link project-link--muted">
              {link.label}
              {i < links.length - 1 ? <br /> : null}
            </span>
          );
        }

        return (
          <span key={link.label}>
            <a
              className="project-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {i < links.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </div>
  );
}

function readPageFromUrl(totalPages) {
  if (typeof window === "undefined") return 1;
  const raw = parseInt(new URLSearchParams(window.location.search).get("page") || "1", 10);
  if (Number.isNaN(raw) || raw < 1) return 1;
  return Math.min(raw, totalPages);
}

export default function ProjectList() {
  const totalPages = Math.max(1, Math.ceil(PORTFOLIO_PROJECTS.length / PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(readPageFromUrl(totalPages));
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return PORTFOLIO_PROJECTS.slice(start, start + PER_PAGE);
  }, [currentPage]);

  function goToPage(page, { scroll = true } = {}) {
    setCurrentPage(page);
    const url = new URL(window.location.href);
    if (page > 1) url.searchParams.set("page", String(page));
    else url.searchParams.delete("page");
    window.history.replaceState({}, "", url.pathname + url.search);
    if (scroll) {
      document.getElementById("project-list")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const from = (currentPage - 1) * PER_PAGE + 1;
  const to = Math.min(currentPage * PER_PAGE, PORTFOLIO_PROJECTS.length);

  return (
    <>
      <div id="project-list" className="project-list" aria-live="polite">
        {pageItems.map((project, index) => (
          <article
            key={project.title}
            className="project-item"
            style={{ "--d": index }}
          >
            <div>
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
            </div>
            <p>{project.description}</p>
            <ProjectLinks links={project.links} />
          </article>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="pagination" aria-label="Projects pagination">
          <button
            type="button"
            className="pagination-btn"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </button>
          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`pagination-num${page === currentPage ? " is-active" : ""}`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="pagination-btn"
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
          <p className="pagination-meta">
            Showing {from}–{to} of {PORTFOLIO_PROJECTS.length} projects
          </p>
        </nav>
      ) : null}
    </>
  );
}

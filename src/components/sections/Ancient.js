import sites from '../../data/sites';

const countryColors = {
    Egypt: { bg: "#FEF3C7", text: "#92400E" },
    Greece: { bg: "#DBEAFE", text: "#1E40AF" },
    Italy: { bg: "#FCE7F3", text: "#9D174D" },
    Mexico: { bg: "#D1FAE5", text: "#065F46" },
    Turkey: { bg: "#EDE9FE", text: "#5B21B6" },
    Croatia: { bg: "#FFE4E6", text: "#9F1239" },
    Jordan: { bg: "#FFEDD5", text: "#9A3412" },
    Spain: { bg: "#FEF08A", text: "#854D0E" }
};

export default function Ancient() {
    return (
        <section id="experiences-section" className="experiences-section section">
            <div style={{ maxWidth: "760px", margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "system-ui, sans-serif" }}>
                <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
                    <p style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", margin: "0 0 8px" }}>
                        Personal ranking
                    </p>
                    <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", margin: "0 0 8px", lineHeight: 1.2 }}>
                        Ancient Sites of the World
                    </h1>
                    <p style={{ fontSize: "15px", color: "#6b7280", margin: 0 }}>
                        31 ancient sites, visited and ranked
                    </p>
                </div>

                <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {sites.map((site, index) => {
                        const rank = index + 1;
                        const isTop3 = rank <= 3;
                        const colors = countryColors[site.country] || { bg: "#F3F4F6", text: "#374151" };

                        return (
                            <li
                                key={site.name}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "52px 1fr",
                                    gap: "0 20px",
                                    padding: "1.5rem 0",
                                    borderBottom: "1px solid #f3f4f6",
                                    alignItems: "start",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: isTop3 ? "2rem" : "1.25rem",
                                        fontWeight: "700",
                                        color: isTop3 ? "#1d4ed8" : "#d1d5db",
                                        lineHeight: 1,
                                        paddingTop: "4px",
                                        textAlign: "right",
                                    }}
                                >
                                    {rank}
                                </div>

                                <div>
                                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "4px" }}>
                                        <h2 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", margin: 0, lineHeight: 1.3 }}>
                                            {site.name}
                                        </h2>
                                        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                                            {site.wonder && (
                                                <span
                                                    style={{
                                                        fontSize: "11px",
                                                        padding: "2px 8px",
                                                        borderRadius: "9999px",
                                                        background: "#FEF9C3",
                                                        color: "#854D0E",
                                                        fontWeight: "500",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    Wonder of the World
                                                </span>
                                            )}
                                            <span
                                                style={{
                                                    fontSize: "11px",
                                                    padding: "2px 8px",
                                                    borderRadius: "9999px",
                                                    background: colors.bg,
                                                    color: colors.text,
                                                    fontWeight: "500",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {site.country}
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 10px" }}>
                                        <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>
                                            {site.location}
                                        </p>
                                        {site.visited && (
                                            <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                                Visited {site.visited}
                                            </p>
                                        )}
                                    </div>

                                    {site.image && (
                                        <div
                                            style={{
                                                maxWidth: "480px",
                                                maxHeight: "520px",
                                                overflow: "hidden",
                                                borderRadius: "8px",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <img
                                                src={site.image}
                                                alt={site.imageAlt}
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    display: "block",
                                                }}
                                            />
                                        </div>
                                    )}

                                    {site.review && (
                                        <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0 }}>
                                            {site.review}
                                        </p>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
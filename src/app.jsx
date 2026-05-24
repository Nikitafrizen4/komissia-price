import { useState } from "react";

const data = [
  {
    brand: "Apple",
    model: "iPhone 12",
    variants: [
      { memory: "64 GB",  sellMin: 11000, sellMax: 15000, buyMin: 7000,  buyMax: 10000 },
      { memory: "128 GB", sellMin: 13000, sellMax: 17000, buyMin: 8500,  buyMax: 11000 },
      { memory: "256 GB", sellMin: 15000, sellMax: 19000, buyMin: 10000, buyMax: 13000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 12 Pro",
    variants: [
      { memory: "128 GB", sellMin: 17000, sellMax: 22000, buyMin: 11000, buyMax: 14500 },
      { memory: "256 GB", sellMin: 19000, sellMax: 25000, buyMin: 12500, buyMax: 16500 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    variants: [
      { memory: "128 GB", sellMin: 16000, sellMax: 21000, buyMin: 10500, buyMax: 14000 },
      { memory: "256 GB", sellMin: 18000, sellMax: 24000, buyMin: 12000, buyMax: 16000 },
      { memory: "512 GB", sellMin: 21000, sellMax: 27000, buyMin: 14000, buyMax: 18000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 13 Pro",
    variants: [
      { memory: "128 GB", sellMin: 22000, sellMax: 28000, buyMin: 14500, buyMax: 18500 },
      { memory: "256 GB", sellMin: 25000, sellMax: 32000, buyMin: 16500, buyMax: 21000 },
      { memory: "512 GB", sellMin: 28000, sellMax: 36000, buyMin: 18500, buyMax: 24000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 14",
    variants: [
      { memory: "128 GB", sellMin: 24000, sellMax: 30000, buyMin: 16000, buyMax: 20000 },
      { memory: "256 GB", sellMin: 27000, sellMax: 34000, buyMin: 18000, buyMax: 22500 },
      { memory: "512 GB", sellMin: 30000, sellMax: 38000, buyMin: 20000, buyMax: 25000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 14 Pro",
    variants: [
      { memory: "128 GB", sellMin: 32000, sellMax: 40000, buyMin: 21000, buyMax: 26500 },
      { memory: "256 GB", sellMin: 36000, sellMax: 45000, buyMin: 24000, buyMax: 30000 },
      { memory: "512 GB", sellMin: 40000, sellMax: 50000, buyMin: 26500, buyMax: 33000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    variants: [
      { memory: "128 GB", sellMin: 38000, sellMax: 47000, buyMin: 25000, buyMax: 31000 },
      { memory: "256 GB", sellMin: 42000, sellMax: 52000, buyMin: 28000, buyMax: 34500 },
      { memory: "512 GB", sellMin: 47000, sellMax: 58000, buyMin: 31000, buyMax: 38500 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 15 Pro",
    variants: [
      { memory: "128 GB", sellMin: 52000, sellMax: 63000, buyMin: 34500, buyMax: 42000 },
      { memory: "256 GB", sellMin: 57000, sellMax: 70000, buyMin: 38000, buyMax: 46500 },
      { memory: "512 GB", sellMin: 63000, sellMax: 78000, buyMin: 42000, buyMax: 52000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 16",
    variants: [
      { memory: "128 GB", sellMin: 46000, sellMax: 57000, buyMin: 30000, buyMax: 38000 },
      { memory: "256 GB", sellMin: 51000, sellMax: 63000, buyMin: 34000, buyMax: 42000 },
      { memory: "512 GB", sellMin: 57000, sellMax: 70000, buyMin: 38000, buyMax: 46500 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 16 Pro",
    variants: [
      { memory: "128 GB", sellMin: 63000, sellMax: 78000, buyMin: 42000, buyMax: 52000 },
      { memory: "256 GB", sellMin: 70000, sellMax: 86000, buyMin: 46500, buyMax: 57000 },
      { memory: "512 GB", sellMin: 78000, sellMax: 96000, buyMin: 52000, buyMax: 64000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 17",
    variants: [
      { memory: "128 GB", sellMin: 52000, sellMax: 65000, buyMin: 34500, buyMax: 43000 },
      { memory: "256 GB", sellMin: 58000, sellMax: 72000, buyMin: 38500, buyMax: 48000 },
      { memory: "512 GB", sellMin: 65000, sellMax: 80000, buyMin: 43000, buyMax: 53000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 17 Pro",
    variants: [
      { memory: "256 GB", sellMin: 82000, sellMax: 100000, buyMin: 54500, buyMax: 66500 },
      { memory: "512 GB", sellMin: 92000, sellMax: 112000, buyMin: 61000, buyMax: 74500 },
      { memory: "1 TB",   sellMin: 103000, sellMax: 125000, buyMin: 68500, buyMax: 83000 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    variants: [
      { memory: "256 GB", sellMin: 95000, sellMax: 116000, buyMin: 63000, buyMax: 77000 },
      { memory: "512 GB", sellMin: 106000, sellMax: 130000, buyMin: 70500, buyMax: 86500 },
      { memory: "1 TB",   sellMin: 118000, sellMax: 145000, buyMin: 78500, buyMax: 96500 },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 17 Air",
    variants: [
      { memory: "256 GB", sellMin: 60000, sellMax: 75000, buyMin: 40000, buyMax: 50000 },
      { memory: "512 GB", sellMin: 68000, sellMax: 85000, buyMin: 45000, buyMax: 56500 },
      { memory: "1 TB",   sellMin: 78000, sellMax: 95000, buyMin: 52000, buyMax: 63000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S23",
    variants: [
      { memory: "128 GB", sellMin: 28000, sellMax: 35000, buyMin: 18500, buyMax: 23000 },
      { memory: "256 GB", sellMin: 31000, sellMax: 39000, buyMin: 20500, buyMax: 26000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S23+",
    variants: [
      { memory: "256 GB", sellMin: 36000, sellMax: 44000, buyMin: 24000, buyMax: 29000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    variants: [
      { memory: "256 GB", sellMin: 50000, sellMax: 62000, buyMin: 33000, buyMax: 41000 },
      { memory: "512 GB", sellMin: 55000, sellMax: 68000, buyMin: 36500, buyMax: 45000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S24",
    variants: [
      { memory: "128 GB", sellMin: 35000, sellMax: 44000, buyMin: 23000, buyMax: 29000 },
      { memory: "256 GB", sellMin: 38000, sellMax: 48000, buyMin: 25000, buyMax: 32000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S24+",
    variants: [
      { memory: "256 GB", sellMin: 48000, sellMax: 60000, buyMin: 32000, buyMax: 40000 },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    variants: [
      { memory: "256 GB", sellMin: 65000, sellMax: 80000, buyMin: 43000, buyMax: 53000 },
      { memory: "512 GB", sellMin: 72000, sellMax: 88000, buyMin: 48000, buyMax: 58000 },
    ],
  },
];

const fmt = (n) => n.toLocaleString("ru-RU") + " ₽";

export default function App() {
  const [filter, setFilter] = useState("Все");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const brands = ["Все", "Apple", "Samsung"];

  const filtered = data.filter((item) => {
    const matchBrand = filter === "Все" || item.brand === filter;
    const matchSearch = item.model.toLowerCase().includes(search.toLowerCase());
    return matchBrand && matchSearch;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#e8e8e8",
      padding: "0 0 60px 0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "36px 24px 28px",
        borderBottom: "1px solid #2a2a4a",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 22 }}>🏪</span>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#7c7caa", textTransform: "uppercase" }}>
              Комиссионный магазин · СПб
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(22px, 5vw, 32px)",
            fontWeight: 700,
            margin: "0 0 20px",
            letterSpacing: -1,
            fontFamily: "'Georgia', serif",
            color: "#f0f0ff",
          }}>
            Цены закупки и продажи
          </h1>

          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск модели..."
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "10px 14px",
              color: "#e8e8e8",
              fontSize: 14,
              outline: "none",
              marginBottom: 14,
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
          />

          {/* Brand filter */}
          <div style={{ display: "flex", gap: 8 }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setFilter(b)}
                style={{
                  background: filter === b ? "#5865f2" : "rgba(255,255,255,0.07)",
                  border: filter === b ? "1px solid #5865f2" : "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 6,
                  color: filter === b ? "#fff" : "#aaa",
                  padding: "6px 16px",
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                  letterSpacing: 0.5,
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth: 700, margin: "20px auto 0", padding: "0 16px" }}>
        {/* Legend */}
        <div style={{
          display: "flex",
          gap: 20,
          marginBottom: 16,
          fontSize: 11,
          color: "#666",
          letterSpacing: 1,
          textTransform: "uppercase",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 10, height: 10, background: "#22c55e", borderRadius: 2, display: "inline-block" }}></span>
            Цена продажи
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 10, height: 10, background: "#f59e0b", borderRadius: 2, display: "inline-block" }}></span>
            Цена закупки (хор. состояние)
          </span>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#555", padding: "40px 0", fontSize: 14 }}>
            Ничего не найдено
          </div>
        )}

        {filtered.map((item, idx) => {
          const key = item.model;
          const isOpen = expanded === key;
          return (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                marginBottom: 10,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              {/* Model header */}
              <div
                onClick={() => setExpanded(isOpen ? null : key)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    fontSize: 18,
                    filter: "grayscale(0.2)",
                  }}>
                    {item.brand === "Apple" ? "🍎" : "📱"}
                  </span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.3, color: "#f0f0ff" }}>
                      {item.model}
                    </div>
                    <div style={{ fontSize: 11, color: "#666", marginTop: 1 }}>
                      {item.variants.length} вариант{item.variants.length > 1 ? "а" : ""}
                    </div>
                  </div>
                </div>
                <span style={{
                  color: "#5865f2",
                  fontSize: 18,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  lineHeight: 1,
                }}>
                  ▾
                </span>
              </div>

              {/* Variants */}
              {isOpen && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Column headers */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "90px 1fr 1fr",
                    padding: "8px 18px",
                    fontSize: 10,
                    color: "#555",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <span>Память</span>
                    <span>Продажа</span>
                    <span>Закупка</span>
                  </div>

                  {item.variants.map((v, vi) => (
                    <div
                      key={vi}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "90px 1fr 1fr",
                        padding: "12px 18px",
                        borderBottom: vi < item.variants.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        alignItems: "center",
                      }}
                    >
                      <span style={{
                        fontSize: 13,
                        color: "#aaa",
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 4,
                        padding: "2px 8px",
                        display: "inline-block",
                        width: "fit-content",
                      }}>
                        {v.memory}
                      </span>
                      <div>
                        <div style={{ fontSize: 13, color: "#22c55e", fontWeight: 600 }}>
                          {fmt(v.sellMin)} – {fmt(v.sellMax)}
                        </div>
                        <div style={{ fontSize: 10, color: "#3a6b4a", marginTop: 1 }}>рыночная цена б/у</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, color: "#f59e0b", fontWeight: 600 }}>
                          {fmt(v.buyMin)} – {fmt(v.buyMax)}
                        </div>
                        <div style={{ fontSize: 10, color: "#7a6030", marginTop: 1 }}>хорошее состояние</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer note */}
        <div style={{
          marginTop: 24,
          padding: "16px 18px",
          background: "rgba(88,101,242,0.08)",
          border: "1px solid rgba(88,101,242,0.2)",
          borderRadius: 10,
          fontSize: 12,
          color: "#8888aa",
          lineHeight: 1.7,
        }}>
          <div style={{ fontWeight: 600, color: "#9999cc", marginBottom: 6 }}>📌 Правила закупки</div>
          <div>• Снизить на 15–20% если АКБ ниже 80%</div>
          <div>• Снизить на 10–15% если есть царапины на экране</div>
          <div>• Снизить на 20–30% при удовл. состоянии корпуса</div>
          <div>• Всегда проверять: iCloud выключен, IMEI чистый</div>
          <div style={{ marginTop: 6, color: "#666" }}>Цены актуальны для СПб, май 2026</div>
        </div>
      </div>
    </div>
  );
}

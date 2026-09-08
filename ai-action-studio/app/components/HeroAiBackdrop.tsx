export default function HeroAiBackdrop() {
  return (
    <div className="hero-ai-bg pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-ai-grid" />
      <div className="hero-ai-glow hero-ai-glow--mint" />
      <div className="hero-ai-glow hero-ai-glow--navy" />
      <div className="hero-ai-glow hero-ai-glow--ivory" />

      {/* Right: neural net — models, tools, action */}
      <svg className="hero-ai-art hero-ai-art--net" viewBox="0 0 280 240" fill="none">
        <path className="hero-ai-edge hero-ai-edge--a" d="M36 48 L140 28" />
        <path className="hero-ai-edge hero-ai-edge--b" d="M36 48 L140 88" />
        <path className="hero-ai-edge" d="M36 48 L140 152" />
        <path className="hero-ai-edge hero-ai-edge--a" d="M36 120 L140 28" />
        <path className="hero-ai-edge hero-ai-edge--b" d="M36 120 L140 88" />
        <path className="hero-ai-edge" d="M36 120 L140 152" />
        <path className="hero-ai-edge hero-ai-edge--a" d="M36 120 L140 212" />
        <path className="hero-ai-edge" d="M36 192 L140 88" />
        <path className="hero-ai-edge hero-ai-edge--b" d="M36 192 L140 152" />
        <path className="hero-ai-edge" d="M36 192 L140 212" />
        <path className="hero-ai-edge hero-ai-edge--a" d="M140 28 L244 60" />
        <path className="hero-ai-edge" d="M140 28 L244 120" />
        <path className="hero-ai-edge hero-ai-edge--b" d="M140 88 L244 60" />
        <path className="hero-ai-edge hero-ai-edge--a" d="M140 88 L244 120" />
        <path className="hero-ai-edge" d="M140 88 L244 180" />
        <path className="hero-ai-edge hero-ai-edge--b" d="M140 152 L244 120" />
        <path className="hero-ai-edge" d="M140 152 L244 180" />
        <path className="hero-ai-edge hero-ai-edge--a" d="M140 212 L244 120" />
        <path className="hero-ai-edge" d="M140 212 L244 180" />

        <path
          className="hero-ai-token"
          d="M36 120 L140 88 L244 120"
        />
        <path
          className="hero-ai-token hero-ai-token--delay"
          d="M36 48 L140 152 L244 180"
        />

        <circle className="hero-ai-node" cx="36" cy="48" r="5.5" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="36" cy="120" r="6.5" />
        <circle className="hero-ai-node" cx="36" cy="192" r="5.5" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="140" cy="28" r="5" />
        <circle className="hero-ai-node" cx="140" cy="88" r="6" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="140" cy="152" r="6" />
        <circle className="hero-ai-node" cx="140" cy="212" r="5" />
        <circle className="hero-ai-node hero-ai-node--core" cx="244" cy="60" r="6" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="244" cy="120" r="7" />
        <circle className="hero-ai-node hero-ai-node--core" cx="244" cy="180" r="6" />
      </svg>

      {/* Top-left: circuit traces — prompts into the model */}
      <svg className="hero-ai-art hero-ai-art--circuit" viewBox="0 0 260 200" fill="none">
        <path
          className="hero-ai-trace"
          d="M8 36 H72 Q84 36 84 48 V88 Q84 100 96 100 H168"
        />
        <path
          className="hero-ai-trace hero-ai-trace--mint"
          d="M8 100 H48 Q60 100 60 112 V148 Q60 160 72 160 H150"
        />
        <path
          className="hero-ai-trace"
          d="M8 164 H56 Q68 164 68 152 V128"
        />
        <path
          className="hero-ai-trace hero-ai-trace--mint"
          d="M96 100 V52 Q96 40 108 40 H188"
        />
        <path
          className="hero-ai-token hero-ai-token--circuit"
          d="M8 36 H72 Q84 36 84 48 V88 Q84 100 96 100 H168"
        />
        <path
          className="hero-ai-token hero-ai-token--circuit-b"
          d="M8 100 H48 Q60 100 60 112 V148 Q60 160 72 160 H150"
        />
        <circle className="hero-ai-node" cx="8" cy="36" r="4" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="84" cy="48" r="4.5" />
        <circle className="hero-ai-node" cx="96" cy="100" r="5" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="168" cy="100" r="4.5" />
        <circle className="hero-ai-node" cx="8" cy="100" r="4" />
        <circle className="hero-ai-node hero-ai-node--core" cx="150" cy="160" r="5" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="188" cy="40" r="4.5" />
        <circle className="hero-ai-node" cx="8" cy="164" r="3.5" />
      </svg>

      {/* Left: orbital core — model / agent */}
      <svg className="hero-ai-art hero-ai-art--orbit" viewBox="0 0 200 200" fill="none">
        <circle className="hero-ai-ring" cx="100" cy="100" r="42" />
        <circle className="hero-ai-ring hero-ai-ring--mid" cx="100" cy="100" r="64" />
        <circle className="hero-ai-ring hero-ai-ring--outer" cx="100" cy="100" r="88" />

        <g className="hero-ai-spin-slow">
          <circle className="hero-ai-sat" cx="164" cy="100" r="4.5" />
          <circle className="hero-ai-sat hero-ai-sat--mint" cx="100" cy="36" r="3.5" />
        </g>
        <g className="hero-ai-spin-reverse">
          <circle className="hero-ai-sat" cx="36" cy="100" r="3.5" />
          <circle className="hero-ai-sat hero-ai-sat--mint" cx="138" cy="162" r="4" />
        </g>

        <polygon
          className="hero-ai-hex-core"
          points="100,78 119,89 119,111 100,122 81,111 81,89"
        />
        <circle className="hero-ai-node hero-ai-node--mint" cx="100" cy="100" r="4.5" />
      </svg>

      {/* Bottom-left: token chips — prompts / actions */}
      <svg className="hero-ai-art hero-ai-art--chips" viewBox="0 0 200 140" fill="none">
        <rect className="hero-ai-chip" x="8" y="18" width="92" height="22" rx="6" />
        <rect className="hero-ai-chip hero-ai-chip--2" x="28" y="52" width="118" height="22" rx="6" />
        <rect className="hero-ai-chip hero-ai-chip--3" x="8" y="86" width="76" height="22" rx="6" />
        <rect className="hero-ai-chip hero-ai-chip--4" x="52" y="120" width="104" height="14" rx="7" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="20" cy="29" r="3.5" />
        <circle className="hero-ai-node" cx="40" cy="63" r="3.5" />
        <circle className="hero-ai-node hero-ai-node--mint" cx="20" cy="97" r="3.5" />
      </svg>

      {/* Bottom-right: hex cluster — compute / tools */}
      <svg className="hero-ai-art hero-ai-art--hex" viewBox="0 0 180 170" fill="none">
        <polygon className="hero-ai-hex" points="90,18 118,34 118,66 90,82 62,66 62,34" />
        <polygon className="hero-ai-hex hero-ai-hex--2" points="46,58 74,74 74,106 46,122 18,106 18,74" />
        <polygon className="hero-ai-hex hero-ai-hex--3" points="134,58 162,74 162,106 134,122 106,106 106,74" />
        <polygon className="hero-ai-hex hero-ai-hex--4" points="90,98 118,114 118,146 90,162 62,146 62,114" />
      </svg>

      <div className="hero-ai-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-ai-fade" />
    </div>
  );
}

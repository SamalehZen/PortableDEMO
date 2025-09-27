"use client"

import { useState } from 'react'
import { RotaLe, type RotaLeVariant } from '@/components/rota-le'

export default function DemoPage() {
  const [speedRps, setSpeed] = useState(0.8)
  const [size, setSize] = useState(160)
  const [variant, setVariant] = useState<RotaLeVariant>('ring')
  const [thickness, setThickness] = useState(8)
  const [color, setColor] = useState('#2563eb')

  return (
    <main>
      <div className="container grid grid-cols-2" style={{ alignItems: 'start' }}>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Démo Rota-le</h1>
          <p>Animation de chargement configurable (pré-intégration du composant réel).</p>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
            <RotaLe size={size} speedRps={speedRps} variant={variant} thickness={thickness} color={color} />
          </div>

          <div className="grid" style={{ marginTop: 16 }}>
            <div>
              <label>Vitesse (rotations/s): {speedRps.toFixed(2)}</label>
              <input type="range" min={0.1} max={3} step={0.05} value={speedRps}
                onChange={(e) => setSpeed(parseFloat(e.target.value))} />
            </div>

            <div>
              <label>Taille: {size}px</label>
              <input type="range" min={64} max={280} step={4} value={size}
                onChange={(e) => setSize(parseInt(e.target.value))} />
            </div>

            <div>
              <label>Épaisseur: {thickness}px</label>
              <input type="range" min={2} max={24} step={1} value={thickness}
                onChange={(e) => setThickness(parseInt(e.target.value))} />
            </div>

            <div>
              <label>Variante</label>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                {(['ring','square','dots'] as RotaLeVariant[]).map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      background: v === variant ? '#2563eb' : 'white',
                      color: v === variant ? 'white' : '#0f172a',
                      cursor: 'pointer'
                    }}
                  >{v}</button>
                ))}
              </div>
            </div>

            <div>
              <label>Couleur</label>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
        </div>

        <aside className="card">
          <h2 style={{ marginTop: 0 }}>Intégration</h2>
          <p>Une fois l'archive fournie, le composant réel « Rota-le » remplacera ce placeholder sans changer l'API de la page.</p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{`<RotaLe size={${size}} speedRps={${speedRps.toFixed(2)}} variant="${variant}" thickness={${thickness}} color="${color}" />`}</pre>
        </aside>
      </div>
    </main>
  )
}
